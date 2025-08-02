'use client'

import { Event } from '@/lib/supabase'
import { getTierColor } from '@/lib/userTier'
import { Calendar, MapPin, Clock, Users, X } from 'lucide-react'
import Image from 'next/image'

interface EventModalProps {
  event: Event
  isOpen: boolean
  onClose: () => void
}

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
  if (!isOpen) return null

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="h-64 relative">
            <Image
              src={event.image_url}
              alt={event.title}
              fill
              className="object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTierColor(event.tier)}`}>
                {event.tier.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-3 text-blue-600" />
              <span>{formatDate(event.event_date)}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-3 text-blue-600" />
              <span>{formatTime(event.event_date)}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-3 text-blue-600" />
              <span>Event Venue - Details provided after registration</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Users className="h-5 w-5 mr-3 text-blue-600" />
              <span>{event.tier.charAt(0).toUpperCase() + event.tier.slice(1)} tier members and above</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About This Event</h3>
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What&apos;s Included</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              {event.tier === 'free' && (
                <ul className="space-y-1 text-gray-700">
                  <li>• General admission</li>
                  <li>• Networking opportunities</li>
                  <li>• Light refreshments</li>
                </ul>
              )}
              {event.tier === 'silver' && (
                <ul className="space-y-1 text-gray-700">
                  <li>• Premium seating</li>
                  <li>• Workshop materials</li>
                  <li>• Lunch included</li>
                  <li>• Certificate of completion</li>
                </ul>
              )}
              {event.tier === 'gold' && (
                <ul className="space-y-1 text-gray-700">
                  <li>• VIP access</li>
                  <li>• Meet &amp; greet with speakers</li>
                  <li>• Premium catering</li>
                  <li>• Exclusive networking session</li>
                  <li>• Swag bag</li>
                </ul>
              )}
              {event.tier === 'platinum' && (
                <ul className="space-y-1 text-gray-700">
                  <li>• Executive seating</li>
                  <li>• Private reception</li>
                  <li>• Gourmet dining experience</li>
                  <li>• One-on-one networking</li>
                  <li>• Premium gift package</li>
                  <li>• Valet parking</li>
                </ul>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Register for Event
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}