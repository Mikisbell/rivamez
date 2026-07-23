/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors: medidos sobre public/images/logo.png (SSOT de la marca).
        // Uso accesible:
        //   navy  (#113572) ~11:1 sobre blanco  -> texto principal, seguro en cualquier tamano
        //   cyan  (#1385BB) ~4.1:1 sobre blanco -> texto GRANDE, iconos, fondos. Evitar texto pequeno
        //   green (#036A31) ~6.5:1 sobre blanco -> texto verde accesible
        //   lime  (#72B244) ~2.4:1 sobre blanco -> SOLO acento grafico (fondos, barras, detalles)
        //                                          y texto sobre fondos oscuros. NUNCA texto sobre claro
        //   gray  (#636365) ~5.9:1 sobre blanco -> tagline y texto secundario de marca
        //
        // SOBRE FONDO OSCURO (navy, dark, degradados azules) la regla se INVIERTE:
        // navy y green quedan invisibles. Se usan blanco o las variantes claras:
        //   cyan.light   (#3FA8D8) ~4.4:1 sobre navy, ~6.6:1 sobre dark -> texto grande e iconos
        //   cyan.lighter (#5BBCE4) ~5.5:1 sobre navy, ~8.3:1 sobre dark -> texto normal
        //   lime         (#72B244) ~4.6:1 sobre navy, ~6.9:1 sobre dark -> el verde de marca en oscuro
        //   lime.light   (#8FCB5E) ~6.1:1 sobre navy, ~9.2:1 sobre dark -> texto normal verde
        rivamez: {
          navy: '#113572',
          cyan: {
            DEFAULT: '#1385BB',
            light: '#3FA8D8',
            lighter: '#5BBCE4',
          },
          green: '#036A31',
          lime: {
            DEFAULT: '#72B244',
            light: '#8FCB5E',
          },
          gray: '#636365',
          dark: '#0F172A',
        },
        // Semantic tokens (cambian según light/dark via CSS variables)
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        muted: {
          DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
          foreground: 'rgb(var(--muted-foreground) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          foreground: 'rgb(var(--surface-foreground) / <alpha-value>)',
        },
        border: 'rgb(var(--border) / <alpha-value>)',
        input: 'rgb(var(--input) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
        },
        success: 'rgb(var(--success) / <alpha-value>)',
        ring: 'rgb(var(--ring) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Escala tipografica fluida (Fase 1): mapea a las CSS vars clamp() de
      // globals.css. Se usan como clases normales: text-fluid-h1, text-fluid-body, etc.
      fontSize: {
        'fluid-hero':  'var(--text-fluid-hero)',
        'fluid-h1':    'var(--text-fluid-h1)',
        'fluid-h2':    'var(--text-fluid-h2)',
        'fluid-h3':    'var(--text-fluid-h3)',
        'fluid-lg':    'var(--text-fluid-lg)',
        'fluid-body':  'var(--text-fluid-body)',
        'fluid-small': 'var(--text-fluid-small)',
      },
      // Espaciado fluido: se usa como py-fluid-section, gap-fluid-gap, mb-fluid-block, etc.
      spacing: {
        'fluid-section': 'var(--space-section)',
        'fluid-block':   'var(--space-block)',
        'fluid-gap':     'var(--space-gap)',
      },
    },
  },
  plugins: [],
};
