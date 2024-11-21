import Link from 'next/link'
import React from 'react'

type SectionsProps = {
  sections: React.ReactNode[],
  currentSection: number,
  changeSectionByClick: (index: number) => void

}

const Header = ({ sections, currentSection, changeSectionByClick }: SectionsProps) => {

  const changeSection = (index: number) => {
    changeSectionByClick(index);
  }
  return (
    <header className={`fixed w-28 top-0 z-50 h-9 bg-transparent ${currentSection > 1? 'text-white' : 'text-black'}`}>
      <nav>
        <div className='flex flex-col justify-center items-start h-screen'>
          {
            sections && sections.map((item, index) => {
              const sectionEle = item as React.ReactElement;
              return (
                <div key={sectionEle?.props?.children + index} onClick={() => changeSection(index)} className={`${currentSection === index && 'underline'} underline-offset-4 ml-5 mt-2 inline-block cursor-pointer`}>{sectionEle?.props?.children}</div>
                // <Link href="/"></Link>
              )
            })
          }
        </div>
      </nav>
    </header>
  )
}

export default Header
