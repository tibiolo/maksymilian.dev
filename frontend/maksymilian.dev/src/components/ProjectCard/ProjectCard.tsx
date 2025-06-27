import { FaLongArrowAltRight } from 'react-icons/fa';

interface ProjectCardProps {
  imgPath: string;
  name: string;
  href: string;
}

const ProjectCard = ({ imgPath, name, href }: ProjectCardProps) => {
  return (
    <div className="border border-gray-300 rounded-2xl bg-white drop-shadow-md p-5">
      <img
        className="w-60 h-40 rounded-2xl py-2"
        src={`${imgPath}`}
        alt="Project Image"
      />
      <h3 className="project-name text-base 2xl:text-lg">{name}</h3>
      <a href={href} className="project-btn container flex items-center gap-1 ">
        <FaLongArrowAltRight className="text-gray-600" />
        <p className="project-btn text-sm 2xl:text-base text-gray-700">
          View project
        </p>
      </a>
    </div>
  );
};

export default ProjectCard;
