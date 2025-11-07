'use client';

import { VerticalTemplate } from '@/components/sections/VerticalTemplate';

export default function ExperientialMarketingPage() {
  return (
    <VerticalTemplate
      title="Experiential Marketing"
      subtitle="Brand Activations // Fortune 500 Campaigns // Six Continents"
      description="Brand activations that cut through noise because they respect audience intelligence. From Fortune 500 campaigns to emerging brand launches, we've delivered across six continents with proven ROI and genuine engagement. We make experiences people actually want to Instagram—not because we told them to, but because they can't help themselves."
      services={[
        'Brand Activations',
        'Experiential Marketing Campaigns',
        'Product Launch Events',
        'Pop-Up Experiences',
        'Interactive Brand Installations',
        'Sampling & Demonstration Programs',
        'Guerrilla Marketing Campaigns',
        'Street Team Activations',
        'Retail Experience Design',
        'Trade Show Exhibits & Booths',
        'Sponsorship Activations',
        'Festival & Concert Sponsorships',
        'Sports Marketing Activations',
        'Hospitality & VIP Experiences',
        'Food & Beverage Operations',
        'Mobile Tour Marketing',
        'Influencer & Creator Events',
        'Corporate Event Production',
        'Brand Ambassador Programs',
        'Environmental Graphics & Signage',
        'Event Marketing Strategy',
      ]}
      examples={[
        {
          title: 'PATRÓN Cristalino North American Launch with Becky G at Olvera Street',
          client: 'PATRÓN Tequila',
          description: 'Experiential Production & Operations Direction. Multi-market product launch activation featuring live performance, immersive brand experiences, and cultural celebration. Managed production, talent coordination, and on-site operations for high-profile launch event.',
        },
        {
          title: 'Heineken Turn4 Nightclub at Formula 1 Las Vegas Grand Prix',
          client: 'Heineken',
          description: 'Custom Signage Fabrication. Designed and fabricated custom branded signage and environmental graphics for premium nightclub activation at F1 Las Vegas. Delivered high-impact brand presence in high-stakes motorsport environment.',
        },
        {
          title: 'Formula 1 Las Vegas Grand Prix',
          client: 'Formula 1',
          description: 'Premium Food & Beverage Operations Management. Managed F&B operations for luxury hospitality experiences during inaugural Las Vegas Grand Prix. Coordinated multi-venue service delivery where failure wasn\'t an option and everything had to be perfect.',
        },
        {
          title: 'Red Bull Unforeseen Motel Nightclub at III Points Miami',
          client: 'Red Bull',
          description: 'Experiential Production & Operations Direction. Transformed abandoned motel into fully operational nightclub venue for multi-night music festival activation. Managed all production elements, operations, and real-time problem solving.',
        },
      ]}
    />
  );
}
