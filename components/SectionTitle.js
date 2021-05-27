
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className='headline'> {title}</h2>
      {subtitle && <p className="paragraph"> {subtitle}</p>}
    </div>
  );
};

export default SectionTitle;

