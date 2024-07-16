import Image from "next/image";
import Logo from "/src/assets/img/Logo.svg";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between border-b items-center">
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo of Unsplash"
          width={200}
          height={200}
          className="mx-16 my-8"
        />
      </Link>
      <div className="flex w-1/5 justify-center mr-8">
        <nav className="flex justify-between w-3/4 font-medium text-[#6C727F] items-center">
          <Link
            href="/"
            className="text-[#121826] py-2 px-6 bg-[#E5E7EB] rounded-md"
          >
            Home
          </Link>
          <Link href="/collections">Collections</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
