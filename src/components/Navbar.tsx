"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { course , nav} from "@/content/Nav_content";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={nav[0]}
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item={nav[1]}>
          <div className="flex flex-col space-y-4 text-sm">
            {course.map((item) => (
              <HoveredLink href={"/courses"} key={item}>
                {item}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={nav[2]}
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
