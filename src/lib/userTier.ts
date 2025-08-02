import { User } from '@clerk/nextjs/server'
import type { UserResource } from '@clerk/types'

export type UserTier = 'free' | 'silver' | 'gold' | 'platinum'

export const getUserTier = (user: User | UserResource | null | undefined): UserTier => {
  if (!user) return 'free'
  
  const tier = user.publicMetadata?.tier as UserTier
  return tier || 'free'
}

export const canAccessTier = (userTier: UserTier, eventTier: UserTier): boolean => {
  const tierHierarchy: Record<UserTier, number> = {
    free: 0,
    silver: 1,
    gold: 2,
    platinum: 3
  }
  
  return tierHierarchy[userTier] >= tierHierarchy[eventTier]
}

export const getTierColor = (tier: UserTier): string => {
  const colors = {
    free: 'bg-gray-100 text-gray-800 border-gray-300',
    silver: 'bg-gray-200 text-gray-900 border-gray-400',
    gold: 'bg-yellow-100 text-yellow-800 border-yellow-400',
    platinum: 'bg-purple-100 text-purple-800 border-purple-400'
  }
  return colors[tier]
}