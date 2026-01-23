import { PrismaClient } from "@prisma/client";

import Link from "next/link";
import { ExportButton } from "@/components/admin/export-button";
import { Download } from "lucide-react";

const prisma = new PrismaClient();

// Force dynamic rendering so we always get the latest data
export const dynamic = 'force-dynamic';

export default async function AdminPage() {
    // Fetch all applications, newest first
    const applications = await prisma.creditApplication.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    // Prepare data for export (convert Decimals to numbers)
    const exportData = applications.map(app => ({
        ...app,
        amount: Number(app.amount),
        monthlyIncome: app.monthlyIncome ? Number(app.monthlyIncome) : null,
    }));

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Panel Administrativo</h1>
                        <p className="text-gray-500">Solicitudes de Crédito Recibidas</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                            Ir al Sitio Web
                        </Link>
                        {/* Simple instruction for export */}
                        {/* Export Component */}
                        <ExportButton data={exportData} />
                    </div>
                </div>

                {/* Data Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4">Fecha</th>
                                    <th className="px-6 py-4">Cliente</th>
                                    <th className="px-6 py-4">ID</th>
                                    <th className="px-6 py-4">Contacto</th>
                                    <th className="px-6 py-4">Solicitud</th>
                                    <th className="px-6 py-4">Empresa</th>
                                    <th className="px-6 py-4">Ingresos</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {applications.map((app) => (
                                    <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                            {new Date(app.createdAt).toLocaleDateString('es-CO')}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-gray-900">{app.name}</div>
                                            <div className="text-xs text-blue-600 uppercase">{app.employmentType}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-mono text-gray-600">{app.identificationType} {app.cedula}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-gray-900">{app.phone}</div>
                                            <div className="text-gray-500 text-xs">{app.email}</div>
                                            <div className="text-gray-400 text-xs truncate max-w-[150px]" title={`${app.city}, ${app.department}`}>
                                                {app.city}, {app.department}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-green-600">
                                                ${Number(app.amount).toLocaleString('es-CO')}
                                            </div>
                                            <div className="text-xs text-gray-500">{app.term} meses</div>
                                        </td>
                                        <td className="px-6 py-4 max-w-[200px] truncate text-gray-600" title={app.company || ''}>
                                            {app.company || '-'}
                                        </td>
                                        <td className="px-6 py-4 text-gray-900">
                                            ${app.monthlyIncome ? Number(app.monthlyIncome).toLocaleString('es-CO') : '-'}
                                        </td>
                                        <td className="px-6 py-4">
                                            {Array.isArray(app.documents) && (app.documents as any[]).length > 0 ? (
                                                <div className="flex flex-col gap-2">
                                                    {(app.documents as any[]).map((doc, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={doc.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline"
                                                            title={doc.name}
                                                        >
                                                            <Download className="w-3 h-3" />
                                                            <span className="truncate max-w-[100px]">{doc.name}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            ) : (
                                                <span className="text-xs text-gray-400">-</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {applications.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                                            No hay solicitudes registradas aún.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
}
