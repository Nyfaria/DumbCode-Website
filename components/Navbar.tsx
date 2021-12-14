import Image from "next/image";
import { useRouter } from "next/router";
import { SvgArtstation, SvgDeviantart, SvgDiscord, SvgGithub, SvgTwitter, SvgYoutube } from "./Icons";

const logo = '/images/brand/logo.svg'

const Navbar = () => {

    const router = useRouter();
    const takeHome = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        router.push("/");
    }

    return (
        <div className="bg-neutral-900 w-screen h-14 pl-10 flex flex-row">
            <div className="bg-neutral-900 px-4 text-white text-xs capitalize hover:bg-neutral-700 h-full font-semibold flex flex-row cursor-pointer"
                onClick={takeHome}>
                <div className="mt-4 mr-2">
                    <Image src={logo} width={24} height={24} />
                </div>
                <p className="pt-5">DUMBCODE</p>
            </div>
            <div className="flex-grow">
                <NavbarButton name="HOME" route="/" />
                <NavbarButton name="STUDIO" route="/studio" />
                <NavbarButton name="TEAM" route="/team" />
                <NavbarButton name="MODS" route="/mods" />
            </div>
            <div className="pr-4 mr-10 pt-3 flex flex-row">
                <NavbarIconButton icon={<SvgDiscord className="h-6 w-6 text-center" />} route="https://discord.gg/6mygAnq" />
                <NavbarIconButton icon={<SvgTwitter className="h-6 w-6 text-center" />} route="https://twitter.com/dumbcodemc" />
                <NavbarIconButton icon={<SvgGithub className="h-6 w-6 text-center" />} route="https://github.com/Dumb-Code" />
                <NavbarIconButton icon={<SvgYoutube className="h-6 w-6 text-center" />} route="https://www.youtube.com/channel/UCjGWjtS8OMznjzTzpxQ0QYQ" />
                <NavbarIconButton icon={<SvgDeviantart className="h-6 w-6 text-center" />} route="https://www.deviantart.com/projectnublar" />
                <NavbarIconButton icon={<SvgArtstation className="h-6 w-6 text-center" />} route="https://www.artstation.com/dumbcodemc" />
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
        <button className="bg-neutral-900 px-4 text-white text-xs capitalize hover:bg-neutral-700 h-full font-semibold transition-colors"
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