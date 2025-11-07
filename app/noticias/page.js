// app/noticias/page.js
'use client';

import Navbar from '@/components/NavbarNew';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import NewsBlog from '@/components/NewsBlog';

export default function NoticiasPage() {
  return (
    <>
      <Navbar />
      <main>
        <NewsBlog />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
