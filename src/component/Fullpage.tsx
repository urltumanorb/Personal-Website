'use client'
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Experience from '@/pages/Experience';
import Projects from '@/pages/Projects';

// FullPage Component
const FullPage = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = React.Children.toArray(children); // 将子元素转为数组

  const changeSectionByClick = (index: number) => {
    setCurrentSection(index);
  }
  // 滚动处理函数
  const handleScroll = (e: WheelEvent) => {
    console.log('currentSection', currentSection)
    if (e.deltaY > 0) {
      // 向下滚动
      if (currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
      }
    } else {
      // 向上滚动
      if (currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="relative h-screen overflow-hidden">
      <Header
        sections={sections}
        currentSection={currentSection}
        changeSectionByClick={changeSectionByClick} />
      <div
        className="flex flex-col transition-transform duration-700"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`, // 根据当前section滚动
        }}
      >
        {sections}
      </div>
    </div>
  );
};

// FullPage Section Component
type FullPageSectionProps = {
  children: React.ReactNode;
  className?: string;
};

const FullPageSection = ({ children, className }: FullPageSectionProps) => (
  <div className={`h-screen text-black ${className}`}>
    {children === 'Home' && <Home />}
    {children === 'About' && <About />}
    {children === 'Experience' && <Experience />}
    {children === 'Projects' && <Projects />}
  </div>
);

export { FullPage, FullPageSection };
