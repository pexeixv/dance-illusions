export const imageKitUrl = import.meta.env.VITE_IMAGEKIT_URL
import { Star, Award, Music, MapPin } from 'lucide-react'
const startYear = 2006
const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - startYear

export enum PhaseEnum {
  BATCH_ONGOING = 'BATCH_ONGOING',
  ADMISSIONS_OPEN = 'ADMISSIONS_OPEN',
  COMING_SOON = 'COMING_SOON',
  BREAK = 'BREAK',
}

export const phase = PhaseEnum.BATCH_ONGOING

export const phaseConfig = {
  [PhaseEnum.BATCH_ONGOING]: {
    label: 'Classes Running',
    resumeDate: null,
    nextBatchDate: null,
    showSchedule: true,
    showUpcomingClasses: true,
    showPopup: true,
    // CTA Section
    cta: {
      heading: 'Ready to take your first step?',
      description:
        "Join Goa's most prestigious dance academy today. Whether you're a beginner or an advanced dancer, we have the perfect class for you.",
      primaryButton: { text: 'Call Now', href: 'tel:+919823014397' },
      secondaryButton: { text: 'View Schedule', href: '/schedule' },
    },
    // Hero Section
    hero: {
      primaryButton: { text: 'View Schedule', href: '/schedule' },
      secondaryButton: { text: 'Call to Join', href: 'tel:+919823014397' },
    },
    // Upcoming Classes Section
    upcomingClasses: {
      title: 'Upcoming Classes',
      description: null,
    },
    // Popup
    popup: {
      header: 'Upcoming Classes',
      subheader: 'June-July 2026',
      description:
        "As the monsoon rhythms roll in, step into a season of movement and magic with our exciting June-July sessions! Whether you're a beginner taking your very first steps or a dancer looking to sharpen your skills, we've got the perfect class waiting for you.",
      tableLabel: "What's New This Season",
      buttonText: 'Check Full Schedule',
    },
  },
  [PhaseEnum.ADMISSIONS_OPEN]: {
    label: 'Enrollments Open',
    resumeDate: null,
    nextBatchDate: new Date('2026-06-01'),
    showSchedule: true,
    showUpcomingClasses: true,
    showPopup: true,
    // CTA Section
    cta: {
      heading: 'Join our next batch and start dancing!',
      description:
        'Enroll in our new batch starting June 1st. Limited spots available—secure your seat today!',
      primaryButton: { text: 'Call Now', href: 'tel:+919823014397' },
      secondaryButton: { text: 'Enroll Now', href: '/schedule' },
    },
    // Hero Section
    hero: {
      primaryButton: { text: 'Enroll Now', href: '/schedule' },
      secondaryButton: { text: 'Call to Join', href: 'tel:+919823014397' },
    },
    // Upcoming Classes Section
    upcomingClasses: {
      title: 'Enroll in Our Next Batch',
      description: 'Secure your spot in our new batch starting June 1st',
    },
    // Popup
    popup: {
      header: 'Upcoming Classes',
      subheader: 'August-September 2026',
      description:
        "As the monsoon rhythms roll in, step into a season of movement and magic with our exciting August-September sessions! Whether you're a beginner taking your very first steps or a dancer looking to sharpen your skills, we've got the perfect class waiting for you.",
      tableLabel: "What's New This Season",
      buttonText: 'Check Full Schedule',
    },
  },
  [PhaseEnum.COMING_SOON]: {
    label: 'New Batch Coming Soon',
    resumeDate: null,
    nextBatchDate: new Date('2026-06-01'),
    showSchedule: false,
    showUpcomingClasses: true,
    showPopup: true,
    // CTA Section
    cta: {
      heading: 'New batch coming soon!',
      description:
        'Our next batch is launching soon. Register early to get exclusive early bird discounts.',
      primaryButton: { text: 'Call to Register', href: 'tel:+919823014397' },
      secondaryButton: { text: 'Learn More', href: '/dance-forms' },
    },
    // Hero Section
    hero: {
      primaryButton: { text: 'Register Early', href: 'tel:+919823014397' },
      secondaryButton: { text: 'See Coming Soon', href: '/schedule' },
    },
    // Upcoming Classes Section
    upcomingClasses: {
      title: 'Coming Soon',
      description: 'New batch launching soon. Register for early bird discounts!',
    },
    // Popup
    popup: {
      header: 'New Batch Announcement',
      subheader: 'Coming Soon',
      description:
        'Exciting news! Our new batch is launching soon. Register early to get exclusive early bird discounts and secure your spot in our most popular classes.',
      tableLabel: 'Early Bird Benefits',
      buttonText: 'Register Early',
    },
  },
  [PhaseEnum.BREAK]: {
    label: 'Break Between Batches',
    resumeDate: new Date('2026-06-01'),
    nextBatchDate: new Date('2026-06-01'),
    showSchedule: false,
    showUpcomingClasses: false,
    showPopup: false,
    // CTA Section
    cta: {
      heading: 'Classes resume soon. Save your spot!',
      description:
        "We're taking a brief break, but our new batch is coming. Register now to reserve your spot.",
      primaryButton: { text: 'Call to Register', href: 'tel:+919823014397' },
      secondaryButton: { text: 'Learn More', href: '/dance-forms' },
    },
    // Hero Section
    hero: {
      primaryButton: { text: 'Call to Register', href: 'tel:+919823014397' },
      secondaryButton: { text: 'Learn More', href: '/dance-forms' },
    },
    // Upcoming Classes Section
    upcomingClasses: {
      title: null,
      description: null,
    },
    // Popup (hidden)
    popup: {
      header: '',
      subheader: '',
      description: '',
      tableLabel: '',
      buttonText: '',
    },
  },
}

