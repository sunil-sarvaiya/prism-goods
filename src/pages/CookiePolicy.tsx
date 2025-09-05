import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cookie Policy - EcommerceApp"
        description="Learn about how EcommerceApp uses cookies and similar technologies to enhance your browsing experience."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Last updated: January 1, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                    <p className="text-muted-foreground">
                      Cookies are small text files that are placed on your computer or mobile device when you visit 
                      our website. They are widely used to make websites work more efficiently and to provide 
                      information to website owners about how users interact with their sites.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
                    <p className="text-muted-foreground mb-4">
                      We use cookies for several purposes to enhance your experience on our website:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Remember your preferences and settings</li>
                      <li>Keep you signed in to your account</li>
                      <li>Remember items in your shopping cart</li>
                      <li>Analyze how you use our website</li>
                      <li>Provide personalized content and recommendations</li>
                      <li>Improve website performance and functionality</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                        <p className="text-muted-foreground">
                          These cookies are necessary for the website to function properly. They enable basic 
                          functions like page navigation, access to secure areas, and remembering your login status. 
                          The website cannot function properly without these cookies.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Performance Cookies</h3>
                        <p className="text-muted-foreground">
                          These cookies collect information about how visitors use our website, such as which 
                          pages are visited most often and if visitors get error messages. This helps us improve 
                          how our website works.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Functionality Cookies</h3>
                        <p className="text-muted-foreground">
                          These cookies allow the website to remember choices you make and provide enhanced, 
                          more personal features. They may also be used to provide services you have requested.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Targeting Cookies</h3>
                        <p className="text-muted-foreground">
                          These cookies are used to deliver advertisements more relevant to you and your interests. 
                          They may also be used to limit the number of times you see an advertisement and measure 
                          the effectiveness of advertising campaigns.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
                    <p className="text-muted-foreground mb-4">
                      You can control and manage cookies in various ways. Please note that removing or blocking 
                      cookies can impact your user experience and parts of our website may no longer be fully 
                      accessible or functional.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Browser Settings</h3>
                        <p className="text-muted-foreground">
                          Most web browsers allow you to control cookies through their settings preferences. 
                          You can set your browser to refuse cookies or delete certain cookies. However, 
                          if you choose to delete or refuse cookies, some features of our website may not 
                          function properly.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
                        <p className="text-muted-foreground">
                          When you first visit our website, you will see a cookie consent banner. You can 
                          choose to accept or decline non-essential cookies. You can change your preferences 
                          at any time by clicking on the cookie settings link in our website footer.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                    <p className="text-muted-foreground mb-4">
                      We may also use third-party cookies from trusted partners to provide additional functionality 
                      and services. These may include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Analytics services (Google Analytics)</li>
                      <li>Social media platforms (Facebook, Twitter, Instagram)</li>
                      <li>Payment processors (Stripe, PayPal)</li>
                      <li>Advertising networks</li>
                      <li>Customer support tools</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      These third parties have their own privacy policies and cookie practices. We encourage 
                      you to review their policies to understand how they use cookies.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                    <p className="text-muted-foreground">
                      We may update this Cookie Policy from time to time to reflect changes in our practices 
                      or for other operational, legal, or regulatory reasons. We will notify you of any 
                      material changes by posting the updated policy on our website and updating the "Last 
                      updated" date.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: privacy@ecommerceapp.com</p>
                      <p>Phone: +91 1800-123-4567</p>
                      <p>Address: Mumbai, Maharashtra, India 400001</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
