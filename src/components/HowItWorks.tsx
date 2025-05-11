
import React from 'react';
import { cn } from '@/lib/utils';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: StepProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-start">
      <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shrink-0 text-navy font-display text-xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 font-display text-navy">{title}</h3>
        <p className="text-navy/70">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-16 bg-accent-purple/10" id="how-it-works">
      <div className="container px-4 sm:px-8 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy mb-4">How Bheem Boy Works</h2>
          <p className="text-navy/70 max-w-xl mx-auto">It's as easy as 1-2-3 to get the comfort you deserve!</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-10">
          <Step 
            number={1} 
            title="Choose Your Service" 
            description="Select from our menu of comfort services. Want to be rocked to sleep? Carried around? We've got you covered."
          />
          <Step 
            number={2} 
            title="Meet Your Bheem Boy" 
            description="We'll match you with one of our strong, gentle giants who specializes in your desired comfort service."
          />
          <Step 
            number={3} 
            title="Experience the Comfort" 
            description="Relax and let go as you experience the childhood comforts you've been missing, sized just right for your adult self."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
