import background from "../../assets/images/background.jpg";
import HomePageItem from "./HomePageItem";
import bestBook from "../../assets/images/It_starts_with_Us.jpg";
import jersey from "../../assets/images/raiders-jersey.jpg";
import chuckIt from "../../assets/images/chuckit-ball-toy.jpg";
import keepClean from "../../assets/images/mario-badescu-body.jpg";
import bombBundle from "../../assets/images/lifearound2angels-bathbombs.jpeg";
import cutest from "../../assets/images/Hudson-baby-robe.jpg";
import cats from "../../assets/images/dr-elsy-cat-litter.jpg";
import reptiZoo from "../../assets/images/repti-z00.jpg";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-container">
        <img className="homepage-background" src={background} alt="" />
        <div className="homepage-layout">
          <Link to="/products/44">
            <HomePageItem message="Best Seller in Clothing" link={jersey} />
          </Link>
          <Link to="/products/1">
            <HomePageItem message="Best Seller in Books" link={bestBook} />
          </Link>
        </div>
        <div className="homepage-layout">
          <Link to="/products/31">
            <HomePageItem message="The Bombest Bundles" link={bombBundle} />
          </Link>
          <Link to="/products/29">
            <HomePageItem message="Reptiles Need Love Too" link={reptiZoo} />
          </Link>
          <Link to="/products/35">
            <HomePageItem message="Keepin' it Clean" link={keepClean} />
          </Link>
          <Link to="/products/28">
            <HomePageItem message="Things Your Dog Need" link={chuckIt} />
          </Link>
        </div>
        <div className="homepage-layout">
          <Link to="/products/40">
            <HomePageItem message="Cutest for the Cutest" link={cutest} />
          </Link>
          <Link to="/products/26">
            <HomePageItem message="Things Your Cats Really Need" link={cats} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
