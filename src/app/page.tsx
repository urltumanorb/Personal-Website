import React from 'react';
import { FullPage, FullPageSection } from '../component/Fullpage';

export default function Home() {
  return (
    <FullPage>
      <FullPageSection className="bg-bgSection">Home</FullPageSection>
      <FullPageSection className="bg-bgAbout">About</FullPageSection>
      <FullPageSection className="bg-gray-900">Experience</FullPageSection>
      <FullPageSection className="bg-bgProject">Projects</FullPageSection>
    </FullPage>
  );
}
