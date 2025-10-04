import { useEffect, useState } from "react";

const stats = [
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Happy Clients", value: 200, suffix: "+" },
  { label: "Years of Experience", value: 10, suffix: "+" },
  { label: "Team Members", value: 50, suffix: "+" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-heading font-bold text-4xl md:text-5xl gradient-text">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
