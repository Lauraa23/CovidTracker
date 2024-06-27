import SmallCard from "./SmallCard";

export const ExtraInformation = ({ data }) => {
  return (
    <div className="lowInfo flex gap-[5px] mt-[40px]">
      <SmallCard information={"total-confirmed"} infoData={data.cases} />
      <SmallCard information={"total-recovered"} infoData={data.recovered} />
      <SmallCard information={"total-deaths"} infoData={data.deaths} />
      <SmallCard information={"new-deaths"} infoData={data.totalDeaths} />
      <SmallCard information={"help-number"} infoData="198" />
    </div>
  );
};
