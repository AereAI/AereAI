'use client'

import { useState, useEffect } from 'react';
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
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');
  const [isAtTop, setIsAtTop] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if at the very top
      setIsAtTop(currentScrollY < 10);
      
      // Always show nav at the top
      if (currentScrollY < 100) {
        setIsNavVisible(true);
      } else {
        // Hide when scrolling down, show when scrolling up
        setIsNavVisible(currentScrollY < lastScrollY);
      }
      
      // Determine current section based on scroll position
      const sections = ['hero', 'use-cases', 'how-it-works', 'pricing', 'about'];
      let activeSection = 'hero';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            activeSection = sectionId;
            break;
          }
        }
      }
      
      setCurrentSection(activeSection);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    console.log('Button clicked for section:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Element found, scrolling...');
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Element not found:', sectionId);
    }
  };

  return (
    <div className={`flex flex-col min-h-screen ${montserrat.className}`} style={{ scrollBehavior: 'smooth' }}>
      {/* Header/Navigation Bar */}      <header className={`w-full flex items-center justify-between px-8 py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'} ${isAtTop ? 'bg-transparent' : 'bg-white/60 backdrop-blur-sm shadow-sm'}`}>
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded flex items-center justify-center ${isAtTop ? 'bg-white' : 'bg-gray-900'}`}>
            <span className="text-red-600 font-bold text-lg">A</span>
          </div>
          <span className={`text-xl font-bold tracking-tight ${isAtTop ? 'text-white' : 'text-gray-900'}`}>Aere</span>
        </div>
        
        {/* Simple centered navigation */}
        <div className={`hidden md:flex items-center gap-6 text-base ${isAtTop ? 'text-white' : 'text-gray-900'}`}>
          <a 
            href="#use-cases"
            onClick={(e) => {
              e.preventDefault();
              console.log('Use Cases clicked!');
              const element = document.getElementById('use-cases');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`hover:text-blue-600 transition cursor-pointer text-base px-3 py-2 rounded ${isAtTop ? 'text-white hover:text-blue-200' : 'text-gray-900 hover:text-blue-600'}`}
          >
            Use Cases
          </a>
          <span className={isAtTop ? 'text-white/50' : 'text-gray-900/50'}>•</span>
          <a 
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              console.log('How It Works clicked!');
              const element = document.getElementById('how-it-works');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`hover:text-blue-600 transition cursor-pointer text-base px-3 py-2 rounded ${isAtTop ? 'text-white hover:text-blue-200' : 'text-gray-900 hover:text-blue-600'}`}
          >
            How It Works
          </a>
          <span className={isAtTop ? 'text-white/50' : 'text-gray-900/50'}>•</span>
          <a 
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              console.log('Pricing clicked!');
              const element = document.getElementById('pricing');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`hover:text-blue-600 transition cursor-pointer text-base px-3 py-2 rounded ${isAtTop ? 'text-white hover:text-blue-200' : 'text-gray-900 hover:text-blue-600'}`}
          >
            Pricing
          </a>
          <span className={isAtTop ? 'text-white/50' : 'text-gray-900/50'}>•</span>
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              console.log('About clicked!');
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`hover:text-blue-600 transition cursor-pointer text-base px-3 py-2 rounded ${isAtTop ? 'text-white hover:text-blue-200' : 'text-gray-900 hover:text-blue-600'}`}
          >
            About
          </a>
          <span className={isAtTop ? 'text-white/50' : 'text-gray-900/50'}>•</span>
          <button 
            onClick={() => setShowForm(true)}
            className={`font-medium py-2 px-4 rounded transition-all duration-200 ${isAtTop ? 'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:border-white/50' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
          >
            Let's Chat
          </button>
        </div>
        
        <div className="w-32"></div>
      </header>

      {/* Hero Section with Aere Background Image */}
      <main id="hero" className="flex-1 relative">
        {/* Aere Background Image */}
        <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/aere blue 2.jpg')" }}
        ></div>
        
        {/* Content Overlay */}
        <div className="relative z-20 min-h-screen">
          {/* Top Left Text */}
          <div className="absolute top-[10%] left-[10%] md:left-[2%] max-w-md">
            <p className={`text-lg text-white/50 ${montserrat.className}`}>
              From simple chatbots to complex AI workflows, a comprehensive approach to your business automation.
            </p>
          </div>
          
          {/* Bottom Left Text */}
          <div className="absolute bottom-[10%] left-8 md:left-16 max-w-[70%]">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 text-white ${montserrat.className}`}>
              <span className="block text-white/60">Modern AI for</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl">Your Business</span>
            </h1>
          </div>
          
          {/* Faint Vertical Line */}
          <div className="absolute top-0 right-1/4 w-px h-full bg-white/10"></div>
          
          {/* Faint Horizontal Line */}
          <div className="absolute bottom-[75%] left-0 right-0 h-px bg-white/10"></div>
          
                  </div>
        </main>

        {/* Modal Overlay */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4">
            <div className="text-center mb-8">
              <p className="text-white/80 text-lg font-medium">We'll get back to you shortly to schedule a call!</p>
            </div>
            <div className="bg-white/50 backdrop-blur-md rounded-lg p-8 max-w-md w-full shadow-xl animate-in zoom-in-95 duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-extrabold text-xl text-center flex-1">Let's Chat</h3>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-gray-600 hover:text-gray-900 text-2xl"
                >
                  ✕
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full px-3 py-2 bg-white/80 backdrop-blur-sm border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full px-3 py-2 bg-white/80 backdrop-blur-sm border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Company (optional)" 
                    className="w-full px-3 py-2 bg-white/80 backdrop-blur-sm border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                >
                  Get Started
                </button>
              </form>
              <p className="text-gray-600 text-sm mt-4 text-center"></p>
            </div>
          </div>
        )}

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-8" style={{ backgroundImage: "url('/images/clouds.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">PRODUCT OFFERINGS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose your use case
            </h2>
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

          

         
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-8 bg-white">
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white rounded-full px-6 py-2 mb-6 shadow-lg">
              <span className="text-gray-900 font-semibold">How it works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              3 Easy steps to automate your business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
      <section id="pricing" className="py-20 px-8 bg-gradient-to-br from-blue-50 to-white">
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
                  <span className="text-gray-700">Included OpenAI Subscription</span>
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
                  <span className="text-gray-700">Cancel Subscription Anytime</span>
                </div>
              </div>

              <button 
                onClick={() => setShowForm(true)}
                className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 transition"
              >
                Get Started
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

              <button 
                onClick={() => setShowForm(true)}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>


        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-blue-600">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Us
            </h2>
                          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                AI can be overwhelming. We're here to make it simple. We bring the power of AI to your business with personalized support every step of the way.
              </p>
          </div>

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                {/* Photo */}
                <div className="w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="/images/nathan.JPG" 
                    alt="Nathan" 
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 5%' }}
                  />
                </div>
                
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">co-founder</p>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Nathan Padhy</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    A dedicated Electrical Engineering studnet with a background in aiding small businesses, and a passion for AI. 
                  </p>
                  
                                      {/* Social Icons */}
                    <div className="flex gap-3">
                      <a 
                        href="https://www.linkedin.com/in/npadhy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                      >
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                {/* Photo */}
                <div className="w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src="/images/arjun.jpeg" 
                    alt="Arjun" 
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 5%' }}
                  />
                </div>
                
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">co-founder</p>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Arjun Verma</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                   A Computer Science student at UPenn with extensive experience with deep machine learning.
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex gap-3">
                    <a 
                      href="https://www.linkedin.com/in/arjun-verma1/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
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
                  <span className="text-gray-300">NathanPadhy@aereai.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">Cincinnati, OH</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">+1 (513) 760-9945</span>
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