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
}) => (
    <div>
        <h1>Tienes un nuevo mensaje: </h1>
        <h4> Nombre: {name} </h4>
        <h4> Email: {email} </h4>
        <h4> Asunto: {subject} </h4>
        <h4> Mensaje: </h4>
        <p> {message} </p>
    </div>
);