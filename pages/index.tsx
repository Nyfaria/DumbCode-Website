import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import TeamCarousel from '../components/TeamCarousel';

const banner = '/images/project_nublar/squad.jpg'
const project_nublar = '/images/project_nublar/brachi.jpg'
const dumb_library = '/images/dumb_library.bmp'
const gradlehook = '/images/gradle_hook.bmp'

const project = '/images/studio/project.png'
const modeler = '/images/studio/modeler.png'
const mapper = '/images/studio/mapper.png'
const texturer = '/images/studio/texturer.png'
const animator = '/images/studio/animator.png'

const HomePage = () => {

  const router = useRouter();
  const goToStudio = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      router.push("/studio");
  }

  return (
    <div className="overflow-x-hidden">
      <Header pageName="Home" />
      <Navbar />
      <div className="bg-neutral-800 text-white">

        <section className="w-screen h-screen bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
          <div className="translate-y-1/3 h-full text-center md:text-left md:translate-x-44">
            <div className="flex flex-row justify-center md:justify-start">
              <h1 className="text-6xl font-semibold">DumbCode</h1>
              <div className="h-2 w-8 bg-white mt-12 ml-3 bottom-0 animate-pulse"></div>
            </div>
            <p className="font-semibold text-md ml-1">Re-inventing the way you play Minecraft.</p>
          </div>
        </section>

        <section className="h-screen w-screen flex flex-row">
          <div className="text-center lg:text-left translate-y-1/3 h-full lg:translate-x-44 w-full xl:w-auto">
            <div>
              <h1 className="text-xl font-semibold -mb-2 text-neutral-500">POWERED BY:</h1>
              <h1 className="text-6xl font-semibold">DumbCode Studio</h1>
            </div>
            <p className="font-semibold text-md text-neutral-500 ml-1">A full featured game asset creation tool.</p>
            <button className="bg-blue-500 hover:bg-blue-600 p-2 mt-12 rounded-md" onClick={goToStudio}>View More</button>
          </div>
          <div className="relative left-40 place-self-center translate-x-full hidden 2xl:block">
            <div className="text-center group rounded-md aspect-video w-96 translate-y-1/2 -translate-x-8 -rotate-12 hover:scale-150 transition-transform hover:relative hover:rotate-0 hover:translate-x-0 shadow-md hover:shadow-2xl hover:z-50 bg-center bg-cover" style={{ backgroundImage: `url(${project})` }}>
              <p className="bg-purple-500 rounded-xl w-48 rotate-12 -translate-x-24 group-hover:translate-x-24 group-hover:-translate-y-4 group-hover:rotate-0 transition-transform px-2 shadow-xl">Project Management</p>
            </div>
            <div className="text-center group rounded-md aspect-video w-96 translate-y-10 -rotate-6 hover:scale-150 transition-transform hover:relative hover:rotate-0 shadow-md hover:shadow-2xl hover:z-50 bg-center bg-cover" style={{ backgroundImage: `url(${modeler})` }}>
              <p className="bg-blue-500 rounded-xl w-48 rotate-6 -translate-x-24 group-hover:translate-x-24 group-hover:-translate-y-4 group-hover:rotate-0 transition-transform px-2 shadow-xl">Modeler</p>
            </div>
            <div className="text-center group rounded-md aspect-video w-96 z-10 translate-x-5 hover:scale-150 transition-transform hover:relative hover:translate-x-0 shadow-md hover:shadow-2xl hover:z-50 bg-center bg-cover" style={{ backgroundImage: `url(${mapper})` }}>
              <p className="bg-teal-500 rounded-xl w-48 -translate-x-24 group-hover:translate-x-24 group-hover:-translate-y-4 transition-transform px-2 shadow-xl">Texture Mapper</p>
            </div>
            <div className="text-center group rounded-md aspect-video w-96 -translate-y-10 rotate-6 hover:scale-150 transition-transform hover:relative hover:rotate-0 shadow-md hover:shadow-2xl hover:z-50 bg-center bg-cover" style={{ backgroundImage: `url(${texturer})` }}>
              <p className="bg-green-500 rounded-xl w-48 -rotate-6 -translate-x-24 group-hover:translate-x-24 group-hover:-translate-y-4 group-hover:rotate-0 transition-transform px-2 shadow-xl">Texturer</p>
            </div>
            <div className="text-center group rounded-md aspect-video w-96 -translate-y-1/2 -translate-x-8 rotate-12 hover:scale-150 transition-transform hover:relative hover:rotate-0 hover:translate-x-0 shadow-md hover:shadow-2xl hover:z-50 bg-center bg-cover" style={{ backgroundImage: `url(${animator})` }}>
              <p className="bg-yellow-500 rounded-xl w-48 -rotate-12 -translate-x-24 group-hover:translate-x-24 group-hover:-translate-y-4 group-hover:rotate-0 transition-transform px-2 shadow-xl">Animator</p>
            </div>
          </div>
        </section>

        <section className="xl:h-screen w-screen bg-neutral-900 pt-10 overflow-hidden">
          <div className="text-center lg:text-left my-10 lg:translate-x-44 w-full">
            <h1 className="text-6xl font-semibold">DumbCode Mods</h1>
            <p className="font-semibold text-md text-neutral-500 ml-1">The cool stuff we&lsquo;ve made for players and modders.</p>
          </div>

          <div className="md:flex flex-row 2xl:mx-40 mx-4 pr-8">
            <ModCard title="DumbLibrary" route="/mods/dumblibrary" img={ dumb_library } desc="A Minecraft modding library made for DumbCode mods. It builds off of the library: LLibrary (See Below), and includes animation among other useful tools."/>
            <ModCard title="Project: Nublar" route="/mods/projectnublar" img={ project_nublar } desc="Project Nublar is a mod that adds Dinosaurs to the world of Minecraft. It aims to bring creatures canon to the Jurassic Park novel and movie franchise in the game."/>
            <ModCard title="Gradlehook" route="/mods/gradlehook" img={ gradlehook } desc="Adds a postRequest gradle task which simply posts a POST request along with the specified builds. Additional fields for the request can be specified. The request uses the user agent Mozilla/5.0 and has the content-type of multipart/form-data"/>
          </div>
        </section>

        <section className="h-96 w-screen">
          <div className="text-center lg:text-left my-10 lg:translate-x-44 w-full">
            <h1 className="text-6xl font-semibold">DumbCode Team</h1>
            <p className="font-semibold text-md text-neutral-500 ml-1">The epic people behind our projects.</p>
          </div>

          <TeamCarousel />
        </section>

      </div>
      <Footer />
    </div>
  );
}

const ModCard = ({ title, route, desc, img }: { title: string, route: string, desc: string, img: string }) => {

  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      router.push(route);
  }

  return (
    <div className="hover:scale-105 flex-grow bg-neutral-800 mx-4 rounded-md lg:w-1/3 w-full text-center transition-transform my-5">
      <div className="aspect-video rounded-t-md bg-center bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
      <h1 className="text-4xl text-center my-6">{title}</h1>
      <p className="text-xs xl:px-20 px-4 md:px-6">{desc}</p>
      <button className="bg-blue-500 hover:bg-blue-600 p-2 mt-8 mb-4 rounded-md" onClick={handleClick}>View More</button>
    </div>
  );
}

export default HomePage;
