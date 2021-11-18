const Navbar = () => {
    return (
        <div className="bg-gray-900 w-screen h-14 pl-10">
            <NavbarButton name="HOME" />
        </div>
    );
}

const NavbarButton = ({ name }: { name: string}) => {
    return (
        <button className="bg-gray-900 px-4 text-white text-xs capitalize hover:bg-gray-700 h-full font-semibold">
            {name}
        </button>
    );
}

export default Navbar;