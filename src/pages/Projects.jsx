import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import SplitCard from '../components/SplitCard.jsx';
import Timeline from '../components/Timeline.jsx';
import { platforms, experience } from '../data/site.jsx';

const VISUAL_ZONES = ['sand', 'sage', 'clay'];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="page page-platforms">
      <Section zone="paper" labelledBy="platforms-title">
        <SectionHeading
          id="platforms-title"
          eyebrow={t('platforms.eyebrow')}
          title={t('platforms.heading')}
          intro={t('platforms.intro')}
        />
        <div className="splits">
          {platforms.map((key, i) => (
            <SplitCard
              key={key}
              itemKey={key}
              reverse={i % 2 === 1}
              zone={VISUAL_ZONES[i % VISUAL_ZONES.length]}
            />
          ))}
        </div>
      </Section>

      <Section zone="sand" labelledBy="experience-title">
        <SectionHeading
          id="experience-title"
          title={t('experience.heading')}
          intro={t('experience.intro')}
        />
        <Timeline items={experience} />
      </Section>
    </div>
  );
}
