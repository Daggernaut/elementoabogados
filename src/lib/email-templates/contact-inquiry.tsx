import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface ContactInquiryProps {
  name?: string
  email?: string
  message?: string
}

export function ContactInquiry({
  name = 'Visitante',
  email = 'sin-correo@ejemplo.com',
  message = 'Sin mensaje.',
}: ContactInquiryProps) {
  return (
    <Html lang="es">
      <Head />
      <Preview>{`Nueva consulta de ${name}`}</Preview>
      <Body style={{ backgroundColor: '#f4f6f8', fontFamily: 'Arial, Helvetica, sans-serif', margin: 0, padding: '24px' }}>
        <Container style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '32px', maxWidth: '600px' }}>
          <Heading style={{ fontSize: '20px', color: '#0b2e4f', margin: '0 0 8px' }}>
            Nueva consulta desde el sitio web
          </Heading>
          <Text style={{ fontSize: '14px', color: '#5b6b7a', margin: '0 0 24px' }}>
            Formulario de contacto de Elemento Abogados
          </Text>
          <Hr style={{ borderColor: '#e5e9ee' }} />
          <Section>
            <Text style={{ fontSize: '14px', color: '#0b2e4f', margin: '16px 0 4px' }}>
              <strong>Nombre:</strong> {name}
            </Text>
            <Text style={{ fontSize: '14px', color: '#0b2e4f', margin: '0 0 16px' }}>
              <strong>Correo:</strong> {email}
            </Text>
            <Text style={{ fontSize: '14px', color: '#0b2e4f', margin: '0 0 8px' }}>
              <strong>Mensaje:</strong>
            </Text>
            <Text style={{ fontSize: '14px', color: '#334455', whiteSpace: 'pre-wrap', margin: 0 }}>
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: ContactInquiry,
  displayName: 'Consulta de contacto',
  subject: (data: Record<string, any>) =>
    `Nueva consulta de ${data?.name || 'un visitante'}`,
  to: 'info@elementoabogados.com',
  previewData: {
    name: 'Ana Pérez',
    email: 'ana@ejemplo.com',
    message: 'Quisiera asesoría en materia laboral para mi empresa.',
  },
} satisfies TemplateEntry
