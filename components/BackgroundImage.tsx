import Image from "next/image";

const BackgroundImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    return (
        <div className={"relative w-full h-full " + (className ?? "")}>
            <Image alt={ alt } src={src} layout="fill" className={"object-cover w-full " + (className ?? "")} />
        </div>
    );
}

export default BackgroundImage;