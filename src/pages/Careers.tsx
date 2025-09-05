import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Briefcase, ArrowRight } from 'lucide-react';

export default function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "We're looking for a talented Frontend Developer to join our engineering team and help build amazing user experiences.",
      requirements: ["React.js", "TypeScript", "CSS/SCSS", "Git"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead product strategy and work with cross-functional teams to deliver exceptional products to our customers.",
      requirements: ["Product Strategy", "Analytics", "User Research", "Agile"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      description: "Help our customers succeed and grow by providing exceptional support and building strong relationships.",
      requirements: ["Customer Service", "Communication", "Problem Solving", "CRM"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "UX Designer",
      department: "Design",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Create intuitive and beautiful user experiences that delight our customers and drive business growth.",
      requirements: ["Figma", "User Research", "Prototyping", "Design Systems"],
      posted: "5 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Careers - EcommerceApp"
        description="Join our team at EcommerceApp. We're looking for talented individuals to help us build the future of e-commerce."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're building the future of e-commerce and looking for passionate individuals to join us on this journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Users className="h-4 w-4 mr-2" />
                  50+ Team Members
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Remote Friendly
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  Mumbai & Remote
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Join EcommerceApp?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Great Culture</h3>
                    <p className="text-muted-foreground">
                      Work with a diverse, inclusive team that values collaboration, innovation, and work-life balance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
                    <p className="text-muted-foreground">
                      Take on new challenges, learn new skills, and advance your career with our growth-focused approach.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Flexible Work</h3>
                    <p className="text-muted-foreground">
                      Enjoy flexible working hours, remote work options, and a modern office environment in Mumbai.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Benefits & Perks</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Competitive salary and equity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Health insurance for you and your family</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Flexible working hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Remote work options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Learning and development budget</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Paid time off and holidays</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Team building activities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Modern office with great amenities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Free snacks and beverages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Employee discount program</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <Badge variant="outline">{job.department}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">{job.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {job.type}
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {job.experience}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {job.requirements.map((req, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">Posted {job.posted}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <Button>
                            Apply Now
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Don't See Your Role?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
              </p>
              <Button size="lg">
                Send Your Resume
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
