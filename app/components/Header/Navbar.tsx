import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaWallet } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" flex justify-center border-b-[1px] border-gray-500/70 ">
      <nav className="flex flex-row justify-between w-4/5 py-2">
        {/* logo  */}

        <div className="flex flex-row">
          <Image src={logo} alt="logo" width={50} />
          <div className="px-3 py-5 text-xl font-bold ">Logo</div>
        </div>

        {/* search bar  */}

        <div className="p-1">
          <Input
            type="text"
            placeholder="Search"
            className="p-3 m-1 text-2xl border-2 rounded-lg h-14 border-gray-500/70 w-96"
          />
        </div>

        {/* nav links  */}

        <div className="flex flex-row  p-2 gap-2 font-light text-[1.25rem] ">
          <ul className="flex flex-row gap-4 pt-2">
            <li className="hover:border-b-2 hover:border-[#f2994a]">
              <a href="#">Home</a>
            </li>
            <li className="hover:border-b-2 hover:border-[#f2994a]">
              <a href="#">Auctions</a>
            </li>
            <li className="hover:border-b-2 hover:border-[#f2994a]">
              <a href="#">Marketplace</a>
            </li>
            <li className="hover:border-b-2 hover:border-[#f2994a]">
              <a href="#">About</a>
            </li>
          </ul>
          <div className="ml-8">
            <Button
              variant="outline"
              className="w-48 h-12 border-2 rounded-full border-gray-400/80 hover:scale-105"
            >
              <FaWallet size={10} className="w-4 h-4 mr-2" />
              <p className="text-lg">Connect Wallet</p>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
