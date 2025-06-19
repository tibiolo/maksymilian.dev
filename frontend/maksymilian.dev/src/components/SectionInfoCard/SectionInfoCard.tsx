interface SectionInfoCardProps {
  name: string;
  info: string;
}

const SectionInfoCard = ({ name, info }: SectionInfoCardProps) => {
  return (
    <div className="section-info-card flex flex-col justify-center items-center ">
      <h2 className="section-name text-xl font-bold text-gray-800">{name}</h2>
      <p className="section-info text-gray-400 ">{info}</p>
    </div>
  );
};

export default SectionInfoCard;
