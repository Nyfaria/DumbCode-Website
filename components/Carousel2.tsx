import { useEffect, useRef } from "react";

export const Carousel2 = ({ images, autoAdvance }: { images: string[], autoAdvance: boolean }) => {

    const carouselImages = [...images, images[0]]

    async function delay(n: number){
        return new Promise(function(resolve){
            setTimeout(resolve, n);
        });
    }

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
                console.log(refElement.current.scrollLeft + " " + refElement.current.scrollWidth)
                if (refElement.current.scrollLeft + ((refElement.current.scrollWidth / (images.length + 1)) * 2) >= refElement.current.scrollWidth) { 
                    resetCarousel();
                    console.log("should reset")
                }
            }
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div ref={refElement} className="w-full h-full overflow-x-hidden flex flex-row">
            {carouselImages.map((image, key) => <CarouselImage key={key} img={image} />)}
        </div>
    );
}

const CarouselImage = ({ img }: { img: string }) => {
    return (
        <div className="w-full h-full bg-center bg-cover flex-shrink-0" style={{ backgroundImage: `url("${img}")` }}>

        </div>
    );
}