import Card, { CardTitle, CardData, CardImage } from "../card/Card";

export const NewDeaths = ({ children }) => {
  return (
    <Card>
      <CardImage src={"/assets/icons/covid-redark.svg"} />
      <CardTitle>New Deaths</CardTitle>
      <CardData className="text-patataBlue">86503057</CardData>
    </Card>
  );
};
