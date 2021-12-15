import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";


const GradleHookPage = () => {
    return (
        <div className="overflow-x-hidden">
            <Header pageName="GradleHook Mod" />
            <Navbar />
            <section className="w-screen bg-neutral-800 pt-10 overflow-hidden px-60">
                <h1 className="text-5xl font-semibold text-white">GradleHook</h1>

                <section className="mt-10">
                    <h1 className="text-3xl text-white">About</h1>
                    <p className="text-neutral-500">Adds the <Code>postRequest</Code> task which simply posts a POST request along with the specified builds. Additional fields for the request can be specified. The request uses the user agent <Code>Mozilla/5.0</Code> and has the content-type of <Code>multipart/form-data</Code>.</p>
                </section>

                <section className="mt-10">
                    <h1 className="text-3xl text-white">Applying the Plugin</h1>
                    <p className="text-neutral-500">Using the <a target="_blank" href="https://docs.gradle.org/current/userguide/plugins.html#sec:plugins_block" className="cursor-pointer underline">plugin DSL</a>:</p>
                    <CodeHilight codeblock={ 
                        `
                        plugins {
                            id "net.dumbcode.gradlehook" version "1.2.0"
                        }
                        `
                    } />
                </section>
            </section>
            <Footer />
        </div>
    );
}

const Code = ({children}: {children: React.ReactNode}) => { 
    return (
        <code className="bg-neutral-700 rounded-md py-1 px-2 text-white text-xs">{ children }</code>
    );
}

const CodeHilight = ({codeblock}: {codeblock: string}) => { 
    return (
        <div>
            <SyntaxHighlighter language="gradle" style={docco}>

            </SyntaxHighlighter>
        </div>
    );
}

export default GradleHookPage;