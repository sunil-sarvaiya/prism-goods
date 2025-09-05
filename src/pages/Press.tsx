import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink, Download, Mail } from 'lucide-react';

export default function Press() {
  const pressReleases = [
    {
      id: 1,
      title: "EcommerceApp Raises $10M Series A Funding",
      date: "2024-01-15",
      summary: "Leading e-commerce platform secures funding to expand operations and enhance customer experience.",
      category: "Funding"
    },
    {
      id: 2,
      title: "EcommerceApp Launches Same-Day Delivery in 5 Major Cities",
      date: "2024-01-10",
      summary: "New delivery service promises to revolutionize online shopping with lightning-fast delivery options.",
      category: "Product Launch"
    },
    {
      id: 3,
      title: "EcommerceApp Partners with 100+ Local Brands",
      date: "2024-01-05",
      summary: "Strategic partnerships bring unique local products to customers nationwide.",
      category: "Partnership"
    }
  ];

  const mediaCoverage = [
    {
      id: 1,
      title: "EcommerceApp: The Future of Online Shopping in India",
      outlet: "TechCrunch India",
      date: "2024-01-20",
      type: "Feature Article"
    },
    {
      id: 2,
      title: "How EcommerceApp is Disrupting Traditional Retail",
      outlet: "Economic Times",
      date: "2024-01-18",
      type: "Business News"
    },
    {
      id: 3,
      title: "EcommerceApp's AI-Powered Recommendations Drive Sales",
      outlet: "Mint",
      date: "2024-01-16",
      type: "Technology"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Press - EcommerceApp"
        description="Latest news, press releases, and media coverage about EcommerceApp. Stay updated with our company announcements and achievements."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Press & Media
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stay updated with the latest news, announcements, and media coverage about EcommerceApp.
              </p>
            </div>
          </div>
        </section>

        {/* Press Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-12">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Press Contact</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4">Media Inquiries</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <span>press@ecommerceapp.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <span>media@ecommerceapp.com</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Press Kit</h3>
                      <p className="text-muted-foreground mb-4">
                        Download our press kit containing logos, images, and company information.
                      </p>
                      <Button>
                        <Download className="h-4 w-4 mr-2" />
                        Download Press Kit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Press Releases</h2>
              <div className="space-y-6">
                {pressReleases.map((release) => (
                  <Card key={release.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{release.category}</Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {new Date(release.date).toLocaleDateString()}
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-3">{release.title}</h3>
                          <p className="text-muted-foreground mb-4">{release.summary}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <Button variant="outline">
                            Read More
                            <ExternalLink className="h-4 w-4 ml-2" />
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

        {/* Media Coverage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Media Coverage</h2>
              <div className="space-y-6">
                {mediaCoverage.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{article.type}</Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {new Date(article.date).toLocaleDateString()}
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                          <p className="text-primary font-medium">{article.outlet}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <Button variant="outline">
                            Read Article
                            <ExternalLink className="h-4 w-4 ml-2" />
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

        {/* Company Facts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Company Facts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Founded</h3>
                    <p className="text-muted-foreground">2020</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Headquarters</h3>
                    <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Employees</h3>
                    <p className="text-muted-foreground">50+ team members</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Customers</h3>
                    <p className="text-muted-foreground">1M+ active users</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Products</h3>
                    <p className="text-muted-foreground">50K+ products across 8 categories</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Delivery</h3>
                    <p className="text-muted-foreground">Pan India with same-day delivery in major cities</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Funding</h3>
                    <p className="text-muted-foreground">$10M Series A (2024)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Languages</h3>
                    <p className="text-muted-foreground">English, Hindi, and 8 regional languages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
