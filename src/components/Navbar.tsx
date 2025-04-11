import Image from "next/image";
import Link from "next/link";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="py-4 flex items-center justify-between max-w-screen-xl mx-auto">
          <Image src={logoImage} alt="Saas logo" width={48} height={48} className="h-12 w-12" />

          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="h-6 w-6 text-white" />
          </div>
          <nav className="gap-6 items-center hidden sm:flex">
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
            <Link href="/dashboard" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</Link>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</a>
            <button className="bg-white py-2 px-4 rounded-lg">Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  );
};
