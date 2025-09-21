"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";

import { usePathname } from "next/navigation";


function NavLink({href, children,className}: {href: string; children: React.ReactNode ,className?: string}) {
  const pathName = usePathname();
  const isActive =
  href !== "/" &&
  (pathName === href || pathName.startsWith(href));
  return (
    <Link href={href} className={cn("text-sm lg:text-base font-medium ",className ,isActive && "text-rose-500" )}>
        {children}
        </Link>
  )
}

export default NavLink