"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Search,
  Filter,
  Calendar,
  Phone,
  Mail,
  Clock,
  Award,
  GraduationCap,
  Star,
  Heart,
  Brain,
  Baby,
  Bone,
  Activity,
  Eye,
  Ear,
  Stethoscope,
  Scissors,
} from "lucide-react"

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Chief of Cardiology",
      department: "Cardiology",
      specialties: ["Interventional Cardiology", "Heart Failure", "Cardiac Catheterization"],
      image: "/images/doctors/dr-sarah-johnson.jpg",
      education: ["MD - Harvard Medical School", "Residency - Johns Hopkins Hospital", "Fellowship - Mayo Clinic"],
      experience: "15+ years",
      languages: ["English", "Spanish"],
      rating: 4.9,
      reviews: 127,
      consultationHours: "Mon-Fri: 8:00 AM - 5:00 PM",
      phone: "(555) 123-4567",
      email: "s.johnson@medcare.com",
      bio: "Dr. Johnson is a board-certified cardiologist with expertise in interventional cardiology and heart failure management. She has performed over 2,000 cardiac procedures and is recognized for her patient-centered approach to care.",
      achievements: [
        "Top Doctor Award 2023",
        "Excellence in Patient Care",
        "Published 45+ Research Papers",
        "American Heart Association Fellow",
      ],
      icon: Heart,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Neurosurgeon",
      department: "Neurology",
      specialties: ["Brain Surgery", "Spine Surgery", "Minimally Invasive Neurosurgery"],
      image: "/images/doctors/dr-michael-chen.jpg",
      education: ["MD - Stanford University", "Residency - UCSF", "Fellowship - Cleveland Clinic"],
      experience: "12+ years",
      languages: ["English", "Mandarin"],
      rating: 4.8,
      reviews: 89,
      consultationHours: "Tue-Thu: 9:00 AM - 4:00 PM",
      phone: "(555) 123-4568",
      email: "m.chen@medcare.com",
      bio: "Dr. Chen specializes in complex neurosurgical procedures with a focus on minimally invasive techniques. He has successfully performed over 1,500 brain and spine surgeries with excellent patient outcomes.",
      achievements: [
        "Neurosurgeon of the Year 2022",
        "Innovation in Surgical Techniques",
        "International Speaker",
        "Research Excellence Award",
      ],
      icon: Brain,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Pediatric Specialist",
      department: "Pediatrics",
      specialties: ["Neonatal Care", "Pediatric Emergency", "Child Development"],
      image: "/images/doctors/dr-emily-rodriguez.jpg",
      education: ["MD - UCLA", "Residency - Children's Hospital LA", "Fellowship - Boston Children's"],
      experience: "10+ years",
      languages: ["English", "Spanish", "Portuguese"],
      rating: 4.9,
      reviews: 156,
      consultationHours: "Mon-Sat: 7:00 AM - 6:00 PM",
      phone: "(555) 123-4569",
      email: "e.rodriguez@medcare.com",
      bio: "Dr. Rodriguez is dedicated to providing comprehensive pediatric care from newborns to adolescents. She is known for her gentle approach with children and excellent communication with families.",
      achievements: [
        "Pediatric Excellence Award",
        "Community Service Recognition",
        "Best Bedside Manner Award",
        "Child Advocacy Champion",
      ],
      icon: Baby,
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      title: "Orthopedic Surgeon",
      department: "Orthopedics",
      specialties: ["Joint Replacement", "Sports Medicine", "Trauma Surgery"],
      image: "/images/doctors/dr-james-wilson.jpg",
      education: ["MD - Duke University", "Residency - Hospital for Special Surgery", "Fellowship - Andrews Institute"],
      experience: "18+ years",
      languages: ["English"],
      rating: 4.7,
      reviews: 203,
      consultationHours: "Mon-Fri: 8:00 AM - 4:00 PM",
      phone: "(555) 123-4570",
      email: "j.wilson@medcare.com",
      bio: "Dr. Wilson is a renowned orthopedic surgeon specializing in joint replacement and sports medicine. He has helped thousands of patients return to active lifestyles through innovative surgical techniques.",
      achievements: [
        "Orthopedic Surgeon of Excellence",
        "Sports Medicine Innovation Award",
        "Patient Choice Award",
        "Medical Team Leadership",
      ],
      icon: Bone,
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      title: "Oncologist",
      department: "Oncology",
      specialties: ["Medical Oncology", "Immunotherapy", "Clinical Trials"],
      image: "/images/doctors/dr-lisa-park.jpg",
      education: ["MD - Memorial Sloan Kettering", "Residency - MD Anderson", "Fellowship - Dana-Farber"],
      experience: "14+ years",
      languages: ["English", "Korean"],
      rating: 4.8,
      reviews: 94,
      consultationHours: "Mon-Thu: 9:00 AM - 5:00 PM",
      phone: "(555) 123-4571",
      email: "l.park@medcare.com",
      bio: "Dr. Park is a leading oncologist with expertise in cutting-edge cancer treatments including immunotherapy and precision medicine. She is actively involved in clinical research to advance cancer care.",
      achievements: [
        "Cancer Research Excellence",
        "Compassionate Care Award",
        "Clinical Trial Leadership",
        "Oncology Innovation Prize",
      ],
      icon: Activity,
    },
    {
      id: 6,
      name: "Dr. Robert Taylor",
      title: "Ophthalmologist",
      department: "Ophthalmology",
      specialties: ["Cataract Surgery", "Retinal Disorders", "LASIK"],
      image: "/images/doctors/dr-robert-taylor.jpg",
      education: ["MD - Wills Eye Hospital", "Residency - Bascom Palmer", "Fellowship - Moorfields Eye Hospital"],
      experience: "16+ years",
      languages: ["English", "French"],
      rating: 4.9,
      reviews: 178,
      consultationHours: "Tue-Fri: 8:00 AM - 5:00 PM",
      phone: "(555) 123-4572",
      email: "r.taylor@medcare.com",
      bio: "Dr. Taylor is a highly skilled ophthalmologist with expertise in complex eye surgeries. He has restored vision for thousands of patients and is known for his precision and compassionate care.",
      achievements: [
        "Vision Restoration Excellence",
        "Surgical Innovation Award",
        "Patient Satisfaction Leader",
        "International Recognition",
      ],
      icon: Eye,
    },
    {
      id: 7,
      name: "Dr. Amanda Foster",
      title: "ENT Specialist",
      department: "ENT",
      specialties: ["Sinus Surgery", "Hearing Loss", "Head & Neck Surgery"],
      image: "/images/doctors/dr-amanda-foster.jpg",
      education: ["MD - Vanderbilt University", "Residency - University of Pittsburgh", "Fellowship - Johns Hopkins"],
      experience: "11+ years",
      languages: ["English"],
      rating: 4.7,
      reviews: 112,
      consultationHours: "Mon-Wed-Fri: 9:00 AM - 4:00 PM",
      phone: "(555) 123-4573",
      email: "a.foster@medcare.com",
      bio: "Dr. Foster specializes in comprehensive ENT care with a focus on minimally invasive surgical techniques. She is dedicated to improving patients' quality of life through advanced treatment options.",
      achievements: [
        "ENT Excellence Award",
        "Minimally Invasive Surgery Pioneer",
        "Patient Care Excellence",
        "Medical Education Leadership",
      ],
      icon: Ear,
    },
    {
      id: 8,
      name: "Dr. David Kim",
      title: "Internal Medicine Physician",
      department: "Internal Medicine",
      specialties: ["Preventive Care", "Diabetes Management", "Hypertension"],
      image: "/images/doctors/dr-david-kim.jpg",
      education: ["MD - Washington University", "Residency - Barnes-Jewish Hospital", "Fellowship - Mayo Clinic"],
      experience: "13+ years",
      languages: ["English", "Korean"],
      rating: 4.8,
      reviews: 245,
      consultationHours: "Mon-Fri: 7:00 AM - 6:00 PM",
      phone: "(555) 123-4574",
      email: "d.kim@medcare.com",
      bio: "Dr. Kim is a board-certified internist focused on comprehensive primary care and chronic disease management. He emphasizes preventive medicine and patient education to promote long-term health.",
      achievements: [
        "Primary Care Excellence",
        "Diabetes Care Recognition",
        "Patient Education Award",
        "Quality Improvement Leader",
      ],
      icon: Stethoscope,
    },
    {
      id: 9,
      name: "Dr. Jennifer Martinez",
      title: "General Surgeon",
      department: "General Surgery",
      specialties: ["Laparoscopic Surgery", "Robotic Surgery", "Emergency Surgery"],
      image: "/images/doctors/dr-jennifer-martinez.jpg",
      education: ["MD - University of Texas", "Residency - Baylor College", "Fellowship - MD Anderson"],
      experience: "9+ years",
      languages: ["English", "Spanish"],
      rating: 4.6,
      reviews: 87,
      consultationHours: "Mon-Thu: 8:00 AM - 5:00 PM",
      phone: "(555) 123-4575",
      email: "j.martinez@medcare.com",
      bio: "Dr. Martinez is a skilled general surgeon with expertise in minimally invasive and robotic surgical techniques. She is committed to providing the highest quality surgical care with faster recovery times.",
      achievements: [
        "Surgical Excellence Award",
        "Robotic Surgery Certification",
        "Emergency Surgery Recognition",
        "Surgical Innovation Prize",
      ],
      icon: Scissors,
    },
  ]

  const departments = [
    "all",
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Oncology",
    "Ophthalmology",
    "ENT",
    "Internal Medicine",
    "General Surgery",
  ]

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase())) ||
      doctor.department.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = selectedDepartment === "all" || doctor.department === selectedDepartment

    return matchesSearch && matchesDepartment
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-foreground">Our Medical Experts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet our team of highly qualified physicians and specialists dedicated to providing exceptional healthcare
              with compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search doctors, specialties, or departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept === "all" ? "All Departments" : dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No doctors found matching your search criteria.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-muted-foreground">
                  Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""}
                  {selectedDepartment !== "all" && ` in ${selectedDepartment}`}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDoctors.map((doctor) => {
                  const IconComponent = doctor.icon
                  return (
                    <Card key={doctor.id} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="text-center">
                        <div className="relative mx-auto mb-4">
                          <div className="w-32 h-32 rounded-full bg-muted overflow-hidden">
                            <img
                              src={doctor.image || "/placeholder.svg"}
                              alt={doctor.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = `/placeholder.svg?height=128&width=128&text=${doctor.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}`
                              }}
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="font-serif text-xl">{doctor.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">{doctor.title}</CardDescription>
                        <Badge variant="outline" className="mx-auto">
                          {doctor.department}
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-center gap-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(doctor.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {doctor.rating} ({doctor.reviews} reviews)
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Specialties:</h4>
                          <div className="flex flex-wrap gap-1">
                            {doctor.specialties.slice(0, 2).map((specialty, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                            {doctor.specialties.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{doctor.specialties.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{doctor.consultationHours}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>{doctor.experience} experience</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                                View Profile
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <div className="flex items-center gap-4 mb-4">
                                  <div className="w-20 h-20 rounded-full bg-muted overflow-hidden">
                                    <img
                                      src={doctor.image || "/placeholder.svg"}
                                      alt={doctor.name}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        e.currentTarget.src = `/placeholder.svg?height=80&width=80&text=${doctor.name
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}`
                                      }}
                                    />
                                  </div>
                                  <div>
                                    <DialogTitle className="font-serif text-2xl">{doctor.name}</DialogTitle>
                                    <DialogDescription className="text-primary font-medium text-base">
                                      {doctor.title}
                                    </DialogDescription>
                                    <Badge variant="outline" className="mt-1">
                                      {doctor.department}
                                    </Badge>
                                  </div>
                                </div>
                              </DialogHeader>

                              <div className="space-y-6">
                                <div className="flex items-center gap-1">
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                          i < Math.floor(doctor.rating)
                                            ? "text-yellow-400 fill-current"
                                            : "text-muted-foreground"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    {doctor.rating} ({doctor.reviews} reviews)
                                  </span>
                                </div>

                                <div>
                                  <h3 className="font-semibold mb-2">About</h3>
                                  <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
                                </div>

                                <div>
                                  <h3 className="font-semibold mb-2">Specialties</h3>
                                  <div className="flex flex-wrap gap-2">
                                    {doctor.specialties.map((specialty, idx) => (
                                      <Badge key={idx} variant="secondary">
                                        {specialty}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h3 className="font-semibold mb-2">Education</h3>
                                  <ul className="space-y-1">
                                    {doctor.education.map((edu, idx) => (
                                      <li key={idx} className="text-muted-foreground flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4" />
                                        {edu}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h3 className="font-semibold mb-2">Achievements</h3>
                                  <ul className="space-y-1">
                                    {doctor.achievements.map((achievement, idx) => (
                                      <li key={idx} className="text-muted-foreground flex items-center gap-2">
                                        <Award className="w-4 h-4" />
                                        {achievement}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <h3 className="font-semibold mb-2">Contact Information</h3>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex items-center gap-2 text-muted-foreground">
                                        <Phone className="w-4 h-4" />
                                        {doctor.phone}
                                      </div>
                                      <div className="flex items-center gap-2 text-muted-foreground">
                                        <Mail className="w-4 h-4" />
                                        {doctor.email}
                                      </div>
                                      <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="w-4 h-4" />
                                        {doctor.consultationHours}
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <h3 className="font-semibold mb-2">Languages</h3>
                                    <div className="flex flex-wrap gap-1">
                                      {doctor.languages.map((lang, idx) => (
                                        <Badge key={idx} variant="outline" className="text-xs">
                                          {lang}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex gap-2 pt-4">
                                  <Button className="flex-1">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Book Appointment
                                  </Button>
                                  <Button variant="outline" className="bg-transparent">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button size="sm" className="flex-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            Book
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl">Schedule Your Appointment Today</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our expert physicians are ready to provide you with personalized, compassionate care. Book your
              appointment online or call us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Online Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="w-5 h-5" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
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
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Departments</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="/departments" className="hover:text-primary transition-colors">
                    Cardiology
                  </a>
                </li>
                <li>
                  <a href="/departments" className="hover:text-primary transition-colors">
                    Neurology
                  </a>
                </li>
                <li>
                  <a href="/departments" className="hover:text-primary transition-colors">
                    Pediatrics
                  </a>
                </li>
                <li>
                  <a href="/departments" className="hover:text-primary transition-colors">
                    Orthopedics
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
