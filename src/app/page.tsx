'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { supabase, Event } from '@/lib/supabase'
import { getUserTier, canAccessTier } from '@/lib/userTier'
import Header from '@/components/Header'
import EventCard from '@/components/EventCard'
import LoadingSpinner from '@/components/LoadingSpinner'
import LandingPage from '@/components/LandingPage'
import EventModal from '@/components/EventModal'

export default function Home() {
  const { user, isLoaded } = useUser()
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const userTier = getUserTier(user ?? null)

  useEffect(() => {
    if (user) {
      fetchEvents()
    } else {
      setLoading(false)
    }
  }, [user])

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: true })

      if (error) throw error
      setEvents(data || [])
    } catch (err) {
      setError('Failed to load events')
      console.error('Error fetching events:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleUpgrade = () => {
    alert('Upgrade simulation - In a real app, this would redirect to a payment page')
  }

  const handleViewDetails = (event: Event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  if (!isLoaded) {
    return <LoadingSpinner />
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <LandingPage />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600">
            Discover events tailored to your membership tier. You have {userTier} access.
          </p>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchEvents}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => {
              const hasAccess = canAccessTier(userTier, event.tier)
              return (
                <EventCard
                  key={event.id}
                  event={event}
                  canAccess={hasAccess}
                  onUpgrade={handleUpgrade}
                  onViewDetails={() => handleViewDetails(event)}
                />
              )
            })}
          </div>
        )}

        {events.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500">No events found.</p>
          </div>
        )}
      </main>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  )
}