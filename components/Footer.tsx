import React, { memo } from "react";

import { AiOutlineGithub, AiFillPhone, AiOutlineLinkedin, AiFillInstagram, AiFillYoutube, AiOutlineMail } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="iframe mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl " tabIndex={1}>
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-300 text-neutral-100">
          © {new Date().getFullYear()}
          {" - "}
          <a href="https://www.linkedin.com/in/harsh-patel244/" className="noBlackShadow" rel="noreferrer" target="_blank">
            <p className="hover:-translate-y-1 noBlackShadow transition-transform cursor-pointer text-neutral-400 "> Harsh Patel</p>{" "}
          </a>
          {/* <a href="/" className="hover:underline"></a> */}
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/Harsh244007" rel="noreferrer" className="noBlackShadow" target="_blank">
            <AiOutlineGithub className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-400 text-neutral-100" size={30} />
          </a>

          <a href="https://www.linkedin.com/in/harsh-patel244/" className="noBlackShadow" rel="noreferrer" target="_blank">
            <AiOutlineLinkedin className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-400 text-neutral-100" size={30} />
          </a>

          <a href="mailto:patelharsh241999@gmail.com" rel="noreferrer" className="noBlackShadow" target="_blank">
            <AiOutlineMail className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-400 text-neutral-100" size={30} />
          </a>
          <a href="tel:+918141924047" rel="noreferrer" className="noBlackShadow" target="_blank">
            <AiFillPhone className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-400 text-neutral-100" size={30} />
          </a>
          <a
            href="https://leetcode.com/patelharsh241999/"
            className="noBlackShadow"
            rel="noreferrer"
            target="_blank"
            // activeClass="active"
          >
            <SiLeetcode className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-400 text-neutral-100" size={30} />
          </a>
          <a
            href="https://www.youtube.com/@codingwithharsh__/videos"
            className="noBlackShadow"
            rel="noreferrer"
            target="_blank"
            // activeClass="active"
          >
            <AiFillYoutube className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-400 text-neutral-100" size={30} />
          </a>
          <a
            href="https://www.instagram.com/codingwithharsh__"
            className="noBlackShadow"
            rel="noreferrer"
            target="_blank"
            // activeClass="active"
          >
            <AiFillInstagram className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-400 text-neutral-100" size={30} />
          </a>
        </div>
      </div>
      <p className="text-center pb-5">Made by Harsh with ❤️</p>
    </footer>
  );
};

export default memo(Footer);
