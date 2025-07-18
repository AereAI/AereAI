'use client'

import { useState } from 'react';
import Link from "next/link";
import { Playfair_Display, Inter, Poppins, Montserrat } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500'],
});

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation Bar */}
      <header className="w-full flex items-center justify-between px-8 py-6 bg-transparent absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-red-600 font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Aere</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white text-base">
          <Link href="#" className="hover:text-orange-200 transition">Services</Link>
          <span className="text-white/50">•</span>
          <Link href="#" className="hover:text-orange-200 transition">Solutions</Link>
          <span className="text-white/50">•</span>
          <Link href="#" className="hover:text-orange-200 transition">Pricing</Link>
          <span className="text-white/50">•</span>
          <Link href="#" className="hover:text-orange-200 transition">Support</Link>
        </nav>
        <button className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-red-600 transition">
          Get Started
        </button>
      </header>

      {/* Hero Section with Aere Background Image */}
      <main className="flex-1 relative">
        {/* Aere Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/aere orange.jpg')" }}
        ></div>
        
        {/* Content Overlay */}
        <div className="relative z-20 min-h-screen">
          {/* Top Left Text */}
          <div className="absolute top-32 left-8 md:left-16 max-w-md">
            <p className={`text-lg text-white/50 ${montserrat.className}`}>
              From simple chatbots to complex AI workflows, a comprehensive approach to your business automation.
            </p>
          </div>
          
          {/* Bottom Left Text */}
          <div className="absolute bottom-32 left-8 md:left-16 max-w-4xl">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 text-white ${montserrat.className}`}>
              <span className="block text-white/60">Modern AI for</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl">Your Business</span>
            </h1>
          </div>
          
          {/* Faint Vertical Line */}
          <div className="absolute top-0 right-1/4 w-px h-full bg-white/10"></div>
          
          {/* Faint Horizontal Line */}
          <div className="absolute bottom-[22%] left-0 right-0 h-px bg-white/10"></div>
        </div>
      </main>

      {/* Bottom Section */}
      <footer className="w-full px-8 py-6 flex items-center justify-between bg-black/20 backdrop-blur-sm">
        {/* Bottom Left */}
        <div className="text-white/80 text-sm">
          <div>Best AI Solutions</div>
          <div>2025</div>
        </div>

        {/* Bottom Center */}
        <div className="text-white/80 text-sm text-center">
          <div>San Francisco, CA</div>
          <div>17:17:08 GMT-8</div>
        </div>

        {/* Bottom Right - Team Profiles */}
        <div className="flex items-center gap-4">
          <div className="text-white/80 text-sm">Next &gt;</div>
          
          {/* Profile Card 1 */}
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
            <span className="text-white text-xs font-medium">Sarah Chen</span>
          </div>
          
          {/* Profile Card 2 */}
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
            <span className="text-white text-xs font-medium">Mike Torres</span>
          </div>
          
          <div className="text-white/80 text-xs">Advanced AI Technologies</div>
        </div>
      </footer>
    </div>
  );
}