'use client';

import { VerticalTemplate } from '@/components/sections/VerticalTemplate';

export default function IntegratedTechnologyPage() {
  return (
    <VerticalTemplate
      title="Integrated Technology"
      subtitle="Custom Platforms // AR/VR // Real-Time Systems"
      description="Custom platforms, AR/VR experiences, interactive installations, and real-time systems. We architect technical infrastructure that enables experiences while remaining invisible to end users. The best technology is the kind audiences never think about—they just experience what shouldn't be possible and assume it's magic. It's not magic. It's engineering and duct tape. Mostly engineering."
      services={[
        'AV System Design',
        'Interactive Installations',
        'Digital Integration',
        'LED & Video Walls',
        'Projection Mapping',
        'Audio Engineering',
        'Network Infrastructure',
        'Control Systems',
        'Technical Direction',
      ]}
      examples={[
        {
          title: 'Interactive Brand Experience',
          client: 'Tech Company',
          description: 'Multi-room interactive experience featuring gesture control, AR elements, and synchronized AV systems.',
        },
        {
          title: 'Large-Scale Projection Mapping',
          client: 'Cultural Institution',
          description: 'Architectural projection mapping installation transforming a historic building into an immersive canvas.',
        },
        {
          title: 'Conference AV Production',
          client: 'Global Corporation',
          description: 'Complete technical production for multi-day conference including live streaming, LED walls, and interactive elements.',
        },
        {
          title: 'Permanent Installation',
          client: 'Museum',
          description: 'Permanent interactive technology installation featuring touch screens, motion sensors, and immersive audio.',
        },
      ]}
    />
  );
}
