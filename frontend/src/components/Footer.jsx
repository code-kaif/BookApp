import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/kaif.jsx" target={"_blank"}>
              <FaInstagramSquare className="text-3xl cursor-pointer hover:scale-125 hover:rotate-[360deg] duration-300" />
            </a>
            <a href="https://github.com/code-kaif" target={"_blank"}>
              <FaGithubSquare className="text-3xl cursor-pointer hover:scale-125 hover:rotate-[360deg] duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/code-kaif-93543a222/"
              target={"_blank"}
            >
              <FaLinkedin className="text-3xl cursor-pointer hover:scale-125 hover:rotate-[360deg] duration-300" />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Kaif</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
