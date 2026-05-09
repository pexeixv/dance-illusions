# Type Safety & Enums Guide for Dance Illusions

This document outlines the type safety system implemented in the Dance Illusions project.

## Overview

The project uses a centralized type system with TypeScript enums to ensure type safety across all data and components. This prevents runtime errors and provides better IDE autocomplete and type checking.

## Core Type Files

### 1. **`src/types/index.ts`** - Main Types & Enums

This file contains all core enums and interfaces used throughout the application.

#### Enums

```typescript
// Dance Categories
enum DanceCategoryType {
  LATIN = 'Latin',
  BALLROOM = 'Ballroom',
  SOCIAL = 'Social',
}

// Dance Difficulty Levels
enum DanceLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  ALL_LEVELS = 'All Levels',
}

// Days of the Week
enum DayOfWeek {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

// Location Names
enum LocationName {
  MARGAO = 'Margao',
  PORVORIM = 'Porvorim',
  VASCO = 'Vasco',
}
```

#### Interfaces

```typescript
interface DanceForm {
  slug: string
  title: string
  category: DanceCategoryType // Uses enum instead of string literal
  description: string
  fullDescription: string
  videoUrl: string
  image: string
}

interface ScheduleItem {
  day: DayOfWeek // Uses enum
  location: LocationName // Uses enum
  time: string
  level: DanceLevel[] // Array of enums
  dance: string
}

interface Location {
  name: LocationName
  venue: string
  address: string
  image: string
  mapUrl: string
  googleMapsUrl: string
  schedule: string
}
```

### 2. **`src/utils/styling.ts`** - Style Utility Functions

Contains helper functions for consistent styling based on enum values:

```typescript
function getLevelColorClass(level: DanceLevel): string {
  // Maps DanceLevel enum values to Tailwind CSS classes
  // Ensures consistent styling across all components
}
```

## Data Files

### **`src/data/danceForms.ts`**

```typescript
import { DanceForm, DanceCategoryType } from '@/types'

export const danceForms: DanceForm[] = [
  {
    slug: 'rumba',
    title: 'Rumba',
    category: DanceCategoryType.LATIN, // ✓ Type-safe
    description: '...',
    // ...
  },
]
```

### **`src/config.ts`**

```typescript
import type { Feature, Testimonial, FAQ, DanceCategory } from '@/types'
import { DanceCategoryType } from '@/types'

export const features: Feature[] = [...]
export const danceCategories: DanceCategory[] = [
  {
    title: DanceCategoryType.LATIN,     // ✓ Type-safe
    dances: [...],
    image: '...',
    slug: 'latin',
  },
]
export const testimonials: Testimonial[] = [...]
export const faqs: FAQ[] = [...]
```

## Component Usage Examples

### Schedule Component

```typescript
import { DanceLevel, DayOfWeek, LocationName } from '@/types'
import { getLevelColorClass } from '@/utils/styling'

// Type-safe enum usage in data
const currentSchedule: ScheduleItem[] = [
  {
    day: DayOfWeek.MONDAY,              // ✓ Autocomplete available
    location: LocationName.MARGAO,      // ✓ Type-checked
    time: '7:00 PM - 9:00 PM',
    level: [DanceLevel.BEGINNER, DanceLevel.INTERMEDIATE],  // ✓ Type-safe array
    dance: 'Rumba',
  },
]

// Usage in rendering
function renderLevel(level: DanceLevel) {
  return (
    <span className={getLevelColorClass(level)}>
      {level}
    </span>
  )
}
```

### DanceForms Component

```typescript
import { DanceCategoryType } from '@/types'

interface CategoryInfo {
  category: DanceCategoryType // ✓ Enum type
  icon: LucideIcon
  slug: string
  color: string
}

const categories: CategoryInfo[] = [
  {
    category: DanceCategoryType.LATIN, // ✓ Type-safe
    icon: Music,
    slug: 'latin',
    color: 'text-purple-400',
  },
]

// Type-safe filtering
const filtered = danceForms.filter(
  (dance) => dance.category === category.category // ✓ Enum comparison
)
```

## TypeScript Configuration

The project has strict type checking enabled in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## Best Practices

### ✓ DO

1. **Use Enums for Fixed Values**

   ```typescript
   // ✓ Good
   const level: DanceLevel = DanceLevel.BEGINNER
   ```

2. **Type Function Parameters**

   ```typescript
   // ✓ Good
   function getLevelColor(level: DanceLevel): string {
     // ...
   }
   ```

