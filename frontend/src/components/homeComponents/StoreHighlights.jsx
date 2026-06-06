import React, { useState, useEffect } from 'react';

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

const TARGET = new Date(Date.now() + 12 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000 + 45 * 60 * 1000);

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-noble-primary text-white w-16 h-16 flex items-center justify-center text-2xl font-serif rounded-sm shadow-lg">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-[9px] uppercase tracking-[0.2em] text-noble-secondary mt-2 font-medium">{label}</span>
    </div>
  );
}

export default function StoreHighlights() {
  const time = useCountdown(TARGET);

  return (
    <section className="bg-noble-bg py-28" id="collections">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-sm shadow-2xl">
          
          {/* Left: Image */}
          <div className="relative overflow-hidden h-[500px] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85"
              alt="Exclusive Jewelry Offer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-noble-primary/30 to-transparent"></div>
          </div>

          {/* Right: Content */}
          <div className="bg-white flex flex-col items-start justify-center p-12 md:p-16">
            <p className="text-noble-accent text-xs uppercase tracking-[0.35em] font-semibold mb-6">
              Limited Time Offer
            </p>
            <h2 className="text-5xl md:text-6xl font-serif text-noble-primary mb-5 leading-tight">
              Exclusive <span className="italic font-light">20% Off</span>
            </h2>
            <p className="text-sm text-noble-secondary leading-relaxed mb-10 max-w-sm">
              Discover unparalleled elegance. Enjoy an additional 20% off all premium pieces for a limited time only. Offer ends when the timer hits zero.
            </p>

            {/* Live Countdown */}
            <div className="flex gap-4 mb-12">
              <TimeBlock value={time.days} label="Days" />
              <TimeBlock value={time.hours} label="Hours" />
              <TimeBlock value={time.minutes} label="Mins" />
              <TimeBlock value={time.seconds} label="Secs" />
            </div>

            <button className="bg-noble-primary text-white hover:bg-noble-accent transition-all duration-500 px-12 py-4 text-xs uppercase tracking-[0.2em] rounded-sm shadow-lg hover:-translate-y-1 hover:shadow-xl font-semibold">
              Explore Offer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}