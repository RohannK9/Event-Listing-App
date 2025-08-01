'use client'

import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { getUserTier, getTierColor } from '@/lib/userTier'

export default function Header() {
  const { isSignedIn, user } = useUser()
  const userTier = getUserTier(user)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Event Listing App</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTierColor(userTier)}`}>
                  {userTier.toUpperCase()} Member
                </span>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <div className="flex space-x-2">
                <SignInButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}