import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { AnimatorDesc, ModelerDesc, ProjectDesc, TexturerDesc } from "../data/studioinfo";

const banner = '/images/project_nublar/brachi.jpg'

const worrt = '/images/galaxies/worrt.png'

const promo1 = '/images/project_nublar/squad.jpg'
const promo2 = '/images/project_nublar/gali.jpg'
const promo3 = '/images/project_nublar/para.jpg'

const project = '/images/studio/project.png'
const modeler = '/images/studio/modeler.png'
const texturer = '/images/studio/texturer.png'
const animator = '/images/studio/animator.png'

const StudioPage = () => {

    const descriptionClasses = "text-gray-400 mt-4 text-xs w-full text-justify columns-2 gap-6"

    return (
        <div className="overflow-x-hidden bg-neutral-800">
            <Header pageName="Studio" />
            <Navbar />

            <section className="w-screen h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
                <div className="translate-y-1/3 h-full text-center text-white">
                    <div className="flex flex-row w-screen justify-center">
                        <h1 className="text-6xl font-semibold">DumbCode</h1>
                        <h1 className="text-6xl font-semibold text-blue-400">Studio</h1>
                    </div>
                    <p className="font-semibold text-md ml-1">A full stack blocky asset creation tool.</p>
                </div>
            </section>

            <div className="absolute w-2/3 bg-neutral-900 aspect-video bottom-0 translate-x-1/4 translate-y-2/3 rounded-md">
                <div className="w-full p-10">
                    <div className="h-full text-white">
                        <h1 className="text-3xl font-semibold">Your First Line of Defense...</h1>
                        <p className="font-semibold text-md ml-1 text-neutral-400">Why the DumbCode Studio is the tool for you <br />and your team.</p>
                    </div>
                    <div className="flex flex-row h-full">
                        <div className="text-white mt-10 text-xs w-60 text-justify">
                            The DumbCode Studio was created originally as a tool to animate minecraft style models made with Tabula for a minecraft mod called Project: Nublar
                            in 2019 by WynPrice for the DumbCode team. Since then the tool has become a full featured asset creation tool. Your Modelers, Texturers, Animators
                            and project managers all live in the same happy place that we've created for them.
                            <br /><br />
                            Further reading on this page will go over all of the features of each of our app's views, but we think you'll be excited to see what we've been
                            working on for these many years.
                            <br /><br />
                            We believe that the design decisions we've made by using and taking notes from the small number of tools avalible in our market will make this
                            piece of software as special to your team as it has been to ours.
                        </div>
                        <div className="flex-grow pl-10">
                            <div className="w-[600px] aspect-video rounded-md absolute right-0 translate-x-20 hover:scale-105 transition-transform hover:z-50 bg-center bg-cover"
                                style={{ backgroundImage: `url(${promo1})` }}>
                            </div>
                            <div className="w-[400px] aspect-video rounded-md absolute translate-y-12 hover:scale-110 transition-transform bg-center bg-cover"
                                style={{ backgroundImage: `url(${promo2})` }}>
                            </div>
                            <div className="w-[550px] aspect-video rounded-md absolute translate-x-20 translate-y-80 hover:scale-110 transition-transform bg-center bg-cover"
                                style={{ backgroundImage: `url(${promo3})` }}>
                            </div>
                            <div className="w-[300px] p-10 text-center text-white aspect-video bg-neutral-700 rounded-md absolute translate-x-20 right-0 translate-y-96 bg-center bg-cover">
                                <p className="text-xs underline font-semibold">PROJECT IMAGE CREDITS</p>
                                <p className="font-semibold">PROJECT: NUBLAR</p>
                                <p className="font-semibold">GALAXIES: Parzi's Star Wars Mod</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="w-screen h-[80vh] bg-neutral-800"></section>

            <section className="w-screen bg-cover bg-center bg-neutral-900 bg-opacity-60">
                <div className="py-10 h-full text-white px-80">
                    <h1 className="text-6xl font-semibold">Everything You Need</h1>
                    <p className="font-semibold text-md ml-1 text-neutral-400 mt-2">And just a little bit more.</p>
                </div>
                <div className="absolute right-0 -translate-y-80 -translate-x-40">
                    <Image src={worrt} width={300} height={300} />
                </div>
                <AboutViewSection
                    title="Your New Favorite Modeler"
                    subtitle="The modeler that changes it all."
                    content={<ModelerDesc className={descriptionClasses} />}
                    image={modeler}
                    flip={false}
                />
                <AboutViewSection
                    title="Bring the Textuerers Back"
                    subtitle="Finally a built in texture tool that isnt bad."
                    content={<TexturerDesc className={descriptionClasses} />}
                    image={texturer}
                    flip={true}
                />
                <AboutViewSection
                    title="An Animator's Dream"
                    subtitle="An animator that checks all the boxes."
                    content={<AnimatorDesc className={descriptionClasses} />}
                    image={animator}
                    flip={false}
                />
                <AboutViewSection
                    title="Mange Efficiently"
                    subtitle="Take the guesswork out of Project Management"
                    content={<ProjectDesc className={descriptionClasses} />}
                    image={project}
                    flip={true}
                />
            </section>

            <Footer />
        </div>
    );
}

const AboutViewSection = ({ flip, title, subtitle, content, image }: { flip: boolean, title: string, subtitle: string, content: JSX.Element, image: string }) => {
    return (
        <div className={(flip ? "flex-row-reverse" : "flex-row" ) + " flex  mx-40 pb-10"}>
            <div className="w-1/3 bg-neutral-900 rounded-md mx-10 p-4">
                <div className="text-white">
                    <h1 className="text-3xl font-semibold">{title}</h1>
                    <p className="font-semibold text-xs ml-1 text-neutral-400">{subtitle}</p>
                </div>
                {content}
            </div>
            <div className="w-2/3 aspect-video bg-neutral-800 rounded-md mx-10 hover:scale-105 transition-transform bg-center bg-cover"
                style={{ backgroundImage: `url(${image})` }}>
            </div>
        </div>
    );
}

export default StudioPage;