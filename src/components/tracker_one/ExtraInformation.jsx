import SmallCard from "./SmallCard";

export const ExtraInformation = () => {
  return (
    <div className="lowInfo flex gap-[5px] mt-[40px]">
      <SmallCard information={"total-confirmed"} />
      <SmallCard information={"total-recovered"} />
      <SmallCard information={"total-deaths"} />
      <SmallCard information={"new-deaths"} />
      <SmallCard information={"help-number"} />
    </div>
  );
};
