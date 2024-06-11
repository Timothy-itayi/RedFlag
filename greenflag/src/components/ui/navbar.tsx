import Link from 'next/link';

const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl  mx-auto px-4  flex animate-fade-up justify-between flex-row">
        <ul className="flex">
          <li>
            <Link href="/">
              <button className="px-5 text-white bg-black  transition duration-300 ease-in-out ">
               Home
              </button>
            </Link>
          </li>
        </ul>
       
      </div>
    </nav>
  );
}

export default Navbar;
