import { useEffect, useRef } from "react";
import BackgroundImage from "./BackgroundImage";

const members = ["bastion", "bizarrealtispinax", "brotat", "brownboiwonder", "chucho", "cody", "dom", "floofhips", "gegy", "harvey", "hyperion", "igrek", "lustria", "mazikeen", "neusfear", "ninni", "niruny", "raptorek", "raptorwhisper", "sindavar", "snow", "wolfgank", "wynprice", "xav", "zenthic"];

const TeamCarousel = () => {

  //Duplicate the list so that it is easy to loop
  const randomMembers = members.concat(members);

  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let frame: number
    const callback = (time: DOMHighResTimeStamp) => {
      frame = requestAnimationFrame(callback)
      if (divRef.current !== null) {
        const speed = 0.1
        divRef.current.scrollLeft = (time * speed) % (divRef.current.scrollWidth / 2)
      }
    }
    frame = requestAnimationFrame(callback)

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={divRef} className="w-screen grid grid-flow-col overflow-x-hidden">
      {randomMembers.map((member, key) => <TeamBubble key={key} member={member} />)}
    </div>
  );
}

const TeamBubble = ({ member }: { member: string }) => {

  return (
    <div className="w-32 overflow-hidden m-4 hover:scale-105 transition-trans" onScroll={() => { }}>
      <div className="aspect-square rounded-full bg-center bg-cover">
        <BackgroundImage alt={member} className="rounded-full" src={`/images/people/${member}.png`} />
      </div>
      <p className="text-center">{member}</p>
    </div>
  );
}

/*
const TeamBubble2 = ({ member }: { member: string }) => {

  const memberData = allMembers.find(element => element.name.toLowerCase() === member.toLowerCase())

  return (
    <div className="w-32 overflow-hidden m-4 hover:scale-105 transition-trans" onScroll={() => { }}>
      <div className="aspect-square rounded-full bg-center bg-cover">
        <BackgroundImage alt={member} className="rounded-full" src={`/images/people/${memberData?.imageName}`} />
      </div>
      <p className="text-center">{memberData?.name}</p>
    </div>
  );
}
*/

export default TeamCarousel;