export const features = [
  {
    title: 'Beginner-Friendly Classes',
    description:
      'Our classes are designed so anyone can start dancing, even with no prior experience.',
    icon: Star,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: `${yearsOfExperience} Years of Experience`,
    description: `Learn ballroom and Latin dance from instructors with ${yearsOfExperience} years of teaching and competition experience.`,
    icon: Award,
    color: 'from-cyan-500 to-sky-500',
  },
  {
    title: 'Multiple Dance Styles',
    description:
      'Explore a wide range of dances including Waltz, Tango, Salsa, Bachata, Cha Cha and more.',
    icon: Music,
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Classes Across Goa',
    description:
      'Attend classes at multiple locations across Goa including Vasco, Margao (Fatorda), and Porvorim.',
    icon: MapPin,
    color: 'from-amber-500 to-orange-500',
  },
]

export const danceCategories = [
  {
    title: 'Latin',
    dances: ['Rumba', 'Cha Cha', 'Samba', 'International Jive'],
    image: '/forms/latin.jpeg',
    slug: 'latin',
  },
  {
    title: 'Ballroom',
    dances: ['American Waltz', 'Viennese Waltz', 'Tango', 'Foxtrot'],
    image: '/forms/ballroom.jpeg',
    slug: 'ballroom',
  },
  {
    title: 'Social',
    dances: ['Salsa', 'Bachata', 'Social Jive'],
    image: '/forms/social.jpeg',
    slug: 'social',
  },
]

