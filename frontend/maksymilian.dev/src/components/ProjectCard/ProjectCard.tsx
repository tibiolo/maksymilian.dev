interface ProjectCardProps {
  imgPath: string;
  name: string;
}

const ProjectCard = ({ imgPath, name }: ProjectCardProps) => {
  return (
    <div className="border border-gray-300 rounded-2xl bg-white drop-shadow-md p-5">
      <img
        className="w-60 rounded-xl py-2"
        src={`${imgPath}`}
        alt="Project Image"
      />
      <h3 className="project-name text-lg">{name}</h3>
      <p className="project-btn text-gray-700">View project</p>
    </div>
  );
};

export default ProjectCard;
