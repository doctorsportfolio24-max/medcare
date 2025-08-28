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
  Phone,
  Mail,
  MapPin,
  Clock,
  Car,
  Bus,
  Plane,
  NavigationIcon,
  Users,
  Shield,
  AlertCircle,
  Info,
  Calendar,
  Building,
  Heart,
  Brain,
  Baby,
  Bone,
  Activity,
  Eye,
  Ear,
  Scissors,
} from "lucide-react"

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    department: "",
    message: "",
  })

  const locations = [
    {
      id: "main",
      name: "MedCare Hospital - Main Campus",
      address: "123 Healthcare Ave, Medical City, MC 12345",
      phone: "(555) 123-4567",
      emergency: "(555) 911-HELP",
      email: "info@medcare.com",
      hours: "24/7 Emergency | Mon-Fri 6:00 AM - 10:00 PM",
      services: ["Emergency Care", "Inpatient Services", "Surgery", "ICU", "All Specialties"],
      parking: "Free parking available with validation",
      coordinates: { lat: 40.7128, lng: -74.006 },
    },
    {
      id: "north",
      name: "MedCare North Clinic",
      address: "456 North Medical Blvd, Medical City, MC 12346",
      phone: "(555) 123-4568",
      email: "north@medcare.com",
      hours: "Mon-Fri 7:00 AM - 7:00 PM | Sat 8:00 AM - 4:00 PM",
      services: ["Primary Care", "Pediatrics", "Cardiology", "Orthopedics", "Lab Services"],
      parking: "Free parking available",
      coordinates: { lat: 40.7589, lng: -73.9851 },
    },
    {
      id: "south",
      name: "MedCare South Specialty Center",
      address: "789 South Wellness Way, Medical City, MC 12347",
      phone: "(555) 123-4569",
      email: "south@medcare.com",
      hours: "Mon-Fri 8:00 AM - 6:00 PM",
      services: ["Oncology", "Neurology", "Ophthalmology", "ENT", "Rehabilitation"],
      parking: "Valet parking available",
      coordinates: { lat: 40.6892, lng: -74.0445 },
    },
  ]

  const departments = [
    { name: "General Inquiries", phone: "(555) 123-4567", email: "info@medcare.com", icon: Building },
    { name: "Emergency Department", phone: "(555) 911-HELP", email: "emergency@medcare.com", icon: AlertCircle },
    { name: "Cardiology", phone: "(555) 123-4570", email: "cardiology@medcare.com", icon: Heart },
    { name: "Neurology", phone: "(555) 123-4571", email: "neurology@medcare.com", icon: Brain },
    { name: "Pediatrics", phone: "(555) 123-4572", email: "pediatrics@medcare.com", icon: Baby },
    { name: "Orthopedics", phone: "(555) 123-4573", email: "orthopedics@medcare.com", icon: Bone },
    { name: "Oncology", phone: "(555) 123-4574", email: "oncology@medcare.com", icon: Activity },
    { name: "Ophthalmology", phone: "(555) 123-4575", email: "ophthalmology@medcare.com", icon: Eye },
    { name: "ENT", phone: "(555) 123-4576", email: "ent@medcare.com", icon: Ear },
    { name: "Surgery", phone: "(555) 123-4577", email: "surgery@medcare.com", icon: Scissors },
    { name: "Patient Services", phone: "(555) 123-4578", email: "patients@medcare.com", icon: Users },
    { name: "Billing & Insurance", phone: "(555) 123-4579", email: "billing@medcare.com", icon: Shield },
  ]

  const visitingGuidelines = [
    {
      title: "Visiting Hours",
      icon: Clock,
      details: [
        "General Units: 8:00 AM - 8:00 PM daily",
        "ICU: 10:00 AM - 12:00 PM, 2:00 PM - 4:00 PM, 6:00 PM - 8:00 PM",
        "Pediatrics: 24/7 for parents/guardians",
        "Maternity: 24/7 for partners",
      ],
    },
    {
      title: "Visitor Policies",
      icon: Users,
      details: [
        "Maximum 2 visitors per patient at a time",
        "Children under 12 must be supervised",
        "Valid ID required for all visitors",
        "Health screening may be required",
      ],
    },
    {
      title: "What to Bring",
      icon: Info,
      details: [
        "Valid photo identification",
        "Insurance cards and documentation",
        "List of current medications",
        "Comfortable clothing and personal items",
      ],
    },
    {
      title: "Safety Guidelines",
      icon: Shield,
      details: [
        "Hand sanitization required",
        "Follow all posted safety signs",
        "No smoking anywhere on campus",
        "Report any safety concerns to staff",
      ],
    },
  ]

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", contactForm)
    alert("Thank you for your message! We'll respond within 24 hours.")
    setContactForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      department: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-foreground">Contact & Locations</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find all the information you need to reach us, visit our facilities, and get the care you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="contact" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
              <TabsTrigger value="locations">Our Locations</TabsTrigger>
              <TabsTrigger value="departments">Departments</TabsTrigger>
              <TabsTrigger value="visiting">Visiting Info</TabsTrigger>
            </TabsList>

            {/* Contact Us Tab */}
            <TabsContent value="contact" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
                      <CardDescription>
                        Have a question or need assistance? Fill out the form below and we'll get back to you within 24
                        hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name *</label>
                          <Input
                            required
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Email *</label>
                            <Input
                              type="email"
                              required
                              value={contactForm.email}
                              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Phone</label>
                            <Input
                              type="tel"
                              value={contactForm.phone}
                              onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Subject *</label>
                            <Input
                              required
                              value={contactForm.subject}
                              onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Department</label>
                            <Select
                              value={contactForm.department}
                              onValueChange={(value) => setContactForm({ ...contactForm, department: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select department" />
                              </SelectTrigger>
                              <SelectContent>
                                {departments.map((dept) => (
                                  <SelectItem key={dept.name} value={dept.name}>
                                    {dept.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Message *</label>
                          <Textarea
                            required
                            rows={4}
                            placeholder="Please describe your inquiry..."
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                          <Mail className="w-5 h-5 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Contact Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif font-bold text-2xl mb-6">Get in Touch</h3>
                    <div className="space-y-4">
                      <Card className="bg-primary text-primary-foreground">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                              <AlertCircle className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">Emergency</h4>
                              <p className="text-lg font-bold">(555) 911-HELP</p>
                              <p className="opacity-90">Available 24/7</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">Main Hospital</h4>
                              <p className="text-lg font-bold">(555) 123-4567</p>
                              <p className="text-muted-foreground">Mon-Fri 6:00 AM - 10:00 PM</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">Email</h4>
                              <p className="text-lg font-bold">info@medcare.com</p>
                              <p className="text-muted-foreground">Response within 24 hours</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">Address</h4>
                              <p className="font-medium">123 Healthcare Ave</p>
                              <p className="text-muted-foreground">Medical City, MC 12345</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Social Media & Links */}
                  <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="bg-white">
                          Patient Portal
                        </Button>
                        <Button variant="outline" className="bg-white">
                          Mobile App
                        </Button>
                        <Button variant="outline" className="bg-white">
                          Newsletter
                        </Button>
                        <Button variant="outline" className="bg-white">
                          Feedback
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Locations Tab */}
            <TabsContent value="locations" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif font-bold text-3xl text-foreground">Our Locations</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We have multiple convenient locations to serve you better across Medical City and surrounding areas.
                </p>
              </div>

              <div className="space-y-8">
                {locations.map((location) => (
                  <Card key={location.id} className="overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                      <div className="p-6 lg:p-8">
                        <CardHeader className="p-0 mb-6">
                          <CardTitle className="font-serif text-2xl">{location.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-base">
                            <MapPin className="w-4 h-4" />
                            {location.address}
                          </CardDescription>
                        </CardHeader>

                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                              <Phone className="w-5 h-5 text-primary" />
                              <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-muted-foreground">{location.phone}</p>
                              </div>
                            </div>
                            {location.emergency && (
                              <div className="flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-red-600" />
                                <div>
                                  <p className="font-medium">Emergency</p>
                                  <p className="text-muted-foreground">{location.emergency}</p>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-primary" />
                            <div>
                              <p className="font-medium">Hours</p>
                              <p className="text-muted-foreground">{location.hours}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Car className="w-5 h-5 text-primary" />
                            <div>
                              <p className="font-medium">Parking</p>
                              <p className="text-muted-foreground">{location.parking}</p>
                            </div>
                          </div>

                          <div>
                            <p className="font-medium mb-2">Services Available:</p>
                            <div className="flex flex-wrap gap-2">
                              {location.services.map((service, idx) => (
                                <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button className="flex-1">
                              <NavigationIcon className="w-4 h-4 mr-2" />
                              Get Directions
                            </Button>
                            <Button variant="outline" className="bg-transparent">
                              <Phone className="w-4 h-4 mr-2" />
                              Call
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-muted p-6 lg:p-8 flex items-center justify-center">
                        <div className="w-full h-64 bg-primary/10 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                            <p className="text-muted-foreground">Interactive Map</p>
                            <p className="text-sm text-muted-foreground">Click "Get Directions" for navigation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Transportation Info */}
              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-center">Getting Here</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Car className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">By Car</h3>
                      <p className="text-muted-foreground text-sm">
                        Free parking available at all locations. Valet service at main campus.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bus className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Public Transit</h3>
                      <p className="text-muted-foreground text-sm">
                        Multiple bus routes serve our locations. Metro station 2 blocks from main campus.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Plane className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">From Airport</h3>
                      <p className="text-muted-foreground text-sm">
                        20 minutes from Medical City Airport. Shuttle service available upon request.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Departments Tab */}
            <TabsContent value="departments" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif font-bold text-3xl text-foreground">Department Contacts</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Direct contact information for all our medical departments and support services.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept) => {
                  const IconComponent = dept.icon
                  return (
                    <Card key={dept.name} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="font-serif text-lg">{dept.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{dept.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{dept.email}</span>
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="flex-1">
                            <Phone className="w-4 h-4 mr-1" />
                            Call
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            <Mail className="w-4 h-4 mr-1" />
                            Email
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            {/* Visiting Info Tab */}
            <TabsContent value="visiting" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif font-bold text-3xl text-foreground">Visitor Information</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Important information for patients and visitors to ensure a safe and comfortable experience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {visitingGuidelines.map((guideline, idx) => {
                  const IconComponent = guideline.icon
                  return (
                    <Card key={idx}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-serif text-xl">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          {guideline.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {guideline.details.map((detail, detailIdx) => (
                            <li key={detailIdx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Additional Resources */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Info className="w-5 h-5" />
                      Patient Amenities
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-blue-700">
                    <ul className="space-y-2">
                      <li>• Free WiFi throughout the hospital</li>
                      <li>• Cafeteria and vending machines</li>
                      <li>• Gift shop and pharmacy</li>
                      <li>• Chapel and quiet spaces</li>
                      <li>• Family lounges and waiting areas</li>
                      <li>• ATM and banking services</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Calendar className="w-5 h-5" />
                      Special Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-green-700">
                    <ul className="space-y-2">
                      <li>• Language interpretation services</li>
                      <li>• Disability assistance</li>
                      <li>• Social work support</li>
                      <li>• Spiritual care services</li>
                      <li>• Patient advocacy</li>
                      <li>• Discharge planning assistance</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertCircle className="w-5 h-5" />
                    Emergency Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-red-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">For Life-Threatening Emergencies:</h4>
                      <p className="text-lg font-bold">Call 911</p>
                      <p>or visit our Emergency Department</p>
                      <p className="text-sm mt-2">Available 24/7 at our main campus</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Hospital Emergency Line:</h4>
                      <p className="text-lg font-bold">(555) 911-HELP</p>
                      <p>For urgent hospital-related matters</p>
                      <p className="text-sm mt-2">Available 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                  <a href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Locations</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="/contact" className="hover:text-primary transition-colors">
                    Main Campus
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary transition-colors">
                    North Clinic
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary transition-colors">
                    South Specialty Center
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary transition-colors">
                    All Locations
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
                  <AlertCircle className="w-4 h-4" />
                  (555) 911-HELP
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
