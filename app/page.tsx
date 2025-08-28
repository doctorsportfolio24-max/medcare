"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Shield,
  Users,
  Clock,
  Phone,
  Calendar,
  Brain,
  Baby,
  Bone,
  Activity,
  Microscope,
  Star,
  Award,
  ArrowRight,
  MapPin,
  Mail,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isServicesInView = useInView(servicesRef, { once: true })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced cardiac procedures and treatments.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert neurological care for brain, spine, and nervous system disorders.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&crop=center",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized medical care for infants, children, and adolescents.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&crop=center",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Advanced treatment for bone, joint, and musculoskeletal conditions.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Activity,
      title: "Emergency Care",
      description: "24/7 emergency services with rapid response and critical care.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop&crop=center",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Microscope,
      title: "Laboratory",
      description: "State-of-the-art diagnostic testing and pathology services.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop&crop=center",
      color: "from-teal-500 to-blue-500",
    },
  ]

  const stats = [
    { number: "25+", label: "Years of Excellence", icon: Award },
    { number: "150+", label: "Expert Doctors", icon: Users },
    { number: "50,000+", label: "Patients Treated", icon: Heart },
    { number: "24/7", label: "Emergency Care", icon: Clock },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      y: -12,
      scale: 1.03,
      rotateX: 5,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-20 lg:py-32 overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              rotate: [360, 180, 0],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div className="absolute top-20 left-20 text-primary/10" animate={floatingAnimation}>
            <Heart className="w-16 h-16" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-20 text-secondary/10"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 2 },
            }}
          >
            <Shield className="w-20 h-20" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div className="space-y-6" variants={itemVariants}>
                <motion.h1
                  className="font-serif font-bold text-5xl lg:text-7xl text-foreground leading-tight"
                  variants={itemVariants}
                >
                  Caring Beyond{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    Excellence
                  </motion.span>
                </motion.h1>
                <motion.p className="text-xl text-muted-foreground leading-relaxed max-w-xl" variants={itemVariants}>
                  At MedCare Hospital, we provide comprehensive healthcare services with compassion, expertise, and
                  cutting-edge medical technology. Your health and well-being are our top priorities.
                </motion.p>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  >
                    <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Book Appointment
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border-2 hover:bg-primary/5 hover:border-primary transition-all duration-500 group"
                  >
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Emergency: (555) 123-4567
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8" variants={containerVariants}>
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={index}
                      className="text-center group cursor-pointer"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 shadow-lg group-hover:shadow-xl"
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      <motion.div
                        className="font-serif font-bold text-4xl text-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop&crop=center"
                alt="Modern Hospital Building"
                className="rounded-3xl shadow-2xl w-full h-auto relative z-10 hover:shadow-4xl transition-shadow duration-700"
                whileHover={{ rotateY: 5, rotateX: 2 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-border/50 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="font-bold text-lg">4.9/5</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Trusted by 50,000+ patients</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="font-serif font-bold text-4xl lg:text-6xl text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Foundation
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Built on principles of excellence, compassion, and innovation in healthcare
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: Heart,
                title: "Our Mission",
                description:
                  "To provide exceptional healthcare services with compassion, integrity, and excellence, ensuring every patient receives personalized care.",
                gradient: "from-red-500/20 via-pink-500/10 to-red-500/5",
                iconColor: "text-red-500",
                borderColor: "border-red-200",
              },
              {
                icon: Shield,
                title: "Our Vision",
                description:
                  "To be the leading healthcare provider in our community, recognized for innovation, quality care, and positive patient outcomes.",
                gradient: "from-blue-500/20 via-cyan-500/10 to-blue-500/5",
                iconColor: "text-blue-500",
                borderColor: "border-blue-200",
              },
              {
                icon: Users,
                title: "Our Values",
                description:
                  "Compassion, Excellence, Integrity, Innovation, and Respect guide everything we do in serving our patients and community.",
                gradient: "from-green-500/20 via-emerald-500/10 to-green-500/5",
                iconColor: "text-green-500",
                borderColor: "border-green-200",
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -15,
                    scale: 1.02,
                    rotateY: 5,
                    transition: { duration: 0.4 },
                  }}
                  className="group"
                >
                  <Card
                    className={`text-center p-8 h-full bg-gradient-to-br ${item.gradient} border-2 ${item.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-opacity-50 backdrop-blur-sm`}
                  >
                    <CardHeader>
                      <motion.div
                        className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500"
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        <IconComponent
                          className={`w-10 h-10 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </motion.div>
                      <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section ref={servicesRef} className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="font-serif font-bold text-4xl lg:text-6xl text-foreground mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Medical Specialties
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive healthcare services delivered by our team of experienced specialists using the latest
              medical technology and treatment methods.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                    rotateY: 8,
                    transition: { duration: 0.4 },
                  }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 bg-background/90 backdrop-blur-sm group-hover:bg-background">
                    <div className="relative h-56 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <motion.div
                        className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl"
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.6 },
                        }}
                        initial={{ rotate: -10, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      >
                        <IconComponent className="w-7 h-7 text-primary" />
                      </motion.div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors duration-500">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                      <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 bg-transparent hover:shadow-lg"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop&crop=center')",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="font-serif font-bold text-4xl lg:text-6xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Experience Quality Healthcare?
            </motion.h2>
            <motion.p
              className="text-xl opacity-90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Schedule your appointment today and take the first step towards better health. Our team is here to provide
              you with exceptional medical care.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                >
                  <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Schedule Appointment
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-xl hover:shadow-2xl transition-all duration-500 group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Call Us Now
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-card py-16 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-5 h-5 bg-secondary rounded-full"></div>
                </motion.div>
                <span className="font-serif font-bold text-2xl text-primary">MedCare Hospital</span>
              </motion.div>
              <p className="text-muted-foreground leading-relaxed">
                Providing exceptional healthcare services with compassion and excellence since 1999.
              </p>
              <div className="flex space-x-4">
                {[MapPin, Phone, Mail].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "hsl(var(--primary))",
                      color: "hsl(var(--primary-foreground))",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {[
              {
                title: "Quick Links",
                links: [
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Our Doctors", href: "/doctors" },
                  { name: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Services",
                links: [
                  { name: "Emergency Care", href: "/departments" },
                  { name: "Cardiology", href: "/departments" },
                  { name: "Neurology", href: "/departments" },
                  { name: "Pediatrics", href: "/departments" },
                ],
              },
              {
                title: "Contact Info",
                links: [
                  { name: "(555) 123-4567", href: "tel:5551234567" },
                  { name: "24/7 Emergency", href: "/emergency" },
                  { name: "123 Healthcare Ave", href: "/contact" },
                  { name: "Medical City, MC 12345", href: "/contact" },
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="font-serif font-semibold text-foreground mb-6 text-lg">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-border mt-12 pt-8 text-center text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p>&copy; 2024 MedCare Hospital. All rights reserved. | Privacy Policy | Terms of Service</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
