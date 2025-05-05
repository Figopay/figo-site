
import React, { useEffect, useState } from 'react';
import { Building2, CreditCard, MapPin, DollarSign } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  targetValue: number;
}

export const CounterStats = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  
  const stats: StatItem[] = [
    {
      icon: Building2,
      value: counts[0],
      targetValue: 2100,
      label: "Lojas",
      prefix: "+",
    },
    {
      icon: DollarSign,
      value: counts[1],
      targetValue: 150,
      label: "Milhões transacionados mês",
      prefix: "R$",
      suffix: "M",
    },
    {
      icon: CreditCard,
      value: counts[2],
      targetValue: 3800,
      label: "Equipamentos",
      prefix: "+",
    },
    {
      icon: MapPin,
      value: counts[3],
      targetValue: 10,
      label: "Estados",
    },
  ];

  useEffect(() => {
    const duration = 2000; // ms
    const frameRate = 60;
    const totalFrames = duration / (1000 / frameRate);
    
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
      
      setCounts(stats.map(stat => Math.round(stat.targetValue * easedProgress)));
      
      if (frame >= totalFrames) {
        clearInterval(interval);
      }
    }, 1000 / frameRate);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-figo-purple text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-figo-green" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {stat.prefix && <span>{stat.prefix}</span>}
                {stat.value.toLocaleString()}
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="text-lg text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 right-4 text-xs text-white/50">* Dados Payer</div>
      </div>
    </section>
  );
};
