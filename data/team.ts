export type SocialsTpye = { platform: string, link: string }
export type PrimaryMemberType = { name: string, imageName: string, bio: string, roles: string[], socials: SocialsTpye[] }
export type CurrentMemberType = { name: string, imageName: string, roles: string[], socials: SocialsTpye[] }
export type PastMembersType = { name: string, imageName: string }

export const primaryMembers: PrimaryMemberType[] = [
    {
        "name": "NeusFear",
        "imageName": "neusfear.png",
        "bio": "NeusFear is the team's Web frontend Developer, their main contributions to the team are the design of the DumbCode Studio, the websites, among various asset contributions for the Project Nublar Mod",
        "roles": ["programmer", "web_developer"],
        "socials": [
            { "platform": "discord", "link": "NeusFear#5173" },
            { "platform": "twitter", "link": "https://twitter.com/NeusFear" },
            { "platform": "github", "link": "https://github.com/NeusFear" },
            { "platform": "youtube", "link": "https://www.youtube.com/channel/UCVNgt2sHMnhpIveeKeSAyVQ" },
            { "platform": "artstation", "link": "https://www.artstation.com/neusfear" },
            { "platform": "deviantart", "link": "https://www.deviantart.com/neusfear" }
        ]
    }
]

export const currentMembers: CurrentMemberType[] = [
    {
        "name": "Sindavar",
        "imageName": "sindavar.png",
        "roles": ["texture_artist"],
        "socials": [
            { "platform": "discord", "link": "Sindavar#0303" },
            { "platform": "twitter", "link": "https://twitter.com/sindavar33" },
            { "platform": "github", "link": "https://github.com/Sindavar" }
        ]
    }
]

export const pastMembers: PastMembersType[] = [
    {
        "name": "Codyrex",
        "imageName": "cody.png"
    }
]

export const allMembers: PrimaryMemberType[] | CurrentMemberType[] | PastMembersType[] = [...primaryMembers, ...currentMembers, ...pastMembers];

export const gradleHookContributors = [
    { name: "wynprice", role: "developer" }
];