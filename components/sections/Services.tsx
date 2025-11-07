'use client';

import React from 'react';
import { Typography } from '../ui/Typography';
import { Container } from '../layout/Container';
import { SlideUp } from '../animations/SlideUp';

const services = [
  {
    title: 'DISCOVER',
    description: 'Strategic discovery and market analysis. We map territory between ambitious vision and executable reality—understanding objectives, identifying constraints, designing experiences that move audiences while staying operationally achievable.',
    bg: 'bg-white text-black',
  },
  {
    title: 'DESIGN',
    description: 'Concept development backed by technical feasibility. Environmental design, experience mapping, visual identity creation, and journey architecture. Every element serves strategic objectives while maintaining creative integrity.',
    bg: 'bg-black text-white',
  },
  {
    title: 'DEVELOP',
    description: 'Production execution where vision becomes tangible. Steel, pixels, fabric, circuits—whatever the medium, we engineer it at scale. Our teams build festival infrastructure, branded environments, custom platforms, and installations that shouldn&apos;t technically work but absolutely do.',
    bg: 'bg-white text-black',
  },
  {
    title: 'DELIVER',
    description: 'Project management as operational excellence. Load-in schedules, vendor coordination, permit acquisition, contingency planning. We&apos;ve managed simultaneous productions across continents and solved 3 AM problems that would break other crews.',
    bg: 'bg-black text-white',
  },
  {
    title: 'DIRECT',
    description: 'On-site technical direction and real-time problem solving. Our teams supervise every detail from first truck arrival to final strike, ensuring execution matches design intent and client expectations.',
    bg: 'bg-white text-black',
  },
  {
    title: 'DISRUPT',
    description: 'Innovation without recklessness. We deploy emerging technologies ahead of adoption curves, create experiences that set new industry standards, and push boundaries with proper engineering documentation and adequate insurance coverage.',
    bg: 'bg-black text-white',
  },
  {
    title: 'DOMINATE',
    description: 'Post-event analysis and continuous improvement. Performance metrics, lessons learned, evolution planning. Results that speak louder than promises—delivered on time, within budget, as specified.',
    bg: 'bg-white text-black',
  },
];

export function Services() {
  return (
    <section className="py-0">
      {services.map((service) => (
        <div key={service.title} className={`min-h-screen flex items-center ${service.bg}`}>
          <Container>
            <SlideUp delay={0.2}>
              <div className="max-w-4xl">
                <Typography variant="h1" uppercase className="mb-8">
                  {service.title}
                </Typography>
                <Typography variant="body" className="text-xl leading-relaxed">
                  {service.description}
                </Typography>
              </div>
            </SlideUp>
          </Container>
        </div>
      ))}
    </section>
  );
}
