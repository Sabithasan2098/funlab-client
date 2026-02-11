"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type customLinkProps = {
  path: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const CustomLink = ({
  path,
  children,
  onClick,
  className,
}: customLinkProps) => {
  const pathName = usePathname();
  const active = pathName === path;

  return (
    <div>
      <Link
        href={path}
        onClick={onClick}
        className={`${className} ${active ? "text-[#FF8C00]" : ""}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
