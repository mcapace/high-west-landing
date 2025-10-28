'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Award, Sparkles, Menu, X, Star, Shield, Zap, Crown, Gem, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Removed problematic scroll effects

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden">

      {/* Premium Background Effects */}
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-premium opacity-5 pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gold/20 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/logo/highwest_logo.png"
                alt="High West Distillery"
                width={140}
                height={50}
                className="h-12 w-auto filter drop-shadow-lg"
              />
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <a href="#about" className="text-dark-teal hover:text-gold transition-all duration-300 font-sans text-lg relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#products" className="text-dark-teal hover:text-gold transition-all duration-300 font-sans text-lg relative group">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#awards" className="text-dark-teal hover:text-gold transition-all duration-300 font-sans text-lg relative group">
                Awards
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#visit" className="text-dark-teal hover:text-gold transition-all duration-300 font-sans text-lg relative group">
                Visit
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
              <motion.button 
                className="bg-gradient-gold text-white px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-sans font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-dark-teal hover:text-gold transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gold/20"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#about" className="block text-dark-teal hover:text-gold transition-colors">About</a>
              <a href="#products" className="block text-dark-teal hover:text-gold transition-colors">Products</a>
              <a href="#awards" className="block text-dark-teal hover:text-gold transition-colors">Awards</a>
              <a href="#visit" className="block text-dark-teal hover:text-gold transition-colors">Visit</a>
              <button className="w-full bg-gold text-white px-6 py-2 rounded-full hover:bg-gold/90 transition-colors">
                Shop Now
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/essential/2024-09-10 High West - OND-3543.jpg"
            alt="High West Distillery"
            fill
            className="object-cover transition-opacity duration-1000"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-0 animate-fade-in"></div>
          <div className="absolute inset-0 bg-gradient-overlay opacity-0 animate-fade-in" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl font-sans font-bold mb-8 tracking-wide leading-none">
              <span className="block text-white drop-shadow-2xl">
                HIGH WEST
              </span>
            </h1>
          </div>
          
          <div className="mb-12">
            <p className="text-2xl md:text-3xl font-sans font-light tracking-wide leading-relaxed text-gold/90">
              The Spirit of the West
            </p>
            <div className="w-32 h-1 bg-gradient-gold mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-gold text-white px-10 py-4 rounded-full text-lg font-sans font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Discover Our Story
            </button>
            
            <button className="border-2 border-white/50 text-white px-10 py-4 rounded-full text-lg font-sans font-semibold hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm">
              View Products
            </button>
          </div>
        </div>

        
      </section>

      {/* Premium Image Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-dark-teal to-dark-teal/90 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-sans font-bold text-white mb-8">The High West Experience</h2>
            <p className="text-lg font-sans text-gold max-w-3xl mx-auto leading-relaxed">
              Step into our world of exceptional whiskey craftsmanship and discover the artistry behind every bottle.
            </p>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/essential/2024-09-10 High West - OND-3805.jpg",
                title: "Distillery Heritage",
                description: "Where tradition meets innovation in the heart of Utah"
              },
              {
                image: "/images/essential/2024-09-10 High West - OND-3824.jpg", 
                title: "Craftsmanship",
                description: "Every bottle tells a story of dedication and passion"
              },
              {
                image: "/images/essential/2024-09-10 High West - OND-3832.jpg",
                title: "Mountain Spirit",
                description: "Capturing the essence of the Rocky Mountains"
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="relative group overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="relative h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-teal/90 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-sans font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-lg font-sans leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-white via-cream/30 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-sans font-bold text-dark-teal leading-tight tracking-tight">
                  The Spirit of the West
                </h2>
                <div className="w-16 h-1 bg-gradient-gold rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg font-sans text-gray-700 leading-relaxed">
                  It&apos;s the spirit that inspired us to ambitiously build a world-class 
                  distillation facility in the Wasatch Mountains of Utah. It&apos;s the spirit 
                  that emboldened us to push the boundaries of what you might call traditional 
                  whiskey.
                </p>
                <p className="text-lg font-sans text-gray-700 leading-relaxed">
                  High West Whiskey is shaped by the adventurous, frontiering spirit that has 
                  come to define this great land, with quality to match. Our offerings are as 
                  vast as the hills where it&apos;s crafted, including our award-winning Bourbon 
                  and Double Rye.
                </p>
              </div>
              
              <button className="bg-gradient-gold text-white px-8 py-4 rounded-full text-lg font-sans font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Discover Our Story
              </button>
            </div>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/essential/2024-09-10 High West - OND-3673.jpg"
                  alt="High West Distillery Interior"
                  width={600}
                  height={400}
                  className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-teal/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-gold rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-sans font-bold text-dark-teal mb-8">Our Collection</h2>
            <p className="text-lg font-sans text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover our award-winning whiskeys, each crafted with precision and passion 
              in the heart of the Rocky Mountains.
            </p>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rendezvous Rye",
                description: "Award-winning rye whiskey with complex flavors",
                image: "/images/essential/2025-05-21 - High West-Rendezvous-12072.jpg",
                price: "Shop Now"
              },
              {
                name: "Double Rye",
                description: "Bold blend of two rye whiskeys with rich character",
                image: "/images/essential/2025-05-21 - High West-Double Rye-12064.jpg",
                price: "Shop Now"
              },
              {
                name: "Campfire",
                description: "Unique blend of bourbon, rye, and scotch",
                image: "/images/essential/2025-05-21 - High West-Campfire-12068.jpg",
                price: "Shop Now"
              },
              {
                name: "Bourbon",
                description: "Premium bourbon with rich vanilla and oak notes",
                image: "/images/essential/2025-05-21 - High West-Bourbon-12062.jpg",
                price: "Shop Now"
              }
            ].map((product, index) => (
              <div
                key={product.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold text-dark-teal mb-3">{product.name}</h3>
                  <p className="text-gray-700 mb-6 font-sans leading-relaxed">{product.description}</p>
                  <div className="flex justify-center">
                    <button className="bg-gradient-gold text-white px-6 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-sans font-semibold w-full">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Awards Section */}
      <section id="awards" className="py-20 bg-dark-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-sans font-bold mb-8">Award-Winning Excellence</h2>
            <p className="text-xl font-sans text-gold max-w-3xl mx-auto leading-relaxed">
              Our whiskeys have been recognized by the world&apos;s most prestigious spirits competitions.
            </p>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mt-8 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "San Francisco World Spirits Competition", award: "Double Gold" },
              { name: "Whisky Advocate", award: "Top 20 Whiskeys" },
              { name: "Wine Enthusiast", award: "95 Points" },
              { name: "International Wine & Spirit Competition", award: "Gold Medal" }
            ].map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-gold" size={32} />
                </div>
                <h3 className="text-lg font-sans font-semibold mb-2">{award.award}</h3>
                <p className="text-sm font-sans text-gray-300">{award.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/essential/2024-09-10 High West - OND-3560.jpg"
                alt="High West Distillery Tasting Room"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-sans font-bold text-dark-teal mb-6">Visit Our Distillery</h2>
              <p className="text-lg font-sans text-gray-700 mb-6">
                Experience the magic of High West firsthand. Join us for tastings, tours, 
                and an unforgettable journey through the world of craft whiskey.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="text-gold mr-3" size={20} />
                  <span className="text-gray-700 font-sans">703 Park Avenue, Park City, UT 84060</span>
                </div>
                <div className="flex items-center">
                  <Sparkles className="text-gold mr-3" size={20} />
                  <span className="text-gray-700 font-sans">Tastings & Tours Daily</span>
                </div>
              </div>
              <button className="bg-gold text-white px-6 py-3 rounded-full hover:bg-gold/90 transition-colors font-sans font-semibold">
                Plan Your Visit
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-dark-teal to-dark-teal/90 text-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="mb-6">
                <Image
                  src="/logo/highwest_logo.png"
                  alt="High West Distillery"
                  width={180}
                  height={60}
                  className="h-16 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-lg font-sans text-gray-300 leading-relaxed mb-6 max-w-md">
                Crafting exceptional whiskey in the heart of Utah&apos;s Rocky Mountains. 
                Where tradition meets innovation in every bottle.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors cursor-pointer">
                  <span className="text-gold font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors cursor-pointer">
                  <span className="text-gold font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors cursor-pointer">
                  <span className="text-gold font-bold">i</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-sans font-bold mb-6 text-gold">Products</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-gold transition-colors font-sans">Rendezvous Rye</a></li>
                <li><a href="#" className="hover:text-gold transition-colors font-sans">Double Rye</a></li>
                <li><a href="#" className="hover:text-gold transition-colors font-sans">Campfire</a></li>
                <li><a href="#" className="hover:text-gold transition-colors font-sans">Bourbon Collection</a></li>
                <li><a href="#" className="hover:text-gold transition-colors font-sans">Limited Editions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-sans font-bold mb-6 text-gold">Experience</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-gold transition-colors font-sans">Tastings</a></li>
                <li><a href="#" className="hover:text-gold transition-colors font-sans">Distillery Tours</a></li>
                <li><a href="#" className="hover:text-gold transition-colors font-sans">Private Events</a></li>
                <li><a href="#" className="hover:text-gold transition-colors font-sans">Whiskey Education</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p className="font-sans">&copy; 2026 High West Distillery. All rights reserved.</p>
            <p className="mt-2 text-sm font-sans">Sip Responsibly. ©2026 High West Distillery, Park City, UT.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
