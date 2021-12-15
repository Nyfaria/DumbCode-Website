export type ModContributorType = { name: string, role: string }
export type ModInfoType = { name: string, source: string, wiki: string, license: string, description: string, download: string, contributors: ModContributorType[] }

export const gradleHookInfo: ModInfoType = {
    name: "GradleHook",
    description: "GradleHook is a gradle plugin that adds a POST request as a gradle task.",
    source: "https://github.com/Dumb-Code/GradleHook",
    wiki: "https://github.com/Dumb-Code/GradleHook/blob/master/README.md",
    license: "https://github.com/Dumb-Code/GradleHook/blob/master/LICENSE",
    download: "",
    contributors: [
        { name: "wynprice", role: "developer" }
    ]
}