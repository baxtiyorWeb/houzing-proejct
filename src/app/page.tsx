import ItemCard from "@/components/ItemCard";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Progress from "@/components/ui/Progress";
import Text from "@/components/ui/Text";
import Container from "@/shared/Container";
import Image from "next/image";
import { HeartIcon } from "../assets/houzing-images";
export default function Home() {
  return (
    <Container >
      <h1>ok</h1>
      <ItemCard className="w-[250px]  h-[300px] border " items={[1, 2, 3, 4, 5]} slider sliderConfig={{
        slidesToShow: 3

      }} />
      <Button variant="primary" disabled={false} className="cursor-pointer">download</Button>
      <Text >html</Text>
      <Progress value={100} max={100} showValue />
      <Input type="checkbox" />
      <div className="relative">
        <Image src={HeartIcon} alt="img" />
      </div>
    </Container>
  );
}
