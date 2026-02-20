
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="flex items-center justify-betwee bg-red-200 text-2xl font-serif text-shadow-lg/20 w-full">
      <div className="text-center flex-1">
      <Link to="/">Главная</Link> | <Link to="/about">О нас</Link> |{" "}
      <Link to="/gallery">Галерея</Link>
      <p>≽^•⩊•^≼</p>
      </div>
      <Link to="/registr"><span className="border-2 border-black border-dotted rounded-2xl text-white bg-red-300 m-[10px] p-[5px] text-right w-1/4">Войти</span></Link>
      
    </nav>
  );
};