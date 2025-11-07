'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Typography } from '../ui/Typography';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { FadeIn } from '../animations/FadeIn';

const verticals = [
  {
    title: 'Immersive Entertainment',
    metadata: 'Concerts // Festivals // Tours // Theatrical',
    image: '/images/verticals/immersive.jpg',
    href: '/verticals/immersive-entertainment',
  },
  {
    title: 'Experiential Marketing',
    metadata: 'Brand Activations // Pop-ups // Installations',
    image: '/images/verticals/experiential.jpg',
    href: '/verticals/experiential-marketing',
  },
  {
    title: 'Creative Media',
    metadata: 'Film // Video // Photography // Content',
    image: '/images/verticals/media.jpg',
    href: '/verticals/creative-media',
  },
  {
    title: 'Integrated Technology',
    metadata: 'AV Systems // Interactive Tech // Digital',
    image: '/images/verticals/technology.jpg',
    href: '/verticals/integrated-technology',
  },
];

export function Verticals() {
  const router = useRouter();
  return (
    <section className="py-24 bg-white">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <Typography variant="h1" uppercase className="mb-4">
              Our Verticals
            </Typography>
            <Typography variant="body" className="text-grey-600 max-w-2xl mx-auto">
              Four core verticals where we deliver impossible experiences across digital, 
              virtual, physical, experiential, and theatrical avenues.
            </Typography>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {verticals.map((vertical, index) => (
            <FadeIn key={vertical.title} delay={index * 0.1}>
              <Card
                type="project"
                title={vertical.title}
                metadata={vertical.metadata}
                image={vertical.image}
                onClick={() => router.push(vertical.href)}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
