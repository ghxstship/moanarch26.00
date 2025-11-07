'use client';

import { VerticalTemplate } from '@/components/sections/VerticalTemplate';

export default function ExperientialMarketingPage() {
  return (
    <VerticalTemplate
      title="Experiential Marketing"
      subtitle="Brand Activations // Fortune 500 Campaigns // Six Continents"
      description="Brand activations that cut through noise because they respect audience intelligence. From Fortune 500 campaigns to emerging brand launches, we've delivered across six continents with proven ROI and genuine engagement. PATRÓN, Heineken, Red Bull—brands that demand operational excellence and measurable results."
      services={[
        'Brand Activations',
        'Pop-up Experiences',
        'Interactive Installations',
        'Product Launches',
        'Sampling Campaigns',
        'Guerrilla Marketing',
        'Retail Experiences',
        'Trade Show Exhibits',
        'Sponsorship Activations',
      ]}
      examples={[
        {
          title: 'PATRÓN Global Activation',
          client: 'PATRÓN Tequila',
          description: 'Multi-market brand activation series featuring immersive tasting experiences and interactive installations across major cities.',
        },
        {
          title: 'Heineken UEFA Champions League',
          client: 'Heineken',
          description: 'Global sponsorship activation program creating memorable fan experiences at major football events worldwide.',
        },
        {
          title: 'Tech Product Launch',
          client: 'Major Tech Brand',
          description: 'Innovative product launch experience combining physical and digital elements to showcase new technology.',
        },
        {
          title: 'Luxury Automotive Experience',
          client: 'Luxury Auto Brand',
          description: 'Exclusive brand experience center featuring interactive displays and immersive test drive experiences.',
        },
      ]}
    />
  );
}
