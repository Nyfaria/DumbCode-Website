import Image from 'next/image';

const HeroImage = ({image}: {image: string}) => {
  return (
    <section className="w-screen h-screen block">
      <div className="relative bottom-0 w-full h-full">
        <Image
          alt="Project Nublar"
          src={image}
          width={1920}
          height={1080}
          layout='fill'
        />
      </div>
    </section>
  );
}

export default HeroImage