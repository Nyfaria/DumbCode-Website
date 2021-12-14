import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const project_nublar = '/images/project_nublar/trike.jpg'
const dumb_library = '/images/dumb_library.bmp'
const gradlehook = '/images/gradle_hook.bmp'

const ModsPage = () => {
    return (
        <div className="overflow-x-hidden">
            <Header pageName="Mods" />
            <Navbar />
            <section className="w-screen bg-neutral-800 pt-10 overflow-hidden">
                <div className="text-center lg:text-left my-10 lg:translate-x-44 w-full text-white">
                    <h1 className="text-6xl font-semibold">DumbCode Mods</h1>
                    <p className="font-semibold text-md text-neutral-500 ml-1">The cool stuff we've made for players and modders.</p>
                </div>
            </section>

            <ModSection rotation="xl:rotate-3" title="Project: Nublar" img={project_nublar} desc="Project Nublar is a mod that adds Dinosaurs to the world of Minecraft. It aims to bring creatures canon to the Jurassic Park novel and movie franchise in the game." />
            <ModSection rotation="xl:-rotate-3" title="DumbLibrary" img={dumb_library} desc="A Minecraft modding library made for DumbCode mods. It includes animation, ECS, and other useful tools for creating mineraft mods." />
            <ModSection rotation="xl:rotate-3" title="Gradlehook" img={gradlehook} desc="Adds a postRequest gradle task which simply posts a POST request along with the specified builds. Additional fields for the request can be specified. The request uses the user agent Mozilla/5.0 and has the content-type of multipart/form-data" />

            <Footer />
        </div>
    );
}

const ModSection = ({ title, desc, img, rotation }: { title: string, desc: string, img: string, rotation: string }) => {
    return (
        <section className="w-screen bg-neutral-800 flex lg:flex-row flex-col-reverse md:px-10 2xl:px-40">
            <div className="md:rounded-b-md lg:rounded-t-md w-full lg:w-1/3 bg-neutral-900 transition-transform xl:mx-10 p-5 flex flex-col lg:m-10">
                <h1 className="text-4xl text-white">{title}</h1>
                <p className="text-xs my-4 text-neutral-400">{desc}</p>
                <div className="relative flex-grow hidden xl:block">
                    <div className="relative w-full bg-blue-500 h-2 right-0 translate-x-full rounded-full"></div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 p-2 mt-8 rounded-md">View More</button>
            </div>
            <div className={"shadow-lg w-full lg:w-2/3 aspect-video hover:scale-105 transition-transform hover:rotate-0 md:rotate-0 lg:m-10 " + rotation}>
                <div className="aspect-video md:rounded-t-md lg:rounded-b-md bg-left bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
            </div>
        </section>
    );
}

export default ModsPage;