import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaWallet } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" flex justify-center border-b-[1px] border-gray-500/70 ">
      <nav className="flex flex-row justify-between w-4/5 py-2">
        {/* logo  */}

        <div className="flex flex-row">
          <Image src={logo} alt="logo" width={36} />
          <div className="px-3 py-2 text-xl font-bold ">Logo</div>
        </div>

        {/* search bar  */}

        <div className="p-2  w-72">
          <Input type="text" placeholder="Search" />
        </div>

        {/* nav links  */}

        <div className="flex flex-row  p-2 gap-2 font-light text-[0.8rem] ">
          <ul className="flex flex-row gap-4 pt-2">
            <li className="">
              <a href="#">Home</a>
            </li>
            <li className="">
              <a href="#">Auctions</a>
            </li>
            <li className="">
              <a href="#">MarkatePlace</a>
            </li>
            <li className="">
              <a href="#">About</a>
            </li>
          </ul>
          <div className="px-2">
            <Button variant="outline">
              <FaWallet size={10} className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
