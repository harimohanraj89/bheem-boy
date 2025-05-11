
import React from 'react';

const ComingSoon = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container px-4 sm:px-8 mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-accent-pink/10 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy mb-4">Coming Soon to Your Comfort Zone</h2>
          <p className="text-lg text-navy/70 mb-6 max-w-xl mx-auto">
            Bheem Boy is preparing to launch! Our gentle giants are flexing their muscles and practicing their lullabies.
          </p>
          <div className="inline-flex items-center px-5 py-3 rounded-full bg-secondary/30 text-navy font-medium">
            <span className="mr-2">🚀</span> Launch Expected: When Adults Need Comfort Most
          </div>
          <p className="text-sm text-navy/50 mt-8">
            ⚠️ Disclaimer: Bheem Boy is a satirical service meant to remind adults of their inner child. No actual services are provided.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
