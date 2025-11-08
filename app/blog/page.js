// app/blog/page.js
'use client';

import Navbar from '@/components/NavbarNew';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BlogList from '@/components/BlogList';

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogList />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
