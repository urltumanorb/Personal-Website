'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

type WorkHistoryProps = {
  id: number,
  date: string,
  title: string,
  company: string,
  location: string,
  experience: {
    [key: string]: string[]
  };
};

export default function About() {
  const [hoverIndex, setHoverIndex] = useState<null | number>(null); 
  const [selectedHistory, setSelectedHistory] = useState<null | WorkHistoryProps>(null);

  const workHistory: WorkHistoryProps[] = [
    {
      id: 1,
      date: "Oct 2021 - Aug 2023",
      title: "Senior Frontend Developer",
      company: "Transwarp",
      location: "Shanghai, China",
      experience: {
        'Knowledge Graph System': ['Developed by using React.js, React Router, React Hooks, Typescript, Sass and Webpack', 
        'Used Recoil for state management, Cytoscape.js for knowledge graph display, and antv/g6 for visualization', 
        'Developed and maintained features such as data visualization, blueprint editing, map displaying, and analytical tools', 
        'Improved front-end build speed by 50% using Webpack', 
        'Componentized the front-end by extracting reusable common components',
        'Participated in building the company’s in-house front-end component library, leading to a 20% reduction in the project volume of the responsible modules',
        'Guided 2 junior frontend developers']}
    },
    {
      id: 2,
      date: "Sep 2020 - Oct 2021",
      title: "Senior Frontend Developer",
      company: "Souche",
      location: "Shanghai, China",
      experience: {
        'Souche SaaS Platform': ['Developed by using React.js, React Router, React Hooks, React Redux, Sass and Ant Design', 
        'Developed and maintained features such as displaying module information lists, performing CRUD operations on list data, and handling the export/import of table data',
        'Extracted and implemented common components for code reuse'],
        'Souche App': ['Developed by React Native', 'Developed and maintained the customer registration feature and related pages'],
        'Souche Mini Program': ['Developed by using Vue.js and Flex layout', 'Developed and maintained features such as car dealer list pages, car dealer detail pages, customer personal information management, and electronic signature'],
        'Souche H5': ['Developed by using React, React Router, React Hooks and React Redux, and used Flex for page layout', 'Developed and maintained features such as personal vehicle purchase progress status card, order information and map navigation']
      }
    },
    {
      id: 3,
      date: "Sep 2017 - Aug 2020",
      title: "Frontend Developer",
      company: "italki",
      location: "Shanghai, China",
      experience: {
        'Italki OMS - Information management system': ['Originally developed by using Angular.js, Bootstrap, ECharts, tinymce and Grunt', 
        'Developed and maintained features such as displaying and storing information for various roles, managing user authorities, and performing data statistics and analysis',
        'Took a leading role in 2018 to refactor the system using React.js, React Router, React Hooks, React Redux, Typescript and Webpack',
        'Optimized the performance of the rendering system and reduced the rendering time by 30%',
        'Guided 1 junior frontend developer'],
        'Italki website': ['Originally developed by using Angular.js, Bootstrap and Grunt',
        'Developed and maintained features such as homepage, teachers list and their personal pages, promotion news display, holiday event pages and language challenge activities',
        'Participated in refactoring the existing website in 2018 and optimized its performance to handle large-scale user requests, using React.js, Next.js, React Hooks, React Redux, Typescript and Webpack'],
        'Italki IFS - Financial management system': ['Built a financial information management platform from scratch to display operational information and manage all financial activities associated with the Italki website, using React.js, React Router, React Hooks, React Redux, Typescript, and Webpack'],
      }
    },
    {
      id: 4,
      date: "Jul 2016 - May 2017",
      title: "QA Tester",
      company: "Shanghai Youhuo",
      location: "Shanghai, China",
      experience: {'Youhuo website': ['Conducted functional tests for both PC and mobile end of Youhuo’s online entrepreneurship educational video web platform, tracking program defects and issues using Jira', 
      'Developed and maintained video list pages, video detail pages, and personal information management features using jQuery and Bootstrap']}
    },
  ];

  const openDetail = (index: number) => {
    const detailModal = document.getElementById('my_modal_2') as HTMLDialogElement;
    const selectedDetail = workHistory.find((item, whIndex) => whIndex === index);
    setSelectedHistory(selectedDetail ?? null);
    detailModal.showModal();
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div className="group flex gap-6 relative">
        {workHistory.map((card, index) => (
          <div
            key={card.id}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`card -mx-8 shadow-[-20px_0_30px_-10px_rgba(0,0,0,0.9)] bg-gray-800 rounded-lg p-6 text-white transition-transform duration-300 ease-in-out w-64 cursor-pointer ${
              hoverIndex !== null
                ? index === hoverIndex
                  ? "rotate-6"
                  : index > hoverIndex
                  ? "translate-x-20"
                  : ""
                : ""
            }`}
          >
            <p className="text-sm text-gray-400">{card.date}</p>
            <h2 className="text-xl font-bold mt-4">{card.title}</h2>
            <p className="text-orange-400 mt-4">{card.company}</p>
            <p className="font-medium mb-16">{card.location}</p>
            <button className="btn btn-primary absolute bottom-5 left-6 w-36" onClick={() => openDetail(index)}>
              Detail
            </button>
          </div>
        ))}
      </div>
      <dialog id="my_modal_2" className="modal h-screen">
        <div className="modal-box bg-bgSection w-3/4">
          <div className="py-4">
            <div className='leading-normal bg-gradient-to-r from-black to-textMediumGray bg-clip-text text-transparent'>
              {
                Object.entries(selectedHistory?.experience || {}).map(([key, values], objIndex) => {
                  return (
                    <div key={key + objIndex}>
                      <h2 className='text-lg font-bold mb-2'>{key}</h2>
                      {
                        values.map((item: string, index: number) => {
                          return (
                            <div key={key + index} className='flex items-start gap-5 mb-2'>
                              <FontAwesomeIcon icon={faPlay} className='text-black mt-1'/>
                              <div>{item}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
