import Section from "./_components/Section";
import { CarouselDemo } from "./_components/Carousel";

export default async function Home() {
  return (
    <div>
      <CarouselDemo />
      <Section title="Upcoming" endpoint="upcoming?language=en-US&page=1" />
      <Section title="Popular" endpoint="popular?language=en-US&page=1" />
      <Section title="Top rated" endpoint="top_rated?language=en-US&page=1" />
    </div>
  );
}
