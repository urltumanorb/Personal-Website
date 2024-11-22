import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type ProjectItem = {
  title: string,
  desc: string,
  imageUrl: string,
  url: string
}
export default function Projects() {
  const projectList: ProjectItem[] = [
    {
      title: 'italki portal',
      desc: 'This is an online education platform where users can learn many languages from various teachers. It was developed using React.',
      imageUrl: '/italkiThumbnail.jpg',
      url: 'https://www.italki.com/en'
    },
    {
      title: 'saas demo application(In development)',
      desc: 'This demo application is similar to the applications I developed for italki, Souche, and Transwrap.',
      imageUrl: '/comingSoon.jpg',
      url: ''
    },
    {
      title: 'data visualization',
      desc: 'This is a demo project that showcases the data visualization tools and frameworks I have used before, such as Cytoscape.js, AntV, and ECharts.',
      imageUrl: '/dataVisualizationDemo.jpg',
      url: 'https://visualization-demo-orpin.vercel.app/cytoscape'
    },
    {
      title: 'health platform(To be deployed)',
      desc: "This is a medical appointment system I developed during my master's program, using React.js, Next.js, React-Redux, Koa.js, and MySQL.",
      imageUrl: '/healthPlatform.jpg',
      url: ''
    }
  ]
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12 justify-center place-items-center">
        {
          projectList.map((item: ProjectItem, index: number) => {
            return (
              <div key={item.title + index.toString} className="w-[450px] h-[250px] px-5 py-10 bg-gray-800 text-white break-words relative cursor-pointer hover:scale-110 transition-all duration-300">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  className='w-[200px] h-[110px] float-left mr-4 mb-2'
                  width={200}
                  height={0}
                  />
                <div className='mb-5'>
                  <h3 className='text-center font-bold text-xl'>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                {
                  item.url ? 
                  <a
                    href={item.url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='absolute bottom-5 right-5 text-green-500 hover:cursor-pointer group'>
                    <span className='mr-2'>Go to visit</span>
                    <FontAwesomeIcon icon={faArrowRight} className='transition-transform -rotate-45 transform group-hover:translate-x-2 group-hover:-translate-y-2'/>
                  </a> :
                  <div className='absolute bottom-5 right-5 text-gray-300 cursor-not-allowed'>Go to visit</div>
                }
                
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
