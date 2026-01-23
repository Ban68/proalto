import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface NewApplicationEmailProps {
    name: string;
    amount: number;
    phone: string;
    email: string;
    city: string;
    department: string;
    id: string;
}

export default function NewApplicationEmail({
    name,
    amount,
    phone,
    email,
    city,
    department,
    id,
}: NewApplicationEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Nueva solicitud de crédito de {name}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Nueva Solicitud Recibida</Heading>
                    <Text style={text}>
                        Has recibido una nueva solicitud de crédito desde el sitio web.
                    </Text>
                    <Section style={section}>
                        <Text style={paragraph}>
                            <strong>Nombre:</strong> {name}
                        </Text>
                        <Text style={paragraph}>
                            <strong>Monto:</strong> ${Number(amount).toLocaleString('es-CO')}
                        </Text>
                        <Text style={paragraph}>
                            <strong>Teléfono:</strong> {phone}
                        </Text>
                        <Text style={paragraph}>
                            <strong>Email:</strong> {email}
                        </Text>
                        <Text style={paragraph}>
                            <strong>Ubicación:</strong> {city}, {department}
                        </Text>
                        <Text style={paragraph}>
                            <strong>ID Referencia:</strong> {id}
                        </Text>
                    </Section>
                    <Hr style={hr} />
                    <Text style={footer}>
                        Financiera Proalto SAS - Notificación Automática
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
};

const h1 = {
    color: "#283e52",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center" as const,
    margin: "30px 0",
};

const text = {
    color: "#525f7f",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center" as const,
};

const section = {
    padding: "24px",
    border: "1px solid #e6ebf1",
    borderRadius: "4px",
    margin: "0 40px",
};

const paragraph = {
    fontSize: "14px",
    lineHeight: "24px",
    color: "#525f7f",
    margin: "10px 0",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: "center" as const,
};
