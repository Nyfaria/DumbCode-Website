import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { SvgArtstation, SvgDeviantart, SvgDiscord, SvgGithub, SvgTwitter, SvgYoutube } from "./Icons";

const logo = '/images/brand/logo.svg'

const Navbar = () => {

    return (
        <>
            <div className="hidden lg:block w-screen">
                <DesktopNavbar />
            </div>
            <div className="lg:hidden w-screen">
                <MobileNavbar />
            </div>
        </>
    );
}

const MobileNavbar = () => {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className="bg-neutral-900 w-screen h-14 pl-10 flex flex-row">
                <NavbarBrandButton />
                <div className="flex-grow"></div>
                <MobileNavOpenButton open={open} toggleOpen={toggleOpen} />
            </div>
            {open && <NavbarItems />}
        </>
    );
}

const MobileNavOpenButton = ({ open, toggleOpen }: { open: boolean, toggleOpen: any }) => {
    return (
        <div className="mt-5 mr-10 group" onClick={toggleOpen}>
            <div className={(open ? "translate-y-1 -rotate-45 group-hover:bg-red-500" : "-translate-y-2 group-hover:bg-neutral-500") + " rounded-full h-1 w-8 bg-white transition-all"}></div>
            <div className={(open ? "opacity-0 group-hover:bg-red-500" : "opacity-100 group-hover:bg-neutral-500") + " rounded-full h-1 w-8 bg-white  transition-all"}></div>
            <div className={(open ? "-translate-y-1 rotate-45 group-hover:bg-red-500" : "translate-y-2 group-hover:bg-neutral-500") + " rounded-full h-1 w-8 bg-white transition-all"}></div>
        </div>
    );
}

const DesktopNavbar = () => {

    return (
        <div className="bg-neutral-900 w-screen h-14 pl-10 flex flex-row">
            <NavbarBrandButton />
            <NavbarItems />
        </div>
    );
}

const NavbarBrandButton = () => {

    const router = useRouter();
    const takeHome = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        router.push("/");
    }

    return (
        <div className="bg-neutral-900 px-4 text-white text-xs capitalize hover:bg-neutral-700 h-full font-semibold flex flex-row cursor-pointer"
            onClick={takeHome}>
            <div className="mt-4 mr-2 h-6 w-6 relative">
                <Image src={logo} layout="fill" />
            </div>
            <p className="pt-5">DUMBCODE</p>
        </div>
    );
}

const NavbarItems = () => {
    return (
        <div className="w-full lg:flex lg:flex-row lg:bg-neutral-900 bg-neutral-800">
            <div className="lg:flex-grow">
                <NavbarButton name="HOME" route="/" />
                <NavbarButton name="STUDIO" route="/studio" />
                <NavbarButton name="TEAM" route="/team" />
                <NavbarButton name="MODS" route="/mods" />
            </div>
            <div className="lg:pr-4 lg:mr-10 pt-3 flex flex-row bg-neutral-900 pb-4 lg:pb-0">
                <div className="lg:hidden flex-grow"></div>
                <NavbarIconButton icon={<SvgDiscord className="h-6 w-6 text-center" />} route="https://discord.gg/6mygAnq" />
                <NavbarIconButton icon={<SvgTwitter className="h-6 w-6 text-center" />} route="https://twitter.com/dumbcodemc" />
                <NavbarIconButton icon={<SvgGithub className="h-6 w-6 text-center" />} route="https://github.com/Dumb-Code" />
                <NavbarIconButton icon={<SvgYoutube className="h-6 w-6 text-center" />} route="https://www.youtube.com/channel/UCjGWjtS8OMznjzTzpxQ0QYQ" />
                <NavbarIconButton icon={<SvgDeviantart className="h-6 w-6 text-center" />} route="https://www.deviantart.com/projectnublar" />
                <NavbarIconButton icon={<SvgArtstation className="h-6 w-6 text-center" />} route="https://www.artstation.com/dumbcodemc" />
                <div className="lg:hidden flex-grow"></div>
            </div>
        </div>
    );
}

const NavbarButton = ({ name, route }: { name: string, route: string }) => {

    const router = useRouter();
    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        router.push(route);
    }

    return (
        <button className="bg-neutral-900 px-4 text-white text-xs capitalize hover:bg-neutral-700 lg:h-full font-semibold transition-colors lg:w-auto w-full h-10"
            onClick={handleClick}>
            {name}
        </button>
    );
}

const NavbarIconButton = ({ icon, route }: { icon: JSX.Element, route: string }) => {

    return (
        <a target="_blank" href={route} className="bg-neutral-900 pl-1 pt-1 text-white text-xs capitalize hover:bg-neutral-700 h-8 w-8 rounded-full font-semibold transition-all mx-1 hover:scale-110">
            {icon}
        </a>
    );
}

export default Navbar;