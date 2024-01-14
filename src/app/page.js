import mainstyle from "../app/styles/style.css";
import headerstyle from "../app/styles/header.css";
import slyderstyle from "../app/styles/slider.css";
import Slider from "../app/components/Slider";
import Header from "../app/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
    </div>
  );
}
