import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy - EcommerceApp"
        description="Learn how EcommerceApp collects, uses, and protects your personal information. Your privacy is important to us."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Last updated: January 1, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                        <p className="text-muted-foreground">
                          We collect information you provide directly to us, such as when you create an account, 
                          make a purchase, or contact us for support. This may include:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                          <li>Name, email address, and phone number</li>
                          <li>Billing and shipping addresses</li>
                          <li>Payment information (processed securely through third-party providers)</li>
                          <li>Account preferences and settings</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Usage Information</h3>
                        <p className="text-muted-foreground">
                          We automatically collect certain information about your use of our services, including:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                          <li>Device information and browser type</li>
                          <li>IP address and location data</li>
                          <li>Pages visited and time spent on our site</li>
                          <li>Search queries and product interactions</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                    <p className="text-muted-foreground mb-4">
                      We use the information we collect to provide, maintain, and improve our services:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Process and fulfill your orders</li>
                      <li>Provide customer support and respond to inquiries</li>
                      <li>Send you important updates about your orders and account</li>
                      <li>Personalize your shopping experience and recommendations</li>
                      <li>Improve our website and services</li>
                      <li>Prevent fraud and ensure security</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                    <p className="text-muted-foreground mb-4">
                      We do not sell, trade, or rent your personal information to third parties. We may share 
                      your information in the following limited circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>With service providers who assist us in operating our business (shipping, payment processing)</li>
                      <li>When required by law or to protect our rights and safety</li>
                      <li>In connection with a business transfer or acquisition</li>
                      <li>With your explicit consent</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                    <p className="text-muted-foreground mb-4">
                      We implement appropriate security measures to protect your personal information against 
                      unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure servers and databases</li>
                      <li>Regular security audits and updates</li>
                      <li>Limited access to personal information</li>
                      <li>Employee training on data protection</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                    <p className="text-muted-foreground mb-4">
                      You have certain rights regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Access and update your account information</li>
                      <li>Request a copy of your personal data</li>
                      <li>Request deletion of your personal data</li>
                      <li>Opt out of marketing communications</li>
                      <li>Withdraw consent for data processing</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      To exercise these rights, please contact us at privacy@ecommerceapp.com
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
                    <p className="text-muted-foreground mb-4">
                      We use cookies and similar technologies to enhance your experience on our website. 
                      Cookies help us:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Remember your preferences and settings</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Provide personalized content and recommendations</li>
                      <li>Improve website performance and functionality</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      You can control cookie settings through your browser preferences. However, disabling 
                      cookies may affect the functionality of our website.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
                    <p className="text-muted-foreground mb-4">
                      Our website may contain links to third-party websites or services. We are not responsible 
                      for the privacy practices of these third parties. We encourage you to review their privacy 
                      policies before providing any personal information.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                    <p className="text-muted-foreground">
                      Our services are not intended for children under 13 years of age. We do not knowingly 
                      collect personal information from children under 13. If we become aware that we have 
                      collected personal information from a child under 13, we will take steps to delete 
                      such information.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                    <p className="text-muted-foreground">
                      We may update this Privacy Policy from time to time. We will notify you of any changes 
                      by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                      We encourage you to review this Privacy Policy periodically for any changes.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
