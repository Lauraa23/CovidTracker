const variantsMap = {
  "total-case": {
    hoverColor: "hover:border-brightRed",
    textColor: "text-brightRed",
    bgColor: "bg-lightRed",
  },
  "active-case": {
    hoverColor: "hover:border-brightOrange",
    textColor: "text-brightOrange",
    bgColor: "bg-lightOrange",
  },
  "recovered-case": {
    hoverColor: "hover:border-brightGreen",
    textColor: "text-brightGreen",
    bgColor: "bg-lightGreen",
  },
  "death-case": {
    hoverColor: "hover:border-primary",
    textColor: "text-primary",
    bgColor: "bg-lightBlue",
  },
};

const InformationCard = ({ title, cases, todayCases, variant }) => {
  let banner;
  if (variant !== "active-case") {
    banner = (
      <b className="float-right text-xs text-steel bg-white p-1 mr-2 rounded tracking-wide">
        +{todayCases}
      </b>
    );
  }

  const { hoverColor, textColor, bgColor } = variantsMap[variant];

  return (
    <li
      className={`${bgColor} p-5 pb-4 mb-4 rounded border-2 border-solid border-transparent ${hoverColor} hover:scale-105 cursor-pointer`}
    >
      <h6 className={`text-base font-semibold text-navyBlue inline-block`}>
        {title}
      </h6>
      <p
        className={`text-2xl ${textColor} font-semibold leading-6 float-right`}
      >
        {cases}
      </p>
      {banner}
    </li>
  );
};

export default InformationCard;
