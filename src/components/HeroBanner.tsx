import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './ImageWithFallback';
import heroBannerImage from '@/assets/hero-banner.jpg';

const banners = [
  {
    id: 1,
    title: 'MEGA SALE',
    subtitle: 'Up to 80% OFF on Electronics',
    cta: 'Shop Now',
    image: heroBannerImage,
    bgGradient: 'from-deal via-deal-glow to-primary'
  },
  {
    id: 2,
    title: 'FLASH DEALS',
    subtitle: 'Limited Time Offers - Hurry Up!',
    cta: 'Grab Deal',
    image: heroBannerImage,
    bgGradient: 'from-primary via-primary-glow to-deal'
  },
  {
    id: 3,
    title: 'NEW ARRIVALS',
    subtitle: 'Latest Gadgets & Accessories',
    cta: 'Explore',
    image: heroBannerImage,
    bgGradient: 'from-success via-success-glow to-primary'
  }
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate banners
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds };
        }
        
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }
        
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const currentBanner = banners[currentSlide];

  return (
    <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl mx-4 md:mx-6 my-6">
      {/* Banner Content */}
      <div 
        className={`relative h-full w-full bg-gradient-to-r ${currentBanner.bgGradient} overflow-hidden`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src={currentBanner.image}
            alt={currentBanner.title}
            className="w-full h-full object-cover"
            showLoadingSpinner={false}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up">
                {currentBanner.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
                {currentBanner.subtitle}
              </p>
              
              {/* Countdown Timer */}
              <div className="flex items-center gap-4 mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <Clock className="h-5 w-5 text-white" />
                <div className="flex items-center gap-2 text-white font-mono">
                  <div className="bg-white/20 px-3 py-2 rounded-lg">
                    <span className="text-lg font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-xs block">Hours</span>
                  </div>
                  <span className="text-2xl">:</span>
                  <div className="bg-white/20 px-3 py-2 rounded-lg">
                    <span className="text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-xs block">Mins</span>
                  </div>
                  <span className="text-2xl">:</span>
                  <div className="bg-white/20 px-3 py-2 rounded-lg">
                    <span className="text-lg font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-xs block">Secs</span>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 animate-slide-up shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{animationDelay: '0.6s'}}
              >
                {currentBanner.cta}
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white h-12 w-12 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white h-12 w-12 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}