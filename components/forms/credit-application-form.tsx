"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

import { submitApplication } from "@/app/actions";
import colombiaData from "@/lib/colombia.json";

interface Department {
    id: number;
    departamento: string;
    ciudades: string[];
}

export function CreditApplicationForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Location Data (Static Import)
    const departments: Department[] = colombiaData as Department[];
    const [cities, setCities] = useState<string[]>([]);

    // Controlled Inputs
    const [selectedDept, setSelectedDept] = useState("");
    const [amount, setAmount] = useState("");
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [phone, setPhone] = useState("");

    // Handle Department Change
    const handleDeptChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const deptName = e.target.value;
        setSelectedDept(deptName);
        const dept = departments.find(d => d.departamento === deptName);
        setCities(dept ? dept.ciudades : []);
    };

    // Currency Formatter
    const formatCurrency = (value: string) => {
        // Remove non-digits
        const number = value.replace(/\D/g, "");
        if (!number) return "";
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(Number(number));
    };

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
        setter(formatCurrency(e.target.value));
    };

    // Phone Validator (Only numbers, max 10)
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/\D/g, ""); // Remove non-numeric
        if (val.length <= 10) {
            setPhone(val);
        }
    };

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await submitApplication(formData);

        if (result.success) {
            setIsSuccess(true);
        } else {
            setError(result.error || "Algo salió mal. Inténtalo de nuevo.");
        }
        setIsLoading(false);
    }

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 text-white">
                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">¡Solicitud Recibida!</h3>
                <p className="text-gray-300 max-w-md">
                    Hemos recibido tu solicitud correctamente. Uno de nuestros asesores revisará tu información y te contactará en menos de 24 horas.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="space-y-8 bg-[#0B1221] p-8 rounded-3xl text-white shadow-2xl">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Tipo de Identificación */}
                <div className="space-y-3">
                    <label className="text-sm font-bold">Tipo de identificación</label>
                    <div className="flex gap-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="identificationType" value="CC" defaultChecked className="accent-[#fec05c] w-4 h-4" />
                            <span>CC</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="identificationType" value="NIT" className="accent-[#fec05c] w-4 h-4" />
                            <span>NIT</span>
                        </label>
                    </div>
                </div>

                {/* Número de identificación */}
                <div className="space-y-2">
                    <label htmlFor="cedula" className="text-sm font-bold">Número de identificación</label>
                    <input
                        id="cedula"
                        name="cedula"
                        required
                        className="flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c]"
                        placeholder="Número de identificación"
                    />
                </div>

                {/* Nombre del Cliente */}
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold">Nombre del cliente</label>
                    <input
                        id="name"
                        name="name"
                        required
                        className="flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c]"
                        placeholder="Nombre del cliente"
                    />
                </div>

                {/* Fecha de nacimiento */}
                <div className="space-y-2">
                    <label htmlFor="birthDate" className="text-sm font-bold">Fecha de nacimiento*</label>
                    <input
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        required
                        className="flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c]"
                    />
                </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold uppercase">No. De Celular</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        minLength={10}
                        maxLength={10}
                        className="flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c]"
                        placeholder="3001234567"
                    />
                    {phone.length > 0 && phone.length < 10 && (
                        <span className="text-xs text-red-400">Debe tener 10 dígitos</span>
                    )}
                </div>
                <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-bold">Dirección</label>
                    <input
                        id="address"
                        name="address"
                        required
                        className="flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c]"
                        placeholder="Dirección"
                    />
                </div>

                {/* Department Dropdown */}
                <div className="space-y-2">
                    <label htmlFor="department" className="text-sm font-bold">Departamento</label>
                    <select
                        id="department"
                        name="department"
                        required
                        value={selectedDept}
                        onChange={handleDeptChange}
                        className="flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c]"
                    >
                        <option value="">Seleccione...</option>
                        {departments.map((dept) => (
                            <option key={dept.id} value={dept.departamento}>
                                {dept.departamento}
                            </option>
                        ))}
                    </select>
                </div>

                {/* City Dropdown */}
                <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-bold">Ciudad</label>
                    <select
                        id="city"
                        name="city"
                        required
                        disabled={!selectedDept}
                        className="flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c] disabled:opacity-50"
                    >
                        <option value="">Seleccione...</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c]"
                        placeholder="Email"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-bold">Nombre de empresa con libranzas</label>
                    <textarea
                        id="company"
                        name="company"
                        required
                        className="flex min-h-[40px] w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c] resize-none"
                        placeholder="Nombre de la empresa"
                        rows={2}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="purpose" className="text-sm font-bold">Propósito del crédito</label>
                    <textarea
                        id="purpose"
                        name="purpose"
                        required
                        className="flex min-h-[40px] w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c] resize-none"
                        placeholder="Propósito del crédito"
                        rows={2}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="amount" className="text-sm font-bold">Monto a solicitar</label>
                    <input
                        id="amount"
                        name="amount"
                        required
                        value={amount}
                        onChange={(e) => handleCurrencyChange(e, setAmount)}
                        className="flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c]"
                        placeholder="$ 1.000.000"
                    />
                </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label htmlFor="term" className="text-sm font-bold">Plazo (en meses)</label>
                    <input
                        id="term"
                        name="term"
                        type="number"
                        required
                        className="flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c]"
                        placeholder="Plazo (en meses)"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="employmentType" className="text-sm font-bold">Tipo de Trabajo *</label>
                    <select
                        id="employmentType"
                        name="employmentType"
                        required
                        className="flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black focus:ring-2 focus:ring-[#fec05c]"
                    >
                        <option value="empleado">Empleado</option>
                        <option value="pensionado">Pensionado</option>
                        <option value="independiente">Independiente</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="monthlyIncome" className="text-sm font-bold">Salario / ingresos mensuales</label>
                    <input
                        id="monthlyIncome"
                        name="monthlyIncome"
                        required
                        value={monthlyIncome}
                        onChange={(e) => handleCurrencyChange(e, setMonthlyIncome)}
                        className="flex h-10 w-full rounded-md border-none bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#fec05c]"
                        placeholder="$ 2.000.000"
                    />
                </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4 pt-4">
                <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="creditReportAuth" required className="accent-[#fec05c] w-5 h-5 mt-0.5" />
                    <span className="text-sm font-bold text-[#fec05c]">Autorización De Consulta Y Reportes De Información.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="dataAuth" required className="accent-[#fec05c] w-5 h-5 mt-0.5" />
                    <span className="text-sm font-bold text-[#fec05c]">Autorización Tratamiento De Información De Clientes.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="terms" required className="accent-[#fec05c] w-5 h-5 mt-0.5" />
                    <span className="text-sm font-bold text-[#fec05c]">Acepto Los Términos y condiciones.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="digitalService" className="accent-[#fec05c] w-5 h-5 mt-0.5" />
                    <span className="text-sm italic text-white/90">
                        <strong className="text-white not-italic">100% digital(opcional)</strong> El cobro de $20.000 pesos colombiano por el uso de la plataforma 100% digital es opcional y te permite firmar electrónicamente la documentación relacionado con el crédito solicitado, ahorrándote tiempo y dinero. Este costo es único y se cobra en el momento del desembolso del crédito.
                    </span>
                </label>
            </div>

            <div className="pt-8">
                <button
                    type="submit"
                    disabled={isLoading}
                    className={cn(
                        "w-full rounded-full bg-[#fec05c] px-8 py-4 text-lg font-bold text-[#283e52] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
                        isLoading && "cursor-wait opacity-50"
                    )}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin inline" />
                            Enviando...
                        </>
                    ) : (
                        "Enviar Solicitud"
                    )}
                </button>
            </div>

            <p className="text-sm text-center text-gray-300 mt-6 leading-relaxed max-w-3xl mx-auto">
                Para agilizar tu solicitud envíanos al correo <a href="mailto:servicioalcliente@proalto.co" className="text-[#fec05c] underline">servicioalcliente@proalto.co</a> fotocopia de tu cédula, RUT, certificación de tus ingresos y cámara de comercio.
            </p>
        </form>
    );
}
