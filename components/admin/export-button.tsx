"use client";

import { Download, Check } from "lucide-react";
import { useState } from "react";

interface Application {
    id: string;
    createdAt: Date;
    name: string;
    identificationType: string;
    cedula: string;
    phone: string;
    email: string;
    city: string | null;
    department: string | null;
    amount: number;
    term: number;
    company: string | null;
    monthlyIncome: number | null;
    employmentType: string | null;
}

interface ExportButtonProps {
    data: Application[];
}

export function ExportButton({ data }: ExportButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleExport = () => {
        // Create headers
        const headers = [
            "Fecha",
            "Nombre",
            "Tipo ID",
            "Cédula",
            "Teléfono",
            "Email",
            "Departamento",
            "Ciudad",
            "Empresa",
            "Tipo Empleo",
            "Ingresos",
            "Monto Solicitado",
            "Plazo (Meses)"
        ];

        // Map data to rows
        const rows = data.map(app => [
            new Date(app.createdAt).toLocaleDateString('es-CO'),
            app.name,
            app.identificationType,
            app.cedula,
            app.phone,
            app.email,
            app.department || "",
            app.city || "",
            app.company || "",
            app.employmentType || "",
            app.monthlyIncome?.toString() || "",
            app.amount.toString(),
            app.term.toString()
        ]);

        // Join with tabs for Excel copy/paste compatibility
        const tsvContent = [
            headers.join("\t"),
            ...rows.map(row => row.join("\t"))
        ].join("\n");

        // Copy to clipboard
        navigator.clipboard.writeText(tsvContent).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            alert("¡Datos copiados! Ahora puedes pegarlos en Excel (Ctrl+V).");
        }).catch(err => {
            console.error("Error al copiar: ", err);
            alert("No se pudo copiar al portapapeles. Intenta manualmente.");
        });
    };

    return (
        <button
            onClick={handleExport}
            className="flex items-center gap-2 bg-[#283e52] text-white px-4 py-2 rounded-lg hover:bg-[#1a2936] transition-colors"
            title="Copia los datos para pegar en Excel"
        >
            {copied ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
            {copied ? "¡Copiado!" : "Exportar (Copy/Paste)"}
        </button>
    );
}
