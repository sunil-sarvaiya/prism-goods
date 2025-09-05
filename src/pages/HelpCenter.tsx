import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MessageCircle, Phone, Mail, ChevronRight, HelpCircle, ShoppingBag, Truck, CreditCard, Shield } from 'lucide-react';

export default function HelpCenter() {
  const faqCategories = [
    {
      id: 1,
      title: "Account & Orders",
      icon: ShoppingBag,
      questions: [
        {
          question: "How do I create an account?",
          answer: "Click on 'Sign Up' in the top right corner, enter your email and password, and verify your email address."
        },
        {
          question: "How can I track my order?",
          answer: "You can track your order by logging into your account and going to 'My Orders' or using the tracking number sent to your email."
        },
        {
          question: "Can I modify my order after placing it?",
          answer: "You can modify your order within 30 minutes of placing it. After that, you'll need to contact customer support."
        }
      ]
    },
    {
      id: 2,
      title: "Shipping & Delivery",
      icon: Truck,
      questions: [
        {
          question: "What are your shipping options?",
          answer: "We offer standard shipping (3-5 days), express shipping (1-2 days), and same-day delivery in select cities."
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently, we only ship within India. We're working on expanding our shipping options."
        },
        {
          question: "What if my package is damaged?",
          answer: "Contact us immediately with photos of the damage. We'll arrange for a replacement or refund."
        }
      ]
    },
    {
      id: 3,
      title: "Payments & Billing",
      icon: CreditCard,
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards, UPI, net banking, and digital wallets like Paytm, PhonePe, and Google Pay."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard encryption to protect your payment information. We never store your card details."
        },
        {
          question: "Can I get a refund?",
          answer: "Yes, we offer a 30-day return policy. You can return most items for a full refund or exchange."
        }
      ]
    },
    {
      id: 4,
      title: "Returns & Exchanges",
      icon: Shield,
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Items must be in original condition with tags attached."
        },
        {
          question: "How do I initiate a return?",
          answer: "Go to 'My Orders', select the item you want to return, and follow the return process. We'll provide a return label."
        },
        {
          question: "How long does it take to process a refund?",
          answer: "Refunds are typically processed within 5-7 business days after we receive your returned item."
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: "How to Track Your Order",
      category: "Orders",
      views: "12.5K"
    },
    {
      title: "Return Policy Guide",
      category: "Returns",
      views: "8.9K"
    },
    {
      title: "Payment Methods Accepted",
      category: "Payments",
      views: "7.2K"
    },
    {
      title: "Shipping Information",
      category: "Shipping",
      views: "6.8K"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Help Center - EcommerceApp"
        description="Get help with your orders, account, shipping, payments, and more. Find answers to common questions and contact our support team."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                How can we help you?
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find answers to common questions or get in touch with our support team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search for help articles, FAQs, or topics..."
                    className="pl-10 pr-4 py-3 text-lg"
                  />
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="lg">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Live Chat
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Popular Help Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularArticles.map((article, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-sm text-muted-foreground">{article.views} views</span>
                      </div>
                      <h3 className="font-semibold mb-2">{article.title}</h3>
                      <div className="flex items-center text-primary text-sm">
                        Read More
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {faqCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Card key={category.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-semibold">{category.title}</h3>
                        </div>
                        <div className="space-y-4">
                          {category.questions.map((faq, index) => (
                            <div key={index} className="border-l-4 border-primary pl-4">
                              <h4 className="font-medium mb-2">{faq.question}</h4>
                              <p className="text-muted-foreground">{faq.answer}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HelpCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
                  <p className="text-muted-foreground mb-8">
                    Can't find what you're looking for? Our support team is here to help you 24/7.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Start Live Chat
                    </Button>
                    <Button variant="outline" size="lg">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Email
                    </Button>
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
