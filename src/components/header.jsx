import { useState } from "react";

export const HeaderNav = () => {
  const [getMenu, setGetMenu] = useState(false);

  const handleClick = () => {
    setGetMenu(!getMenu);
  };

  const buttonGetMenu = getMenu
    ? "bg-blue-300 p-3 rounded-full"
    : "bg-red-300 p-3 rounded-full";

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
          href="/MenuGalletas"
          className=" text-2xl my-6 p-4 rounded-full hover:text-white  hover:bg-blue-400"
        >
          Galletas
        </a>
        <a
          href=""
          className=" text-2xl my-6 p-4 rounded-full hover:text-white  hover:bg-blue-400"
        >
          Brownies
        </a>
        <a
          href=""
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
    <header className="bg-white h-20 flex items-center justify-between px-5 fixed top-0 z-50 w-full">
      <img src="/quieroGalletaLogo.svg" className="h-10" alt="" />

      <button href="" className={buttonGetMenu} onClick={handleClick}>
        <img src="/Caritafeli.svg" alt="" className="h-8" />
      </button>
      {menuOpen}
    </header>
  );
};
