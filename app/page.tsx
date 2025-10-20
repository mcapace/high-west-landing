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
              <Image
                src="/logo/highwest_logo.png"
                alt="High West Distillery"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
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
            src="/images/essential/2024-09-10 High West - OND-3543.jpg"
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
            The Spirit of the West
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
              <h2 className="text-4xl font-bold text-dark-teal mb-6">The Spirit of the West</h2>
              <p className="text-lg text-gray-700 mb-6">
                It&apos;s the spirit that inspired us to ambitiously build a world-class 
                distillation facility in the Wasatch Mountains of Utah. It&apos;s the spirit 
                that emboldened us to push the boundaries of what you might call traditional 
                whiskey. It&apos;s the spirit that keeps us with one foot steeped in the 
                traditions of the West while looking toward new horizons.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                High West Whiskey is shaped by the adventurous, frontiering spirit that has 
                come to define this great land, with quality to match. High West Whiskey&apos;s 
                offerings are as vast as the hills where it&apos;s crafted, including our 
                award-winning Bourbon and Double Rye, as well as a host of highly sought-after 
                expressions like Rendezvous and Campfire.
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
                src="/images/essential/2024-09-10 High West - OND-3554.jpg"
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
              <div className="mb-4">
                <Image
                  src="/logo/highwest_logo.png"
                  alt="High West Distillery"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
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
            <p>&copy; 2026 High West Distillery. All rights reserved.</p>
            <p className="mt-2 text-sm">Sip Responsibly. ©2026 High West Distillery, Park City, UT.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
