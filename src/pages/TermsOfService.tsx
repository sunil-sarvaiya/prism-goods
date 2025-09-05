import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terms of Service - EcommerceApp"
        description="Read our terms of service to understand the rules and guidelines for using EcommerceApp's services."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Last updated: January 1, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground">
                      By accessing and using EcommerceApp's website and services, you accept and agree to be bound 
                      by the terms and provision of this agreement. If you do not agree to abide by the above, 
                      please do not use this service.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                    <p className="text-muted-foreground mb-4">
                      Permission is granted to temporarily download one copy of the materials on EcommerceApp's 
                      website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                      not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
                    <p className="text-muted-foreground mb-4">
                      When you create an account with us, you must provide information that is accurate, complete, 
                      and current at all times. You are responsible for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Safeguarding the password and all activities under your account</li>
                      <li>Notifying us immediately of any unauthorized use of your account</li>
                      <li>Ensuring your account information remains accurate and up-to-date</li>
                      <li>Maintaining the confidentiality of your account credentials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">4. Product Information</h2>
                    <p className="text-muted-foreground mb-4">
                      We strive to provide accurate product information, but we do not warrant that product 
                      descriptions or other content is accurate, complete, reliable, or error-free. We reserve 
                      the right to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Correct any errors or inaccuracies in product information</li>
                      <li>Update product descriptions and pricing</li>
                      <li>Discontinue products without notice</li>
                      <li>Limit quantities available for purchase</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">5. Orders and Payment</h2>
                    <p className="text-muted-foreground mb-4">
                      All orders are subject to acceptance and availability. We reserve the right to refuse or 
                      cancel your order at any time for certain reasons including but not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Product or service availability</li>
                      <li>Errors in the description or price of the product or service</li>
                      <li>Errors in your order</li>
                      <li>Suspected fraudulent activity</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      Payment must be received by us before we can process your order. We accept various payment 
                      methods as displayed on our website.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">6. Shipping and Delivery</h2>
                    <p className="text-muted-foreground mb-4">
                      We will make every effort to deliver products within the estimated timeframe. However, 
                      delivery times may vary due to factors beyond our control. We are not liable for any 
                      delays in delivery caused by:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Weather conditions</li>
                      <li>Transportation delays</li>
                      <li>Customs clearance</li>
                      <li>Force majeure events</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">7. Returns and Refunds</h2>
                    <p className="text-muted-foreground">
                      Our return policy is detailed in our Returns page. Returns must be initiated within 30 days 
                      of delivery and items must be in original condition. Refunds will be processed to the original 
                      payment method within 5-7 business days after we receive the returned item.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">8. Prohibited Uses</h2>
                    <p className="text-muted-foreground mb-4">
                      You may not use our service for any unlawful purpose or to solicit others to perform unlawful 
                      acts. You may not use our service in any manner that could damage, disable, overburden, or 
                      impair our servers or networks. Prohibited activities include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Violating any applicable laws or regulations</li>
                      <li>Transmitting viruses or malicious code</li>
                      <li>Attempting to gain unauthorized access to our systems</li>
                      <li>Interfering with the proper functioning of our service</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">9. Intellectual Property</h2>
                    <p className="text-muted-foreground">
                      The service and its original content, features, and functionality are and will remain the 
                      exclusive property of EcommerceApp and its licensors. The service is protected by copyright, 
                      trademark, and other laws. Our trademarks may not be used without our prior written consent.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
                    <p className="text-muted-foreground">
                      In no event shall EcommerceApp, nor its directors, employees, partners, agents, suppliers, 
                      or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                      damages, including without limitation, loss of profits, data, use, goodwill, or other 
                      intangible losses, resulting from your use of the service.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                    <p className="text-muted-foreground">
                      These Terms shall be interpreted and governed by the laws of India, without regard to its 
                      conflict of law provisions. Any disputes arising from these terms will be subject to the 
                      exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
                    <p className="text-muted-foreground">
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                      If a revision is material, we will try to provide at least 30 days notice prior to any new 
                      terms taking effect. Your continued use of the service after any changes constitutes acceptance 
                      of the new Terms.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: legal@ecommerceapp.com</p>
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
