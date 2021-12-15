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
        ],
    },
    {
        "name": "Brotat",
        "imageName": "brotat.png",
        "bio": "Brotat is one of the team's texture artists for the Project Nublar Mod. He works on the smaller textures of the mod along with some of the dinosaur assets in order to make sure the mod is released at a top notch quality.",
        "roles": ["texture_artist"],
        "socials": [
            { "platform": "discord", "link": "Brotat#7369" },
            { "platform": "twitter", "link": "https://twitter.com/Sunking64" },
            { "platform": "github", "link": "https://github.com/Brotatsun64" },
            { "platform": "youtube", "link": "https://www.youtube.com/channel/UCGfffU8rEX43SmACBAFjUsQ" }
        ]
    }
]

export const currentMembers: CurrentMemberType[] = [
    {
        "name": "Sindavar",
        "imageName": "sindavar.png",
        "roles": ["texture_artist", "modeler"],
        "socials": [
            { "platform": "discord", "link": "Sindavar#0303" },
            { "platform": "twitter", "link": "https://twitter.com/sindavar33" },
            { "platform": "github", "link": "https://github.com/Sindavar" },
        ]
    },
    {
        "name": "Gegy",
        "imageName": "gegy.png",
        "roles": ["programmer"],
        "socials": [
            { "platform": "discord", "link": "Gegy#9970" },
            { "platform": "twitter", "link": "https://twitter.com/gegy1000" },
            { "platform": "github", "link": "https://github.com/Gegy" }
        ]
    },
    {
        "name": "Lucca",
        "imageName": "lucca.png",
        "roles": ["graphic_designer", "concept_artist"],
        "socials": [
            { "platform": "twitter", "link": "https://twitter.com/Lucca2951" },
            { "platform": "artstation", "link": "https://www.artstation.com/lucca2951" },
        ]
    },
    {
        "name": "FloofHips",
        "imageName": "floofhips.jpg",
        "roles": ["texture_artist"],
        "socials": [
            { "platform": "discord", "link": "Reda#8727" },
            { "platform": "twitter", "link": "https://twitter.com/FloofHips" },
            { "platform": "github", "link": "https://github.com/FloofHips" },
            { "platform": "youtube", "link": "https://youtube.com/c/FloofHips%22%7D" }
        ]
    },
    {
        "name": "Loxures",
        "imageName": "loxures.jpg",
        "roles": ["modeler"],
        "socials": [
            { "platform": "discord", "link": "Loxures#5985" },
            { "platform": "twitter", "link": "https://twitter.com/Loxures_" },
            { "platform": "github", "link": "https://github.com/Loxures" }
        ]
    },
    {
        "name": "thebradqq",
        "imageName": "bbq.png",
        "roles": ["modeler", "texture_artist"],
        "socials": [
            { "platform": "discord", "link": "thebbq#8506" },
            { "platform": "github", "link": "https://github.com/bradleyq" },
            { "platform": "youtube", "link": "https://www.youtube.com/c/thebradqq" }
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