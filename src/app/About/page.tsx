import Image from 'next/image'; 
import "../Style/About.css"

const AboutSection = () => {
  return (
    <section className="aboutSection">
      <div className="profileImageContainer">
        <Image 
  src="/profile.png" 
  alt="Profile" 
  className="profileImage" 
  width={200}  
  height={200}  
  layout="intrinsic"  
/>

      </div>
      <div className="aboutContent">
        <h3 className="aboutSubtitle">About Me</h3>

        <p className="aboutDescription">
          Exploring the cutting-edge realms of{" "}
          <span className="highlight">Artificial Intelligence</span>,
          revolutionizing the digital landscape with{" "}
          <span className="highlight">Web 3.0</span>, and crafting immersive
          experiences in the <span className="highlight">Metaverse</span>.
          Passionate about blending technology and creativity to shape the
          future of human interaction and innovation.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
