import { useState, useEffect } from "react";
import scrollreveal from "scrollreveal";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
// import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import ScrollToTop from "./components/ScrollToTop";
import SuperRare from "./components/SuperRare";
import Clients from "./components/Clients";
import Release from "./components/Release";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import "./scss/index.scss";

function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `nav, .home, .free, .clients, .super-rare, .releases, .like, .signup, footer
        `,
        { interval: 500 }
      );
    };
    registerAnimations();
  }, []);

  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].computedStyleMap.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].computedStyleMap.transform = "none";
  }, 1500);

  // Configure Solana wallets
  const wallets = [new PhantomWalletAdapter()];
  // const network = clusterApiUrl("devnet");

  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]}>
          <WalletModalProvider>
            <div className="app-container" data-theme={theme}>
              <ScrollToTop />
              <Navbar changeTheme={changeTheme} currentTheme={theme} />
              <Home />
              {/* <Free /> */}
              <SuperRare />
              <Clients />
              <Release />
              <Like />
              <Signup />
              <Footer />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
