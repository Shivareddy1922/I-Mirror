import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const IntroCarousel = (): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: "Anonymous Feedback",
      description: "Receive honest and anonymous feedback from people who know you best!",
      icon: "https://c.animaapp.com/mcx4tn3jwyabUV/img/image-15.png"
    },
    {
      id: 2,
      title: "Therapists & Coaches",
      description: "Connect with professional therapists and certified coaches who can guide your personal development journey with expert insights.",
      icon: "https://c.animaapp.com/mcx4tn3jwyabUV/img/image-17.png"
    },
    {
      id: 3,
      title: "Grow Yourself Better",
      description: "Transform feedback into actionable growth plans. Track your progress and become the best version of yourself with personalized insights.",
      icon: "https://c.animaapp.com/mcx4tn3jwyabUV/img/image-19.png"
    }
  ];

  // Handle slide change
  const goToSlide = (index: number) => {
    setActiveSlide(index);
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  // Handle scroll event to update active slide
  const handleScroll = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth;
      const scrollPosition = carouselRef.current.scrollLeft;
      const newActiveSlide = Math.round(scrollPosition / slideWidth);
      
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
      }
    }
  };

  // Auto scroll slides every 2 seconds
  const autoScroll = useCallback(() => {
    const nextSlide = (activeSlide + 1) % slides.length;
    goToSlide(nextSlide);
  }, [activeSlide, slides.length]);

  useEffect(() => {
    const autoScrollTimer = setInterval(autoScroll, 2000);
    return () => clearInterval(autoScrollTimer);
  }, [autoScroll]);

  // Add scroll event listener
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [activeSlide]);

  // Handle get started button click
  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)] w-full max-w-[390px] min-h-screen sm:h-[844px] relative overflow-hidden">
        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="absolute w-full h-[500px] top-[100px] sm:top-[150px] flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className="min-w-full h-full flex-shrink-0 flex justify-center items-start snap-center"
            >
              <Card className="w-full max-w-[327px] h-[404px] mx-4 sm:mx-0 bg-new-fill-ffffff rounded-[43px] shadow-drop-shadow-radius-24 border-none">
                <CardContent className="p-0 h-full relative">
                  <img
                    className="absolute w-[65px] h-[65px] top-[30px] left-1/2 -translate-x-1/2 object-cover"
                    alt={`${slide.title} icon`}
                    src={slide.icon}
                  />

                  <h2 className="absolute w-full top-[120px] text-center font-heading font-[number:var(--heading-font-weight)] text-new-fill-000000 text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)] shadow-background-blur-radius-4">
                    {slide.title}
                  </h2>

                  <p className="absolute w-[250px] top-[180px] left-1/2 -translate-x-1/2 text-center font-body-base font-[number:var(--body-base-font-weight)] text-black text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
                    {slide.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="absolute w-full h-11 bottom-[200px] sm:bottom-[230px] flex justify-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-2 relative rounded-[50px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
            <div className="absolute w-16 h-6 top-0 left-0 bg-new-fill-bfbfbf rounded-[100px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] shadow-material-blur" />

            {slides.map((_, index) => (
              <div
                key={`dot-${index}`}
                className={`relative w-2 h-2 bg-black rounded-[50px] cursor-pointer ${index !== activeSlide ? "opacity-30" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <Button 
          className="flex w-full max-w-[272px] h-[49px] items-center justify-center gap-2 p-3 absolute bottom-[80px] sm:bottom-[120px] left-1/2 -translate-x-1/2 mx-4 sm:mx-0 bg-new-fill-74a4ee rounded-[25px] overflow-hidden border border-solid border-[#7fabef] shadow-[0px_7px_16px_#0000001a,0px_30px_30px_#00000017,0px_67px_40px_#0000000d,0px_120px_48px_#00000003,0px_187px_52px_transparent] hover:bg-new-fill-74a4ee"
          variant="default"
          onClick={handleGetStarted}
        >
          <span className="font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-neutral-100 text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
            Get Started
          </span>
        </Button>
      </div>
    </div>
  );
};
