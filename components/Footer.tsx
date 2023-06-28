import React from "react"
import {
  AiOutlineGithub,
  AiFillPhone,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © {new Date().getFullYear()}{"&nbsp"}
          <a href="https://www.linkedin.com/in/harsh-patel244/" rel="noreferrer" target="_blank">
            <p className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"> Harsh Patel</p>{" "}
          </a>
          <a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/Harsh244007" rel="noreferrer" target="_blank">
            <AiOutlineGithub className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100" size={30} />
          </a>

          <a href="https://www.linkedin.com/in/harsh-patel244/" rel="noreferrer" target="_blank">
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a href="mailto:patelharsh241999@gmail.com" rel="noreferrer" target="_blank">
            <AiOutlineMail className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100" size={30} />
          </a>
          <a href="tel:+918141924047" rel="noreferrer" target="_blank">
            <AiFillPhone className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100" size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
