import { useEffect, useRef } from "react";
import BackgroundImage from "./BackgroundImage";

export const Carousel2 = ({ images, autoAdvance }: { images: string[], autoAdvance: boolean }) => {

    const carouselImages = [...images, images[0]]

    const refElement = useRef<HTMLDivElement>(null)

    useEffect(() => {
        async function resetCarousel() {
            if (refElement.current !== null) {
                refElement.current.scrollLeft = 0;
                refElement.current.scrollBy({ left: (refElement.current.scrollWidth / (images.length + 1)), behavior: 'smooth' })
            }
        }

        const interval = setInterval(() => {
            if (refElement.current !== null) {
                refElement.current.scrollBy({ left: (refElement.current.scrollWidth / (images.length + 1)), behavior: 'smooth' })
                if (refElement.current.scrollLeft + ((refElement.current.scrollWidth / (images.length + 1)) * 2) >= refElement.current.scrollWidth) {
                    resetCarousel();
                }
            }
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [images.length])

    return (
        <div ref={refElement} className="w-full h-full overflow-x-hidden flex flex-row">
            {carouselImages.map((image, key) => <CarouselImage key={key} img={image} />)}
        </div>
    );
}

const CarouselImage = ({ img }: { img: string }) => {
    return (
        <div className="w-full h-full bg-center bg-cover flex-shrink-0">
            <BackgroundImage src={img} width={1920} height={1080} />
        </div>
    );
}