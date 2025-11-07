'use client';

import { VerticalTemplate } from '@/components/sections/VerticalTemplate';

export default function IntegratedTechnologyPage() {
  return (
    <VerticalTemplate
      title="Integrated Technology"
      subtitle="Full-Stack Development // Web3 // AR/VR // Custom Platforms // Data Architecture"
      description="Full-stack application development, Web3 integration, AR/VR experiences, custom platforms, and data architecture that actually scales. We build digital infrastructure that handles real-world chaos—not just demo day traffic. From mobile apps to blockchain implementations to immersive experiences, we architect systems that work when it matters. The best technology is invisible until you need it, then it's bulletproof. We've migrated legacy systems that should've been retired a decade ago, implemented tech stacks that handle millions of transactions, and built platforms that make the impossible feel inevitable. It's not magic. It's architecture, engineering, and knowing which corners you can cut and which ones will collapse the whole thing."
      services={[
        'Full-Stack Application Development',
        'Mobile App Development (iOS/Android)',
        'Web Application Design & Development',
        'Web3 & Blockchain Integration',
        'NFT Platform Development',
        'AR/VR Experience Development',
        'Mixed Reality Applications',
        'Custom Platform Architecture',
        'API Development & Integration',
        'Interactive Installations',
        'AV System Design & Integration',
        'LED & Video Wall Systems',
        'Projection Mapping',
        'Digital Signage Networks',
        'Real-Time Systems & WebSockets',
        'Data Migration & Legacy Modernization',
        'Cloud Infrastructure & DevOps',
        'Database Architecture',
        'Network Infrastructure',
        'Cybersecurity Implementation',
        'Technical Direction & Consulting',
      ]}
      examples={[
        {
          title: 'Enterprise Data Migration & Platform Rebuild',
          client: 'Fortune 500 Corporation',
          description: 'Full-stack platform modernization. Migrated 15 years of legacy data, rebuilt entire tech stack on cloud infrastructure, implemented microservices architecture. Zero downtime during migration. System now handles 10x the traffic with better performance than the old one ever had.',
        },
        {
          title: 'Web3 NFT Marketplace & Smart Contract Platform',
          client: 'Entertainment Brand',
          description: 'Custom blockchain platform development. Built NFT marketplace with smart contract integration, wallet connectivity, and real-time minting capabilities. Handled launch day traffic that crashed other platforms. Ours didn\'t blink.',
        },
        {
          title: 'Cross-Platform Mobile App & Backend Infrastructure',
          client: 'Hospitality Group',
          description: 'Native iOS/Android app development with custom backend API. Real-time booking system, payment processing, push notifications, offline functionality. Deployed across 50+ locations. Scales beautifully. Works flawlessly. Revolutionary concept.',
        },
        {
          title: 'AR/VR Brand Experience & Interactive Installation',
          client: 'Luxury Automotive',
          description: 'Mixed reality showroom experience. Custom AR app for vehicle customization, VR test drive simulator, interactive projection mapping. Gesture control, spatial audio, synchronized multi-screen displays. Technology so seamless people forgot it was there.',
        },
      ]}
    />
  );
}
