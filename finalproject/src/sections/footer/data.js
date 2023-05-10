import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#projects", title: "Projects" },
  { id: 4, link: "#contact", title: "Contact" },
];

export const socials = [
  { id: 1, link: "https://www.facebook.com", icon: <RiMessengerLine /> },
  { id: 2, link: "https://twitter.com", icon: <AiOutlineTwitter /> },
  { id: 3, link: "https://www.linkedin.com", icon: <FaLinkedinIn /> },
  { id: 4, link: "https://github.com", icon: <AiFillGithub /> },
  { id: 5, link: "mailto:hernandeza1007@gmail.com", icon: <HiOutlineMail /> },
  { id: 6, link: "https://www.youtube.com", icon: <AiOutlineYoutube /> },
  { id: 7, link: "https://dribbble.com", icon: <AiOutlineDribbble /> },
  { id: 8, link: "https://www.instagram.com", icon: <AiOutlineInstagram /> },
  { id: 9, link: "mailto:a_hernandez8@mail.fhsu.edu", icon: <HiOutlineMail />},
];