import { Button } from "@/components/ui/button";
import {  FileText } from "lucide-react"
import Link from "next/link"
import NavLink from "./nav-Link";


function Header() {
    const isloggedIn = false;
  return (
    <nav className="container mx-auto px-2 lg:px-6 py-2 lg:py-4 flex justify-between items-center ">
        {/* brand-log */}
        <NavLink className="flex lg:flex-1 items-center gap-1" href={"/"}>
           <FileText className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 hover:rotate-12 transition-all ease-in-out duration-200"/>
        <span className="ml-2 text-lg lg:text-2xl font-bold">Summairazer</span>
        </NavLink>
        {/* priceing section */}
        <div className="flex   gap-2 lg:gap-12 lg:justify-center lg:items-center ">
             <NavLink href={"/pricing"} className="text-sm lg:text-base font-medium ">
           Pricing
        </NavLink>
        {
            isloggedIn && (
                <NavLink href={"/features"} className="text-sm lg:text-base font-medium ">
         Your Summaries
        </NavLink>
            )
        }
        

        </div>
       
        {/* sign-in section */}
        <div className="flex lg:flex-1 justify-end ">
            {
                isloggedIn ? (
                    <div className="flex items-center gap-4 lg:gap-8">
                         <NavLink href={"#"} className="">Upload a PDF</NavLink>
                         <div>pro</div>
                         <Button>user</Button>

                    </div>
                   
                ):(
                    <NavLink href={"/sign-in"} className="">Sign In</NavLink>
                )
            }
        </div>

    </nav>
  )
}

export default Header