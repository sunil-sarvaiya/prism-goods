import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Ruler, Shirt, Footprints, Watch } from 'lucide-react';

export default function SizeGuide() {
  const sizeGuides = [
    {
      category: "Clothing",
      icon: Shirt,
      sizes: [
        { size: "XS", chest: "32-34", waist: "28-30", length: "26-27" },
        { size: "S", chest: "34-36", waist: "30-32", length: "27-28" },
        { size: "M", chest: "36-38", waist: "32-34", length: "28-29" },
        { size: "L", chest: "38-40", waist: "34-36", length: "29-30" },
        { size: "XL", chest: "40-42", waist: "36-38", length: "30-31" },
        { size: "XXL", chest: "42-44", waist: "38-40", length: "31-32" }
      ],
      measurements: "All measurements are in inches"
    },
    {
      category: "Shoes",
      icon: Footprints,
      sizes: [
        { size: "6", us: "6", uk: "5", eu: "39", cm: "24.5" },
        { size: "7", us: "7", uk: "6", eu: "40", cm: "25.5" },
        { size: "8", us: "8", uk: "7", eu: "41", cm: "26.5" },
        { size: "9", us: "9", uk: "8", eu: "42", cm: "27.5" },
        { size: "10", us: "10", uk: "9", eu: "43", cm: "28.5" },
        { size: "11", us: "11", uk: "10", eu: "44", cm: "29.5" }
      ],
      measurements: "Shoe sizes may vary by brand"
    },
    {
      category: "Watches",
      icon: Watch,
      sizes: [
        { size: "Small", diameter: "36-38mm", band: "18-20cm", fit: "Wrist 6-7 inches" },
        { size: "Medium", diameter: "40-42mm", band: "20-22cm", fit: "Wrist 7-8 inches" },
        { size: "Large", diameter: "44-46mm", band: "22-24cm", fit: "Wrist 8-9 inches" },
        { size: "Extra Large", diameter: "48-50mm", band: "24-26cm", fit: "Wrist 9+ inches" }
      ],
      measurements: "Watch sizes and band lengths"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Size Guide - EcommerceApp"
        description="Find the perfect fit with our comprehensive size guide for clothing, shoes, and accessories. Get accurate measurements and sizing information."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Size Guide
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find the perfect fit with our comprehensive size guide. Get accurate measurements and sizing information for all our products.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Ruler className="h-4 w-4 mr-2" />
                  Accurate Measurements
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Shirt className="h-4 w-4 mr-2" />
                  Multiple Categories
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Footprints className="h-4 w-4 mr-2" />
                  International Sizes
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Size Guides */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-12">
                {sizeGuides.map((guide, index) => {
                  const IconComponent = guide.icon;
                  return (
                    <Card key={index}>
                      <CardContent className="p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <h2 className="text-2xl font-bold">{guide.category}</h2>
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-3 font-semibold">Size</th>
                                {guide.category === "Clothing" && (
                                  <>
                                    <th className="text-left p-3 font-semibold">Chest (in)</th>
                                    <th className="text-left p-3 font-semibold">Waist (in)</th>
                                    <th className="text-left p-3 font-semibold">Length (in)</th>
                                  </>
                                )}
                                {guide.category === "Shoes" && (
                                  <>
                                    <th className="text-left p-3 font-semibold">US</th>
                                    <th className="text-left p-3 font-semibold">UK</th>
                                    <th className="text-left p-3 font-semibold">EU</th>
                                    <th className="text-left p-3 font-semibold">CM</th>
                                  </>
                                )}
                                {guide.category === "Watches" && (
                                  <>
                                    <th className="text-left p-3 font-semibold">Diameter</th>
                                    <th className="text-left p-3 font-semibold">Band Length</th>
                                    <th className="text-left p-3 font-semibold">Fit</th>
                                  </>
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              {guide.sizes.map((size, sizeIndex) => (
                                <tr key={sizeIndex} className="border-b hover:bg-muted/30">
                                  <td className="p-3 font-medium">{size.size}</td>
                                  {guide.category === "Clothing" && (
                                    <>
                                      <td className="p-3">{size.chest}</td>
                                      <td className="p-3">{size.waist}</td>
                                      <td className="p-3">{size.length}</td>
                                    </>
                                  )}
                                  {guide.category === "Shoes" && (
                                    <>
                                      <td className="p-3">{size.us}</td>
                                      <td className="p-3">{size.uk}</td>
                                      <td className="p-3">{size.eu}</td>
                                      <td className="p-3">{size.cm}</td>
                                    </>
                                  )}
                                  {guide.category === "Watches" && (
                                    <>
                                      <td className="p-3">{size.diameter}</td>
                                      <td className="p-3">{size.band}</td>
                                      <td className="p-3">{size.fit}</td>
                                    </>
                                  )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mt-4">
                          {guide.measurements}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Measuring Guide */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How to Measure</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Clothing Measurements</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Chest</h4>
                        <p className="text-sm text-muted-foreground">
                          Measure around the fullest part of your chest, keeping the tape measure horizontal.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Waist</h4>
                        <p className="text-sm text-muted-foreground">
                          Measure around your natural waistline, which is typically the narrowest part of your torso.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Length</h4>
                        <p className="text-sm text-muted-foreground">
                          For shirts, measure from the base of the collar to the bottom hem.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Shoe Measurements</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Foot Length</h4>
                        <p className="text-sm text-muted-foreground">
                          Stand on a piece of paper and mark the longest point of your foot. Measure from heel to toe.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Foot Width</h4>
                        <p className="text-sm text-muted-foreground">
                          Measure the widest part of your foot across the ball of your foot.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Best Time to Measure</h4>
                        <p className="text-sm text-muted-foreground">
                          Measure your feet at the end of the day when they are at their largest.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Size Guide Tips</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Ruler className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Measure Accurately</h3>
                    <p className="text-muted-foreground">
                      Use a flexible measuring tape and measure over thin clothing for the most accurate results.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shirt className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Check Brand Differences</h3>
                    <p className="text-muted-foreground">
                      Different brands may have slightly different sizing. Always check the specific brand's size chart.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Footprints className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Consider Fit Preference</h3>
                    <p className="text-muted-foreground">
                      Some people prefer a looser fit while others like a more fitted look. Adjust accordingly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-deal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                If you're still unsure about sizing, our customer service team is here to help you find the perfect fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Contact Support
                </button>
                <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
