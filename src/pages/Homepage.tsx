import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  ArrowRight, 
  Star,
  CheckCircle,
  Globe,
  Smartphone,
  CreditCard,
  Download,
  Plus,
  TrendingUp,
  Users,
  DollarSign
} from 'lucide-react';

const Homepage = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Instant Transfers",
      description: "Send money globally in seconds with real-time processing and competitive rates.",
      stats: "150+ countries",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Smart Analytics",
      description: "Track your spending patterns with AI-powered insights and budgeting tools.",
      stats: "Real-time insights",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Bank-grade Security",
      description: "Your money is protected with 256-bit encryption and fraud monitoring.",
      stats: "99.9% uptime",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Nomad",
      content: "Fundra has completely changed how I manage money while traveling. The exchange rates are incredible.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Marcus Johnson",
      role: "Freelancer",
      content: "The analytics help me understand my spending better than any other banking app I've used.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Elena Rodriguez",
      role: "Small Business Owner",
      content: "Perfect for international payments. Fast, reliable, and the fees are transparent.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  return (
  <div className="min-h-screen bg-white pt-16">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-black">Fundra</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-600 hover:text-black transition-colors">Personal</a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">Business</a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">Features</a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">Company</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/login"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Log in
              </Link>
              <Link 
                to="/signup"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
  <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4 break-words">
              Money made simpler
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-6 leading-relaxed max-w-xl break-words">
              Send, spend, and save — everything you need to manage your money in one beautiful, secure app.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-full text-md font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download the app</span>
              </button>
              <Link to="/signup" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-colors">Get Started</Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center mt-8 sm:mt-0">
            {/* Main device/card preview - responsive width on small screens */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:w-80 h-auto md:h-96 bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-500">
              <div className="bg-gray-50 rounded-2xl h-full p-4">
                <div className="text-center mb-4">
                  <span className="text-sm text-gray-500">Personal</span>
                  <div className="text-3xl font-bold text-black">€6,012</div>
                </div>
                <div className="bg-white rounded-xl p-3 mb-4 shadow-sm">
                  <span className="text-xs text-gray-500">Accounts</span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Salary</div>
                      <div className="text-xs text-gray-500">Today, 11:28</div>
                    </div>
                  </div>
                  <div className="text-green-600 font-bold">+€2,550</div>
                </div>
              </div>
            </div>

            {/* Decorative floating previews around the main card for visual interest */}
            <div className="hidden sm:block absolute -left-8 top-8 w-36 h-44 bg-white/90 rounded-2xl shadow-md p-3 transform rotate-2">
              <img src={features[0].image} alt="preview" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="hidden sm:block absolute right-6 bottom-6 w-44 h-28 bg-white/90 rounded-2xl shadow-md p-1 transform -rotate-2 overflow-hidden">
              {/* Smiling-person preview image */}
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="happy user" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="hidden md:flex absolute -right-16 top-20 w-44 h-28 bg-white/95 rounded-xl shadow-sm p-3 items-center justify-center text-sm text-gray-700">
              <div className="flex items-center space-x-3">
                {/* emoji flags are compact and widely supported */}
                <div className="text-2xl leading-none">🇺🇸 🇬🇧 🇫🇷 🇩🇪 🇯🇵</div>
                <div className="ml-2 text-left">
                  <div className="font-bold text-sm">150+</div>
                  <div className="text-xs text-gray-600">countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Hero Section */}
  {/* Single unified hero is used above; removed second large hero to simplify layout */}

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Do more with Fundra
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Send money, track spending, and grow your savings all from one central place. Below are our core offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.stats}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 flex-1">{feature.description}</p>
                <div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Explore</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Trusted by millions worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join over 30 million customers who trust Fundra with their money.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-black">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">30M+</div>
              <div className="text-gray-400">Happy customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-gray-400">Countries supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">€8B+</div>
              <div className="text-gray-400">Transferred monthly</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-gray-400">Uptime guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-black">Fundra</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                The future of digital banking, designed for the next generation of financial freedom.
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center space-x-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Download App</span>
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-black mb-4">Company</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-black mb-4">Support</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-black mb-4">Legal</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Fundra. All rights reserved. Fundra is a registered trademark.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;