
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="bg-cloudy py-16 sm:py-24 md:py-32">
      <div className="container px-4 sm:px-8 mx-auto flex flex-col items-center text-center">
        <div className="animate-floating">
          <div className="inline-flex px-4 py-2 rounded-full bg-secondary/20 text-navy font-medium text-sm mb-6">
            <span>The adult comfort service you never knew you needed!</span>
          </div>
        </div>
        
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-navy mb-6 max-w-4xl leading-tight">
          Return to <span className="text-primary">Childhood</span>
          <br /> One Comfort at a Time
        </h1>
        
        <p className="text-lg sm:text-xl text-navy/80 max-w-2xl mb-10">
          Bheem Boy offers adult-sized child-like comforts. Book a strong adult to rock you to sleep, burp you after meals, or carry you when you're tired.
        </p>
        
        <div className="bg-accent-purple/20 rounded-xl py-4 px-6 inline-flex items-center">
          <span className="text-navy/90 font-medium animate-wiggle mr-2">👉</span> 
          <span className="font-medium">Coming to coddle you soon! (Not a real service)</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
