import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "About Us", url: "/about" },
        { name: "Contact", url: "/contact" },
        { name: "Mission", url: "/mission" }
      ]
    },
    {
      title: "Customer Service",
      links: [
        { name: "Help Center", url: "/help" },
        { name: "Returns", url: "/returns" },
        { name: "Shipping Info", url: "/shipping" },
        { name: "Track Order", url: "/track-order" },
        { name: "Size Guide", url: "/size-guide" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Careers", url: "/careers" },
        { name: "Press", url: "/press" },
        { name: "Sitemap", url: "/sitemap" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" },
        { name: "Cookie Policy", url: "/cookies" }
      ]
    },
    {
      title: "Account",
      links: [
        { name: "Login", url: "/login" },
        { name: "Register", url: "/register" }
      ]
    },
    {
      title: "Product Categories",
      links: [
        { name: "Mobiles", url: "/products?category=mobiles" },
        { name: "Electronics", url: "/products?category=electronics" },
        { name: "Laptops", url: "/products?category=laptops" },
        { name: "Fashion", url: "/products?category=fashion" },
        { name: "Home", url: "/products?category=home" },
        { name: "Gaming", url: "/products?category=gaming" },
        { name: "Books", url: "/products?category=books" },
        { name: "Beauty", url: "/products?category=beauty" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sitemap - EcommerceApp"
        description="Find all pages and sections of EcommerceApp website. Navigate easily through our complete site structure."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Sitemap
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find all pages and sections of our website. Navigate easily through our complete site structure.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sitemapSections.map((section, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                      <ul className="space-y-2">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link 
                              to={link.url} 
                              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                            >
                              {link.name}
                              <ExternalLink className="h-3 w-3" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
                  <p className="text-muted-foreground mb-6">
                    If you can't find the page you're looking for, try using our search function or contact our support team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/help">
                      <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                        Help Center
                      </button>
                    </Link>
                    <Link to="/contact">
                      <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
