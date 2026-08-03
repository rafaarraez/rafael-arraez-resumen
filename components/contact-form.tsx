'use client'

import type React from "react"
import { useState } from "react"
import { Send, Mail, Copy, Check, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui-custom/button"
import { Input } from "@/components/ui-custom/input"
import { Label } from "@/components/ui-custom/label"
import { Textarea } from "@/components/ui-custom/textarea"
import toast from 'react-hot-toast';
import axios from 'axios';
import { celebrate } from "@/lib/utils"
import { SectionId } from "@/lib/sections"
import { Reveal } from "@/components/effects/reveal"

const EMAIL = "rafa.arraez.gue@gmail.com"

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  errors: {
    name?: string;
    email?: string;
    message?: string;
    subject?: string;
  };
  submitted: boolean;
}

export function ContactForm() {
  const { t, language } = useLanguage()
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    errors: {},
    submitted: false,
  }
  const [formData, setFormData] = useState<ContactFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Error al copiar:", err)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const newErrors: ContactFormState['errors'] = {};

    if (!formData.name) {
      newErrors.name = t('contact.form.nameRequired');
    }

    if (!formData.email) {
      newErrors.email = t('contact.form.emailRequired');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = t('contact.form.emailInvalid');
    }

    if (!formData.subject) {
      newErrors.subject = t('contact.form.subjectRequired');
    }

    if (!formData.message) {
      newErrors.message = t('contact.form.messageRequired');
    }

    if (Object.keys(newErrors).length > 0) {
      setFormData({ ...formData, errors: newErrors, submitted: false });
      setIsSubmitting(false)
    } else {
      try {
        const response = await axios.post('/api/send', {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        });

        if (response.status === 200) {
          setFormData({ ...initialState, submitted: true });
          toast.success(t('contact.success.emailSent'));
          celebrate();
        } else {
          toast.error(`${t('contact.error.emailSend')} ${response.status}`);
        }
      } catch (error) {
        toast.error(`${t('contact.error.general')} ${error}`);
      }
      setIsSubmitting(false)
    }
  }

  return (
    <section id={SectionId.contact} className="relative overflow-hidden border-t border-zinc-200 py-24 dark:border-zinc-800">
      {/* Eco del glow del hero para cerrar la página */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/[0.06]"
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Texto + contacto directo */}
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("contact.title")}</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">{t("contact.description")}</p>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">{t("contact.subtitle")}</p>

            {/* Email directo */}
            <div className="glass mt-8 flex items-center gap-3 rounded-2xl p-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium">{EMAIL}</div>
              </div>
              <Button
                onClick={copyEmail}
                size="sm"
                variant={copied ? "default" : "outline"}
                aria-label={copied
                  ? (language === "es" ? "Email copiado al portapapeles" : "Email copied to clipboard")
                  : (language === "es" ? "Copiar email al portapapeles" : "Copy email to clipboard")
                }
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                    {language === "es" ? "Copiado" : "Copied"}
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                    {language === "es" ? "Copiar" : "Copy"}
                  </>
                )}
              </Button>
            </div>

            {/* Redes */}
            <div className="mt-8">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{t("contact.info.follow")}</p>
              <div className="mt-3 flex gap-2">
                <a
                  href="https://linkedin.com/in/rafael-arraez"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="glass-subtle flex h-11 w-11 items-center justify-center rounded-full text-zinc-600 transition-colors hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/rafaarraez"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="glass-subtle flex h-11 w-11 items-center justify-center rounded-full text-zinc-600 transition-colors hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="glass rounded-3xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.form.name")}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {formData.errors.name && (
                      <p className="text-sm text-red-600 dark:text-red-400">{formData.errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.form.email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {formData.errors.email && (
                      <p className="text-sm text-red-600 dark:text-red-400">{formData.errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  {formData.errors.subject && (
                    <p className="text-sm text-red-600 dark:text-red-400">{formData.errors.subject}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[140px]"
                  />
                  {formData.errors.message && (
                    <p className="text-sm text-red-600 dark:text-red-400">{formData.errors.message}</p>
                  )}
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      {t("contact.form.sending")}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" aria-hidden="true" />
                      {t("contact.form.submit")}
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
