'use client'

import { Event } from '@/lib/supabase'
import { getTierColor } from '@/lib/userTier'
import { Calendar, Users } from 'lucide-react'
import Image from 'next/image'

interface EventCardProps {
  event: Event
  canAccess: boolean
  onUpgrade?: () => void
  onViewDetails?: () => void
}

export default function EventCard({ event, canAccess, onUpgrade, onViewDetails }: EventCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${!canAccess ? 'opacity-75' : ''}`}>
      <div className="relative h-48">
        <Image
          src={event.image_url}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTierColor(event.tier)}`}>
            {event.tier.toUpperCase()}
          </span>
        </div>
        {!canAccess && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Upgrade Required</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{formatDate(event.event_date)}</span>
        </div>
        
        {!canAccess ? (
          <button
            onClick={onUpgrade}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Upgrade to {event.tier.charAt(0).toUpperCase() + event.tier.slice(1)}
          </button>
        ) : (
          <button 
            onClick={onViewDetails}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  )
}