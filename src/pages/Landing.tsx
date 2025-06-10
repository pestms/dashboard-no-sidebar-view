import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, FileText, BarChart3, Clock, TrendingUp, Database, Zap, Star, ArrowRight, CheckCircle, Phone, Calendar, Award, Facebook, Twitter, Linkedin, Instagram, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Lead Capture & Tracking",
      description: "Automatically capture leads from multiple sources and track their journey from inquiry to conversion.",
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50"
    },
    {
      icon: FileText,
      title: "Instant Quotation Generation",
      description: "Create professional quotes in minutes with our intelligent pricing engine and customizable templates.",
      gradient: "from-green-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50"
    },
    {
      icon: Clock,
      title: "Automated Follow-ups",
      description: "Never miss a follow-up with automated reminders and scheduled communications.",
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50"
    },
    {
      icon: BarChart3,
      title: "Customer Database & Analytics",
      description: "Comprehensive customer profiles with detailed analytics and performance insights.",
      gradient: "from-indigo-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Reduce Lead Leakage",
      description: "Capture and track every lead to prevent potential customers from slipping through the cracks.",
      stat: "35% increase in lead capture",
      gradient: "from-emerald-500 to-green-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50"
    },
    {
      icon: Database,
      title: "Increase Conversion Rates",
      description: "Convert more leads into paying customers with streamlined processes and timely follow-ups.",
      stat: "42% higher conversion rate",
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50"
    },
    {
      icon: Zap,
      title: "Save Admin Time",
      description: "Automate repetitive tasks and focus on what matters most - growing your business.",
      stat: "15 hours saved per week",
      gradient: "from-yellow-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50"
    },
    {
      icon: Shield,
      title: "Built for Pest Control",
      description: "Designed specifically for pest control businesses with industry-specific features and workflows.",
      stat: "500+ pest control companies trust us",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "GreenShield Pest Control",
      quote: "Since using PestGuard CRM, our lead conversion rate increased by 35%. The automated follow-ups are a game-changer!",
      rating: 5,
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "Mike Rodriguez", 
      company: "Urban Pest Solutions",
      quote: "The quotation system saves us hours every week. Professional quotes in minutes, not hours.",
      rating: 5,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Lisa Chen",
      company: "EcoSafe Exterminators", 
      quote: "Finally, a CRM that understands pest control. Our team productivity has never been higher.",
      rating: 5,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const companyLogos = [
    "GreenShield", "BugBusters", "EcoSafe", "PestPro", "CleanSweep", "BugOff", "SafeGuard", "PestAway"
  ];

  const pricingPlans = [
    {
      name: "Annual Plan",
      price: "$49",
      period: "/month billed annually",
      originalPrice: "$59",
      gradient: "from-blue-500 to-purple-600",
      popular: false,
      features: [
        "Unlimited leads tracking",
        "Professional quotations",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "Standard integrations"
      ]
    },
    {
      name: "Lifetime Deal",
      price: "$999",
      period: "one-time payment",
      originalPrice: "$2,999",
      gradient: "from-green-500 to-teal-600",
      popular: true,
      features: [
        "Everything in Annual",
        "Lifetime access",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Team collaboration",
        "API access",
        "White-label options"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      gradient: "from-purple-500 to-pink-600",
      popular: false,
      features: [
        "Everything in Lifetime",
        "Dedicated account manager",
        "Custom development",
        "On-premise deployment",
        "SLA guarantee",
        "Training & onboarding",
        "24/7 phone support"
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Pest Control Companies" },
    { number: "10k+", label: "Leads Managed Monthly" },
    { number: "35%", label: "Average Conversion Increase" },
    { number: "15hrs", label: "Time Saved Per Week" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">PestGuard CRM</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/login')} className="text-gray-700 hover:text-gray-900">
                Log In
              </Button>
              <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white">
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
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  <Award className="w-4 h-4 mr-2" />
                  #1 CRM for Pest Control Businesses
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Grow Your Pest Control Business with 
                  <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"> Smarter Lead Management</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Capture leads, send quotes, convert more clients — all in one dashboard. 
                  Built specifically for pest control businesses.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white text-lg px-8 py-4 hover-scale">
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-green-600 text-green-600 hover:bg-green-50">
                  Start Free Trial
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
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
                <div className="bg-white rounded-2xl p-6 transform -rotate-3 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Lead Dashboard</h3>
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
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in hover-scale">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything You Need to Manage Leads Effectively
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform streamlines your entire lead-to-customer journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group ${feature.bgColor} hover-scale animate-fade-in`}>
                <CardContent className="p-6 space-y-4">
                  <div className={`bg-gradient-to-r ${feature.gradient} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Drive Real Business Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of pest control businesses that have transformed their operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`flex space-x-4 ${benefit.bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in border-0`}>
                <div className={`bg-gradient-to-br ${benefit.gradient} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                  <div className="text-green-600 font-semibold text-sm">{benefit.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Running Company Logos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Trusted by Pest Control Professionals
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about their success
            </p>
          </div>

          {/* Running Company Logos */}
          <div className="mb-12 overflow-hidden">
            <div className="flex animate-[slide_20s_linear_infinite] space-x-8">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-gray-200">
                  <div className="text-gray-600 font-semibold text-sm whitespace-nowrap">{logo}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white hover-scale animate-fade-in">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                  <div className={`h-1 w-full bg-gradient-to-r ${testimonial.gradient} rounded-full`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the plan that fits your business needs and start growing today
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale animate-fade-in relative ${plan.popular ? 'scale-105 z-10' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        {plan.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                        )}
                      </div>
                      <p className="text-gray-600">{plan.period}</p>
                    </div>
                  </div>
                  
                  <div className={`h-1 w-full bg-gradient-to-r ${plan.gradient} rounded-full`}></div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white text-lg py-3`}>
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
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
                <div className="bg-gradient-to-r from-green-600 to-teal-600 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">PestGuard CRM</span>
              </div>
              <p className="text-gray-400">
                The leading CRM platform designed specifically for pest control businesses.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
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
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
        <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white" size="lg">
          Start Free Trial
        </Button>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
