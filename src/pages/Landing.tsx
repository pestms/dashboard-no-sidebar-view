
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, FileText, BarChart3, Clock, TrendingUp, Database, Zap, Star, ArrowRight, CheckCircle, Search, Send, UserCheck, Phone, Calendar, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Lead Capture & Tracking",
      description: "Automatically capture leads from multiple sources and track their journey from inquiry to conversion."
    },
    {
      icon: FileText,
      title: "Instant Quotation Generation",
      description: "Create professional quotes in minutes with our intelligent pricing engine and customizable templates."
    },
    {
      icon: Clock,
      title: "Automated Follow-ups",
      description: "Never miss a follow-up with automated reminders and scheduled communications."
    },
    {
      icon: BarChart3,
      title: "Customer Database & Analytics",
      description: "Comprehensive customer profiles with detailed analytics and performance insights."
    }
  ];

  const processSteps = [
    {
      step: "1",
      icon: Search,
      title: "Lead Capture",
      description: "Automatically capture leads from your website, phone calls, and referrals in real-time."
    },
    {
      step: "2", 
      icon: FileText,
      title: "Instant Quotes",
      description: "Generate professional quotes instantly with our pest control pricing engine."
    },
    {
      step: "3",
      icon: Send,
      title: "Follow-up",
      description: "Automated follow-up sequences keep prospects engaged until they convert."
    },
    {
      step: "4",
      icon: UserCheck,
      title: "Convert",
      description: "Turn more leads into paying customers with streamlined processes."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Reduce Lead Leakage",
      description: "Capture and track every lead to prevent potential customers from slipping through the cracks.",
      stat: "35% increase in lead capture"
    },
    {
      icon: Database,
      title: "Increase Conversion Rates",
      description: "Convert more leads into paying customers with streamlined processes and timely follow-ups.",
      stat: "42% higher conversion rate"
    },
    {
      icon: Zap,
      title: "Save Admin Time",
      description: "Automate repetitive tasks and focus on what matters most - growing your business.",
      stat: "15 hours saved per week"
    },
    {
      icon: Shield,
      title: "Built for Pest Control",
      description: "Designed specifically for pest control businesses with industry-specific features and workflows.",
      stat: "500+ pest control companies trust us"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "GreenShield Pest Control",
      quote: "Since using PestGuard CRM, our lead conversion rate increased by 35%. The automated follow-ups are a game-changer!",
      rating: 5
    },
    {
      name: "Mike Rodriguez", 
      company: "Urban Pest Solutions",
      quote: "The quotation system saves us hours every week. Professional quotes in minutes, not hours.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "EcoSafe Exterminators", 
      quote: "Finally, a CRM that understands pest control. Our team productivity has never been higher.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Pest Control Companies" },
    { number: "10k+", label: "Leads Managed Monthly" },
    { number: "35%", label: "Average Conversion Increase" },
    { number: "15hrs", label: "Time Saved Per Week" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">PestGuard CRM</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/login')}>
                Log In
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Pest Background */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Pest-themed background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-8 h-8 text-green-600">🐜</div>
          <div className="absolute top-32 right-20 w-6 h-6 text-orange-500">🦗</div>
          <div className="absolute bottom-20 left-1/4 w-7 h-7 text-green-500">🕷️</div>
          <div className="absolute top-48 left-1/3 w-5 h-5 text-yellow-600">🐛</div>
          <div className="absolute bottom-32 right-1/3 w-6 h-6 text-red-500">🦟</div>
          <div className="absolute top-20 right-1/4 w-8 h-8 text-green-700">🪲</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  <Award className="w-4 h-4 mr-2" />
                  #1 CRM for Pest Control Businesses
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Grow Your Pest Control Business with 
                  <span className="text-green-600"> Smarter Lead Management</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Capture leads, send quotes, convert more clients — all in one dashboard. 
                  Built specifically for pest control businesses.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 hover-scale">
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-green-600 text-green-600 hover:bg-green-50">
                  Start Free Trial
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 transform rotate-3 shadow-2xl">
                <div className="bg-card rounded-2xl p-6 transform -rotate-3 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-card-foreground">Lead Dashboard</h3>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                        Live
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 animate-fade-in">
                        <div className="text-sm font-medium text-orange-800">New Lead</div>
                        <div className="text-xs text-orange-600">Residential • Ant Problem</div>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 animate-fade-in">
                        <div className="text-sm font-medium text-blue-800">Quote Sent</div>
                        <div className="text-xs text-blue-600">Commercial • $2,500</div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 animate-fade-in">
                        <div className="text-sm font-medium text-green-800">Converted</div>
                        <div className="text-xs text-green-600">Contract Signed • $1,800</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in hover-scale">
                <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Process Flow */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              How PestGuard CRM Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our simple 4-step process transforms how you manage leads and grow your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group animate-fade-in hover-scale">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors">
                      <step.icon className="w-10 h-10 text-green-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-green-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground">
              Everything You Need to Manage Leads Effectively
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform streamlines your entire lead-to-customer journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-border shadow-lg hover:shadow-xl transition-all duration-300 group bg-background hover-scale animate-fade-in">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Drive Real Business Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join hundreds of pest control businesses that have transformed their operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex space-x-4 bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                  <div className="text-green-600 font-semibold text-sm">{benefit.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground">
              Trusted by Pest Control Professionals
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers have to say about their success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-background hover-scale animate-fade-in">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Start Managing Your Leads Better — Book a Demo Now
            </h2>
            <p className="text-xl text-green-100">
              Join thousands of pest control businesses that have transformed their lead management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 hover-scale">
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4">
                Start Free Trial
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-4 pt-4">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white">Call us: (555) 123-PEST</span>
              <Calendar className="w-5 h-5 text-white ml-6" />
              <span className="text-white">Available 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">PestGuard CRM</span>
              </div>
              <p className="text-gray-400">
                The leading CRM platform designed specifically for pest control businesses.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PestGuard CRM. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 md:hidden z-50">
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
          Start Free Trial
        </Button>
      </div>
    </div>
  );
};

export default Landing;
