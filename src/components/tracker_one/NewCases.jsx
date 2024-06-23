import Card, { CardTitle, CardData, CardImage } from "../card/Card";

export const NewCases = ({ children }) => {
  return (
    <Card>
      <CardImage src={"/assets/icons/covid-orange.svg"} />
      <CardTitle>New Cases</CardTitle>
      <CardData className="text-brightOrange">86503057</CardData>
    </Card>
  );
};
