import Image from "next/image";

const logo = '/images/brand/logo.svg'

const Navbar = () => {
    return (
        <div className="bg-neutral-900 w-screen h-14 pl-10 flex flex-row">
            <div className="bg-neutral-900 px-4 text-white text-xs capitalize hover:bg-neutral-700 h-full font-semibold flex flex-row cursor-pointer">
                <div className="mt-4 mr-2">
                    <Image src={logo} width={24} height={24} /> 
                </div>
                <p className="pt-5">DUMBCODE</p>
            </div>
            <NavbarButton name="HOME" />
            <NavbarButton name="STUDIO" />
            <NavbarButton name="TEAM" />
            <NavbarButton name="MODS" />
        </div>
    );
}

const NavbarButton = ({ name }: { name: string}) => {
    return (
        <button className="bg-neutral-900 px-4 text-white text-xs capitalize hover:bg-neutral-700 h-full font-semibold">
            {name}
        </button>
    );
}

export default Navbar;