import { FaGithub, FaLinkedinIn, FaTwitter, FaDiscord } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yourusername" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourusername" },
    { icon: <FaDiscord />, url: "https://discord.gg/yourserver" },
  ];

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="connect-section">
          <h3>Let&apos;s Connect</h3>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="contact-section">
          <a href="mailto:your.email@domain.com" className="email-link">
            <HiMail className="email-icon" />
            <span>rinkyadesigns@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Rinkya Designs. All rights reserved.</p>
        <p className="mint-text">Mint your favorite artwork as NFT</p>
      </div>
    </footer>
  );
};

export default Footer;

// import logo from "../assets/logo.png";
// import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
// import { FaTiktok } from "react-icons/fa";

// const links = [
//   {
//     title: "About",
//     data: ["About", "Terms", "Legal"],
//   },
//   {
//     title: "NFT",
//     data: ["OpenSea", "Maker", "Learn"],
//   },
//   {
//     title: "Contact",
//     data: ["Press", "Support"],
//   },
//   {
//     title: "Social",
//     data: ["Twiiter", "Instagram"],
//   },
// ];
// const socialLink = [
//   <BsFacebook key={1} />,
//   <BsTwitter key={2} />,
//   <BsInstagram key={3} />,
//   <FaTiktok key={4} />,
// ];

// const Footer = () => {
//   const year = new Date().getFullYear();

//   return (
//     <footer>
//       <div className="upper">
//         <div className="brand-container">
//           <div className="brand">
//             <img src={logo} alt="Logo" />
//           </div>
//           <p>Exclusive NFT Collection</p>
//           <ul>
//             {socialLink.map((link, index) => (
//               <li key={index}>{link}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="links">
//           {links.map(({ title, data }, index) => {
//             return (
//               <div className="link" key={index}>
//                 <h4>{title}</h4>
//                 <ul>
//                   {data.map((link, index2) => (
//                     <li key={index2}>{link}</li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="lower">
//         <span>&copy; Copyright {year} NFT</span>
//         <span>Launching this December</span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
