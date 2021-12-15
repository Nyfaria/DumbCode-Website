import Prism from "prismjs";
import React, { useEffect } from "react";
import ModPage from "../../components/ModPage";
import { additionalTasks, fields, legacyPluginApplication, messageFirstOption, pluginDSL, simplePlugin } from "../../data/gradlehookexamples";
import { gradleHookInfo } from "../../data/modData";

const GradleHookPage = () => {
    return (
        <ModPage modInfo={gradleHookInfo}>
            <section className="mt-10">
                <h1 className="text-3xl text-white">About</h1>
                <p className="text-neutral-500">Adds the <Code>postRequest</Code> task which simply posts a POST request along with the specified builds. Additional fields for the request can be specified. The request uses the user agent <Code>Mozilla/5.0</Code> and has the content-type of <Code>multipart/form-data</Code>.</p>
            </section>

            <section className="mt-10">
                <h1 className="text-3xl text-white">Applying the Plugin</h1>
                <p className="text-neutral-500">Using the <a target="_blank" rel="noreferrer" href="https://docs.gradle.org/current/userguide/plugins.html#sec:plugins_block" className="cursor-pointer underline">plugin DSL</a>:</p>
                <CodeHilight language="javascript" code={pluginDSL} />
            </section>

            <section className="mt-5">
                <p className="text-neutral-500">Using the <a target="_blank" rel="noreferrer" href="https://docs.gradle.org/current/userguide/plugins.html#sec:old_plugin_application" className="cursor-pointer underline">legacy plugin application</a>:</p>
                <CodeHilight language="javascript" code={legacyPluginApplication} />
            </section>

            <section className="mt-10">
                <h1 className="text-3xl text-white">Simple Plugin Example</h1>
                <p className="text-neutral-500">The bare minimum of a plugin using gradlehook</p>
                <NoteTag note="The urlToken should be private." />
                <CodeHilight language="javascript" code={simplePlugin} />
            </section>

            <section className="mt-10">
                <h1 className="text-3xl text-white">Additional Tasks</h1>
                <p className="text-neutral-500">You can apply multiple tasks to be sent over. In this senario 2 files would be sent.</p>
                <NoteTag note="The urlToken should be private." />
                <CodeHilight language="javascript" code={additionalTasks} />
            </section>

            <section className="mt-10">
                <h1 className="text-3xl text-white">Fields</h1>
                <p className="text-neutral-500">When sending the request, you might want to add additional data. This can be done with the addField method. For example, sending a webhook to a discord server would be:</p>
                <NoteTag note="The urlToken should be private." />
                <CodeHilight language="javascript" code={fields} />
            </section>

            <section className="mt-10">
                <h1 className="text-3xl text-white">Field Placeholders</h1>
                <p className="text-neutral-500">The fields are able to have placeholders, as shown in the above example. These placeholders mean the following:</p>
                <ul className="text-neutral-500">
                    <li className="ml-6"><Code>{`{{version}}`}</Code> project version</li>
                    <li className="ml-6"><Code>{`{{name}}`}</Code> project name</li>
                    <li className="ml-6"><Code>{`{{group}}`}</Code> project group</li>
                    <li className="ml-6"><Code>{`{{dateTime}}`}</Code> the current time in UTC, in ISO-8601 format</li>
                </ul>
            </section>

            <section className="mt-10">
                <h1 className="text-3xl text-white">Message First Option</h1>
                <p className="text-neutral-500">In some senarios, you want the text message to sent as a seperate webhook before the build webhooks. The following would mean a webhook with the field &quot;id&quot; would be sent, then once an HTTP_OK response code is sent, the artifacts are sent over in a webhook.</p>
                <NoteTag note="The urlToken should be private." />
                <CodeHilight language="javascript" code={messageFirstOption} />
            </section>

            <section className="mt-10 mb-20">
                <h1 className="text-3xl text-white">License</h1>
                <p className="text-neutral-500">GradleHook is licensed under MIT with no exceptions.</p>
            </section>
        </ModPage>
    );
}

const Code = ({ children }: { children: React.ReactNode }) => {
    return (
        <code className="bg-neutral-700 rounded-md py-1 px-2 text-white text-xs">{children}</code>
    );
}

const CodeHilight = ({ language, code }: { language: string, code: string }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <div className="Code">
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
}

const NoteTag = ({ note }: { note: string }) => {
    return (
        <div className="flex flex-row text-xs mt-4 mb-4">
            <div className="rounded-l-md bg-yellow-400 text-neutral-800 p-1">
                Note
            </div>
            <div className="rounded-r-md bg-neutral-700 text-white p-1">
                {note}
            </div>
        </div>
    );
}

export default GradleHookPage;