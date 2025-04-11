import { EmailTemplate } from '@/components/email/emailTemplate';
import { Resend } from 'resend';
import * as React from 'react';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
    throw new Error('Missing API key. Please provide the RESEND_API_KEY in your environment variables.');
}

const resend = new Resend(RESEND_API_KEY);
const TO_EMAIL: string | undefined = process.env.TO_EMAIL;
export async function POST(request: Request) {
    try {
        if (!TO_EMAIL) {
            throw new Error('TO_EMAIL is not set. Please check your configuration.');
        }

        const body = await request.json();
        const { name, email, subject, message } = body;

        const { data, error } = await resend.emails.send({
            from: 'Sitio de Resumen cool de Rafita <onboarding@resend.dev>',
            to: [TO_EMAIL],
            subject: "New message from your website",
            react: EmailTemplate({ name, email, subject, message }) as React.ReactElement,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ data });
    } catch (error) {
        console.log(error);
        return Response.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
    }
}
