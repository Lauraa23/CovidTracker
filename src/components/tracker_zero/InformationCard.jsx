const InformationCard = ({ title, cases, todayCases, textColor, bgColor }) => {
  let banner;
  if (title !== "Active Case") {
    banner = (
      <b className="float-right text-xs text-steel bg-white p-1 mr-2 rounded tracking-wide">
        +{todayCases}
      </b>
    );
  }

  return (
    <li
      className={`bg-${bgColor} p-5 pb-4 mb-4 rounded border-2 border-solid border-transparent hover:border-${textColor} hover:scale-105 cursor-pointer`}
    >
      <h6 className={`text-base font-semibold text-${textColor} inline-block`}>
        {title}
      </h6>
      <p
        className={`text-2xl text-${textColor} font-semibold leading-6 float-right`}
      >
        {cases}
      </p>
      {banner}
    </li>
  );
};

export default InformationCard;
