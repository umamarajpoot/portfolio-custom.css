import Image from 'next/image';
import '../Style/portfolio.css';

const projects = [
  {
    title: 'Static Resume',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    link: 'https://milestone-1-2-orpin.vercel.app/',
    Image: '/Static Resume.jpeg',
  },
  {
    title: 'Dynamic Resume Builder',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    link: 'https://milestone-3-gules-eight.vercel.app/',
    Image: '/Dynamic Resume Builder.jpeg',
  },
  {
    title: 'Shareable Resume Builder',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    link: 'https://milestone-5-mu-ten.vercel.app/',
    Image: '/Shareable Resume Builder.jpeg',
  },
  {
    title: 'Editable Resume Builder',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    link: 'https://milestone-4-hazel-eta.vercel.app/',
    Image: '/Editable Resume Builder.jpeg',
  },
  {
    title: 'Simple Calculator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    link: 'https://calculator-eta-blond-13.vercel.app/',
    Image: '/Simple Calculater.jpeg',
  },
  {
    title: 'Countdown Timer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    link: 'https://countdown-timer-1n73.vercel.app/',
    Image: '/Countdown Timer.jpeg',
  },
];

export default function Portfolio() {
  return (
    <div className='container'>
      <div className='header'>
        <h2>My Portfolio</h2>
        <a href="https://vercel.com/umme-rajpoots-projects-7a51b58a?projectDeleted=new-portfolio-2zlu" target="_blank" rel="noopener noreferrer" className='VercleLink'>
          <button>Visit My Projects</button>
        </a>
      </div>
      <div className='projects'>
        {projects.map((project, index) => (
          <div key={index} className='card'>
            <Image
              src={project.Image}
              alt={project.title}
              width={400}
              height={250}
              className='image'
              priority
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View in Live &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
