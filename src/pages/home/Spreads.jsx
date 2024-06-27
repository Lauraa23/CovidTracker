import React from "react";

const Spreads = () => {
  return (
    <section id="diseaseSpreadsWrapper">
      <div className="diseaseSpreadsContainer flex flex-col text-center">
        <div className="spreadsTitleCenter">
          <h2 className="text-[0.8rem] text-[#262f5a] font-bold">Spreads</h2>
          <h3 className="text-2xl text-[#262f5a] font-bold">
            Disease spreads from person to person
          </h3>
        </div>
        <div className="spreadsCards flex flex-row items-center justify-center mr-[-15px] ml-[-15px]">
          <div className="spreadPersonalCard bg-white w-1/5 shadow-[0px_30px_60px_#a09fca73] flex flex-col items-start m-[25px] rounded-[10px]">
            <div className="spreadImageContent w-full overflow-hidden p-0">
              <img
                className="w-full"
                src="/assets/images/p-1.jpg"
                alt="facemask"
              />
            </div>
            <div className="spreadTextContent text-start flex flex-col items-start p-2.5">
              <h4 className="text-center text-[0.8rem] text-[#262f5a] font-bold">
                Wear Facemask
              </h4>
              <p className="text-start text-[0.6rem] text-[#262f5a]">
                Fever is a key symptom, experts say. Don't fixate on a number,
                but know it's really not a fever until your temperature reaches
                at least 100
              </p>
            </div>
          </div>
          <div className="spreadPersonalCard bg-white w-1/5 shadow-[0px_30px_60px_#a09fca73] flex flex-col items-start m-[25px] rounded-[10px]">
            <div className="spreadImageContent w-full overflow-hidden p-0">
              <img
                className="w-full"
                src="/assets/images/p-2.jpg"
                alt="washHands"
              />
            </div>
            <div className="spreadTextContent text-start flex flex-col items-start p-2.5">
              <h4 className="text-center text-[0.8rem] text-[#262f5a] font-bold">
                Wash your hands often
              </h4>
              <p className="text-start text-[0.6rem] text-[#262f5a]">
                Coughing is another key symptom, but it's not just any cough,
                said Schaffner. It should be a dry cough that you feel in your
                chest.
              </p>
            </div>
          </div>
          <div className="spreadPersonalCard bg-white w-1/5 shadow-[0px_30px_60px_#a09fca73] flex flex-col items-start m-[25px] rounded-[10px]">
            <div className="spreadImageContent w-full overflow-hidden p-0">
              <img
                className="w-full"
                src="/assets/images/p-6.jpg"
                alt="distance"
              />
            </div>
            <div className="spreadTextContent text-start flex flex-col items-start p-2.5">
              <h4 className="text-center text-[0.8rem] text-[#262f5a] font-bold">
                Keep social distance
              </h4>
              <p className="text-start text-[0.6rem] text-[#262f5a]">
                Shortness of breath can be a third -- and very serious --
                manifestation of Covid-19, and it can occur on its own, without
                a cough.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spreads;
