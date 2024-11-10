import React from "react";
import Image from "next/image";
import "../Style/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="content">
        <p className="intro">Hey, I am Umama Rajpoot</p>

       
        <h1 className="title">
          <span className="highlight">UI/UX Designer</span>
        </h1>

        <p className="description">
          Specialized in designing and developing responsive, user-centric
          websites using Next.js, Tailwind CSS, and TypeScript. Created sleek,
          modern web solutions for personal and academic projects, ensuring
          scalability and seamless user experience tailored to specific client
          and project requirements.
        </p>

        <a href="/About" className="button">
          About Me
        </a>
      </div>

      <div className="imageContainer">
        
        <Image
          src="/profile.png"
          width={300} 
          height={300}  
          alt="John"
          className="profileImage"
        />
        <div className="decorations"></div>
      </div>
    </section>
  );
};

export default HeroSection;
