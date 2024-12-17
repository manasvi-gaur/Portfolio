import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import Research from "./components/homepage/Reasearch";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Awards from "./components/homepage/award";

// async function getData() {
//   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.json();

//   const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

//   return filtered;
// };

export default async function Home() {
  // const blogs = await getData();
  const blogs = [
    {
      cover_image:"/image/certificate/uc.png",
      title: "Data Structures and Algorithms",
      description: "Mastering algorithm design, optimization, and practical problem-solving.",
      url:"https://coursera.org/verify/specialization/P3ZPKX32L3HV"
    },
    {
      cover_image:"/image/certificate/meta1.png",
      title: "Meta Back-End Developer",
      description: "Python, databases, APIs, Django, and full-stack development through a 9-course curriculum",
      url:"https://coursera.org/verify/professional-cert/XD3U4VY4NX5W"
    },
    {
      cover_image:"/image/certificate/meta1.png",
      title: "Meta Front-End Developer",
      description: "9-course program on JavaScript, React, HTML, CSS, UX/UI design, and version control.",
      url:"https://coursera.org/verify/professional-cert/MFCYRXV52932"
    }
  ];

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Education />
      <Projects />
      <Experience />
      {/* Awards */}
      {/* <Awards/> */}
      {/* Reasearch */}
      <Research/>
      {/* Certificate */}
      <Blog blogs={blogs}/>

      <Skills />
      <ContactSection />
    </>
  )
};