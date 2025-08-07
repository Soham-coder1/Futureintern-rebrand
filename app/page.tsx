'use client';

import { useState, useEffect } from 'react';
import { 
  Zap, 
  Sparkles, 
  Cpu, 
  Shield,
  Menu,
  X,
  ChevronRight,
  Star,
  Play,
  ShoppingBag,
  Heart,
  Search,
  User,
  TrendingUp,
  Award,
  Target,
  Flame
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const products = [
  {
    name: 'Air Max Neural',
    category: 'Running',
    price: '$180',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-cyan-400 via-blue-500 to-purple-600',
    badge: 'AI Enhanced'
  },
  {
    name: 'React Vision',
    category: 'Basketball',
    price: '$220',
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-pink-400 via-red-500 to-orange-600',
    badge: 'Limited Edition'
  },
  {
    name: 'Zoom Future',
    category: 'Training',
    price: '$160',
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-green-400 via-teal-500 to-blue-600',
    badge: 'Bestseller'
  },
  {
    name: 'Metcon AI',
    category: 'CrossFit',
    price: '$200',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-purple-400 via-indigo-500 to-cyan-600',
    badge: 'New'
  }
];

const collections = [
  {
    name: 'Neural Performance',
    description: 'AI-optimized athletic gear for peak performance',
    icon: Cpu,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'Future Sport',
    description: 'Next-generation designs for tomorrow\'s athletes',
    icon: Zap,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    name: 'Digital Elite',
    description: 'Premium collection for digital-native athletes',
    icon: Sparkles,
    image: 'https://images.pexels.com/photos/1556710/pexels-photo-1556710.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-green-500 to-teal-600'
  }
];

const features = [
  {
    icon: Cpu,
    title: 'AI Performance Analytics',
    description: 'Real-time performance tracking and optimization'
  },
  {
    icon: Shield,
    title: 'Advanced Protection',
    description: 'Next-gen materials for maximum durability'
  },
  {
    icon: Zap,
    title: 'Energy Return',
    description: 'Revolutionary energy return technology'
  },
  {
    icon: Target,
    title: 'Precision Fit',
    description: 'AI-powered sizing for perfect fit'
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">Men</a>
              <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">Women</a>
              <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">Kids</a>
              <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">Collections</a>
              <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">Innovation</a>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 text-white/80 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Heart className="w-6 h-6 text-white/80 hover:text-cyan-400 cursor-pointer transition-colors" />
              <ShoppingBag className="w-6 h-6 text-white/80 hover:text-cyan-400 cursor-pointer transition-colors" />
              <User className="w-6 h-6 text-white/80 hover:text-cyan-400 cursor-pointer transition-colors" />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-white/80 hover:text-cyan-400 transition-colors">Men</a>
              <a href="#" className="block text-white/80 hover:text-cyan-400 transition-colors">Women</a>
              <a href="#" className="block text-white/80 hover:text-cyan-400 transition-colors">Kids</a>
              <a href="#" className="block text-white/80 hover:text-cyan-400 transition-colors">Collections</a>
              <a href="#" className="block text-white/80 hover:text-cyan-400 transition-colors">Innovation</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/80">Powered by AI Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                FUTURE
              </span>
              <br />
              <span className="text-white">ATHLETICS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
              Experience the next evolution of athletic performance with AI-powered gear 
              designed for champions who push beyond limits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                Explore Collection
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Innovation
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Product */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full blur-2xl" />
            <img 
              src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hero Product"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 object-cover rounded-2xl"
              style={{
                transform: `translate(-50%, -50%) translateY(${scrollY * -0.2}px)`
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                AI-POWERED
              </span>
              <br />
              PERFORMANCE
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Revolutionary technology meets athletic excellence. Our AI-driven innovations 
              are designed to elevate every aspect of your performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-white/70">
                Discover our latest AI-enhanced athletic gear
              </p>
            </div>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View All
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20`} />
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.badge}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Heart className="w-6 h-6 text-white/80 hover:text-red-400 cursor-pointer transition-colors" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white">{product.name}</h3>
                      <span className="text-lg font-bold text-cyan-400">{product.price}</span>
                    </div>
                    <p className="text-white/60 text-sm mb-4">{product.category}</p>
                    <Button className="w-full bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Collections
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Curated collections designed for every athlete, powered by cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-30`} />
                    <img 
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="mb-4">
                        <collection.icon className="w-8 h-8 text-white mb-4" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{collection.name}</h3>
                      <p className="text-white/80 mb-4">{collection.description}</p>
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/20 w-fit">
                        Explore
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50M+', label: 'Athletes Worldwide', icon: TrendingUp },
              { number: '99%', label: 'Performance Increase', icon: Award },
              { number: '24/7', label: 'AI Optimization', icon: Cpu },
              { number: '500+', label: 'Pro Endorsements', icon: Star }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Flame className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Level Up?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join millions of athletes who trust NEXUS to push their limits and achieve greatness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg rounded-xl">
                Shop Now
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl">
                Find a Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  NEXUS
                </span>
              </div>
              <p className="text-white/60 mb-6">
                Revolutionizing athletics with AI-powered innovation and cutting-edge design.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                  <span className="text-white text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                  <span className="text-white text-sm font-bold">i</span>
                </div>
              </div>
            </div>
            
            {[
              {
                title: 'Products',
                links: ['Men', 'Women', 'Kids', 'New Releases', 'Best Sellers', 'Sale']
              },
              {
                title: 'Support',
                links: ['Size Guide', 'Returns', 'Shipping', 'Contact Us', 'FAQs', 'Live Chat']
              },
              {
                title: 'Company',
                links: ['About Us', 'Careers', 'Press', 'Sustainability', 'Innovation Lab', 'Partnerships']
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 NEXUS Athletics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}