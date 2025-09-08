import * as React from "react";

interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    subject,
    message,
}) => {
    const now = new Date().toLocaleString("es-VE", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Caracas",
    });

    const labelStyle: React.CSSProperties = {
        width: "120px",
        padding: "6px 0",
        fontSize: "13px",
        color: "#64748b",
        verticalAlign: "top",
        fontWeight: 600,
    };

    const valueStyle: React.CSSProperties = {
        padding: "6px 0",
        fontSize: "14px",
        color: "#0f172a",
        wordBreak: "break-word",
    };

    const linkStyle: React.CSSProperties = {
        color: "#6366f1",
        textDecoration: "none",
    };

    return (
        <div style={{ backgroundColor: "#f5f7fb", padding: "24px 0", width: "100%", margin: 0 }}>
            {/* Preheader (hidden in most clients) */}
            <span style={{
                display: "none",
                overflow: "hidden",
                lineHeight: "1px",
                opacity: 0,
                maxHeight: 0,
                maxWidth: 0,
            }}>
                Nuevo mensaje: {subject} de {name}
            </span>

            <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} style={{ borderCollapse: "collapse" }}>
                <tbody>
                    <tr>
                        <td align="center" style={{ padding: "0 12px" }}>
                            <table role="presentation" width={600} cellPadding={0} cellSpacing={0} style={{
                                width: "600px",
                                maxWidth: "100%",
                                background: "#ffffff",
                                borderRadius: "12px",
                                border: "1px solid #e6e8ee",
                                overflow: "hidden",
                                fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Inter,Helvetica,Arial,sans-serif",
                                color: "#0f172a"
                            }}>
                                <tbody>
                                    {/* Header */}
                                    <tr>
                                        <td style={{ padding: "24px 28px 0" }}>
                                            <div style={{ fontSize: "12px", color: "#6366f1", letterSpacing: "0.08em", fontWeight: 700, textTransform: "uppercase" }}>Contacto</div>
                                            <h1 style={{ margin: "8px 0 0", fontSize: "22px", lineHeight: "28px" }}>Tienes un nuevo mensaje</h1>
                                            <div style={{ marginTop: "4px", fontSize: "13px", color: "#64748b" }}>{now}</div>
                                        </td>
                                    </tr>

                                    {/* Accent bar */}
                                    <tr>
                                        <td style={{ padding: "16px 28px 0" }}>
                                            <div style={{ height: "3px", width: "100%", backgroundImage: "linear-gradient(90deg,#6366f1,#a855f7,#ec4899)", borderRadius: "999px" }} />
                                        </td>
                                    </tr>

                                    {/* Details */}
                                    <tr>
                                        <td style={{ padding: "20px 28px" }}>
                                            <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} style={{ borderCollapse: "collapse" }}>
                                                <tbody>
                                                    <tr>
                                                        <td style={labelStyle}>Nombre</td>
                                                        <td style={valueStyle}>{name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={labelStyle}>Email</td>
                                                        <td style={valueStyle}>
                                                            <a href={`mailto:${email}`} style={linkStyle}>{email}</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={labelStyle}>Asunto</td>
                                                        <td style={valueStyle}>{subject}</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            {/* Message box */}
                                            <div style={{ marginTop: "16px", padding: "16px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px" }}>
                                                <div style={{ fontSize: "12px", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: "8px" }}>Mensaje</div>
                                                <div style={{ whiteSpace: "pre-wrap", fontSize: "14px", lineHeight: "22px", color: "#0f172a" }}>
                                                    {message}
                                                </div>
                                            </div>

                                            <div style={{ marginTop: "20px", fontSize: "12px", color: "#64748b" }}>
                                                Puedes responder directamente a este correo para contactar con {name}.
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Footer */}
                                    <tr>
                                        <td style={{ padding: "12px 28px 24px", background: "#fafafa", borderTop: "1px solid #eef2f7" }}>
                                            <div style={{ fontSize: "12px", color: "#94a3b8" }}>
                                                Enviado desde el formulario de contacto de rafael-arraez.dev
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Spacing fallback */}
                            <div style={{ fontSize: 0 }}>&nbsp;</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};