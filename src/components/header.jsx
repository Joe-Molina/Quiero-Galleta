import { useState, useEffect } from "react";

export const HeaderNav = () => {
  const [getMenu, setGetMenu] = useState(false);

  const handleClick = () => {
    setGetMenu(!getMenu);
  };

  const buttonGetMenu = getMenu
    ? "bg-blue-300 p-3 rounded-full lg:hidden"
    : "bg-red-300 p-3 rounded-full lg:hidden";

  const menuOpen = getMenu ? (
    <article className="fixed w-screen h-full z-20 bg-blue-100 top-20 left-0 flex justify-center items-center">
      <nav className=" absolute flex flex-col justify-start items-center h-full   w-full text-center pt-16">
        <a
          href="/"
          className=" text-2xl my-6 p-4 rounded-full hover:text-white  hover:bg-blue-400"
        >
          Inicio
        </a>
        <a
          href="/Menu/Galletas"
          className=" text-2xl my-6 p-4 rounded-full hover:text-white  hover:bg-blue-400"
        >
          Galletas
        </a>
        <a
          href="/Menu/Brownies"
          className=" text-2xl my-6 p-4 rounded-full hover:text-white  hover:bg-blue-400"
        >
          Brownies
        </a>
        <a
          href="/Menu/Bebidas"
          className=" text-2xl my-6 p-4 rounded-full hover:text-white hover:bg-blue-400 "
        >
          Bebidas
        </a>
      </nav>
    </article>
  ) : (
    <></>
  );

  return (
    <header className="bg-white h-20 flex items-center justify-between px-5 fixed top-0 z-50 w-full lg:shadow-md">
      <a
        href="javascript:history.back()"
        className="bg-red-300 rounded-full p-1 lg:hidden"
      >
        <img src="/arrow.svg" alt="" className="w-10" />
      </a>

      <img src="/quieroGalletaLogo.svg" className="h-10" alt="" />

      <nav className="hidden lg:flex">
        <a
          href="/"
          className=" text-xl my-6 p-4 rounded-full hover:text-red-400 transition"
        >
          Inicio
        </a>
        <a
          href="/Menu/Galletas"
          className=" text-xl my-6 p-4 rounded-full hover:text-red-400 transition"
        >
          Galletas
        </a>
        <a
          href="/Menu/Brownies"
          className=" text-xl my-6 p-4 rounded-full hover:text-red-400 transition"
        >
          Brownies
        </a>
        <a
          href="/Menu/Bebidas"
          className=" text-xl my-6 p-4 rounded-full hover:text-red-400 transition "
        >
          Bebidas
        </a>
      </nav>

      <button href="" className={buttonGetMenu} onClick={handleClick}>
        <img src="/Caritafeli.svg" alt="" className="h-8" />
      </button>
      {menuOpen}
    </header>
  );
};
