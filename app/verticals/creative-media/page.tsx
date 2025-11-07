'use client';

import { VerticalTemplate } from '@/components/sections/VerticalTemplate';

export default function CreativeMediaPage() {
  return (
    <VerticalTemplate
      title="Creative Media"
      subtitle="Video Production // Photography // Strategic Content"
      description="Visual storytelling for brands competing in saturated markets. Video production, photography, design, and digital content created by teams who understand both aesthetic excellence and strategic objectives. We've shot across 52 countries—every location taught us something about light, logistics, and what actually works when the sun sets in 20 minutes and the talent is late."
      services={[
        'Film Production',
        'Video Content',
        'Photography',
        'Documentary',
        'Commercial Production',
        'Social Media Content',
        'Live Streaming',
        'Post-Production',
        'Motion Graphics',
      ]}
      examples={[
        {
          title: 'Brand Documentary Series',
          client: 'Global Brand',
          description: 'Multi-episode documentary series showcasing brand heritage and innovation, filmed across 15 countries.',
        },
        {
          title: 'Event Recap Content',
          client: 'Major Festival',
          description: 'Comprehensive event coverage including highlight reels, social content, and behind-the-scenes footage.',
        },
        {
          title: 'Commercial Campaign',
          client: 'Consumer Brand',
          description: 'Full-scale commercial production including concept development, filming, and post-production.',
        },
        {
          title: 'Artist Music Video',
          client: 'Recording Artist',
          description: 'High-concept music video production featuring innovative visual effects and storytelling.',
        },
      ]}
    />
  );
}
