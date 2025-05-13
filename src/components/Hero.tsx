
import React from 'react';
import { cn } from '@/lib/utils';
import smiling from '../assets/smiling.png';

const Hero = () => {
  return (
    <section className="bg-cloudy py-16 sm:py-24 md:py-32">
      <div className="container px-4 sm:px-8 mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <div className="animate-floating">
            <div className="inline-flex px-4 py-2 rounded-full bg-secondary/20 text-navy font-medium text-sm mb-6">
              <span>The adult comfort service you never knew you needed!</span>
            </div>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-navy mb-6 max-w-4xl leading-tight">
            <span className="text-primary">Bheem Boy</span> Services
          </h1>

          <p className="text-lg sm:text-xl text-navy/80 max-w-2xl mb-10">
            Babies have it easy. They get carried, changed, burped, rocked... the list goes on.
            They get to live life in the warm safe arms of a giant human. Why can't you have the same?
            <span className="text-primary"> <strong>You deserve to be pampered</strong></span>.
          </p>

          <div className="bg-accent-purple/20 rounded-xl py-4 px-6 inline-flex items-center">
            <span className="text-navy/90 font-medium animate-wiggle mr-2">👉</span>
            <span className="font-medium">Coming to coddle you soon! (Not a real service)</span>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-md">
            <img
              src={smiling}
              alt="Bheem Boy - Strong and Gentle"
              className="w-full h-auto object-cover aspect-[3/4]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/70 to-transparent py-4 px-6">
              <p className="text-white font-display font-medium">Your Gentle Giant Awaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
