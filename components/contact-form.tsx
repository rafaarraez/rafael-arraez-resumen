'use client'

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Button } from "@/components/ui-custom/button"
import { Card, CardContent } from "@/components/ui-custom/card"
import { Input } from "@/components/ui-custom/input"
import { Label } from "@/components/ui-custom/label"
import { Textarea } from "@/components/ui-custom/textarea"
import toast from 'react-hot-toast';
import axios from 'axios';
import { celebrate } from "@/lib/utils"

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
  const { t } = useLanguage()
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
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    if (formRef.current) {
      observer.observe(formRef.current)
    }
    if (infoRef.current) {
      observer.observe(infoRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (formRef.current) {
        observer.unobserve(formRef.current)
      }
      if (infoRef.current) {
        observer.unobserve(infoRef.current)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    e.preventDefault();
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
    <section
      id="contacto"
      ref={sectionRef}
      className="py-20 bg-gray-100 dark:bg-gray-900 opacity-0"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            {t("contact.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("contact.description")}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div ref={formRef} className="opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.form.name")}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.form.name")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.form.email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t("contact.form.subject")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.form.message")}
                      required
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                        {t("contact.form.sending")}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        {t("contact.form.submit")}
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div ref={infoRef} className="opacity-0 text-center" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">{t("contact.info.follow")}</h3>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://linkedin.com/in/rafael-arraez"
                    target="_blank"
                    className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/rafaarraez"
                    target="_blank"
                    className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
