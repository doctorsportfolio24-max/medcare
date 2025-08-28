import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ambulance, Clock, Users, Stethoscope, Bed, Phone, Calendar, CheckCircle, Star } from "lucide-react"

export default function ServicesPage() {
  const inpatientServices = [
    {
      title: "Medical/Surgical Units",
      description: "Comprehensive inpatient care with private rooms and advanced monitoring systems.",
      features: ["Private Rooms", "24/7 Nursing Care", "Advanced Monitoring", "Family Accommodations"],
    },
    {
      title: "Intensive Care Unit",
      description: "Critical care services with specialized equipment and expert medical teams.",
      features: ["Medical ICU", "Surgical ICU", "Cardiac ICU", "Neurological ICU"],
    },
    {
      title: "Maternity Services",
      description: "Complete obstetric and gynecological care with family-centered birthing suites.",
      features: ["Labor & Delivery", "NICU", "Postpartum Care", "Lactation Support"],
    },
    {
      title: "Surgical Services",
      description: "State-of-the-art operating rooms with minimally invasive and robotic surgery capabilities.",
      features: ["Robotic Surgery", "Minimally Invasive", "Day Surgery", "Post-Op Recovery"],
    },
  ]

  const outpatientServices = [
    {
      title: "Specialty Clinics",
      description: "Comprehensive outpatient specialty care across multiple medical disciplines.",
      features: ["Cardiology Clinic", "Neurology Clinic", "Orthopedic Clinic", "Oncology Clinic"],
    },
    {
      title: "Diagnostic Imaging",
      description: "Advanced imaging services with same-day results and expert interpretation.",
      features: ["MRI", "CT Scan", "X-Ray", "Ultrasound", "Mammography"],
    },
    {
      title: "Laboratory Services",
      description: "Comprehensive diagnostic testing with rapid turnaround times.",
      features: ["Blood Tests", "Pathology", "Microbiology", "Molecular Diagnostics"],
    },
    {
      title: "Rehabilitation Services",
      description: "Physical, occupational, and speech therapy to help patients recover and thrive.",
      features: ["Physical Therapy", "Occupational Therapy", "Speech Therapy", "Cardiac Rehab"],
    },
  ]

  const emergencyServices = [
    {
      title: "Emergency Department",
      description: "24/7 emergency care with Level II trauma center capabilities.",
      features: ["Trauma Center", "Fast Track", "Pediatric Emergency", "Psychiatric Emergency"],
      availability: "24/7",
    },
    {
      title: "Ambulance Services",
      description: "Advanced life support ambulance services with rapid response times.",
      features: ["ALS Ambulances", "Critical Care Transport", "Air Medical", "Community Coverage"],
      availability: "24/7",
    },
    {
      title: "Urgent Care",
      description: "Walk-in care for non-life-threatening conditions with extended hours.",
      features: ["No Appointment Needed", "X-Ray Available", "Lab Services", "Minor Procedures"],
      availability: "7 Days/Week",
    },
  ]

  const supportServices = [
    {
      title: "Pharmacy Services",
      description: "Full-service pharmacy with medication management and clinical consultation.",
      features: ["Prescription Dispensing", "Medication Counseling", "Clinical Pharmacy", "Specialty Medications"],
    },
    {
      title: "Nutrition Services",
      description: "Clinical nutrition services and dietary counseling for optimal health outcomes.",
      features: ["Clinical Nutrition", "Dietary Counseling", "Diabetes Education", "Weight Management"],
    },
    {
      title: "Social Services",
      description: "Patient advocacy and support services to ensure comprehensive care coordination.",
      features: ["Discharge Planning", "Insurance Assistance", "Community Resources", "Patient Advocacy"],
    },
    {
      title: "Spiritual Care",
      description: "Chaplain services and spiritual support for patients and families of all faiths.",
      features: ["Chaplain Services", "Spiritual Counseling", "Interfaith Support", "Crisis Intervention"],
    },
  ]

  const healthPackages = [
    {
      name: "Executive Health Package",
      price: "$899",
      description: "Comprehensive health screening for busy professionals",
      includes: [
        "Complete Physical Examination",
        "Advanced Blood Panel",
        "Cardiac Stress Test",
        "Full Body Imaging",
        "Nutritional Consultation",
        "Executive Report",
      ],
    },
    {
      name: "Women's Health Package",
      price: "$599",
      description: "Specialized health screening designed for women's unique health needs",
      includes: [
        "Gynecological Examination",
        "Mammography",
        "Bone Density Scan",
        "Hormonal Assessment",
        "Nutritional Counseling",
        "Health Education",
      ],
    },
    {
      name: "Senior Care Package",
      price: "$699",
      description: "Comprehensive health assessment for adults 65 and older",
      includes: [
        "Geriatric Assessment",
        "Cognitive Screening",
        "Fall Risk Evaluation",
        "Medication Review",
        "Preventive Care Planning",
        "Family Consultation",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-foreground">Healthcare Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare services designed to meet all your medical needs, from emergency care to
              specialized treatments and preventive health programs.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">Emergency & Urgent Care</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Round-the-clock emergency services with rapid response capabilities and specialized care teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                      <Ambulance className="w-6 h-6 text-destructive" />
                    </div>
                    <Badge variant="destructive" className="text-xs">
                      {service.availability}
                    </Badge>
                  </div>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Services Include:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-destructive" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Inpatient Services */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">Inpatient Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive inpatient care with modern facilities and expert medical teams providing 24/7 support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {inpatientServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Bed className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outpatient Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">Outpatient Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Convenient outpatient services including specialty clinics, diagnostic testing, and rehabilitation
              programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {outpatientServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Stethoscope className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Services Include:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-secondary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Schedule Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">Health Check Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive health screening packages designed to detect health issues early and promote preventive
              care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {healthPackages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 relative">
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-serif text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Package Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" size="lg">
                    Book Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">Support Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional support services to enhance your healthcare experience and ensure comprehensive care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="font-serif text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
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
            <h2 className="font-serif font-bold text-3xl lg:text-4xl">Ready to Experience Quality Healthcare?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Schedule an appointment today or contact us to learn more about our comprehensive healthcare services and
              how we can support your health and wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Appointment
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
              <h3 className="font-serif font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="/services" className="hover:text-primary transition-colors">
                    Emergency Care
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-primary transition-colors">
                    Inpatient Services
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-primary transition-colors">
                    Outpatient Services
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-primary transition-colors">
                    Health Packages
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
