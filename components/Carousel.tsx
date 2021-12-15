import { Key, useEffect, useState } from "react";

const Carousel = ({ images, autoAdvance }: { images: string[], autoAdvance: boolean }) => {

    const [position, setPosition] = useState(0);
    const [transition, setTransition] = useState(true);

    useEffect(() => {
        setTransition(true);
        if (position < 0) {
            setPosition(images.length - 1);
        }
        if (position === 0 && !transition) {
            setPosition(1);
        }
        if (position >= images.length) {
            setTransition(false);
        }
    }, [position, images.length, transition])

    useEffect(() => {
        setPosition(0);
    }, [transition])

    useEffect(() => {
        const timer = setTimeout(() => {
            autoAdvance && advance();
        }, 5000);
        return () => clearTimeout(timer)
    })

    function advance() {
        setPosition(position + 1)
    }

    function back() {
        setPosition(position - 1);
    }

    return (
        <div className="w-full h-full">
            <div className="w-8 relative z-50 top-1/2 ml-4 pt-1.5 text-white hover:text-neutral-400 translate-y-16 cursor-pointer" onClick={() => back()}>
                <svg width="30" height="30"><polygon points="5, 13, 25, 25, 25, 0" fill="currentColor" /></svg>
            </div>
            <div className="relative z-50 top-1/2 ml-8 pt-1.5 text-white hover:text-neutral-400 w-full translate-y-6 translate-x-full cursor-pointer" onClick={() => advance()}>
                <svg width="30" height="30" className="rotate-180"><polygon points="5, 13, 25, 25, 25, 0" fill="currentColor" /></svg>
            </div>
            <div className="h-full" style={{ width: (100 * (images.length + 1)) + "%" }}>
                <div className={(transition && "ease-in-out transition-transform duration-200 ") + "h-full transform flex flex-row relative"} style={{ width: 100 + "% ", transform: 'translate(-' + (100 / images.length) * position + '%)' }}>
                    {images.map((img: string, id: Key) => <CarouselItem key={id} img={img} />)}
                </div>
            </div>
            <CarouselIndicators position={position} numSlides={images.length} />
        </div>
    )
}

export default Carousel;

export const CarouselItem = ({ img }: { img: string }) => {
    return (
        <div className="flex-grow h-full bg-cover bg-center" style={{ backgroundImage: `url("${img}")`, width: '100%' }}></div>
    )
}

const Bubble = ({ filled }: { filled: boolean }) => {
    return (
        <div className={(filled && "bg-white") + " w-3 h-3 rounded-full border border-white mx-1"}></div>
    )
}

const CarouselIndicators = ({ position, numSlides }: { position: number, numSlides: number }) => {
    return (
        <div className="flex flex-row relative bottom-0 transform justify-center -translate-y-4">
            {[...Array(numSlides)].map((e, i) => <Bubble filled={i === position} key={i} />)}
        </div>
    )
}