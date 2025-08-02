'use client'
/* eslint-disable */

import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Calendar, Users, Star, Shield, Crown, Gem } from 'lucide-react'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Exclusive Event Access
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our tiered membership platform and unlock access to premium events 
            tailored to your interests and professional growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <SignUpButton mode="modal">
              <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                Get Started Free
              </button>
            </SignUpButton>
            <SignInButton mode="modal">
              <button className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-blue-600">
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Curated Events</h3>
            <p className="text-gray-600">Access carefully selected events across various industries and interests.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Networking</h3>
            <p className="text-gray-600">Connect with like-minded professionals and expand your network.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Content</h3>
            <p className="text-gray-600">Unlock exclusive workshops, conferences, and VIP experiences.</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Membership Tiers</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
              <div className="text-center mb-4">
                <Shield className="h-10 w-10 text-gray-500 mx-auto mb-2" />
                <h3 className="text-xl font-semibold text-gray-900">Free</h3>
                <p className="text-gray-600 text-sm">Basic Access</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Community meetups</li>
                <li>• Open events</li>
                <li>• Basic networking</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-400">
              <div className="text-center mb-4">
                <div className="h-10 w-10 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Silver</h3>
                <p className="text-gray-600 text-sm">Professional Growth</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• All Free tier benefits</li>
                <li>• Professional workshops</li>
                <li>• Industry seminars</li>
                <li>• Networking lunches</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-yellow-400">
              <div className="text-center mb-4">
                <Crown className="h-10 w-10 text-yellow-500 mx-auto mb-2" />
                <h3 className="text-xl font-semibold text-gray-900">Gold</h3>
                <p className="text-gray-600 text-sm">Premium Experience</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• All Silver tier benefits</li>
                <li>• Tech conferences</li>
                <li>• VIP product launches</li>
                <li>• Premium networking</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-400">
              <div className="text-center mb-4">
                <Gem className="h-10 w-10 text-purple-500 mx-auto mb-2" />
                <h3 className="text-xl font-semibold text-gray-900">Platinum</h3>
                <p className="text-gray-600 text-sm">Elite Access</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• All Gold tier benefits</li>
                <li>• Executive summits</li>
                <li>• Luxury galas</li>
                <li>• C-level networking</li>
                <li>• Exclusive venues</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of professionals who've elevated their careers through our platform.
          </p>
          <SignUpButton mode="modal">
            <button className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Start Your Free Membership Today
            </button>
          </SignUpButton>
        </div>
      </div>
    </div>
  )
}