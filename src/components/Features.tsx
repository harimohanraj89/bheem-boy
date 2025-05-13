
import React from 'react';
import { cn } from '@/lib/utils';
import { RocketIcon, ShieldIcon, BedIcon, HeartIcon } from 'lucide-react';

import rocking from '../assets/rocking.png';
import walking from '../assets/walking.png';
import monsters from '../assets/monsters.png';
import burping from '../assets/burping.png';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  imgSrc?: string;
}

const FeatureCard = ({ title, description, icon, className, imgSrc }: FeatureCardProps) => {
  return (
    <div className={cn("bg-cardBg rounded-xl p-6 shadow-sm border border-primary/10", className)}>
      {imgSrc && (
        <div className="mb-4 rounded-lg overflow-hidden h-60">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 font-display text-navy">{title}</h3>
      <p className="text-navy/70">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="container px-4 sm:px-8 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy mb-4">Our Comfort Services</h2>
          <p className="text-navy/70 max-w-xl mx-auto">Experience the joy of being cared for like a child again, without the embarrassment (we're all adults here!)</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Rock-a-Bye Adult"
            description="Be gently rocked to sleep in our oversized rocking chairs by a trained Bheem Boy."
            icon={<BedIcon size={24} />}
            imgSrc={rocking}
          />
          <FeatureCard
            title="Up We Go!"
            description="Too tired to walk? Our Bheem Boys will carry you anywhere you need to go."
            icon={<RocketIcon size={24} />}
            imgSrc={walking}
          />
          <FeatureCard
            title="Safe & Sound"
            description="Experience total security as our Bheem Boys check under your bed for monsters."
            icon={<ShieldIcon size={24} />}
            imgSrc={monsters}
          />
          <FeatureCard
            title="Belly Burps"
            description="After a big meal, get the satisfying back pats and burps you've been missing."
            icon={<HeartIcon size={24} />}
            imgSrc={burping}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
