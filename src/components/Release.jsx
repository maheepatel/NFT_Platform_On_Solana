import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";

const Release = () => {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">
            Welcome to Rinkya Designs: Where Creativity Meets Blockchain
          </h2>
          <p className="description">
            I’m Rinku Patel, a passionate designer with expertise in Adobe
            Photoshop, Illustrator, and VFX animation, currently bringing my
            unique sketches to life in the digital world. As someone deeply
            inspired by the fusion of art and technology, I’m turning my
            hand-drawn creations into collectible NFTs, giving art enthusiasts
            and blockchain pioneers the opportunity to own a piece of my
            creative journey.
          </p>
          <p className="description">
            We have released four limited edition NFT&apos;s early which can be
            bid on via <a href="https://opensea.io/">OpenSea.</a>
          </p>
          <p className="description">50% of proceeds got to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="Floop Sereies"
            title="Purple-man"
            price={2.99}
            tag={12983}
            time={1}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Initial Release 20/12</h2>
          <p className="description">
            We have released four limited edition NFT&apos;s early which can be
            bid on via <a href="https://opensea.io/">OpenSea.</a>
          </p>
          <p className="description">
            There will be only four of these NFT&apos;s we ever make, so be sure
            not to miss out!.
          </p>
          <p className="description">50% of proceeds got to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Release;
