import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Por favor completa todos los campos requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor ingresa un email válido' },
        { status: 400 }
      );
    }

    // Aquí puedes agregar el envío real del email usando:
    // - Resend (recomendado)
    // - SendGrid
    // - Nodemailer
    // - O cualquier otro servicio de email

    // Por ahora, simulamos el envío exitoso
    // TODO: Configurar servicio de email real en producción
    console.log('Nuevo mensaje de contacto:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // En producción, aquí iría el código para enviar el email real
    // Ejemplo con Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contacto@tidytouch.com',
    //   to: 'Tidytouchbyluisarueda@outlook.com',
    //   subject: `Nuevo mensaje de contacto de ${name}`,
    //   html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Teléfono: ${phone || 'No proporcionado'}</p><p>Mensaje: ${message}</p>`,
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado exitosamente. Nos pondremos en contacto pronto.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return NextResponse.json(
      { error: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.' },
      { status: 500 }
    );
  }
}

