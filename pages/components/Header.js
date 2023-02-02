import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="Header flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://randomuser.me/api/portraits/women/50.jpg"
            width={48}
            height={48}
            alt="Garota de Oculos"
            className="rounded-full"
          />
          <div className="flex flex-col ml-[1.6rem]">
            <div className="font-bold">Cecilia Sassaki</div>
            <div className="user-status text-status flex items-center">
              Online
            </div>
          </div>
        </div>
        <div className="text-4xl">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
      </div>
      <div className="text-center my-[3rem]">Hoje 11:30</div>
    </div>
  );
}

export default Header;
