"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  FileText,
  CreditCard,
  Shield,
  Download,
  User,
  Phone,
  Mail,
  MapPin,
  Heart,
  Brain,
  Activity,
  Stethoscope,
  Pill,
  BookOpen,
  HelpCircle,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react"

export default function PatientResourcesPage() {
  const [selectedService, setSelectedService] = useState("")
  const [appointmentForm, setAppointmentForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    preferredDate: "",
    preferredTime: "",
    reason: "",
    insurance: "",
  })

  const patientServices = [
    {
      id: "portal",
      title: "Patient Portal",
      description: "Access your medical records, test results, and communicate with your healthcare team",
      icon: User,
      features: ["View Test Results", "Message Your Doctor", "Prescription Refills", "Appointment History"],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      id: "appointments",
      title: "Online Scheduling",
      description: "Book, reschedule, or cancel appointments with our easy online system",
      icon: Calendar,
      features: ["24/7 Booking", "Appointment Reminders", "Virtual Consultations", "Same-Day Appointments"],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      id: "billing",
      title: "Billing & Insurance",
      description: "Manage your bills, insurance claims, and payment options",
      icon: CreditCard,
      features: ["Online Bill Pay", "Insurance Verification", "Payment Plans", "Financial Assistance"],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      id: "records",
      title: "Medical Records",
      description: "Request and access your complete medical history and documents",
      icon: FileText,
      features: ["Record Requests", "Digital Downloads", "Transfer Records", "Lab Results"],
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
    },
    {
      id: "pharmacy",
      title: "Pharmacy Services",
      description: "Prescription management and medication information",
      icon: Pill,
      features: ["Prescription Refills", "Medication Reminders", "Drug Interactions", "Pharmacy Locations"],
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-600",
    },
    {
      id: "education",
      title: "Health Education",
      description: "Access health resources, guides, and educational materials",
      icon: BookOpen,
      features: ["Health Articles", "Condition Guides", "Wellness Tips", "Video Resources"],
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
    },
  ]

  const healthResources = [
    {
      category: "Heart Health",
      icon: Heart,
      articles: [
        "Understanding Heart Disease Prevention",
        "Managing High Blood Pressure",
        "Heart-Healthy Diet Guidelines",
        "Exercise for Cardiovascular Health",
      ],
    },
    {
      category: "Brain & Mental Health",
      icon: Brain,
      articles: [
        "Recognizing Signs of Stroke",
        "Mental Health Awareness",
        "Managing Stress and Anxiety",
        "Cognitive Health in Aging",
      ],
    },
    {
      category: "General Wellness",
      icon: Activity,
      articles: [
        "Annual Health Screenings",
        "Vaccination Guidelines",
        "Healthy Lifestyle Habits",
        "Preventive Care Checklist",
      ],
    },
    {
      category: "Chronic Conditions",
      icon: Stethoscope,
      articles: [
        "Living with Diabetes",
        "Managing Arthritis Pain",
        "COPD Care and Management",
        "Cancer Support Resources",
      ],
    },
  ]

  const insuranceProviders = [
    "Blue Cross Blue Shield",
    "Aetna",
    "Cigna",
    "UnitedHealthcare",
    "Medicare",
    "Medicaid",
    "Humana",
    "Kaiser Permanente",
    "Other",
  ]

  const departments = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Oncology",
    "Ophthalmology",
    "ENT",
    "Internal Medicine",
    "General Surgery",
    "Emergency Medicine",
  ]

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle appointment booking logic here
    console.log("Appointment booking:", appointmentForm)
    alert("Appointment request submitted! We'll contact you within 24 hours to confirm.")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-foreground">Patient Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access all the tools and information you need to manage your healthcare journey with ease and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="services" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="services">Patient Services</TabsTrigger>
              <TabsTrigger value="booking">Book Appointment</TabsTrigger>
              <TabsTrigger value="resources">Health Resources</TabsTrigger>
              <TabsTrigger value="support">Support & FAQ</TabsTrigger>
            </TabsList>

            {/* Patient Services Tab */}
            <TabsContent value="services" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif font-bold text-3xl text-foreground">Our Patient Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We provide comprehensive digital services to make your healthcare experience seamless and convenient.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {patientServices.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <Card
                      key={service.id}
                      className={`${service.color} hover:shadow-lg transition-shadow duration-300`}
                    >
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4`}>
                          <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                        </div>
                        <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full">Access Service</Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Quick Actions */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="font-serif font-bold text-2xl text-center mb-6">Quick Actions</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 bg-transparent">
                    <Download className="w-6 h-6" />
                    <span>Download Forms</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 bg-transparent">
                    <Shield className="w-6 h-6" />
                    <span>Insurance Info</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 bg-transparent">
                    <Phone className="w-6 h-6" />
                    <span>Contact Us</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 bg-transparent">
                    <MapPin className="w-6 h-6" />
                    <span>Locations</span>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Appointment Booking Tab */}
            <TabsContent value="booking" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif font-bold text-3xl text-foreground">Book an Appointment</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Schedule your appointment online 24/7. We'll confirm your booking within 24 hours.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">Appointment Request Form</CardTitle>
                    <CardDescription>
                      Please fill out the form below and we'll contact you to confirm your appointment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name *</label>
                          <Input
                            required
                            value={appointmentForm.firstName}
                            onChange={(e) => setAppointmentForm({ ...appointmentForm, firstName: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name *</label>
                          <Input
                            required
                            value={appointmentForm.lastName}
                            onChange={(e) => setAppointmentForm({ ...appointmentForm, lastName: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <Input
                            type="email"
                            required
                            value={appointmentForm.email}
                            onChange={(e) => setAppointmentForm({ ...appointmentForm, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone *</label>
                          <Input
                            type="tel"
                            required
                            value={appointmentForm.phone}
                            onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Department *</label>
                          <Select
                            value={appointmentForm.department}
                            onValueChange={(value) => setAppointmentForm({ ...appointmentForm, department: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              {departments.map((dept) => (
                                <SelectItem key={dept} value={dept}>
                                  {dept}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Insurance Provider</label>
                          <Select
                            value={appointmentForm.insurance}
                            onValueChange={(value) => setAppointmentForm({ ...appointmentForm, insurance: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select insurance" />
                            </SelectTrigger>
                            <SelectContent>
                              {insuranceProviders.map((provider) => (
                                <SelectItem key={provider} value={provider}>
                                  {provider}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                          <Input
                            type="date"
                            required
                            value={appointmentForm.preferredDate}
                            onChange={(e) => setAppointmentForm({ ...appointmentForm, preferredDate: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                          <Select
                            value={appointmentForm.preferredTime}
                            onValueChange={(value) => setAppointmentForm({ ...appointmentForm, preferredTime: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
                              <SelectItem value="evening">Evening (5:00 PM - 8:00 PM)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Reason for Visit *</label>
                        <Textarea
                          required
                          placeholder="Please describe the reason for your appointment..."
                          value={appointmentForm.reason}
                          onChange={(e) => setAppointmentForm({ ...appointmentForm, reason: e.target.value })}
                        />
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div className="text-sm text-blue-800">
                            <p className="font-medium mb-1">Important Information:</p>
                            <ul className="space-y-1 text-blue-700">
                              <li>• We'll contact you within 24 hours to confirm your appointment</li>
                              <li>• Please arrive 15 minutes early for your appointment</li>
                              <li>• Bring your insurance card and a valid ID</li>
                              <li>• For urgent matters, please call (555) 123-4567</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Calendar className="w-5 h-5 mr-2" />
                        Submit Appointment Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Health Resources Tab */}
            <TabsContent value="resources" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif font-bold text-3xl text-foreground">Health Education Resources</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Access reliable health information, guides, and educational materials to support your wellness
                  journey.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {healthResources.map((resource, idx) => {
                  const IconComponent = resource.icon
                  return (
                    <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="font-serif text-xl">{resource.category}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {resource.articles.map((article, articleIdx) => (
                            <li key={articleIdx}>
                              <a
                                href="#"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                              >
                                <FileText className="w-4 h-4" />
                                {article}
                              </a>
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="w-full mt-4 bg-transparent">
                          View All Articles
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Featured Resources */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
                <div className="text-center space-y-4">
                  <h3 className="font-serif font-bold text-2xl">Featured Health Tools</h3>
                  <p className="text-muted-foreground">Interactive tools to help you manage your health</p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 bg-white">
                      <Activity className="w-6 h-6" />
                      <span>BMI Calculator</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 bg-white">
                      <Heart className="w-6 h-6" />
                      <span>Heart Rate Monitor</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 bg-white">
                      <Calendar className="w-6 h-6" />
                      <span>Symptom Tracker</span>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Support & FAQ Tab */}
            <TabsContent value="support" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif font-bold text-3xl text-foreground">Support & FAQ</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Find answers to common questions or get in touch with our support team.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* FAQ Section */}
                <div className="space-y-6">
                  <h3 className="font-serif font-bold text-2xl">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {[
                      {
                        question: "How do I access my test results?",
                        answer:
                          "You can access your test results through our Patient Portal. Log in with your credentials and navigate to the 'Test Results' section.",
                      },
                      {
                        question: "What insurance plans do you accept?",
                        answer:
                          "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Medicare, and Medicaid.",
                      },
                      {
                        question: "How can I request a prescription refill?",
                        answer:
                          "Prescription refills can be requested through the Patient Portal, by calling our pharmacy at (555) 123-4567, or through our mobile app.",
                      },
                      {
                        question: "What should I bring to my appointment?",
                        answer:
                          "Please bring your insurance card, a valid photo ID, a list of current medications, and any relevant medical records or test results.",
                      },
                      {
                        question: "How do I cancel or reschedule an appointment?",
                        answer:
                          "You can cancel or reschedule appointments through the Patient Portal, by calling (555) 123-4567, or using our mobile app. Please provide at least 24 hours notice.",
                      },
                    ].map((faq, idx) => (
                      <Card key={idx}>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <HelpCircle className="w-5 h-5 text-primary" />
                            {faq.question}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Contact Support */}
                <div className="space-y-6">
                  <h3 className="font-serif font-bold text-2xl">Contact Support</h3>
                  <div className="space-y-4">
                    <Card className="bg-primary text-primary-foreground">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Phone className="w-5 h-5" />
                          Phone Support
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg font-semibold">(555) 123-4567</p>
                        <p className="opacity-90">Available 24/7 for emergencies</p>
                        <p className="opacity-90">Mon-Fri 8:00 AM - 6:00 PM for general inquiries</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Mail className="w-5 h-5" />
                          Email Support
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg font-semibold">support@medcare.com</p>
                        <p className="text-muted-foreground">We respond within 24 hours</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          Visit Us
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-semibold">MedCare Hospital</p>
                        <p className="text-muted-foreground">123 Healthcare Ave</p>
                        <p className="text-muted-foreground">Medical City, MC 12345</p>
                        <p className="text-muted-foreground mt-2">
                          <Clock className="w-4 h-4 inline mr-1" />
                          Mon-Fri: 8:00 AM - 6:00 PM
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 border-red-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-red-800">
                          <AlertCircle className="w-5 h-5" />
                          Emergency
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-red-800 font-semibold">Call 911 or visit our Emergency Department</p>
                        <p className="text-red-700">For life-threatening emergencies</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                </div>
                <span className="font-serif font-bold text-xl text-primary">MedCare Hospital</span>
              </div>
              <p className="text-muted-foreground">
                Providing exceptional healthcare services with compassion and excellence since 1999.
              </p>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/doctors" className="hover:text-primary transition-colors">
                    Our Doctors
                  </a>
                </li>
                <li>
                  <a href="/patient-resources" className="hover:text-primary transition-colors">
                    Patient Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Patient Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="/patient-resources" className="hover:text-primary transition-colors">
                    Patient Portal
                  </a>
                </li>
                <li>
                  <a href="/patient-resources" className="hover:text-primary transition-colors">
                    Online Scheduling
                  </a>
                </li>
                <li>
                  <a href="/patient-resources" className="hover:text-primary transition-colors">
                    Billing & Insurance
                  </a>
                </li>
                <li>
                  <a href="/patient-resources" className="hover:text-primary transition-colors">
                    Health Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  24/7 Emergency
                </p>
                <p>
                  123 Healthcare Ave
                  <br />
                  Medical City, MC 12345
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 MedCare Hospital. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
