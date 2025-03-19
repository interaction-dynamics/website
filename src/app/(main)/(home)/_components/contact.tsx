'use client'
import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { sendMessage } from '../_use-cases/send-message'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { MailCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { useTranslations } from '@/services/translation'
import { Container } from '@/components/ui/container'

const formSchema = z.object({
  subject: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  content: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
})

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      content: '',
      email: '',
    },
  })

  const [isSent, setIsSent] = useState(false)

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendMessage(values.subject, values.content, values.email)
    form.setValue('subject', '')
    form.setValue('content', '')
    form.setValue('email', '')
    setIsSent(true)

    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }

  const { t } = useTranslations('home')

  return (
    <main className="py-20 min-h-[65vh] flex items-center justify-center">
      <div>
        <Container className="max-w-3xl">
          <Typography
            variant="h1"
            component="h2"
            id="contact"
            className="text-center"
          >
            {t('contact.title')}
          </Typography>
          <div className="mt-8">
            <Form {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  name="subject"
                  render={({ field }) => (
                    <FormItem aria-required>
                      <Label>{t('contact.subject')}</Label>
                      <Input
                        placeholder={t('contact.subject') as string}
                        required
                        {...field}
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  name="content"
                  render={({ field }) => (
                    <FormItem aria-required>
                      <Label>{'contact.message'}</Label>
                      <Textarea
                        placeholder={t('contact.message placeholder') as string}
                        required
                        className="min-h-32"
                        {...field}
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  render={({ field }) => (
                    <FormItem aria-required>
                      <Label>{t('contact.email')}</Label>
                      <Input
                        type="email"
                        placeholder={t('contact.email placeholder') as string}
                        required
                        {...field}
                      />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-center">
                  <Button
                    type="submit"
                    disabled={
                      form.formState.isSubmitting || !form.formState.isValid
                    }
                  >
                    {t('contact.send')}
                    <Send />
                  </Button>
                </div>

                <div
                  className={cn(
                    'grid grid-rows-[0fr] transition-all',
                    isSent && 'grid-rows-[1fr]'
                  )}
                >
                  <div className="overflow-hidden">
                    <Alert>
                      <MailCheck className="h-4 w-4" />
                      <AlertTitle>{t('contact.message sent')}</AlertTitle>
                      <AlertDescription>
                        {t('contact.message feedback')}
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </Container>
      </div>
    </main>
  )
}
