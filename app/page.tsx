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
        style={{ backgroundImage: "url('/images/aere blue.jpg')" }}
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
          <div className="absolute bottom-[27%] left-0 right-0 h-px bg-white/10"></div>
        </div>
      </main>

      {/* Use Cases Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">PRODUCT OFFERINGS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose your use case.
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
              Level with Aere.
            </h3>
          </div>

          {/* Use Case Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1: Email Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Auto-respond to inquiries, schedule appointments, and handle customer service emails with intelligent AI responses.
              </p>
            </div>

            {/* Card 2: Document Processing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Document Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Summarize legal documents, extract key information, and prepare client-ready responses with AI-powered analysis.
              </p>
            </div>

            {/* Card 3: Lead Qualification */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Qualification</h3>
              <p className="text-gray-600 leading-relaxed">
                Qualify leads, handle property inquiries, and manage listings with intelligent conversation flows and data collection.
              </p>
            </div>
          </div>

          {/* Connecting Lines and Central Element */}
          <div className="relative flex justify-center mb-16">
            <div className="flex items-center gap-8">
              <div className="w-32 h-0.5 bg-blue-300 border-dashed border-blue-300"></div>
              <div className="bg-white rounded-xl p-4 border-2 border-blue-600 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-blue-600 font-semibold text-lg">Aere</span>
                </div>
              </div>
              <div className="w-32 h-0.5 bg-blue-300 border-dashed border-blue-300"></div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Unified AI Platform</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Aere unifies customer interactions, business data, and AI capabilities to create powerful automation solutions across your entire business workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <footer className="w-full px-8 py-6 flex items-center justify-between bg-black/20 backdrop-blur-sm">
        {/* Bottom Left */}
        <div className="text-white/80 text-sm">
          <div>Best Wrapper Solutions</div>
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
          
          <div className="text-white/80 text-xs">Advanced Wrapper Technologies</div>
        </div>
      </footer>
    </div>
  );
}