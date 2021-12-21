import Image from "next/image";

const BackgroundImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    return (
        <div className={"relative w-full h-full " + (className ?? "")}>
            <Image alt={ alt } src={src} layout="fill" objectFit="cover" className={"object-contain w-full relative " + (className ?? "")} />
        </div>
    );
}

export default BackgroundImage;