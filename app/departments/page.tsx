import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Brain,
  Baby,
  Bone,
  Activity,
  Microscope,
  Eye,
  Ear,
  Stethoscope,
  Pill,
  Ambulance,
  Clock,
  Users,
  Shield,
  Monitor,
  Scissors,
} from "lucide-react"

export default function DepartmentsPage() {
  const departments = [
    {
      icon: Heart,
      name: "Cardiology",
      description: "Comprehensive heart and cardiovascular care with advanced diagnostic and treatment options.",
      services: [
        "Cardiac Catheterization",
        "Echocardiography",
        "Stress Testing",
        "Pacemaker Implantation",
        "Heart Surgery",
      ],
      doctors: 8,
      beds: 24,
      emergency: true,
      href: "/departments/cardiology",
    },
    {
      icon: Brain,
      name: "Neurology",
      description: "Expert care for brain, spine, and nervous system disorders with cutting-edge technology.",
      services: ["Stroke Care", "Epilepsy Treatment", "Brain Surgery", "Spinal Procedures", "Neuroimaging"],
      doctors: 6,
      beds: 18,
      emergency: true,
      href: "/departments/neurology",
    },
    {
      icon: Baby,
      name: "Pediatrics",
      description: "Specialized medical care for infants, children, and adolescents in a child-friendly environment.",
      services: ["Neonatal Care", "Pediatric Surgery", "Child Development", "Immunizations", "Emergency Pediatrics"],
      doctors: 12,
      beds: 30,
      emergency: true,
      href: "/departments/pediatrics",
    },
    {
      icon: Bone,
      name: "Orthopedics",
      description:
        "Advanced treatment for bone, joint, and musculoskeletal conditions with minimally invasive techniques.",
      services: ["Joint Replacement", "Sports Medicine", "Spine Surgery", "Trauma Care", "Arthroscopy"],
      doctors: 10,
      beds: 20,
      emergency: true,
      href: "/departments/orthopedics",
    },
    {
      icon: Activity,
      name: "Oncology",
      description: "Comprehensive cancer care with multidisciplinary approach and latest treatment protocols.",
      services: ["Chemotherapy", "Radiation Therapy", "Surgical Oncology", "Immunotherapy", "Palliative Care"],
      doctors: 7,
      beds: 25,
      emergency: false,
      href: "/departments/oncology",
    },
    {
      icon: Eye,
      name: "Ophthalmology",
      description: "Complete eye care services from routine exams to complex surgical procedures.",
      services: ["Cataract Surgery", "Retinal Care", "Glaucoma Treatment", "LASIK", "Pediatric Ophthalmology"],
      doctors: 4,
      beds: 8,
      emergency: false,
      href: "/departments/ophthalmology",
    },
    {
      icon: Ear,
      name: "ENT (Otolaryngology)",
      description: "Treatment of ear, nose, throat, and head & neck conditions with advanced surgical techniques.",
      services: ["Hearing Loss Treatment", "Sinus Surgery", "Throat Surgery", "Head & Neck Cancer", "Sleep Apnea"],
      doctors: 5,
      beds: 12,
      emergency: true,
      href: "/departments/ent",
    },
    {
      icon: Stethoscope,
      name: "Internal Medicine",
      description: "Primary care and management of complex medical conditions for adult patients.",
      services: ["Preventive Care", "Chronic Disease Management", "Diabetes Care", "Hypertension", "Geriatric Care"],
      doctors: 15,
      beds: 35,
      emergency: true,
      href: "/departments/internal-medicine",
    },
    {
      icon: Scissors,
      name: "General Surgery",
      description: "Comprehensive surgical services with minimally invasive and robotic surgery options.",
      services: ["Laparoscopic Surgery", "Robotic Surgery", "Trauma Surgery", "Hernia Repair", "Gallbladder Surgery"],
      doctors: 8,
      beds: 22,
      emergency: true,
      href: "/departments/general-surgery",
    },
    {
      icon: Monitor,
      name: "Radiology",
      description: "Advanced imaging services with state-of-the-art equipment and expert interpretation.",
      services: ["MRI", "CT Scan", "X-Ray", "Ultrasound", "Mammography", "Nuclear Medicine"],
      doctors: 6,
      beds: 0,
      emergency: true,
      href: "/departments/radiology",
    },
    {
      icon: Microscope,
      name: "Laboratory",
      description: "Comprehensive diagnostic testing with rapid results and quality assurance.",
      services: ["Blood Tests", "Microbiology", "Pathology", "Molecular Diagnostics", "Point-of-Care Testing"],
      doctors: 4,
      beds: 0,
      emergency: true,
      href: "/departments/laboratory",
    },
    {
      icon: Pill,
      name: "Pharmacy",
      description: "Full-service pharmacy with medication management and clinical pharmacy services.",
      services: [
        "Prescription Dispensing",
        "Medication Counseling",
        "Clinical Pharmacy",
        "IV Preparation",
        "Drug Information",
      ],
      doctors: 3,
      beds: 0,
      emergency: true,
      href: "/departments/pharmacy",
    },
  ]

  const emergencyServices = [
    {
      icon: Ambulance,
      title: "Emergency Department",
      description: "24/7 emergency care with trauma center capabilities and rapid response teams.",
      features: ["Level II Trauma Center", "Cardiac Emergency", "Stroke Center", "Pediatric Emergency"],
    },
    {
      icon: Activity,
      title: "Intensive Care Unit",
      description: "Critical care services with advanced monitoring and life support systems.",
      features: ["Medical ICU", "Surgical ICU", "Cardiac ICU", "Neonatal ICU"],
    },
    {
      icon: Clock,
      title: "24/7 Services",
      description: "Round-the-clock availability of essential medical services and emergency response.",
      features: ["Emergency Surgery", "Laboratory", "Radiology", "Pharmacy"],
    },
  ]

  const facilities = [
    {
      icon: Monitor,
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment and cutting-edge diagnostic tools.",
      items: ["3T MRI Scanner", "64-Slice CT Scanner", "Digital Mammography", "Robotic Surgery System"],
    },
    {
      icon: Shield,
      title: "Patient Safety",
      description: "Comprehensive safety protocols and infection control measures.",
      items: ["HEPA Filtration", "Isolation Rooms", "Safety Protocols", "Quality Assurance"],
    },
    {
      icon: Users,
      title: "Patient Comfort",
      description: "Modern facilities designed for patient comfort and family convenience.",
      items: ["Private Rooms", "Family Lounges", "Cafeteria", "Parking Garage"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-foreground">
              Medical Departments & Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare services across multiple specialties, delivered by expert medical professionals
              using the latest technology and evidence-based practices.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Emergency & Critical Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Round-the-clock emergency services with rapid response capabilities and specialized critical care units.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-destructive" />
                    </div>
                    <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">{service.description}</CardDescription>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-destructive rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Medical Departments */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">Medical Specialties</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive range of medical specialties ensures that you receive expert care for any health
              condition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      {dept.emergency && (
                        <Badge variant="destructive" className="text-xs">
                          24/7 Emergency
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="font-serif text-xl">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">{dept.description}</CardDescription>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{dept.doctors} Doctors</span>
                      </div>
                      {dept.beds > 0 && (
                        <div className="flex items-center gap-2">
                          <Monitor className="w-4 h-4 text-muted-foreground" />
                          <span>{dept.beds} Beds</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {dept.services.slice(0, 3).map((service, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {dept.services.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{dept.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Department Details
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Facilities & Technology */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">Facilities & Technology</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art facilities and advanced medical technology to support the highest quality of patient
              care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon
              return (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="font-serif text-xl">{facility.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">{facility.description}</CardDescription>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Features:</h4>
                      <ul className="space-y-1">
                        {facility.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services to enhance your healthcare experience and ensure continuity of care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Telemedicine", description: "Virtual consultations and remote monitoring" },
              { title: "Rehabilitation", description: "Physical, occupational, and speech therapy" },
              { title: "Nutrition Services", description: "Clinical nutrition and dietary counseling" },
              { title: "Social Services", description: "Patient advocacy and discharge planning" },
              { title: "Chaplain Services", description: "Spiritual care and emotional support" },
              { title: "Patient Education", description: "Health education and wellness programs" },
              { title: "Medical Records", description: "Electronic health records and information management" },
              { title: "Insurance Services", description: "Insurance verification and financial counseling" },
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl">Need Medical Care?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our expert medical teams are ready to provide you with exceptional care across all specialties. Schedule
              an appointment or contact us for emergency services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5" />
                Schedule Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Ambulance className="w-5 h-5" />
                Emergency: (555) 123-4567
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
              <h3 className="font-serif font-semibold text-foreground mb-4">Emergency</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="tel:5551234567" className="hover:text-primary transition-colors">
                    Emergency: (555) 123-4567
                  </a>
                </li>
                <li>
                  <a href="/departments" className="hover:text-primary transition-colors">
                    Emergency Department
                  </a>
                </li>
                <li>
                  <a href="/departments" className="hover:text-primary transition-colors">
                    Trauma Center
                  </a>
                </li>
                <li>
                  <a href="/departments" className="hover:text-primary transition-colors">
                    Critical Care
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Ambulance className="w-4 h-4" />
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
