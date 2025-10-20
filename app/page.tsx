'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Award, Sparkles, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

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
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-dark-teal">HIGH WEST</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-dark-teal hover:text-gold transition-colors">About</a>
              <a href="#products" className="text-dark-teal hover:text-gold transition-colors">Products</a>
              <a href="#awards" className="text-dark-teal hover:text-gold transition-colors">Awards</a>
              <a href="#visit" className="text-dark-teal hover:text-gold transition-colors">Visit</a>
              <button className="bg-gold text-white px-6 py-2 rounded-full hover:bg-gold/90 transition-colors">
                Shop Now
              </button>
            </div>

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
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="High West Distillery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark-teal/40"></div>
        </motion.div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            HIGH WEST
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gold"
          >
            Crafting Exceptional Whiskey in the Heart of Utah
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gold/90 transition-colors">
              Explore Our Story
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-dark-teal transition-colors">
              Shop Collection
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-dark-teal mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2006 in Park City, Utah, High West Distillery has been crafting 
                exceptional American whiskey with a unique Rocky Mountain character. Our 
                commitment to quality and innovation has made us a leader in the craft 
                distilling movement.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From our flagship Rendezvous Rye to our limited-edition releases, every 
                bottle tells the story of our passion for whiskey and our love for the 
                mountains that inspire us.
              </p>
              <button className="bg-gold text-white px-6 py-3 rounded-full hover:bg-gold/90 transition-colors">
                Learn More
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="High West Distillery Interior"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dark-teal mb-6">Our Collection</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our award-winning whiskeys, each crafted with precision and passion 
              in the heart of the Rocky Mountains.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rendezvous Rye",
                description: "Our flagship rye whiskey, aged in new charred oak barrels",
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                price: "$89.99"
              },
              {
                name: "Double Rye",
                description: "A bold blend of two rye whiskeys with complex flavors",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                price: "$79.99"
              },
              {
                name: "Bourye",
                description: "A unique blend of bourbon and rye, aged to perfection",
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                price: "$99.99"
              }
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
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
                  <h3 className="text-xl font-bold text-dark-teal mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gold">{product.price}</span>
                    <button className="bg-gold text-white px-4 py-2 rounded-full hover:bg-gold/90 transition-colors">
                      Shop Now
                    </button>
                  </div>
                </div>
              </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Award-Winning Excellence</h2>
            <p className="text-xl text-gold max-w-3xl mx-auto">
              Our whiskeys have been recognized by the world&apos;s most prestigious spirits competitions.
            </p>
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
                <h3 className="text-lg font-semibold mb-2">{award.award}</h3>
                <p className="text-sm text-gray-300">{award.name}</p>
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
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
              <h2 className="text-4xl font-bold text-dark-teal mb-6">Visit Our Distillery</h2>
              <p className="text-lg text-gray-700 mb-6">
                Experience the magic of High West firsthand. Join us for tastings, tours, 
                and an unforgettable journey through the world of craft whiskey.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="text-gold mr-3" size={20} />
                  <span className="text-gray-700">703 Park Avenue, Park City, UT 84060</span>
                </div>
                <div className="flex items-center">
                  <Sparkles className="text-gold mr-3" size={20} />
                  <span className="text-gray-700">Tastings & Tours Daily</span>
                </div>
              </div>
              <button className="bg-gold text-white px-6 py-3 rounded-full hover:bg-gold/90 transition-colors">
                Plan Your Visit
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-teal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">HIGH WEST</h3>
              <p className="text-gray-300">
                Crafting exceptional whiskey in the heart of Utah&apos;s Rocky Mountains.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-gold transition-colors">Rendezvous Rye</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Double Rye</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Bourye</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Limited Editions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Visit</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-gold transition-colors">Tastings</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Tours</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Private Parties</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 High West Distillery. All rights reserved.</p>
            <p className="mt-2 text-sm">Sip Responsibly. ©2026 High West Distillery, Park City, UT.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