3. **Use Type Annotations for Arrays**

   ```typescript
   // ✓ Good
   const levels: DanceLevel[] = [DanceLevel.BEGINNER, DanceLevel.INTERMEDIATE]
   ```

4. **Create Interfaces for Complex Objects**

   ```typescript
   // ✓ Good
   interface ScheduleItem {
     day: DayOfWeek
     location: LocationName
     // ...
   }
   ```

5. **Export Types from Centralized Location**
   ```typescript
   // ✓ Good - All in src/types/index.ts
   export type { DanceForm, Location }
   export { DanceCategoryType, DanceLevel }
   ```

### ✗ DON'T

1. **Don't Use String Literals**

   ```typescript
   // ✗ Bad
   const category: string = 'Latin'

   // ✓ Good
   const category: DanceCategoryType = DanceCategoryType.LATIN
   ```

2. **Don't Skip Type Annotations**

   ```typescript
   // ✗ Bad
   function getLevel(level) { ... }

   // ✓ Good
   function getLevel(level: DanceLevel): string { ... }
   ```

3. **Don't Use `any` Type**

   ```typescript
   // ✗ Bad
   const data: any = fetchData()

   // ✓ Good
   const data: ScheduleItem[] = fetchData()
   ```

4. **Don't Mix Enum and String Literals**

   ```typescript
   // ✗ Bad
   const categories = [DanceCategoryType.LATIN, 'Ballroom']

   // ✓ Good
   const categories = [DanceCategoryType.LATIN, DanceCategoryType.BALLROOM]
   ```

## Adding New Enum Values

When adding a new dance category, level, or location:

1. **Add to Enum in `src/types/index.ts`**

   ```typescript
   export enum DanceCategoryType {
     LATIN = 'Latin',
     BALLROOM = 'Ballroom',
     SOCIAL = 'Social',
     NEW_CATEGORY = 'New Category', // Add here
   }
   ```

2. **Update Style Utilities if Needed**

   ```typescript
   // src/utils/styling.ts
   export function getLevelColorClass(level: DanceLevel): string {
     switch (level) {
       case DanceLevel.BEGINNER:
         return 'bg-green-500/20 text-green-400'
       // ... other cases
       case DanceLevel.NEW_LEVEL:
         return 'bg-new-color-500/20 text-new-color-400'
     }
   }
   ```

3. **Update Data Files**
   ```typescript
   // src/config.ts
   export const danceCategories: DanceCategory[] = [
     // ... existing
     {
       title: DanceCategoryType.NEW_CATEGORY, // Use new enum value
       // ... rest of properties
     },
   ]
   ```

## Common Type Patterns

### Array of Specific Enum Values

```typescript
const levels: DanceLevel[] = [DanceLevel.BEGINNER, DanceLevel.INTERMEDIATE]
```

### Union Type with Enum

```typescript
type DanceFormOrId = DanceForm | string // When you need both
```

### Optional Properties

```typescript
interface OptionalLocation extends Location {
  description?: string // Optional
}
```

### Read-Only Properties

```typescript
interface ImmutableDance extends DanceForm {
  readonly slug: string // Cannot be modified
}
```

## Troubleshooting

### "Type 'string' is not assignable to type 'DanceCategoryType'"

**Problem**: Using string literal instead of enum

```typescript
// ✗ Error
const cat: DanceCategoryType = 'Latin'

// ✓ Solution
const cat: DanceCategoryType = DanceCategoryType.LATIN
```

### "Property 'name' does not exist on type 'Location'"

**Problem**: Using old property name

```typescript
// ✗ Error (old code)
location.name

// ✓ Solution (updated types)
location.name // Now properly typed
```

### "No overload matches this call"

**Problem**: Passing wrong type to function

```typescript
// ✗ Error
getLevelColor('Beginner')

// ✓ Solution
getLevelColor(DanceLevel.BEGINNER)
```

## Benefits

1. **Runtime Safety**: Prevents typos and invalid values
2. **IDE Support**: Full autocomplete and documentation
3. **Refactoring**: Safe renaming and modifications
4. **Documentation**: Types serve as inline documentation
5. **Consistency**: Ensures uniform data structure across the app
6. **Maintainability**: Easier to update and extend the codebase

## References

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Enums](https://www.typescriptlang.org/docs/handbook/enums.html)
- [Type Checking Best Practices](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
