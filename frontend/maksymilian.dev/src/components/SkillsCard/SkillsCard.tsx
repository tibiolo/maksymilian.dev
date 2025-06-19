import { FaTrophy } from 'react-icons/fa6';
import { FaRegSmileWink } from "react-icons/fa";


const SkillsCard = () => {
  return (
    <div className="skills-card-container flex justify-center items-center">
      <div className="skills-content flex flex-col justify-center items-center mt-5 p-10 border border-gray-300 rounded-xl bg-white drop-shadow-md/30">
        <div className="skills-card grid grid-cols-2 gap-y-3 gap-x-8 ">
          <div className="skill ">
            <FaTrophy />
            <h3 className="skill-title">HTML</h3>
          </div>
          <div className="skill">
            <FaTrophy />
            <h3 className="skill-title">CSS</h3>
          </div>
          <div className="skill ">
            <FaTrophy />
            <h3 className="skill-title">JavaScript</h3>
          </div>
          <div className="skill">
            <FaTrophy />
            <h3 className="skill-title">TypeScript</h3>
          </div>
          <div className="skill">
            <FaTrophy />
            <h3 className="skill-title">React</h3>
          </div>
          <div className="skill">
            <FaTrophy />
            <h3 className="skill-title">SQL</h3>
          </div>
          <div className="skill">
            <FaTrophy />
            <h3 className="skill-title">TailwindCSS</h3>
          </div>
          <div className="skill">
            <FaTrophy />
            <h3 className="skill-title">Linux</h3>
          </div>
          <div className="skill">
            <FaTrophy />
            <h3 className="skill-title">PostgreSQL</h3>
          </div>
          <div className="skill">
            <FaTrophy />
            <h3 className="skill-title">MongoDB</h3>
          </div>
          <div className="skill">
            <FaTrophy />
            <h3 className="skill-title">RestfulAPI</h3>
          </div>
          <div className="skill">
            <FaTrophy />
            <h3 className="skill-title">Python</h3>
          </div>
          <div className="skill">
            <FaTrophy />
            <h3 className="skill-title">Java 17+</h3>
          </div>
          <div className="skill">
            <FaTrophy />
            <h3 className="skill-title">Git</h3>
          </div>
        </div>
        <h2 className="skills-text text-gray-400 font-bold pacifico text-lg pt-7 flex items-center gap-1.5">
          The journey doesn't end here <span><FaRegSmileWink className='text-xl' /></span>
        </h2>
        

      </div>
    </div>
  );
};

export default SkillsCard;
