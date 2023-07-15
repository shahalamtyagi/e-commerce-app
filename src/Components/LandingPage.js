import "./LandingPage.css"
import { ImgCard, WatchCard } from "./Card";
import { LandingPageImage } from "./Image";
import { Layout } from "./Layout";

export const LandingPage = () => {
  return (
    <Layout>
    <LandingPageImage/>
      <div className="image-card-wrapper">
        <ImgCard />
        <ImgCard />
        <ImgCard />
      </div>
    </Layout>
  );
};
