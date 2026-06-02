/* ============================================
   ✦ VEDAGANITHAM — APP CONSTANTS ✦
   ============================================ */

export const SITE_CONFIG = {
  name: "VedaGanitham",
  tagline: "Vedic Mathematics Learning Platform",
  description:
    "Discover the ancient power of Vedic Mathematics. Simplify calculations, sharpen your mind, and excel in math with our expertly designed courses.",
  url: "https://vedaganitham.com",
  email: "suprajamadhu1215@gmail.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Videos", href: "/videos" },
  { label: "Math Corner", href: "/math-corner" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/#demo-form" },
] as const;

export const WHATSAPP_CONFIG = {
  /** Replace with actual WhatsApp number (with country code, no +) */
  number: "919876543210",
  defaultMessage: "Hi, I am interested in VedaGanitham courses. Can I book a Free Demo?",
} as const;

export const COURSE_TIERS = [
  {
    id: "basic",
    title: "Basic Level",
    subtitle: "Introduction to Vedic Math",
    description: "Foundation of Vedic Mathematics for beginners and young learners. Learn to simplify calculations and build confidence.",
    icon: "📐",
    color: "from-accent to-accent-dark",
    ageGroup: "Age 9+",
    duration: "12 Sessions",
    highlights: [
      { title: "Complement Addition", description: "Master rapid addition techniques using the complement method to significantly boost your calculation speed." },
      { title: "Vinculum Subtraction", description: "Learn the powerful Vinculum method to convert difficult subtraction problems into easy additions." },
      { title: "Subtraction", description: "Discover Vedic shortcuts for flawless and lightning-fast subtraction without borrowing." },
      { title: "Base Multiplication", description: "Perform complex multiplications instantly by relating numbers to bases like 10, 100, and 1000." },
      { title: "Multiplication with 11, 111 and its multiples", description: "Learn the special pattern rules for multiplying any number by 11, 111 and their multiples in seconds." },
      { title: "Multiplication with 12, 13, ... 19", description: "Use the 'teen' numbers trick to calculate products mentally without writing down intermediate steps." },
      { title: "Multiplication with 112, 113, ... 119", description: "Extend the base techniques to tackle 3-digit multiplication smoothly." },
      { title: "2 to 3 Digit Tables", description: "Learn how to instantly generate and memorize multiplication tables for 2 and 3-digit numbers mentally." }
    ],
  },
  {
    id: "intermediate",
    title: "Intermediate",
    subtitle: "Speed and Accuracy",
    description: "Build speed and accuracy with advanced Vedic techniques. Turn complex problems into simpler patterns.",
    icon: "🧮",
    color: "from-[#A8E6CF] to-[#7CB342]",
    ageGroup: "Age 11+",
    duration: "16 Sessions",
    highlights: [
      { title: "Mixed Addition and Subtraction", description: "Solve long chains of addition and subtraction in a single line without confusion." },
      { title: "Multiplication with 9's", description: "Multiply any number by 9, 99, 999, etc., using a simple one-step logical deduction." },
      { title: "Digit Sum", description: "Use the magical digit sum method to verify and check your answers instantly without recalculating." },
      { title: "Base Division", description: "Divide large numbers easily using the base method, finding both quotient and remainder rapidly." },
      { title: "Base Squares", description: "Find the square of numbers near bases (like 98² or 104²) in a fraction of a second." },
      { title: "Square Roots", description: "Calculate perfect and imperfect square roots mentally using straightforward Vedic observation." },
      { title: "Percentages", description: "Compute percentages of any complex number effortlessly using fractional breakdown." },
      { title: "Squaring of Numbers Ending with 5", description: "Master the one-second trick to square any number ending in 5 (e.g., 65², 115²)." },
      { title: "Multiplication of Numbers Ending with 5", description: "Quickly multiply two numbers ending with 5 using specialized sutras." }
    ],
  },
  {
    id: "advanced",
    title: "Advanced",
    subtitle: "Competition Ready",
    description: "Master complex calculations and competition-level problem solving. Ideal for competitive exam aspirants.",
    icon: "🎯",
    color: "from-primary to-primary-hover",
    ageGroup: "Age 14+",
    duration: "20 Sessions",
    highlights: [
      { title: "Multiplication of 4, 5 Digit Numbers", description: "Tackle massive multiplications mentally using the vertically and crosswise method." },
      { title: "Divisibility", description: "Instantly determine the divisibility of large numbers by prime numbers using the osculator method." },
      { title: "Multiplication of 3 Rows Random Numbers", description: "Learn multi-tier multiplication for random numbers without traditional stacking." },
      { title: "Multiplication of 3 Rows Base Method", description: "Apply base methods to multiply three different numbers near a common base simultaneously." },
      { title: "Duplex Method", description: "Master the Duplex (Dwandwa Yoga) method for ultra-fast squaring of any number." },
      { title: "Cubes, Cuberoots", description: "Find cubes and cube roots of large numbers through intuitive pattern recognition." },
      { title: "Calendar Techniques", description: "Mentally calculate the day of the week for any date in history within seconds." },
      { title: "Random Division", description: "Perform complex division for any random divisor effortlessly using the straight division method." }
    ],
  },
  {
    id: "hyper-advanced",
    title: "Hyper Advanced",
    subtitle: "Mathematical Mastery",
    description: "The ultimate frontier of Vedic Mathematics. Dive into algebra and geometry with ancient wisdom.",
    icon: "🚀",
    color: "from-[#4A00E0] to-[#8E2DE2]",
    ageGroup: "Age 16+",
    duration: "24 Sessions",
    highlights: [
      { title: "Algebraic Expressions", description: "Perform addition, subtraction, multiplication, and division of algebraic polynomials rapidly." },
      { title: "Triples and its Types", description: "Master Pythagorean triples and their advanced applications in geometry and trigonometry." },
      { title: "Simple Equations I", description: "Solve linear and simple quadratic equations intuitively using Vedic sutras." },
      { title: "Factorisation", description: "Factorize complex polynomials efficiently without the tedious traditional grouping methods." },
      { title: "Coordinate Geometry", description: "Apply Vedic logic to solve coordinate geometry problems, finding slopes and intersections instantly." }
    ],
  },
  {
    id: "teacher-training",
    title: "Teacher Training",
    subtitle: "Become an Expert",
    description: "Learn to teach Vedic Mathematics professionally. Turn ancient tricks into everyday super-powers for your students.",
    icon: "🎓",
    color: "from-[#FFB3B3] to-[#FF5252]",
    ageGroup: "Adults",
    duration: "24 Sessions",
    highlights: [
      { title: "Comprehensive Vedic Math curriculum", description: "A full end-to-end curriculum encompassing all levels of Vedic mathematics." },
      { title: "Effective teaching methodologies", description: "Learn how to deliver engaging classes and adapt teaching styles for different age groups." },
      { title: "Classroom engagement strategies", description: "Techniques to hold student attention, manage classrooms, and make math fun." },
      { title: "Certification upon completion", description: "Receive a verified certificate allowing you to teach Vedic Mathematics professionally." },
      { title: "Ongoing trainer support", description: "Access a community of teachers and continuous material updates for your classes." }
    ],
  },
] as const;

export const COURSE_FAQS = [
  {
    question: "Who can join this online course?",
    answer: "Our online classes are open to students of age above 9 yrs, including school students, competitive exam aspirants, and anyone interested in improving calculation speed.",
  },
  {
    question: "What is the course duration?",
    answer: "Course duration depends on the selected program (typically ranging from 12 to 24 sessions). Full details are provided before confirmation.",
  },
  {
    question: "Is there a demo or trial class before joining?",
    answer: "Yes, we offer a demo / orientation session so students can understand the teaching style before enrolling.",
  },
  {
    question: "What devices are required to attend classes?",
    answer: "You can attend classes using a mobile phone, tablet, laptop, or desktop with a stable internet connection.",
  },
  {
    question: "Who can I contact for joining-related queries?",
    answer: "You can contact us through the website contact form, phone number, or WhatsApp mentioned on the site.",
  },
  {
    question: "Do students receive a certificate upon completion?",
    answer: "Yes! Students receive a verified certificate of completion after successfully finishing each course level.",
  },
];
