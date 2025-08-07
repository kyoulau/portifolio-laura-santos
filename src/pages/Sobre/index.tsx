import { useState } from "react";
import Timeline from "../../components/timeline";

function Sobre() {
  const aboutText = `Laura, from Brazil, a 100% practicing Christian! Besides programming, I enjoy reading the Bible, praying, and spending time with my family (especially if we're going out to eat). As a good nerd that I am, I love the geek world, anime, and playing outdoor games with my friends. On my weekends, I dedicate myself to serving at my church, where I volunteer in the media department and also with the children's ministry.`;

  const aboutText2 = `My journey with computers began in childhood. I always preferred exploring the computer with my brother at my parents' house, playing games rather than playing with my dolls. Always very curious and exploratory, over time I became more interested in how things worked inside the computer. So, I started my studies with a comprehensive computer course to understand how computers functioned. At the time, my mom was a huge influence in helping me develop a passion for the field; she always supported my studies and encouraged me to be a role model for other women in the area. After finishing the comprehensive computer course, I discovered my calling for connectivity with systems development. I decided I wanted to turn my ideas into apps and websites :)`;

  return (
    <div className="bg-neutral-800 min-h-screen flex items-center justify-center font-inter py-16">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="relative z-10  p-8 md:p-12 lg:p-16 rounded-lg shadow-xl max-w-3xl w-full mx-auto text-white">
        
        <div className="text-lg leading-relaxed">
          <p className="mb-4 pt-8 font-serif">{aboutText}</p>
          <br />
          <p className="mb-4 font-serif">{aboutText2}</p>
        
        </div>
        <h1 className="text-2xl font-serif font-bold mb-4 text-white underline">My Timeline</h1>
        <Timeline/>
      </div>
      
      <div>
        
      </div>
    </div>
  )
}

export default Sobre