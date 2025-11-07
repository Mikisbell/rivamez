// app/contacto/page.js
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/NavbarNew';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const contactInfo = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
    title: 'Teléfono',
    details: ['+51 943 818 788', '+51 964 123 456'],
    action: 'Llamar ahora',
    href: 'tel:+51943818788'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    title: 'Email',
    details: ['contacto@rivamez.com', 'proyectos@rivamez.com'],
    action: 'Enviar email',
    href: 'mailto:contacto@rivamez.com'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    ),
    title: 'Oficina Principal',
    details: ['Calle Real 456', 'Huancayo, Junín, Perú'],
    action: 'Ver en mapa',
    href: 'https://maps.google.com/?q=Huancayo+Peru'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: 'Horario',
    details: ['Lun - Vie: 8:00 AM - 6:00 PM', 'Sáb: 9:00 AM - 1:00 PM'],
    action: null,
    href: null
  }
];

const offices = [
  {
    name: 'Oficina Principal',
    address: 'Calle Real 456, Huancayo',
    phone: '+51 943 818 788',
    email: 'huancayo@rivamez.com',
    hours: 'Lun - Vie: 8:00 AM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'
  },
  {
    name: 'Oficina El Tambo',
    address: 'Av. Ferrocarril 789, El Tambo',
    phone: '+51 964 123 456',
    email: 'eltambo@rivamez.com',
    hours: 'Lun - Vie: 8:00 AM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
  }
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-rivamez-navy via-gray-900 to-rivamez-dark text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div style={{
              backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }} className="absolute inset-0" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold mb-6">
                CONTÁCTANOS
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hablemos de Tu Proyecto
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Estamos listos para ayudarte a convertir tu visión en realidad. Contáctanos hoy y recibe una cotización personalizada
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-rivamez-cyan to-rivamez-navy rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {info.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 mb-1">{detail}</p>
                  ))}
                  {info.action && (
                    <a
                      href={info.href}
                      target={info.title === 'Oficina Principal' ? '_blank' : undefined}
                      rel={info.title === 'Oficina Principal' ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 mt-4 text-rivamez-cyan font-semibold hover:text-rivamez-navy transition-colors"
                    >
                      {info.action}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Solicita una Cotización
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-green-700">Nos pondremos en contacto contigo pronto</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rivamez-cyan focus:border-transparent transition-all"
                          placeholder="Juan Pérez"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rivamez-cyan focus:border-transparent transition-all"
                          placeholder="+51 999 999 999"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rivamez-cyan focus:border-transparent transition-all"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tipo de Servicio *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rivamez-cyan focus:border-transparent transition-all"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="residencial">Construcción Residencial</option>
                        <option value="comercial">Proyectos Comerciales</option>
                        <option value="institucional">Proyectos Institucionales</option>
                        <option value="remodelacion">Remodelación</option>
                        <option value="gerencia">Gerencia de Proyectos</option>
                        <option value="diseno">Diseño y Arquitectura</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rivamez-cyan focus:border-transparent transition-all resize-none"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-rivamez-cyan/30 hover:scale-[1.02] transition-all duration-300"
                    >
                      Enviar Solicitud
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Image & Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Oficina RIVAMEZ"
                    className="w-full h-96 object-cover"
                  />
                </div>

                <div className="bg-gradient-to-br from-rivamez-cyan/10 to-white rounded-2xl p-8 border border-rivamez-cyan/20">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-rivamez-cyan mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Respuesta en menos de 24 horas</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-rivamez-cyan mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Cotización sin compromiso</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-rivamez-cyan mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Asesoría profesional personalizada</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-rivamez-cyan mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Visita técnica sin costo</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestras Oficinas
              </h2>
              <p className="text-xl text-gray-600">
                Visítanos en cualquiera de nuestras ubicaciones
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {offices.map((office, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={office.image}
                      alt={office.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-rivamez-cyan mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span className="text-gray-700">{office.address}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-rivamez-cyan mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-gray-700">{office.phone}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-rivamez-cyan mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700">{office.email}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-rivamez-cyan mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-96 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31204.225366843146!2d-75.23088044999998!3d-12.065917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e9638d6234cc9%3A0x40551e7654ee0963!2sHuancayo!5e0!3m2!1ses!2spe!4v1699999999999!5m2!1ses!2spe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación RIVAMEZ"
          />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
