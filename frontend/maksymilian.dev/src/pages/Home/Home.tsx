import Navbar from '../../components/Navbar/Navbar';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PiHandWaving } from 'react-icons/pi';
import { MdMailOutline } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import SectionInfoCard from '../../components/SectionInfoCard/SectionInfoCard';
import SkillsCard from '../../components/SkillsCard/SkillsCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import profile_img from '../../assets/profile_img.jpg';
import project2_screen from '../../assets/project2_screen.png';
import project3_screen from '../../assets/project3_screen.png';

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <main className="mt-16 mb-16 md:mt-32 md:mb-32 flex flex-col gap-10">
        <section
          id="home"
          className="home scroll-mt-60 mt-25 md:mt-15 mb-40 flex justify-center items-center"
        >
          <div className="home-container grid  md:grid-cols-[max-content_1fr_max-content] items-center justify-center">
            <div className="home-socials flex flex-col items-center justify-center px-7 gap-3 md:order-1 text-3xl">
              <a href="https://github.com/tibiolo">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/maksymilian-szymanski/">
                <FaLinkedin />
              </a>
            </div>
            <div className="home-img w-40 md:w-50 flex items-center justify-center md:order-3">
              <img
                className="rounded-full border-5 border-gray-300  shadow-2xl"
                src={profile_img}
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
          className="about scroll-mt-50  mt-5 mb-40 flex flex-col items-center justify-center"
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
        <section
          id="skills"
          className="skills scroll-mt-35 md:scroll-mt-20 mt-5 mb-40"
        >
          <SectionInfoCard name="Skills" info="My Skills" />
          <SkillsCard />
        </section>
        <section
          id="projects"
          className="projects scroll-mt-35 flex flex-col justify-center items-center mt-5 mb-40"
        >
          <SectionInfoCard name="Projects" info="Recent projects" />
          <div className="projects-container grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
            <ProjectCard
              imgPath={project3_screen}
              name="Maksymilian.dev"
              href="https://maksymilian.dev"
            />
            <ProjectCard
              imgPath={project2_screen}
              name="Notes Webapp"
              href="https://github.com/tibiolo/Notes-WebApp"
            />
          </div>
        </section>
        <section
          id="contact"
          className="contact scroll-mt-15 flex flex-col justify-center items-center mt-5 mb-40"
        >
          <SectionInfoCard name="Contact" info="Get In Touch" />

          <div className="contact-container grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="contact-info-container bg-white border border-gray-300 rounded-xl p-5 shadow-md gap-2 flex flex-col justify-center items-center">
                <MdOutlineEmail className="text-4xl" />

                <p className="email">contact@maksymilian.dev</p>
                <div className="email-me-container flex items-center gap-1 cursor-pointer ">
                  <FaLongArrowAltRight className="text-gray-600 text-xl" />
                  <p>Email me</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
