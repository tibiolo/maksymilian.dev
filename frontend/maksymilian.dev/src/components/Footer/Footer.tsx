import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="h-65 md:h-60 pt-5 md:pt-0 flex flex-col items-center md:justify-center border border-gray-300 bg-white shadow-xl gap-4">
      <div className="footer-txt text-center">
        <h1 className="text-xl">Living, learning & leveling up </h1>
        <h1 className="text-xl">one day at a time.</h1>
      </div>
      <h3>Build by Maksymilian</h3>
      <div className="socials flex flex-row gap-4 text-3xl ">
        <a href="https://www.linkedin.com/in/maksymilian-szymanski/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/tibiolo">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
