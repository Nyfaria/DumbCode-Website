import ModPage from "../../components/ModPage";
import { dumbLibraryInfo } from "../../data/modData";

const DumbLibraryPage = () => {
    return (
        <ModPage modInfo={dumbLibraryInfo}>

            <div className="min-h-screen">
                <section className="mt-10">
                    <h1 className="text-3xl text-white">About</h1>
                    <p className="text-neutral-500">A Minecraft modding library made for DumbCode mods. It builds off of the library: LLibrary (See Below), and includes animation among other useful tools.</p>
                </section>

                <section className="mt-10">
                    <h1 className="text-3xl text-white">Documentation</h1>
                    <a target="_blank" href="https://github.com/Dumb-Code/DumbLibrary/wiki/Entity-Component-System" className="underline text-neutral-500">Entity Component System</a>
                    <br />
                    <a target="_blank" href="https://github.com/Dumb-Code/DumbLibrary/wiki/Animation-API" className="underline text-neutral-500">Animation System</a>
                </section>

                <section className="mt-10">
                    <h1 className="text-3xl text-white">License</h1>
                    <p className="text-neutral-500">GradleHook is licensed under the GNU Lesser General Public Licence v3.0 with no exceptions.</p>
                </section>

                <section className="mt-10">
                    <h1 className="text-3xl text-white">Acknowledgments</h1>
                    <a target="_blank" href="https://minecraft.curseforge.com/projects/llibrary" className="underline text-neutral-500">Llibrary</a>
                </section>
            </div>

        </ModPage>
    );
}

export default DumbLibraryPage;