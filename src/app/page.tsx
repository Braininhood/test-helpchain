import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhatWeDo from '../components/WhatWeDo';
import Header from '../components/Header';
import Partners from "../components/Partners";
import Action from '@/components/Action';
import Footer from '@/components/Footer';
import ClientOnly from '@/components/ClientOnly';

export default function Home() {
  return (
    <main>
      <ClientOnly fallback={<div style={{ height: '80px', background: '#487E92' }} />}>
        <Header />
      </ClientOnly>
      <Hero />
      <WhatWeDo />
      <ClientOnly fallback={<div style={{ height: '200px', background: '#f8f9fa' }} />}>
        <HowItWorks />
      </ClientOnly>
      <Partners />
      <Action />
      <Footer />
    </main>
  );
}  


