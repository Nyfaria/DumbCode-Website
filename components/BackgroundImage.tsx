
const BackgroundImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    return (
        <div className={"relative w-full h-full overflow-hidden " + (className ?? "")}>
            <img alt={ alt } src={src} className={"object-cover min-h-full " + (className ?? "")} />
        </div>
    );
}

export default BackgroundImage;