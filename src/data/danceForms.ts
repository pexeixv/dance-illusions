export interface DanceForm {
  slug: string
  title: string
  category: 'Latin' | 'Ballroom' | 'Social'
  description: string
  fullDescription: string
  videoUrl: string
  image: string
}

export const danceForms: DanceForm[] = [
  {
    slug: 'rumba',
    title: 'Rumba',
    category: 'Latin',
    description: 'The dance of love. Slow, expressive, and deeply rhythmic.',
    fullDescription:
      'The Rumba is often called the dance of love. Slow, expressive, and deeply rhythmic, it teaches dancers control, timing, and emotional storytelling through movement. It is characterized by its sensual hip movements and romantic character.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/rumba.jpeg',
  },
  {
    slug: 'cha-cha',
    title: 'Cha Cha',
    category: 'Latin',
    description: 'Playful, energetic and rhythmic. Syncopated steps and lively character.',
    fullDescription:
      'Cha Cha is playful, energetic and rhythmic. Known for its syncopated steps and lively character, it is one of the most popular Latin dances worldwide. It is a derivative of the Mambo and has a distinct "one, two, three, cha-cha-cha" rhythm.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/chacha.jpeg',
  },
  {
    slug: 'samba',
    title: 'Samba',
    category: 'Latin',
    description: 'The festive spirit of Brazil. High energy and bouncing rhythm.',
    fullDescription:
      'Samba is the festive spirit of Brazil. High energy and bouncing rhythm, it is a dance of celebration. It is characterized by its rapid steps and swaying hip movements, often performed to the upbeat sounds of Brazilian music.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/samba.jpeg',
  },
  {
    slug: 'international-jive',
    title: 'International Jive',
    category: 'Latin',
    description: 'Fast-paced and energetic. Kicks, flicks, and high-octane fun.',
    fullDescription:
      'International Jive is fast-paced and energetic. Kicks, flicks, and high-octane fun, it is a dance of pure joy. It is a derivative of the swing dances and is known for its fast tempo and athletic movements.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/international-jive.jpeg',
  },
  {
    slug: 'american-waltz',
    title: 'American Waltz',
    category: 'Ballroom',
    description: 'Elegant and graceful. Smooth, flowing movements across the floor.',
    fullDescription:
      'The American Waltz is elegant and graceful. Smooth, flowing movements across the floor, it is a dance of sophistication. It is characterized by its rise and fall movements and its romantic, sweeping character.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/american-waltz.jpeg',
  },
  {
    slug: 'viennese-waltz',
    title: 'Viennese Waltz',
    category: 'Ballroom',
    description: 'Fast and whirling. A classic dance of the European ballrooms.',
    fullDescription:
      'The Viennese Waltz is fast and whirling. A classic dance of the European ballrooms, it is a dance of elegance and speed. It is characterized by its continuous turning movements and its dramatic, sweeping character.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/viennese-waltz.jpeg',
  },
  {
    slug: 'tango',
    title: 'Tango',
    category: 'Ballroom',
    description: 'Passionate and dramatic. Sharp movements and intense connection.',
    fullDescription:
      'The Tango is passionate and dramatic. Sharp movements and intense connection, it is a dance of power and emotion. It is characterized by its staccato movements and its intense, focused character.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/tango.jpeg',
  },
  {
    slug: 'foxtrot',
    title: 'Foxtrot',
    category: 'Ballroom',
    description: 'Smooth and sophisticated. A classic social dance of the big band era.',
    fullDescription:
      'The Foxtrot is smooth and sophisticated. A classic social dance of the big band era, it is a dance of elegance and ease. It is characterized by its long, flowing steps and its relaxed, conversational character.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/foxtrot.jpeg',
  },
  {
    slug: 'salsa',
    title: 'Salsa',
    category: 'Social',
    description: 'Vibrant and rhythmic. Roots in Cuban and Caribbean traditions.',
    fullDescription:
      'Salsa is a vibrant social dance with roots in Cuban and Caribbean traditions. It focuses on rhythm, connection, and improvisation. It is one of the most popular social dances worldwide and is known for its infectious energy.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/salsa.jpeg',
  },
  {
    slug: 'bachata',
    title: 'Bachata',
    category: 'Social',
    description: 'Sensual and melodic. A romantic dance from the Dominican Republic.',
    fullDescription:
      'Bachata is sensual and melodic. A romantic dance from the Dominican Republic, it is a dance of intimacy and connection. It is characterized by its soft hip movements and its romantic, melodic character.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/bachata.jpeg',
  },
  {
    slug: 'social-jive',
    title: 'Social Jive',
    category: 'Social',
    description: 'Fun and accessible. A popular social dance for all occasions.',
    fullDescription:
      'Social Jive is fun and accessible. A popular social dance for all occasions, it is a dance of pure joy. It is a simplified version of the swing dances and is known for its upbeat tempo and easy-to-learn movements.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/social-jive.jpeg',
  },
  {
    slug: 'quickstep',
    title: 'Quickstep',
    category: 'Ballroom',
    description: 'Fast and powerful. A light-hearted dance with hops and skips.',
    fullDescription:
      'Quickstep is a fast and powerful ballroom dance. It is light-hearted and energetic, featuring hops, skips, and rapid footwork. It evolved from the Foxtrot and is known for its joyful, athletic character.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/quickstep.jpeg',
  },
  {
    slug: 'paso-doble',
    title: 'Paso Doble',
    category: 'Latin',
    description: 'The drama of the bullfight. Powerful, sharp, and theatrical.',
    fullDescription:
      'Paso Doble is a theatrical Latin dance that mimics the drama of a Spanish bullfight. The leader represents the matador, and the follower represents the cape. It is characterized by its powerful, sharp movements and proud posture.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/paso-doble.jpeg',
  },
  {
    slug: 'merengue',
    title: 'Merengue',
    category: 'Social',
    description: 'The heartbeat of the Dominican Republic. Simple, rhythmic, and fun.',
    fullDescription:
      'Merengue is the heartbeat of the Dominican Republic. It is a simple, rhythmic dance that is incredibly fun and easy to learn. It is characterized by its marching-like steps and swaying hip movements.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/merengue.jpeg',
  },
  {
    slug: 'kizomba',
    title: 'Kizomba',
    category: 'Social',
    description: 'The African Tango. Smooth, grounded, and deeply connected.',
    fullDescription:
      'Kizomba is often called the African Tango. It is a smooth, grounded dance from Angola that emphasizes a deep connection between partners. It is characterized by its slow, sensual movements and intricate footwork.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/kizomba.jpeg',
  },
]
