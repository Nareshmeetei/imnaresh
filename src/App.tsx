import ContactForm from './components/ContactForm';
import GrowthGuarantee from './components/GrowthGuarantee';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Services />
      <GrowthGuarantee />
      <Testimonials />
      <ContactForm />
      <Toaster />
    </main>
  );
}