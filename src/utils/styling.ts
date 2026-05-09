/**
 * Utility functions for UI styling based on enum values
 */

import { DanceLevel } from '@/types'

/**
 * Gets Tailwind CSS class names for dance level badges
 */
export function getLevelColorClass(level: DanceLevel): string {
  switch (level) {
    case DanceLevel.BEGINNER:
      return 'bg-green-500/20 text-green-400'
    case DanceLevel.INTERMEDIATE:
      return 'bg-yellow-500/20 text-yellow-400'
    case DanceLevel.ADVANCED:
      return 'bg-red-500/20 text-red-400'
    case DanceLevel.ALL_LEVELS:
      return 'bg-blue-500/20 text-blue-400'
  }
}

/**
 * Gets display text for dance level
 */
export function getLevelDisplayText(level: DanceLevel): string {
  return level
}
