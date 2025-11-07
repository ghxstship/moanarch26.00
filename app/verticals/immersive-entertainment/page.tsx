'use client';

import { VerticalTemplate } from '@/components/sections/VerticalTemplate';

export default function ImmersiveEntertainmentPage() {
  return (
    <VerticalTemplate
      title="Immersive Entertainment"
      subtitle="Festival Production // Theatrical Installations // Interactive Environments"
      description="Festival production that defies physics. Theatrical installations that make people question reality. Pop-up experiences that redefine what spaces can do. We create the moments that become legends—executed with precision that makes the impossible look easy. Spoiler: it's not easy. From 50,000+ capacity festival grounds to intimate theatrical environments, we've built infrastructure that makes structural engineers nervous and audiences lose their minds."
      services={[
        'Concert Production',
        'Festival Design & Build',
        'World Tours',
        'Theatrical Experiences',
        'Live Event Production',
        'Stage Design',
        'Lighting & Visual Design',
        'Audio Engineering',
        'Artist Management Support',
      ]}
      examples={[
        {
          title: 'Salvage City Supper Club at EDC Las Vegas',
          client: 'Insomniac',
          description: 'Experiential Production & Operations Direction. Multi-stage immersive dining and entertainment experience for 50,000+ festival attendees. Built infrastructure that shouldn\'t stand up in desert winds—but did.',
        },
        {
          title: 'Red Bull Unforeseen Motel Nightclub at III Points Miami',
          client: 'Red Bull',
          description: 'Experiential Production & Operations Direction. Transformed abandoned motel into fully operational nightclub venue. Managed operations, talent coordination, and real-time problem solving for multi-night activation.',
        },
        {
          title: 'Factory Town Miami',
          client: 'Factory Town',
          description: 'Operations Management & Technology Integrations. Ongoing venue operations management, technical systems integration, and production coordination for Miami\'s premier nightlife destination.',
        },
        {
          title: 'Maiden Voyage of Celebrity Cruises Celebrity Beyond',
          client: 'Celebrity Cruises',
          description: 'Guest Entertainer Talent. Performed as featured entertainment talent for inaugural sailing of Celebrity Beyond, delivering high-energy performances for luxury cruise guests.',
        },
      ]}
    />
  );
}
