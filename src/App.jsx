import React from 'react';
import BackgroundAscii from './components/BackgroundAscii';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundAscii />
      <main className="relative z-10">
        <Header />
        <About />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}
