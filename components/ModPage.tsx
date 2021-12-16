import { ModInfoType } from "../data/modData";
import Footer from "./Footer";
import Header from "./Header";
import ModInfoSidebar from "./ModInfoSidebar";
import Navbar from "./Navbar";

const ModPage = ({ modInfo, children }: { modInfo: ModInfoType, children: React.ReactNode }) => {
    return (
        <div className="h-screen overflow-x-hidden bg-neutral-800">
            <Header pageName={modInfo.name} pageDesc={modInfo.description} ogImage={{"path": modInfo.image, width: 1280, height: 640}} />
            <Navbar />
            <div className="flex flex-col md:flex-row-reverse px-10 lg:px-32 2xl:px-60">
                <ModInfoSidebar modInfo={modInfo} />
                <section className="w-screen bg-neutral-800 pt-10 overflow-hidden pr-20 2xl:pr-20">
                    <h1 className="text-5xl font-semibold text-white">{modInfo.name}</h1>
                    <div className="pr-10">
                        {children}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default ModPage;