import { useEffect, useRef } from "react";

const members = ["bastion", "bizarrealtispinax", "brotat", "brownboiwonder", "chucho", "cody", "dom", "floofhips", "gegy", "harvey", "hyperion", "igrek", "lustria", "mazikeen", "neusfear", "ninni", "niruny", "raptorek", "raptorwhisper", "sindavar", "snow", "wolfgank", "wynprice", "xav", "zenthic"];

const TeamCarousel = () => {

  var randomMembers = members//.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)

  //Duplicate the list so that it is easy to loop
  randomMembers = randomMembers.concat(randomMembers);

  const inputElement = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const interval = setInterval(() => {
      if (inputElement.current !== null) {
        //If we've almost made it to the end of the list then go back to the previous half that matches the current position
        //100 px buffer so that it doesn't stick at the end
        if (inputElement.current.scrollLeft >= inputElement.current.scrollWidth - window.innerWidth - 100) {
          //Basically just set the position to the current pos but make sure to account for the extra distance moved (and use 99 instead of 100 for offset)
          inputElement.current.scrollLeft = (inputElement.current.scrollWidth / 2) - window.innerWidth - 99 + (inputElement.current.scrollLeft - (inputElement.current.scrollWidth - window.innerWidth - 100));
        }
        //Scroll the elements a bit every 128 ms
        inputElement.current.scrollBy({ left: 32, behavior: 'smooth' })
      }
    }, 128)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div ref={inputElement} className="w-screen grid grid-flow-col overflow-x-hidden">
      {randomMembers.map((member, key) => <TeamBubble key={key} member={member} />)}
    </div>
  );
}

const TeamBubble = ({ member }: { member: string }) => {

  return (
    <div className="w-32 overflow-hidden m-4 hover:scale-105 transition-trans" onScroll={() => { }}>
      <div className="aspect-square rounded-full bg-center bg-cover" style={{ backgroundImage: `url("/images/people/${member}.png")` }}></div>
      <p className="text-center">{member}</p>
    </div>
  );
}

export default TeamCarousel;