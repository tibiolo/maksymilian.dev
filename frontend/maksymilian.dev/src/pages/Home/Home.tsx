import Navbar from '../../components/Navbar/Navbar';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PiHandWaving } from 'react-icons/pi';
import { MdMailOutline } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import SectionInfoCard from '../../components/SectionInfoCard/SectionInfoCard';
import SkillsCard from '../../components/SkillsCard/SkillsCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <main className="mt-16 mb-16 md:mt-32 md:mb-32 flex flex-col gap-10">
        <section
          id="home"
          className="home scroll-mt-32 flex justify-center items-center"
        >
          <div className="home-container grid  md:grid-cols-[max-content_1fr_max-content] items-center justify-center">
            <div className="home-socials flex flex-col items-center justify-center px-7 gap-3 md:order-1">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </div>
            <div className="home-img w-40 md:w-50 flex items-center justify-center md:order-3">
              <img
                className="rounded-full border-5 border-gray-300"
                src="/profile-img.jpg"
                alt="Profile image"
              />
            </div>
            <div className="home-data col-span-2 md:col-span-1 md:order-2 px-8 py-10 flex flex-col gap-2">
              <h1 className="home-name text-4xl md:text-5xl font-bold text-gray-800 flex gap-2">
                Maksymilian
                <PiHandWaving />
              </h1>
              <h3 className="home-title flex gap-2 items-center text-lg md:text-xl p-1">
                <FaArrowRightLong className="w-5 h-5  text-gray-600 " />{' '}
                Full-Stack Web Developer
              </h3>
              <p className="home-description break-words whitespace-normal text-base text-gray-700 ">
                Full-Stack Developer driven by problem-solving and purposeful
                design.
              </p>

              <a
                href="#contact"
                className="home-btn  px-5 py-3 text-white font-bold bg-green-500 rounded-2xl w-fit mt-5 flex gap-2 items-center hover:bg-green-600 transition delay-50 duration-250 ease-in-out hover:translate-3d hover:scale-105 "
              >
                <MdMailOutline className="w-6 h-6 font-bold" /> Message
              </a>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="about md:scroll-mt-12 flex flex-col items-center justify-center"
        >
          <SectionInfoCard name="About Me" info="Who am I ?" />
          <div className="about-me-container max-w-[90%] md:w-[60%] 3xl:w-[40%] 4xl:w-[35%] border bg-white rounded-2xl border-gray-300 drop-shadow-md ">
            <p className="about-me-info px-6 md:px-10 py-8 text-lg md:text-lg 2xl:text-xl text-gray-700 leading-relaxed text-center italic ">
              I'm a Full-Stack Developer with a passion for building efficient,
              scalable, and user-friendly applications. My key interests lie in
              Full-Stack Software Development and Cybersecurity, and I'm always
              looking for opportunities to grow, collaborate, and make an impact
              through technology.
            </p>
          </div>
        </section>
        <section id="skills" className="skills md:scroll-mt-12">
          <SectionInfoCard name="Skills" info="My Skills" />
          <SkillsCard />
        </section>
        <section
          id="projects"
          className="projects md:scroll-mt-12 flex flex-col justify-center items-center"
        >
          <SectionInfoCard name="Projects" info="Recent projects" />
          <div className="projects-container grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
            <ProjectCard
              imgPath="/project1_screen.PNG"
              name="Forno Felice"
              href="https://tibiolo.github.io/Restaurant_Website/"
            />
            <ProjectCard
              imgPath="/project2_screen.png"
              name="Notes Webapp"
              href="https://github.com/tibiolo/Notes-WebApp"
            />
          </div>
        </section>
        <section
          id="contact"
          className="contact md:scroll-mt-12 flex flex-col justify-center items-center"
        >
          <SectionInfoCard name="Contact" info="Get In Touch" />
          <div className="contact-form-container grid grid-cols-1 md:grid-cols-2 ">
            <div className="contact-info bg-white border border-gray-300 rounded-xl p-5 shadow-md">
              <h3 className="email-title">Email</h3>
              <p className="email">makso544g@gmail.com</p>
              <div className="email-me-container flex items-center gap-1 cursor-pointer">
                <FaLongArrowAltRight className="text-gray-600" />
                <p>Email me</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
