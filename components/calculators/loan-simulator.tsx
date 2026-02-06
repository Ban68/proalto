"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Calculator, DollarSign, Calendar, Info, ChevronRight, RefreshCw, FileText, Table as TableIcon, Settings, Lock } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { cn } from "@/lib/utils";

// Default constants
const DEFAULT_RATE_EA = 0.2436; // 24.36% E.A.
const DEFAULT_RISK_FUND_PCT = 0.10; // 10%
const DEFAULT_SIGNATURE_COST = 20000; // $20,000 fixed
const DEFAULT_INSURANCE_PCT = 0.004; // 0.4%

export function LoanSimulator() {
    const searchParams = useSearchParams();
    const isAdmin = searchParams.get('admin') === 'true';

    // State for Simulation Parameters (Admin Configurable)
    const [rateEA, setRateEA] = useState<number>(DEFAULT_RATE_EA);
    const [riskFundPct, setRiskFundPct] = useState<number>(DEFAULT_RISK_FUND_PCT);
    const [signatureCost, setSignatureCost] = useState<number>(DEFAULT_SIGNATURE_COST);
    const [insurancePct, setInsurancePct] = useState<number>(DEFAULT_INSURANCE_PCT);

    // State for User Input
    const [amount, setAmount] = useState<number>(1000000);
    const [term, setTerm] = useState<number>(12);
    const [breakdown, setBreakdown] = useState<any>(null);
    const [amortizationSchedule, setAmortizationSchedule] = useState<any[]>([]);
    const [showTable, setShowTable] = useState(false);
    const [showAdminPanel, setShowAdminPanel] = useState(false);

    useEffect(() => {
        if (isAdmin) setShowAdminPanel(true);
    }, [isAdmin]);

    // Format currency
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            maximumFractionDigits: 0
        }).format(value);
    };

    const calculateLoan = () => {
        if (!amount || !term) return;

        // 1. Monthly Rate Calculation
        // Formula: (1 + EA)^(1/12) - 1
        const monthlyRate = Math.pow(1 + rateEA, 1 / 12) - 1;

        // 2. Base Monthly Installment (Amortization)
        // Formula: P * (r * (1+r)^n) / ((1+r)^n - 1)
        const baseInstallment = amount * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);

        // 3. Additional Costs (Monthly portions)

        // Fondo de Riesgo (10% of Amount / Term)
        const riskFundTotal = amount * riskFundPct;
        const riskFundMonthly = riskFundTotal / term;

        // Firma Electrónica ($20,000 / Term)
        const signatureMonthly = signatureCost / term;

        // Seguro de Vida (0.4% of Amount - FIXED based on initial capital as per request)
        const insuranceMonthly = amount * insurancePct;

        // Total Monthly Payment
        const totalMonthlyPayment = baseInstallment + riskFundMonthly + signatureMonthly + insuranceMonthly;

        const schedule = [];
        let currentBalance = amount;

        for (let i = 1; i <= term; i++) {
            const interest = currentBalance * monthlyRate;
            const capital = baseInstallment - interest;
            const totalPayment = baseInstallment + riskFundMonthly + signatureMonthly + insuranceMonthly;

            currentBalance -= capital;
            if (currentBalance < 0) currentBalance = 0;

            schedule.push({
                period: i,
                initialBalance: currentBalance + capital,
                payment: baseInstallment,
                interest: interest,
                capital: capital,
                riskFund: riskFundMonthly,
                signature: signatureMonthly,
                insurance: insuranceMonthly,
                totalPayment: totalPayment,
                finalBalance: currentBalance
            });
        }

        setBreakdown({
            monthlyRate: (monthlyRate * 100).toFixed(2),
            baseInstallment,
            riskFundMonthly,
            signatureMonthly,
            insuranceMonthly,
            totalMonthlyPayment
        });
        setAmortizationSchedule(schedule);
    };

    const downloadPDF = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(20);
        doc.setTextColor(40, 62, 82); // #283e52
        doc.text("Simulación de Crédito", 14, 22);

        doc.setFontSize(10);
        doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 14, 30);

        // Summary
        doc.setFontSize(12);
        doc.text("Resumen del Crédito:", 14, 40);
        doc.setFontSize(10);
        doc.text(`Monto Solicitado: ${formatCurrency(amount)}`, 14, 48);
        doc.text(`Plazo: ${term} Meses`, 14, 54);
        doc.text(`Cuota Mensual Aprox.: ${formatCurrency(breakdown?.totalMonthlyPayment || 0)}`, 14, 60);

        // Table
        const tableColumn = ["No.", "Saldo Inicial", "Interés", "Abono Capital", "Costos Adic.", "Total a pagar", "Saldo Final"];
        const tableRows = amortizationSchedule.map(row => [
            row.period,
            formatCurrency(row.initialBalance), // Swapped payment with initialBalance to match new order
            formatCurrency(row.interest),
            formatCurrency(row.capital),
            formatCurrency(row.riskFund + row.signature + row.insurance),
            formatCurrency(row.totalPayment),
            formatCurrency(row.finalBalance)
        ]);

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 70,
            theme: 'grid',
            headStyles: { fillColor: [40, 62, 82] },
            styles: { fontSize: 8, halign: 'center' }
        });

        doc.save("simulacion-credito-proalto.pdf");
    };

    useEffect(() => {
        calculateLoan();
    }, [amount, term, rateEA, riskFundPct, signatureCost, insurancePct]);

    return (
        <section className="py-16 bg-white" id="simulador">
            <div className="container max-w-5xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#fec05c] font-bold tracking-widest uppercase text-sm mb-2 block">
                        Planea tu futuro
                    </span>
                    <h2 className="text-3xl font-bold text-[#283e52]">Simulador de Crédito</h2>
                    <p className="text-gray-500 mt-2">Calcula tu cuota mensual aproximada incluyendo todos los costos.</p>
                </div>

                {/* Admin Panel */}
                {showAdminPanel && (
                    <div className="mb-8 bg-red-50 border-2 border-red-200 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-bl-xl border-l border-b border-red-200">
                            MODO ADMINISTRADOR ACTIVO
                        </div>
                        <h3 className="flex items-center gap-2 text-red-800 font-bold mb-4">
                            <Settings className="w-5 h-5" /> Configuración de Parámetros
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-red-700 mb-1">Tasa E.A. (Decimal)</label>
                                <input
                                    type="number"
                                    step="0.0001"
                                    value={rateEA}
                                    onChange={(e) => setRateEA(Number(e.target.value))}
                                    className="w-full p-2 border border-red-200 rounded-lg text-sm bg-white"
                                />
                                <span className="text-xs text-red-500">{(rateEA * 100).toFixed(2)}%</span>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-red-700 mb-1">Fondo Riesgo (Decimal)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={riskFundPct}
                                    onChange={(e) => setRiskFundPct(Number(e.target.value))}
                                    className="w-full p-2 border border-red-200 rounded-lg text-sm bg-white"
                                />
                                <span className="text-xs text-red-500">{(riskFundPct * 100).toFixed(1)}%</span>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-red-700 mb-1">Costo Firma ($)</label>
                                <input
                                    type="number"
                                    value={signatureCost}
                                    onChange={(e) => setSignatureCost(Number(e.target.value))}
                                    className="w-full p-2 border border-red-200 rounded-lg text-sm bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-red-700 mb-1">Seguro (Decimal)</label>
                                <input
                                    type="number"
                                    step="0.0001"
                                    value={insurancePct}
                                    onChange={(e) => setInsurancePct(Number(e.target.value))}
                                    className="w-full p-2 border border-red-200 rounded-lg text-sm bg-white"
                                />
                                <span className="text-xs text-red-500">{(insurancePct * 100).toFixed(2)}%</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid lg:grid-cols-12 gap-8 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

                    {/* Controls Section */}
                    <div className="lg:col-span-6 p-8 md:p-10 space-y-8">
                        <div>
                            <label className="block text-sm font-bold text-[#283e52] mb-4 flex items-center justify-between">
                                <span className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-[#fec05c]" /> Monto a Solicitar</span>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formatCurrency(amount)}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, '');
                                            const numberValue = Number(value);
                                            if (numberValue <= 100000000) {
                                                setAmount(numberValue);
                                            }
                                        }}
                                        className="text-2xl font-bold text-[#283e52] text-right w-56 border-b-2 border-gray-200 focus:border-[#fec05c] outline-none transition-colors bg-transparent p-1"
                                    />
                                </div>
                            </label>
                            <input
                                type="range"
                                min="500000"
                                max="100000000"
                                step="100000"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#283e52]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                                <span>$500.000</span>
                                <span>$100.000.000</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#283e52] mb-4 flex items-center justify-between">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#fec05c]" /> Plazo (Meses)</span>
                                <span className="text-2xl font-bold text-[#283e52]">{term} Meses</span>
                            </label>
                            <input
                                type="range"
                                min="6"
                                max="60"
                                step="1"
                                value={term}
                                onChange={(e) => setTerm(Number(e.target.value))}
                                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#283e52]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                                <span>6 Meses</span>
                                <span>60 Meses</span>
                            </div>
                        </div>

                        <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                            <h4 className="font-bold text-[#283e52] mb-4 flex items-center gap-2 text-sm">
                                <Info className="w-4 h-4 text-[#fec05c]" />
                                Desglose de Costos (Estimado Mensual)
                            </h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>Capital e Intereses ({breakdown?.monthlyRate}% M.V.)</span>
                                    <span className="font-semibold">{formatCurrency(breakdown?.baseInstallment || 0)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Fondo de Riesgo (Diferido)</span>
                                    <span className="font-semibold">{formatCurrency(breakdown?.riskFundMonthly || 0)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Firma Electrónica (Diferido)</span>
                                    <span className="font-semibold">{formatCurrency(breakdown?.signatureMonthly || 0)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Seguro de Vida</span>
                                    <span className="font-semibold">{formatCurrency(breakdown?.insuranceMonthly || 0)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Section */}
                    <div className="lg:col-span-6 bg-[#283e52] p-8 md:p-10 flex flex-col justify-center text-white relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#fec05c]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#fff]/5 rounded-full blur-2xl -ml-10 -mb-10"></div>

                        <div className="relative z-10 text-center">
                            <p className="text-blue-200 font-medium mb-2 tracking-wide text-sm uppercase">Cuota Mensual Aproximada</p>
                            <div className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight">
                                {formatCurrency(breakdown?.totalMonthlyPayment || 0)}
                            </div>
                            <p className="text-xs text-blue-300 mb-8 max-w-xs mx-auto opacity-80">
                                * Valor aproximado. Sujeto a estudio de crédito y condiciones finales.
                            </p>

                            <a
                                href={`/formulario-de-registro?amount=${amount}&term=${term}`}
                                className="inline-flex items-center justify-center gap-2 bg-[#fec05c] hover:bg-[#eeb14e] text-[#283e52] font-bold py-4 px-8 rounded-xl transition-all w-full shadow-lg shadow-[#fec05c]/20 hover:shadow-[#fec05c]/40 hover:-translate-y-1"
                            >
                                Solicitar Este Crédito <ChevronRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Actions & Table */}
                <div className="mt-8">
                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                        <button
                            onClick={() => setShowTable(!showTable)}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-[#283e52] font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
                        >
                            <TableIcon className="w-5 h-5 text-[#fec05c]" />
                            {showTable ? "Ocultar Tabla de Amortización" : "Ver Tabla de Amortización"}
                        </button>

                        <button
                            onClick={downloadPDF}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#283e52] text-white font-bold rounded-xl shadow-lg shadow-[#283e52]/20 hover:bg-[#1f3040] transition-colors"
                        >
                            <FileText className="w-5 h-5" />
                            Descargar PDF
                        </button>
                    </div>

                    {showTable && (
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden overflow-x-auto">
                            <div className="p-6 md:p-8">
                                <h3 className="text-xl font-bold text-[#283e52] mb-6">Tabla de Amortización Estimada</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-center min-w-[800px]">
                                        <thead className="bg-gray-50 text-[#283e52]">
                                            <tr>
                                                <th className="px-4 py-3 rounded-l-lg">No.</th>
                                                <th className="px-4 py-3">Saldo Inicial</th>
                                                <th className="px-4 py-3">Interés</th>
                                                <th className="px-4 py-3">Abono Capital</th>
                                                <th className="px-4 py-3">Costos Adic.</th>
                                                <th className="px-4 py-3">Total a pagar</th>
                                                <th className="px-4 py-3 rounded-r-lg">Saldo Final</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {amortizationSchedule.map((row) => (
                                                <tr key={row.period} className="hover:bg-gray-50/50">
                                                    <td className="px-4 py-3 font-semibold text-[#283e52]">{row.period}</td>
                                                    <td className="px-4 py-3 text-gray-600">{formatCurrency(row.initialBalance)}</td>
                                                    <td className="px-4 py-3 text-gray-600">{formatCurrency(row.interest)}</td>
                                                    <td className="px-4 py-3 text-gray-600">{formatCurrency(row.capital)}</td>
                                                    <td className="px-4 py-3 text-gray-600">{formatCurrency(row.riskFund + row.signature + row.insurance)}</td>
                                                    <td className="px-4 py-3 font-bold text-[#283e52]">{formatCurrency(row.totalPayment)}</td>
                                                    <td className="px-4 py-3 text-gray-600">{formatCurrency(row.finalBalance)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-gray-400 mt-4">* Los valores pueden variar levemente por redondeos. Esta tabla es una simulación y no constituye una oferta formal.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
