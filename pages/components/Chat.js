import React from "react";
import Script from "next/script";

function Chat() {
  return (
    <div className="chat overflow-auto">
      <div className="cecilia mb-[3rem]">
        <div>Cecília - 11:30</div>
        <div className="p-[1.3rem] bg-chatPrimary w-auto max-w-xs rounded-2xl rounded-tl-none mt-[1rem]">
          Tive uma ideia incrível para um projeto! 😍
        </div>
      </div>
      <div className="you flex flex-col items-end">
        <div>Você - 11:32</div>
        <div className="p-[1.3rem] bg-chatSecondary w-auto rounded-2xl rounded-br-none mt-[1rem]">
          Sério? Me conta mais.
        </div>
      </div>
      <div className="cecilia mb-[3rem]">
        <div>Cecília - 11:34</div>
        <div className="p-[1.3rem] bg-chatPrimary w-auto max-w-xs lg:max-w-full lg:w-1/2 rounded-2xl rounded-tl-none mt-[1rem]">
          E se a gente fizesse um chat moderno e responsivo em apenas uma
          semana?
        </div>
      </div>
      <div className="you flex flex-col items-end">
        <div>Você - 11:36</div>
        <div className="p-[1.3rem] bg-chatSecondary w-auto rounded-2xl rounded-br-none mt-[1rem]">
          <strong>#boraCodar! 🚀</strong>
        </div>
      </div>
      <div className="cecilia mb-[3rem]">
        <div>Cecília - 11:38</div>
        <div className="p-[1.3rem] bg-chatPrimary w-auto max-w-xs rounded-2xl rounded-tl-none mt-[1rem]">
          Com certeza! Vamos fazer a diferença! 😍
        </div>
      </div>
      <div className="you flex flex-col items-end">
        <div>Você - 11:42</div>
        <div className="p-[1.3rem] bg-chatSecondary w-auto rounded-2xl rounded-br-none mt-[1rem]">
          Vamos sim! 😁
        </div>
      </div>
      <div className="cecilia mb-[3rem]">
        <div>Cecília - 11:34</div>
        <div className="p-[1.3rem] bg-chatPrimary w-auto max-w-xs lg:max-w-full lg:w-1/2 rounded-2xl rounded-tl-none mt-[1rem]">
          E em qual tecnlogia nós deveriamos desenvolver?
        </div>
      </div>
      <div className="you flex flex-col items-end">
        <div>Você - 11:36</div>
        <div className="p-[1.3rem] bg-chatSecondary w-auto rounded-2xl rounded-br-none mt-[1rem]">
          <strong>#REACT!! 🚀</strong>
        </div>
      </div>
      <Script>
        const scrolling = document.querySelector(".chat");
        scrolling.lastElementChild.scrollIntoView();
      </Script>
    </div>
  );
}

export default Chat;
