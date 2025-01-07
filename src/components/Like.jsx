import eth1 from "../assets/solana.png";
import eth2 from "../assets/eth2.png";

const Like = () => {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don&apos;t miss out on the release of our new NFT, Sign up below to
            recieve updates when we go live on 20/12.
          </p>
          <p className="description">
            Don&apos;t miss out on the release of our new NFT. Sign up below to
            receive updates when we go live on 20/12. Don&apos;t miss out on the
            release of our new NFT.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don&apos;t miss out on the release of our new NFT, Sign up below to
            recieve updates when we go live on 20/12.
          </p>
          <p className="description">
            Don&apos;t miss out on the release of our new NFT. Sign up below to
            receive updates when we go live on 20/12. Don&apos;t miss out on the
            release of our new NFT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Like;
