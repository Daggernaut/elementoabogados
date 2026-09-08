import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { sendTemplateEmail } from './email-templates/send-email'

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(2000),
})

export const sendContactInquiry = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const result = await sendTemplateEmail('contact-inquiry', 'info@elementoabogados.com', {
      templateData: data,
      replyTo: data.email,
      idempotencyKey: `contact-inquiry-${data.email}-${Date.now()}`,
    })
    return { ok: result.sent }
  })
