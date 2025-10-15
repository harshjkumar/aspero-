import { motion } from 'framer-motion'
import { Globe, Palette, Image } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Globe,
    title: 'Web Design',
    description: 'Crafting responsive, modern websites that captivate users and drive conversions. From landing pages to complex web applications.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX'],
  },
  {
    id: 2,
    icon: Palette,
    title: 'Logo Design',
    description: 'Creating memorable brand identities that resonate with your audience and stand the test of time.',
    features: ['Brand Identity', 'Multiple Concepts', 'Vector Files', 'Full Ownership'],
  },
  {
    id: 3,
    icon: Image,
    title: 'Banner Design',
    description: 'Eye-catching banners for digital marketing, social media, and advertising campaigns that convert.',
    features: ['Social Media', 'Ad Campaigns', 'Print Ready', 'Multiple Formats'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions to elevate your brand and captivate your audience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
