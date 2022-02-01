import Link from "next/link";

function Header({ title }) {
  return (
    <header className="w-full relative flex flex-col">
      <div className="w-full py-8 justify-between relative flex flex-row ">
        <div className="flex  absolute top-0 left-0 w-full h-full flex-col justify-center items-center">
          <Link href="/" passHref>
            <h1 className="text-2xl cursor-pointer font-semibold ">{title}</h1>
          </Link>
        </div>
      </div>
      <hr className="h-px bg-gray-400 opacity-90 w-full" />
    </header>
  );
}

export default Header;
