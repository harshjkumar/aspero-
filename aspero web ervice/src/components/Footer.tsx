import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold font-serif mb-2">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Aspero
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aspero Web Services. All rights reserved.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right space-y-1"
          >
            <p className="text-sm text-muted-foreground">
              <a 
                href="mailto:aspero455@gmail.com"
                className="hover:text-primary transition-colors"
              >
                aspero455@gmail.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              <a 
                href="tel:+919752534448"
                className="hover:text-primary transition-colors"
              >
                +91 97525 34448
              </a>
            </p>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Crafting digital experiences that inspire and convert
        </motion.p>
      </div>
    </footer>
  )
}
