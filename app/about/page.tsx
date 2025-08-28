import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Award, Calendar, MapPin, Phone } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "1999",
      title: "Hospital Founded",
      description: "MedCare Hospital opened its doors with a 50-bed facility and a vision to serve the community.",
    },
    {
      year: "2005",
      title: "Cardiac Center Launch",
      description: "Established our state-of-the-art cardiac care center with advanced catheterization labs.",
    },
    {
      year: "2010",
      title: "Expansion & Renovation",
      description: "Doubled our capacity to 150 beds and added modern surgical suites and ICU facilities.",
    },
    {
      year: "2015",
      title: "Cancer Care Institute",
      description: "Opened our comprehensive cancer treatment center with radiation therapy and oncology services.",
    },
    {
      year: "2020",
      title: "Digital Health Initiative",
      description: "Launched telemedicine services and implemented electronic health records system-wide.",
    },
    {
      year: "2024",
      title: "AI-Powered Diagnostics",
      description: "Integrated artificial intelligence tools for enhanced diagnostic accuracy and patient care.",
    },
  ]

  const leadership = [
    {
      name: "Dr. Sarah Mitchell",
      position: "Chief Executive Officer",
      credentials: "MD, MBA, FACHE",
      image: "/images/leadership/ceo.png",
      bio: "Dr. Mitchell brings over 20 years of healthcare leadership experience, having previously served as CMO at Regional Medical Center. She holds an MD from Johns Hopkins and an MBA from Wharton.",
      specialties: ["Healthcare Administration", "Strategic Planning", "Quality Improvement"],
    },
    {
      name: "Dr. Michael Chen",
      position: "Chief Medical Officer",
      credentials: "MD, FACP, FHIMSS",
      image: "/images/leadership/cmo.png",
      bio: "A board-certified internist with expertise in clinical informatics, Dr. Chen leads our medical staff and quality initiatives. He has published over 50 peer-reviewed articles.",
      specialties: ["Internal Medicine", "Clinical Informatics", "Quality Assurance"],
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Chief of Surgery",
      credentials: "MD, FACS, FCCM",
      image: "/images/leadership/surgery.png",
      bio: "Dr. Rodriguez is a renowned surgeon specializing in minimally invasive procedures. She has performed over 3,000 successful surgeries and leads our surgical excellence program.",
      specialties: ["General Surgery", "Laparoscopic Surgery", "Trauma Surgery"],
    },
    {
      name: "James Thompson",
      position: "Chief Financial Officer",
      credentials: "CPA, MBA, FHFMA",
      image: "/images/leadership/cfo.png",
      bio: "With 15 years in healthcare finance, James ensures fiscal responsibility while supporting our mission of accessible healthcare. He previously worked at Fortune 500 healthcare systems.",
      specialties: ["Healthcare Finance", "Strategic Planning", "Operations Management"],
    },
    {
      name: "Dr. Lisa Park",
      position: "Chief Nursing Officer",
      credentials: "RN, MSN, NEA-BC",
      image: "/images/leadership/cno.png",
      bio: "Dr. Park leads our nursing excellence initiatives and oversees 400+ nursing professionals. She's a recognized leader in patient safety and nursing education.",
      specialties: ["Nursing Leadership", "Patient Safety", "Quality Improvement"],
    },
    {
      name: "Robert Williams",
      position: "Chief Technology Officer",
      credentials: "MS, CISSP, HIMSS Fellow",
      image: "/images/leadership/cto.png",
      bio: "Robert spearheads our digital transformation initiatives and cybersecurity programs. He has 18 years of experience in healthcare IT and holds multiple certifications.",
      specialties: ["Healthcare IT", "Cybersecurity", "Digital Innovation"],
    },
  ]

  const achievements = [
    {
      title: "Joint Commission Accreditation",
      description: "Gold Seal of Approval for quality and safety standards",
      icon: Award,
    },
    {
      title: "Magnet Recognition",
      description: "Highest honor for nursing excellence and patient care",
      icon: Shield,
    },
    {
      title: "Top 100 Hospital",
      description: "Recognized nationally for clinical excellence and patient satisfaction",
      icon: Heart,
    },
    {
      title: "Community Choice Award",
      description: "Voted best hospital by community members for 5 consecutive years",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-foreground">About MedCare Hospital</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over 25 years, we have been dedicated to providing exceptional healthcare services to our community
              with compassion, innovation, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To provide exceptional healthcare services with compassion, integrity, and excellence, ensuring every
                  patient receives personalized care that promotes healing, wellness, and dignity. We are committed to
                  advancing medical knowledge and improving community health outcomes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="font-serif text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be the leading healthcare provider in our region, recognized for innovation, quality care, and
                  positive patient outcomes. We envision a healthier community where everyone has access to world-class
                  medical care and preventive health services.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-serif text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Compassion:</strong> We treat every patient with empathy and kindness.
                  <br />
                  <strong>Excellence:</strong> We strive for the highest standards in everything we do.
                  <br />
                  <strong>Integrity:</strong> We act with honesty and transparency.
                  <br />
                  <strong>Innovation:</strong> We embrace new technologies and methods.
                  <br />
                  <strong>Respect:</strong> We value diversity and treat everyone with dignity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hospital History Timeline */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a leading healthcare institution, our journey reflects our commitment
              to continuous improvement and community service.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="p-6">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="font-semibold">
                            {milestone.year}
                          </Badge>
                        </div>
                        <CardTitle className="font-serif text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative flex items-center justify-center w-4 h-4">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">Awards & Recognitions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading healthcare organizations and our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{achievement.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who guide our mission and ensure the highest standards of patient care
              and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src={leader.image || `/placeholder.svg?height=400&width=400&text=${leader.name.split(" ")[0]}`}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{leader.position}</CardDescription>
                  <CardDescription className="text-sm text-muted-foreground">{leader.credentials}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {leader.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
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
            <h2 className="font-serif font-bold text-3xl lg:text-4xl">Join Our Mission</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Whether you're seeking exceptional healthcare services or looking to join our team of dedicated
              professionals, we invite you to be part of our commitment to caring beyond cure.
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
                <Users className="w-5 h-5" />
                Career Opportunities
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
              <h3 className="font-serif font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="/departments" className="hover:text-primary transition-colors">
                    Emergency Care
                  </a>
                </li>
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
                  <MapPin className="w-4 h-4" />
                  123 Healthcare Ave
                </p>
                <p className="ml-6">Medical City, MC 12345</p>
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
