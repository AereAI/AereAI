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
    <div className={`flex flex-col min-h-screen ${montserrat.className}`}>
      {/* Header/Navigation Bar */}
              <header className="w-full flex items-center justify-between px-8 py-6 bg-transparent absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-red-600 font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Aere</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white text-base absolute left-1/2 transform -translate-x-1/2">
          <Link href="#" className="hover:text-orange-200 transition">Services</Link>
          <span className="text-white/50">•</span>
          <Link href="#" className="hover:text-orange-200 transition">Solutions</Link>
          <span className="text-white/50">•</span>
          <Link href="#" className="hover:text-orange-200 transition">Pricing</Link>
          <span className="text-white/50">•</span>
          <Link href="#" className="hover:text-orange-200 transition">Support</Link>
        </nav>
        <div className="w-32"></div>
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
          <div className="absolute bottom-[75%] left-0 right-0 h-px bg-white/10"></div>

          {/* Consultation Form - Frosted Glass */}
          <div className="absolute right-8 md:right-8 top-[62%] transform -translate-y-1/2 z-30">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl max-w-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Free Consultation</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">What do you need help with?</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none"
                    placeholder="Brief description of your automation needs..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 shadow-lg"
                >
                  Book Free Consultation
                </button>
              </form>
              
              <p className="text-white/70 text-xs mt-4 text-center">
                No commitment required • 30-minute call
              </p>
            </div>
          </div>
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

      {/* How It Works Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-blue-600 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white rounded-full px-6 py-2 mb-6">
              <span className="text-gray-900 font-semibold">How it works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              3 Easy steps to automate your business
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Tell us what you need, we build it for you, and you start using it immediately. Simple, done-for-you setup that saves you time and money.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tell us what you need</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fill out a simple form or book a call with our team. We'll understand your business needs and design the perfect AI solution.
                </p>
                
                {/* Visual Elements */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Business Owner</div>
                      <div className="text-xs text-gray-500">Fill out form or call</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-900 mb-2">Requirements Form</div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-600">• Email automation</div>
                      <div className="text-xs text-gray-600">• Scheduling system</div>
                      <div className="text-xs text-gray-600">• Customer support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We build it for you</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team creates your custom AI assistant with GPT prompt setup, thorough testing, and integration with your existing tools.
                </p>
                
                {/* Visual Elements */}
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-900 mb-3">Building your AI...</div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-600">GPT Setup</div>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-600">Testing</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-600">Integration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">You start using it</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We provide a complete setup guide and monthly support. Your AI assistant is ready to handle emails, scheduling, and customer inquiries.
                </p>
                
                {/* Visual Elements */}
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium text-gray-900">Your AI Assistant</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-600">✓ Email automation</div>
                      <div className="text-xs text-gray-600">✓ Appointment scheduling</div>
                      <div className="text-xs text-gray-600">✓ Customer support</div>
                    </div>
                    <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                      Start Using
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2 text-center">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900">Your Business</div>
                    <div className="text-xs text-gray-500">Automated & Efficient</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose your right plan!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!
            </p>
          </div>



          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Subscription Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="mb-6">
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Monthly
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Ideal for businesses that want ongoing AI support and maintenance with a lower upfront cost.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">$350</span>
                  <span className="text-gray-600 ml-2">+ $30/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Free OAI subscription</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Monthly consultation/maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Standard model development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Ongoing support & updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Dedicated dashboard access</span>
                </div>
              </div>

              <button className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 transition">
                Get started
              </button>
            </div>

            {/* One Time Plan */}
            <div className="bg-blue-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div className="mb-6">
                <div className="inline-block bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  One Time
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Perfect for businesses that want a custom AI solution without ongoing commitments.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">$500</span>
                  <span className="text-gray-600 ml-2">one time</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Model development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Consultant meetings</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Model delivered</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">No subscriptions required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Optional subscription available</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-700 transition">
                Get started
              </button>
            </div>
          </div>

          {/* Custom Plan Option */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="inline-block bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Custom
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  If these plans don't fit, let's create one that suits. Customize your subscription for a perfect fit, bigger or smaller!
                </p>
                <div className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Talk!
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">Everything in development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">Strategy workshop</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">Priority support</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">Multiple tasks at once</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">Advanced integrations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">Custom development</span>
                  </div>
                </div>
              </div>

              <button className="bg-blue-600 text-white py-3 px-8 rounded-xl font-medium hover:bg-blue-700 transition">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Slogan */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-2xl font-bold">Aere</span>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Smart automation. Done for you.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We build custom AI assistants that handle the busywork, so you can focus on what matters most to your business.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">hello@aere.ai</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition">Services</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition">Solutions</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition">Pricing</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition">Support</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition">Book Consultation</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Aere. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}