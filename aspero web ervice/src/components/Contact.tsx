import { motion } from 'framer-motion'
import { Mail, Phone, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's start a conversation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative p-8 sm:p-12 rounded-3xl bg-card/50 backdrop-blur-xl border border-border">
            {/* Glass morphism effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
            
            <div className="relative space-y-8">
              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="flex items-center justify-between p-6 rounded-2xl bg-background/50 border border-border hover:border-primary transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a 
                        href="mailto:aspero455@gmail.com"
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        aspero455@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('aspero455@gmail.com', 'email')}
                    className="p-3 rounded-lg hover:bg-primary/10 transition-colors"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="flex items-center justify-between p-6 rounded-2xl bg-background/50 border border-border hover:border-primary transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <a 
                        href="tel:+919752534448"
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        +91 97525 34448
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('+919752534448', 'phone')}
                    className="p-3 rounded-lg hover:bg-primary/10 transition-colors"
                    title="Copy phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    )}
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl opacity-50 blur-3xl -z-10 bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Available for freelance projects and collaborations
          </p>
          <motion.a
            href="mailto:aspero455@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
