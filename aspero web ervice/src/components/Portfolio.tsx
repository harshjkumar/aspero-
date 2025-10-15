import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'
import { useState, useRef } from 'react'

const portfolioItems = [
  {
    id: 1,
    title: 'Icon 4x4',
    category: 'E-Commerce',
    url: 'https://www.icon4x4.com/',
    description: 'Premium automotive parts and accessories e-commerce platform',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 2,
    title: 'Knight Frank India',
    category: 'Real Estate',
    url: 'https://www.knightfrank.co.in/',
    description: 'Leading real estate consultancy and property services',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 3,
    title: 'Zillow',
    category: 'Real Estate',
    url: 'https://www.zillow.com/',
    description: 'Revolutionary real estate marketplace and rental platform',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
    color: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    id: 4,
    title: 'Superlist',
    category: 'Productivity',
    url: 'https://www.superlist.com/',
    description: 'Modern task management and team collaboration tool',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 5,
    title: 'Urban Marketplace',
    category: 'E-Commerce',
    description: 'Modern shopping experience for local artisans and makers',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 6,
    title: 'TechHub Solutions',
    category: 'Technology',
    description: 'Enterprise IT consulting and software development',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 7,
    title: 'FreshBite Delivery',
    category: 'Food & Beverage',
    description: 'Farm-to-table food delivery platform',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80',
    color: 'from-lime-500/20 to-green-500/20',
  },
  {
    id: 8,
    title: 'FitLife Wellness',
    category: 'Health & Fitness',
    description: 'Complete fitness tracking and wellness coaching app',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    color: 'from-rose-500/20 to-pink-500/20',
  },
  {
    id: 9,
    title: 'EduLearn Platform',
    category: 'Education',
    description: 'Interactive online learning and course management system',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    color: 'from-sky-500/20 to-indigo-500/20',
  },
  {
    id: 10,
    title: 'Luxe Properties',
    category: 'Real Estate',
    description: 'High-end luxury property showcase and virtual tours',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    color: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    id: 11,
    title: 'ArtSpace Gallery',
    category: 'Art & Design',
    description: 'Digital art gallery and NFT marketplace',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    color: 'from-fuchsia-500/20 to-purple-500/20',
  },
  {
    id: 12,
    title: 'GreenEarth Initiative',
    category: 'Non-Profit',
    description: 'Environmental awareness and sustainability platform',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    color: 'from-teal-500/20 to-cyan-500/20',
  },
]

const ProjectCard = ({ item, index }: { item: typeof portfolioItems[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
      >
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          animate={{
            backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Sparkle effect */}
        <motion.div
          className="absolute top-4 right-4 z-20"
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.2 : 0,
          }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-5 h-5 text-primary" />
        </motion.div>

        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"
            animate={{
              opacity: isHovered ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="relative p-6" style={{ transform: 'translateZ(50px)' }}>
          <div className="flex items-center justify-between mb-3">
            <motion.span
              className="text-xs font-medium text-primary uppercase tracking-wider px-3 py-1 bg-primary/10 rounded-full"
              animate={{
                x: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {item.category}
            </motion.span>
            {item.url && (
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors z-10"
                animate={{
                  scale: isHovered ? 1.3 : 1,
                  rotate: isHovered ? 15 : 0,
                }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>
          <motion.h3
            className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {item.title}
          </motion.h3>
          <motion.p
            className="text-muted-foreground text-sm"
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {item.description}
          </motion.p>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} blur-2xl`} />
        </motion.div>

        {/* Border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-primary/0 pointer-events-none"
          animate={{
            borderColor: isHovered ? 'rgba(99, 102, 241, 0.5)' : 'rgba(99, 102, 241, 0)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Our Portfolio
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Showcasing excellence in web design, from Fortune 500 companies to innovative startups. 
            <span className="block mt-2 text-primary font-medium">12+ successful projects delivered</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {portfolioItems.map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Projects Delivered', value: '12+' },
            { label: 'Happy Clients', value: '10+' },
            { label: 'Industries Served', value: '8+' },
            { label: 'Success Rate', value: '100%' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
