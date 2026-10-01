import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Feature';
import Groups from '../components/Groups';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import './App.css';

export default function App() {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);

  return (
    <div className="app">
      <Navbar onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Features />
        <Groups onOpenModal={openModal} />
      </main>
      <Footer />
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