export const testimonials = [
  {
    name: 'Poonam Tanwar Kochhar',
    text: 'I was born with two left feet, but Dr. Martin and Flossy helped me find my rhythm and now I look forward to every class. Their love, passion, and enthusiasm for dancing rubs off on their students, making the classes so enjoyable.',
    avatar: '',
  },
  {
    name: 'Sumona Gupta',
    text: 'My dance classes with Dr. Martin and Flossy have been absolutely amazing and gratifying. Apart from the classes, the socials are a great way to connect with beautiful people who become good friends.',
    avatar: '',
  },
  {
    name: 'Joswel Da Silva',
    text: 'Dr. Martin and Flossy take a technical approach to teaching, explaining every step, posture, and movement with clarity and purpose, which helps build strong foundations and confidence over time. The atmosphere in class is warm, friendly, and welcoming, with peers cheering each other on and growing together.',
    avatar: '',
  },
  {
    name: 'Sapna Sudan',
    text: 'I would never have known Latin and ballroom dance if not for my decision to join Dance Illusions. It has been two years of training and an amazing journey.',
    avatar: '',
  },
  {
    name: 'Seema Jain',
    text: 'Dr. Martin and Flossy create an environment that is vibrant, fun, and deeply motivating, with each student feeling seen, guided, and encouraged despite the large group. Learning here feels like being part of a big, happy dance family.',
    avatar: '',
  },
  {
    name: 'Bhavin Thakker',
    text: "Dance Illusion isn't just a dance school; it has been a constant through every phase of life. Dr. Martin and Flossy nurture passion and celebrate every small victory, helping students grow not only as dancers but as people.",
    avatar: '',
  },
  {
    name: 'Cliffton Andrade',
    text: "Dr. Martin doesn't just teach dance; he creates confidence through patience, calm guidance, and respect that makes every student feel safe to grow. Learning from him has been more than dance; it has been personal growth.",
    avatar: '',
  },
  {
    name: 'Nidhi Marathe',
    text: "I've been training at Dance Illusions for over two and a half years and it has been amazing. Dr. Martin and Flossy are fantastic teachers who make every class fun, challenging, and inspiring.",
    avatar: '',
  },
  {
    name: 'Lizanne Fernandes',
    text: 'At the Dance Illusions crash course, what truly stood out was how everyone was given equal importance regardless of skill level. The effort, warmth, and professionalism of the entire team was something to be grateful for.',
    avatar: '',
  },
  {
    name: 'Rohan Almeida',
    text: 'Dr. Martin and Flossy are excellent teachers who have created a wonderful community that keeps students coming back for every class. Highly recommended!',
    avatar: '',
  },
  {
    name: 'Anupama Mehra',
    text: 'Learning with Dr. Martin and Flossy is a joy as they start with the basic footwork and build it step by step. There are also many dance forms to learn.',
    avatar: '',
  },
  {
    name: 'Rachel Raposa',
    text: "Dance Illusion is a welcoming, professional, and motivating environment whether you're a beginner or looking to refine your skills. Every class leaves you feeling happier and more confident.",
    avatar: '',
  },
  {
    name: 'Deepti D.',
    text: "Attending Dr. Martin and Flossy's ballroom sessions was a wonderful experience that reignited a passion for dance. Both are extremely patient, understanding, and dedicated teachers who make every student feel comfortable.",
    avatar: '',
  },
  {
    name: 'Asia Gowda',
    text: 'The learning experience at Dance Illusions has been incredible. Highly recommended to join Dance Illusions.',
    avatar: '',
  },
  {
    name: 'Dr. Namrata Ghushar',
    text: 'Dr. Martin and Flossy are patient, skilled, and lovely teachers who create a fun learning atmosphere. Highly recommended.',
    avatar: '',
  },
  {
    name: 'Cedric Lobo',
    text: 'Joining as a complete novice, months later there is a lot more confidence and Dance Illusions feels like a place to keep coming back to. Dr. Martin and Flossy are very welcoming and make sure every student truly learns and has a good experience.',
    avatar: '',
  },
  {
    name: 'Ethan Barreto',
    text: 'Dr. Martin makes learning incredibly easy and his classes are filled with infectious humour and playlists that make your soul soar. Whether you are a seasoned dancer or a beginner, it is not just a dance class; it is an unforgettable experience.',
    avatar: '',
  },
  {
    name: 'Leejoy Pereira',
    text: 'Dance Illusions will always have a special place in my life. There is a lot to learn and take away from the classes attended.',
    avatar: '',
  },
  {
    name: 'Anna Kaarina Costa',
    text: "Having been a student for over 14 years, Martin and Flossy's dedication, encouragement, and attention to detail have made all the difference. They have shaped not only dance skills but confidence too.",
    avatar: '',
  },
  {
    name: 'Loretta Saldanha',
    text: 'Initially hesitant to join, but after the very first session it was clear this was the place to learn dancing. Dr. Martin and Flossy are passionate about both dance and teaching and are simply amazing instructors.',
    avatar: '',
  },
  {
    name: 'Pradnya Desai',
    text: "The ballroom crash course was nothing short of spectacular, with energetic and fun-packed sessions. Dr. Martin and Flossy's patience and passion for the art mean you take away way more than just dance steps.",
    avatar: '',
  },
  {
    name: 'Valencia Afonso',
    text: 'Dr. Martin, Flossy, and the entire team are truly the best, catering to the needs of every dancer and making it a wholesome experience. It leaves you with new confidence and reignites your love for dancing no matter your age.',
    avatar: '',
  },
  {
    name: 'Jude Brito',
    text: 'Dr. Martin and Flossy are amazing instructors whose love for dance is infectious. So grateful for the confidence boost and fun times on the dance floor.',
    avatar: '',
  },
  {
    name: 'Tarun Kumar',
    text: "Starting with zero dance experience, the patient instructors and engaging lessons made it easy to get hooked. The atmosphere is supportive and the studio's dance parties are a blast.",
    avatar: '',
  },
  {
    name: 'Tanuj Kumar Singh',
    text: "The Latin dance classes are the highlight of the week, taught with such enthusiasm and making everyone feel included. The studio's community is so welcoming and the progress has been amazing.",
    avatar: '',
  },
  {
    name: 'Francesca Rego',
    text: 'Dr. Martin and Flossy have created a community of positivity where like-minded people connect, and taking classes with them has been inspiring and super fun. Their passion, dedication, and patience are unmatched.',
    avatar: '',
  },
  {
    name: 'Clinton Rebello',
    text: "Dance Illusions guides you from a complete beginner to doing cool sequences you never thought you could. With Dr. Martin's guidance, every class is a safe, fun experience that throws away all your stress.",
    avatar: '',
  },
  {
    name: 'Brynn Vaz',
    text: "Dr. Martin's passion for dance is truly infectious and his dedication to teaching creates an atmosphere where students not only learn but thrive. His enthusiasm and expertise make each session a joy.",
    avatar: '',
  },
  {
    name: 'Jolton Dcosta',
    text: "Dr. Martin's commitment to his students' growth is commendable, with his enthusiasm and expertise making each session a joy that fosters a love for dance. Highly recommend his classes for an inspiring and enjoyable experience.",
    avatar: '',
  },
  {
    name: 'Wayne Ash Dsouza',
    text: "Joining Dance Illusions means joining a close-knit community and family, where building confidence and mastering complex techniques comes with ease under Dr. Martin's guidance. It has been one of the best personal decisions made.",
    avatar: '',
  },
  {
    name: 'Samrat Kataktalware',
    text: 'After almost 10 years of learning with Dr. Martin and Flossy, the journey from not knowing the names of dance forms to being able to dance most of them has been remarkable. What stands out is their focus on every minute detail, ensuring all students learn in the most technically correct manner.',
    avatar: '',
  },
  {
    name: 'Aditya Chodankar',
    text: 'Dr. Martin and Flossy are the most passionate, dedicated, and warm-hearted dance teachers, helping students progress not only with dance skills but also in becoming expressive and confident on the dance floor. Their classes are super enjoyable with several Latin and ballroom dance forms to explore.',
    avatar: '',
  },
  {
    name: 'Clive Rodrigues',
    text: 'The one-week crash course with Dr. Martin and Flossy was an incredible experience in a welcoming atmosphere where everyone bonded as they learned. Despite being a beginner, it was surprising how quickly the moves were grasped.',
    avatar: '',
  },
  {
    name: "Sienna D'souza",
    text: 'Dance Illusions has been one of the best decisions, with Dr. Martin and Flossy being exceptional dancers and even better instructors who are patient and pay close attention to all their students. Joining DI means being part of a wonderful community that encourages you towards being a better dancer.',
    avatar: '',
  },
  {
    name: 'Richard Valadares',
    text: "Dr. Martin and Flossy genuinely care about their students' learning and don't watch the clock, always happy to give more practice time. They also create a great bond among students, making the class feel like an amazing and comfortable place to be.",
    avatar: '',
  },
  {
    name: "Janet D'souza",
    text: 'Joining Dance Illusions has infused new life and helped discover a new self, with learning becoming so much fun and confidence-boosting. All of this is because of how supportive and encouraging Dr. Martin and Flossy have been.',
    avatar: '',
  },
  {
    name: 'Priyanka Ojha',
    text: 'Joining Dance Illusions has been an amazing time with great learning and new friends made along the way. Dr. Martin and Flossy are a wonderful teacher couple who make it easy for anyone to learn.',
    avatar: '',
  },
  {
    name: 'Alan Pinheiro',
    text: 'With the constant support, guidance, and encouragement from Dance Illusions, there is a feeling of getting better every day. It is a privilege to be a student of Dr. Martin and Flossy.',
    avatar: '',
  },
  {
    name: 'Amruta Hede',
    text: 'Dr. Martin and Flossy give personal attention to every dancer and teach the basics step by step, making it very easy for newcomers to understand. The group energy in class is great.',
    avatar: '',
  },
  {
    name: 'Dylon Moraes',
    text: 'Dance Illusions has transformed the way I dance, covering south, north, and Vasco with daily classes at convenient times and very cost-effective fees. If you are serious about Latin and ballroom dance, there is nothing else in Goa but Dance Illusions.',
    avatar: '',
  },
  {
    name: 'Glen Noronha',
    text: 'Dance Illusions is a really fun space where Dr. Martin and the team give their best. It is a wonderful community to grow with and rejuvenate.',
    avatar: '',
  },
  {
    name: 'Rose Rhea Rebelo',
    text: 'The experience was amazing with so much learned and a great time had. Dr. Martin was fantastic and the atmosphere was filled with fun and energy.',
    avatar: '',
  },
  {
    name: 'Gavin Pereira',
    text: 'Dance Illusions is the number one ballroom and Latin dance school in Goa and probably in India too.',
    avatar: '',
  },
]
export const faqs = [
  {
    question: 'Do I need a partner to join classes?',
    answer:
      "No, you don't need a partner! Many of our students join individually. During classes, we often rotate partners so everyone gets a chance to dance and learn how to lead or follow different people. However, if you do come with a partner and prefer to dance only with them, that's perfectly fine too.",
  },
  {
    question: 'I have never danced before. Can beginners join?',
    answer:
      'Absolutely! Most of our students start as complete beginners. Our Beginner Crash Course and regular beginner classes are specifically designed for those with no prior experience. We break down every move step-by-step to ensure you feel comfortable and confident.',
  },
  {
    question: 'What should I wear to class?',
    answer:
      'For regular classes, wear comfortable clothing that allows you to move freely. For footwear, we recommend shoes with smooth soles (leather or suede) that allow you to turn easily on the floor. Avoid rubber-soled sneakers as they can grip the floor too much and strain your knees. As you progress, you might want to invest in professional dance shoes.',
  },
  {
    question: 'Which dance should I start with?',
    answer:
      'It depends on your personal preference! If you like romantic, slow music, you might enjoy Waltz or Rumba. If you prefer high energy, Cha Cha or Jive might be for you. Our Beginner Crash Course is a great way to try multiple styles (Waltz, Tango, Foxtrot, Cha Cha, and Jive) before deciding which one you want to focus on.',
  },
  {
    question: 'Are there age restrictions?',
    answer:
      'Dance is for everyone! We have students ranging from teenagers to senior citizens. Our classes are open to all age groups, and we ensure a supportive and inclusive environment for everyone.',
  },
  {
    question: 'How long does it take to learn a dance?',
    answer:
      "This varies from person to person, but most students feel comfortable with basic patterns after 8-10 sessions. Mastery takes time and practice, but you'll be able to enjoy yourself on the social dance floor much sooner than you think!",
  },
]
