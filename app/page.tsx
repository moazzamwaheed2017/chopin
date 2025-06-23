import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mic, Users, Globe, Phone, Mail, MapPin, ArrowRight, Star, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg shadow-lg border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img src="/chopin-logo.png" alt="Chopin Logo" className="h-10 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#solution" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                How It Works
              </Link>
              <Link href="#features" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Features
              </Link>
              <Link href="#team" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Team
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-indigo-600 font-medium">
                Sign Up
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-purple-600 font-medium">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
              <Star className="w-4 h-4 mr-2" />
              Meet Chopin
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-tight">
              Your platform for making
              <br />
              <span className="text-4xl md:text-6xl">ultra-realistic AI Voice Calls</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Empowering Vietnamese market vendors with voice-first AI technology that transforms how they manage their
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <Zap className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
              <Button
                variant="outline"
                className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Phone Mockup with Enhanced Design */}
          <div className="relative flex justify-center items-center">
            {/* Floating Elements */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative w-96 h-96">
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute bottom-0 left-10 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-25 animate-pulse delay-500"></div>
                <div className="absolute bottom-10 right-0 w-18 h-18 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-20 animate-pulse delay-1500"></div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-3 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 w-80 h-96 shadow-inner">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-black font-semibold">9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-4 h-2 bg-black rounded-sm"></div>
                    <div className="w-4 h-2 bg-black rounded-sm"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 mb-6 border border-indigo-100">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-bold">C</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Chopin's AI</p>
                      <p className="text-gray-500 text-sm">9:41 AM</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Make your vendors happy! 🎉</p>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="w-full p-4 border-2 border-indigo-100 rounded-xl text-center focus:border-indigo-300 focus:outline-none transition-colors"
                  />
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Let's Talk 🎤
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision by Year 3</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                300,000+
              </div>
              <div className="text-gray-600 font-medium">Active Vendors</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                1.5M+
              </div>
              <div className="text-gray-600 font-medium">Monthly Interactions</div>
            </div>
            <div className="text-center bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-600 font-medium">Strategic Partnerships</div>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <div className="text-gray-600 font-medium">Provinces Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-medium mb-6">
                The Challenge
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-8">
                The Problem
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                2.5M+ traditional market vendors in Vietnam operate informally with low digital adoption due to:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/50 rounded-xl p-4 shadow-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700">Low literacy rates limiting technology adoption</span>
                </div>
                <div className="flex items-start space-x-4 bg-white/50 rounded-xl p-4 shadow-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700">No time for learning complex applications</span>
                </div>
                <div className="flex items-start space-x-4 bg-white/50 rounded-xl p-4 shadow-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700">Lack of trust in technology platforms</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-red-100">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-6">
                  2.5M+
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-4">Traditional Market Vendors</div>
                <div className="text-gray-600 text-lg">Operating informally in Vietnam</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-sm font-medium mb-6">
              Our Solution
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-8">
              Chopin AI Agent
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A voice-first, autonomous AI agent tailored for traditional and informal market sellers in Vietnam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-green-800">Task Automation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  Handles product listing, order logging, buyer notifications, and inventory updates
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <span className="text-blue-800">Context-Aware AI</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">Remembers vendor preferences, pricing history, and buyer relationships</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                  <span className="text-purple-800">Seamless Integration</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700">Connects effortlessly with Zalo, Facebook, and offline tools</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                  <span className="text-orange-800">Zero Barriers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700">Works entirely via natural voice conversation—no typing required</p>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-teal-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">1. Seller Speaks</h4>
                <p className="text-gray-600">"Rau muống, 2 bó, 10 nghìn"</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">2. AI Processes</h4>
                <p className="text-gray-600">Transcribes, categorizes, and updates catalog</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">3. Shares & Manages</h4>
                <p className="text-gray-600">Creates links, logs orders, sends reminders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm font-medium mb-6">
              Revenue Model
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent mb-4">
              Business Model
            </h2>
            <p className="text-xl text-gray-600">VoiceFirst Value Stack</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-yellow-800">Core Subscription</CardTitle>
                <CardDescription className="text-orange-700 font-semibold text-lg">$4/month per vendor</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700">Voice product listing, order logs, catalog sharing, reminders</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-orange-800">Premium Tools</CardTitle>
                <CardDescription className="text-red-700 font-semibold text-lg">$6–10/month</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700">Analytics, CRM, smart reorder, advanced automation</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 to-pink-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-red-800">Transaction Fees</CardTitle>
                <CardDescription className="text-pink-700 font-semibold text-lg">1–2% commission</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-red-700">Commission on Zalo/Facebook transactions and fintech referrals</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium mb-6">
              Leadership
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">Experienced leaders in AI and market inclusion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-blue-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-3xl font-bold text-white">MW</span>
                </div>
                <CardTitle className="text-cyan-800">Moazzam Waheed</CardTitle>
                <CardDescription className="text-blue-700 font-semibold">CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-700 text-center">Conversational AI & Market Inclusion Expert</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-3xl font-bold text-white">AR</span>
                </div>
                <CardTitle className="text-blue-800">Anees Ur-Rehman</CardTitle>
                <CardDescription className="text-indigo-700 font-semibold">AI/NLP Lead</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-center">Vietnamese LLM experience and AI development</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-3xl font-bold text-white">TK</span>
                </div>
                <CardTitle className="text-indigo-800">Taufique Khan</CardTitle>
                <CardDescription className="text-purple-700 font-semibold">Partnership Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-700 text-center">Vendor onboarding and partnership development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600">Let's help Vietnam's vendors delegate their work—just by talking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pink-800 mb-4">Address</h3>
              <p className="text-pink-700">
                271 BMCHS Rd. 18
                <br />
                Karachi, Pakistan
              </p>
            </div>

            <div className="text-center bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Email</h3>
              <p className="text-purple-700">moazzamwaheed@gmail.com</p>
            </div>

            <div className="text-center bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">Phone</h3>
              <p className="text-indigo-700">+923346250250</p>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <img src="/chopin-logo.png" alt="Chopin" className="h-12 w-auto" />
            </div>
            <div className="text-purple-200 text-center md:text-right">
              <p className="text-lg font-medium">© 2024 Chopin</p>
              <p className="text-sm opacity-80">Built for inclusion. Powered by conversation.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
