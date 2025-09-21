import { ArrowRight, Sparkle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="w-full   flex flex-col justify-center items-center gap-4 lg:gap-6 text-center px-4 py-20 sm:py-28">
      <div className="flex items-center gap-2  font-semibold text-rose-500 border-rose-500 border px-6 py-2 rounded-full hover:bg-rose-500 hover:text-white transition-all ease-in-out duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-rose-800 hover:to-rose-600">
        <Sparkle className="h-6 w-6 animate-pulse" />
        <p>Powered By AI</p>
      </div>
      <h1 className="text-3xl py-6 lg:text-5xl max-w-4xl  font-bold ">
        TransFrom PDFs into Concise Summaries
      </h1>
      <h2 className="text-lg max-w-4xl pb-3">Get a Beautifull Summariy reel of the document in seconds</h2>
      
     
          <Button  className="bg-gradient-to-r from-rose-600 to-rose-800 py-6 px-12 cursor-pointer transition-all ease-in-out duration-700 hover:scale-105  text-sm text-white  rounded-3xl hover:bg-gradient-to-r hover:from-rose-800 hover:to-rose-600">
        {" "}
        <Link href={"/dashboard"} className="flex w-full items-center gap-2  ">
       <span> Try Summairazer</span> <div className="flex items-center">
        <ArrowRight className="w-10  h-10 text-2xl font-bold animate-pulse" /></div>{" "}
        </Link>
      </Button>

    
    
    </div>
  );
}

export default HeroSection;
