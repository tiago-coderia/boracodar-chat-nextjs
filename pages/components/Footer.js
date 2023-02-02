import React from "react";

function Footer() {
  return (
    <div className="mt-[3rem]">
      <form className="flex items-center bg-boxInput p-[2.4rem] rounded-full gap-2">
        <input
          type="text"
          placeholder="Digite a sua Mensagem"
          className="w-full bg-transparent"
        />
        <button className="flex text-4xl">
          <ion-icon name="send"></ion-icon>
        </button>
      </form>
    </div>
  );
}

export default Footer;
