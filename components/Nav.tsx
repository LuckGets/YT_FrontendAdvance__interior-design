"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Import Nav Links
import { navLinks } from "../constant";

export default function Nav({
  containerStyles,
  linkStyles,
  underlineStyles,
}: {
  containerStyles: string;
  linkStyles?: string;
  underlineStyles?: string;
}) {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((item, index) => (
        <Link
          className={`uppercase ${linkStyles}`}
          key={index}
          href={item.path}
        >
          {item.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            ></motion.span>
          )}
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
