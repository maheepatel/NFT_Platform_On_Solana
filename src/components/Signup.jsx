import signup from "../assets/signup.png";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="discription">
            Don&apos;t miss out on the release of our new NFT. Sign up below to
            receive update when we go live.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="Home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
