import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/whoisdominic" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/dominiccobb/" },
  { icon: <LuBox />, path: "https://app.hackthebox.com/users/393536" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/whoisdominic/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
