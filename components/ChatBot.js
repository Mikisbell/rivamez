// components/ChatBot.js
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Inicializar mensaje de bienvenida solo en el cliente
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          type: 'bot',
          text: '¡Hola! 👋 Soy el asistente virtual de RIVAMEZ. ¿En qué puedo ayudarte?',
          time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Base de conocimiento - FAQs de RIVAMEZ
  const knowledgeBase = {
    // Servicios
    servicios: {
      keywords: ['servicio', 'servicios', 'ofrecen', 'hacen', 'que hacen', 'especialidad'],
      response: '🏗️ En RIVAMEZ ofrecemos:\n\n• Construcción Residencial\n• Proyectos Comerciales\n• Remodelación y Ampliación\n• Diseño Arquitectónico\n• Gestión de Proyectos\n• Construcción Industrial\n\n¿Te interesa algún servicio en específico?'
    },
    
    // Costos y presupuestos
    costos: {
      keywords: ['costo', 'precio', 'cuanto', 'cuánto', 'presupuesto', 'cotizar', 'cotización'],
      response: '💰 Los costos varían según el proyecto:\n\n• Casa (120m²): Desde S/ 180,000\n• Departamento: Desde S/ 150,000\n• Local comercial: Presupuesto personalizado\n• Remodelación: Desde S/ 50,000\n\n📋 ¿Quieres una cotización detallada?\n\n👉 Escribe "cotización" o contáctanos al +51 943 818 788'
    },

    // Tiempo de construcción
    tiempo: {
      keywords: ['tiempo', 'demora', 'cuanto tarda', 'cuánto tarda', 'duracion', 'duración', 'plazo'],
      response: '⏱️ Plazos aproximados:\n\n• Casa 2 pisos: 8-12 meses\n• Edificio pequeño: 12-18 meses\n• Remodelación: 2-4 meses\n• Local comercial: 6-10 meses\n\n✅ Cumplimos el 98% de entregas a tiempo.\n\n¿Tienes un proyecto en mente?'
    },

    // Ubicación
    ubicacion: {
      keywords: ['ubicación', 'ubicacion', 'donde', 'dónde', 'dirección', 'direccion', 'encuentran'],
      response: '📍 Nos ubicamos en:\n\n**Av. Cahuide 298, Huancayo, Perú**\n\n🕒 Horarios:\n• Lun - Vie: 8:00 AM - 6:00 PM\n• Sábados: 9:00 AM - 1:00 PM\n\n📞 Teléfono: +51 943 818 788\n📧 Email: info@rivamez.com'
    },

    // Contacto
    contacto: {
      keywords: ['contacto', 'llamar', 'whatsapp', 'telefono', 'teléfono', 'email', 'correo'],
      response: '📞 Contáctanos por:\n\n• **WhatsApp**: +51 943 818 788\n• **Teléfono**: +51 943 818 788\n• **Email**: info@rivamez.com\n\n💬 ¿Prefieres que te contactemos nosotros?\nEscribe "contacto" y te llamamos.'
    },

    // Proyectos anteriores
    proyectos: {
      keywords: ['proyecto', 'proyectos', 'obra', 'obras', 'portafolio', 'trabajos', 'realizados'],
      response: '🏆 Hemos completado 285+ proyectos:\n\n• Torres del Valle (72 deptos)\n• Plaza San Carlos\n• Condominio Los Portales\n• Clínica Santa María\n• Y muchos más...\n\n📸 Ve nuestro portafolio completo en la sección "Proyectos" de la web.'
    },

    // Experiencia
    experiencia: {
      keywords: ['experiencia', 'años', 'trayectoria', 'antigüedad'],
      response: '⭐ RIVAMEZ cuenta con:\n\n• **15+ años** de experiencia\n• **285+ proyectos** completados\n• **98%** de satisfacción del cliente\n• **62+ profesionales** en nuestro equipo\n\n🏅 Certificaciones ISO y reconocimientos nacionales.'
    },

    // Garantía
    garantia: {
      keywords: ['garantía', 'garantia', 'seguro', 'respaldo', 'protección'],
      response: '✅ Ofrecemos:\n\n• Garantía estructural: 10 años\n• Garantía de acabados: 1 año\n• Seguro todo riesgo\n• Post-venta personalizado\n\n🛡️ Tu inversión está 100% protegida.'
    },

    // Financiamiento
    financiamiento: {
      keywords: ['financiamiento', 'financiar', 'crédito', 'credito', 'banco', 'cuotas'],
      response: '💳 Opciones de financiamiento:\n\n• Crédito Mivivienda\n• Financiamiento bancario\n• Planes de pago flexibles\n• Separación con inicial\n\n📋 Te asesoramos con el proceso. ¿Te interesa?'
    },

    // Cobertura
    cobertura: {
      keywords: ['zona', 'región', 'regiones', 'trabajan', 'cobertura', 'junín', 'huancayo'],
      response: '🗺️ Trabajamos en:\n\n• **Huancayo** y toda la provincia\n• **Junín** (toda la región)\n• Zonas aledañas\n\n📍 También evaluamos proyectos en otras regiones.\n\n¿Tu proyecto está en Junín?'
    },

    // Cotización rápida
    cotizacion: {
      keywords: ['cotización', 'cotizacion', 'solicitar presupuesto', 'quiero presupuesto'],
      response: '📋 ¡Perfecto! Para una cotización necesito:\n\n1. Tipo de proyecto (casa, depto, local)\n2. Área aproximada (m²)\n3. Ubicación\n4. Tus datos de contacto\n\n🚀 **Opción rápida**: Contáctanos por WhatsApp al +51 943 818 788 y te respondemos en 24h.\n\n¿Prefieres WhatsApp?'
    },

    // Saludo
    saludo: {
      keywords: ['hola', 'buenos días', 'buenas tardes', 'buenas noches', 'hey', 'que tal'],
      response: '👋 ¡Hola! Bienvenido a RIVAMEZ.\n\nSomos expertos en construcción con 15+ años de experiencia.\n\n¿En qué puedo ayudarte hoy?\n\n💡 Puedes preguntarme sobre:\n• Servicios\n• Precios\n• Tiempos\n• Proyectos\n• Contacto'
    },

    // Agradecimiento
    gracias: {
      keywords: ['gracias', 'graciass', 'thank', 'agradezco'],
      response: '😊 ¡De nada! Es un placer ayudarte.\n\n¿Hay algo más en lo que pueda asistirte?\n\nSi necesitas hablar con un asesor, contáctanos:\n📞 +51 943 818 788'
    },

    // Default - No entiendo
    default: {
      response: '🤔 No estoy seguro de entender tu pregunta.\n\n💡 Puedo ayudarte con:\n\n• **Servicios**: ¿Qué ofrecemos?\n• **Precios**: ¿Cuánto cuesta?\n• **Tiempos**: ¿Cuánto demora?\n• **Contacto**: ¿Cómo comunicarnos?\n• **Proyectos**: Ver trabajos anteriores\n\n¿O prefieres hablar con un asesor? 👉 +51 943 818 788'
    }
  };

  // Quick replies - Botones de respuesta rápida
  const quickReplies = [
    { text: '💰 Precios', query: 'cuanto cuesta' },
    { text: '🏗️ Servicios', query: 'que servicios ofrecen' },
    { text: '⏱️ Tiempos', query: 'cuanto demora' },
    { text: '📞 Contacto', query: 'contacto' },
  ];

  // Función para encontrar respuesta
  const findResponse = (userInput) => {
    const input = userInput.toLowerCase().trim();

    // Buscar en la base de conocimiento
    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (key === 'default') continue;
      
      const matched = data.keywords.some(keyword => input.includes(keyword));
      if (matched) {
        return data.response;
      }
    }

    // Si no encuentra respuesta, devuelve default
    return knowledgeBase.default.response;
  };

  // Manejar envío de mensaje
  const handleSendMessage = (text = inputText) => {
    if (!text.trim()) return;

    const userMessage = {
      type: 'user',
      text: text,
      time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simular tiempo de "pensamiento" del bot
    setTimeout(() => {
      const botResponse = findResponse(text);
      const botMessage = {
        type: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  // Manejar quick reply click
  const handleQuickReply = (query) => {
    handleSendMessage(query);
  };

  return (
    <>
      {/* Botón flotante */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-rivamez-cyan to-rivamez-navy rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-rivamez-cyan/50 transition-all duration-300"
            aria-label="Abrir chat"
          >
            <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            {/* Notificación pulsante */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Ventana de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-2rem)] max-w-[380px] h-[600px] max-h-[calc(100vh-5rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Asistente RIVAMEZ</h3>
                  <p className="text-xs text-white/80">En línea</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Cerrar chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-rivamez-cyan to-rivamez-navy text-white rounded-br-sm'
                        : 'bg-white text-gray-800 shadow-md rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {message.time}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-md rounded-bl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 bg-white border-t">
                <p className="text-xs text-gray-600 mb-2">Preguntas rápidas:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply.query)}
                      className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-rivamez-cyan/10 text-gray-700 rounded-full transition-colors border border-gray-200 hover:border-rivamez-cyan"
                    >
                      {reply.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input area */}
            <div className="p-4 bg-white border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-full focus:border-rivamez-cyan focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="w-10 h-10 bg-gradient-to-r from-rivamez-cyan to-rivamez-navy text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Enviar mensaje"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
              <p className="text-xs text-gray-500 text-center mt-2">
                Powered by RIVAMEZ IA
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
