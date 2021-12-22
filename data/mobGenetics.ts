
export type GeneType =
  "Speed" |
  "Health" |
  "Jump" |
  "Size" |
  "Nocturnal" |
  "Reproductive Capability" |
  "Immunity" |
  "Underwater Capacity" |
  "Intelligence" |
  "Taming Chance" |
  "Heat Resistance" |
  "Health Regen Speed" |
  "Strength" |
  "Defence" |
  "Eat Rate" |
  "Stomach Capacity" |
  "Hunting Pack Size" |
  "Aggression" |
  "Herd Size"

export type DietModification = {
  food: number, water: number, name: string, image: string
}
export type GeneModification = {
  gene: GeneType,
  amount: number,
}
export type ColourModification = string | { colour: string | string[], varient: string }
export type GeneData = {
  image: string,
  name: string,
  geneModifications: GeneModification[],
  dietModifications?: DietModification[],
  colours: ColourModification[]
}

export const mobGenetics: GeneData[] = [
  {
    image: "bat.gif",
    name: "Bat",
    geneModifications: [
      { gene: "Size", amount: -0.25 },
      { gene: "Nocturnal", amount: 0.25 },
    ],
    colours: ['#1C1912']
  },
  {
    image: "polar_bear.png",
    name: "Polar Bear",
    geneModifications: [
      { gene: "Size", amount: 0.5 },
      { gene: "Speed", amount: 0.5 },
      { gene: "Health", amount: 0.35 },
      { gene: "Strength", amount: 0.5 },
      { gene: "Defence", amount: 0.75 },
    ],
    colours: ['#B2B2B2']
  },
  {
    image: "panda.png",
    name: "Panda",
    geneModifications: [
      { gene: "Speed", amount: 0.35 },
      { gene: "Reproductive Capability", amount: -0.5 },
      { gene: "Strength", amount: 0.25 },
      { gene: "Defence", amount: -0.5 },
      { gene: "Eat Rate", amount: -0.1 },
      { gene: "Stomach Capacity", amount: 0.75 },
    ],
    colours: ['#B2B2B2', '#222222']
  },
  {
    image: "turtle.png",
    name: "Turtle",
    geneModifications: [
      { gene: "Immunity", amount: 1.25 },
      { gene: "Health", amount: 0.75 },
      { gene: "Underwater Capacity", amount: 1.25 },
      { gene: "Speed", amount: -0.5 },
      { gene: "Defence", amount: 0.5 },
    ],
    colours: ['#BFB37F', '#28340A']
  },
  {
    image: "wolf.png",
    name: "Wolf",
    geneModifications: [
      { gene: "Intelligence", amount: 0.75 },
      { gene: "Taming Chance", amount: 1.75 },
      { gene: "Speed", amount: 0.25 },
      { gene: "Hunting Pack Size", amount: 0.75 },
    ],
    colours: ['#B2B2B2']
  },
  {
    image: "hoglin.png",
    name: "Hoglin",
    geneModifications: [
      { gene: "Heat Resistance", amount: 0.5 },
      { gene: "Size", amount: 0.75 },
      { gene: "Taming Chance", amount: -0.5 },
      { gene: "Strength", amount: 0.5 },
      { gene: "Defence", amount: 0.3 },
      { gene: "Aggression", amount: 0.85 },
    ],
    colours: ['#8B6046']
  },
  {
    image: "dolphin.gif",
    name: "Dolphin",
    geneModifications: [
      { gene: "Underwater Capacity", amount: 0.75 },
      { gene: "Speed", amount: 0.35 },
    ],
    colours: ['#73737D']
  },
  {
    image: "fox.gif",
    name: "Fox",
    geneModifications: [
      { gene: "Speed", amount: 0.7 },
      { gene: "Intelligence", amount: 0.3 },
    ],
    colours: ['#B2B2B2', { colour: '#E37C21', varient: "Red Fox" }]
  },
  {
    image: "sheep.png",
    name: "Sheep",
    geneModifications: [
      { gene: "Intelligence", amount: -0.25 },
      { gene: "Herd Size", amount: 0.5 },
    ],
    dietModifications: [{ food: 50, water: 5, name: "Grass", image: "grass.png" }],
    colours: ['#B4947D', '#B2B2B2']
  },
  {
    image: "cow.png",
    name: "Cow",
    geneModifications: [
      { gene: "Herd Size", amount: 0.5 },
    ],
    dietModifications: [{ food: 50, water: 5, name: "Grass", image: "grass.png" }],
    colours: ['#433626', '#B1B1B1']
  },
  {
    image: "pig.png",
    name: "Pig",
    geneModifications: [
      { gene: "Immunity", amount: 0.25 },
      { gene: "Defence", amount: 0.2 },
    ],
    colours: ['#E9A3A2']
  },
  {
    image: "rabbit.gif",
    name: "Rabbit",
    geneModifications: [
      { gene: "Speed", amount: 0.5 },
      { gene: "Size", amount: -0.75 }
    ],
    colours: [
      { varient: 'White Rabbit', colour: '#B2B2B2' },
      { varient: 'Black Rabbit', colour: '#131313' },
      { varient: 'Black and White Rabbit', colour: ['#B2B2B2', '#131313'] },
      { varient: 'Desert Rabbit', colour: '#F9EAAF' },
      { varient: 'Salt and Pepper Rabbit', colour: '#7F6D58' },
      { varient: 'Brown Rabbit', colour: '#826F58' },
    ]
  },
  {
    image: "chicken.png",
    name: "Chicken",
    geneModifications: [
      { gene: "Intelligence", amount: -0.5 },
    ],
    colours: ['#B2B2B2', '#D40409']
  },
  {
    image: "parrot.gif",
    name: "Parrot",
    geneModifications: [
      { gene: "Intelligence", amount: 0.25 },
    ],
    colours: [
      { varient: 'Red Parrot', colour: ['#EB0100', '#E8C100'] },
      { varient: 'Blue Parrot', colour: ['#112DEC', '#E8C100'] },
      { varient: 'Green Parrot', colour: '#9CDA00' },
      { varient: 'Light Blue Parrot', colour: ['#12CCFD', '#E8C100'] },
      { varient: 'Gray Parrot', colour: ['#AFAFAF', '#E8C100'] },
    ]
  },
  {
    image: "llama.gif",
    name: "Llama",
    geneModifications: [
      { gene: "Taming Chance", amount: 0.25 },
      { gene: "Defence", amount: 0.25 },
      { gene: "Stomach Capacity", amount: 0.3 },
    ],
    colours: [
      { varient: 'Creamy Llama', colour: '#EFE0BC' },
      { varient: 'White Llama', colour: '#B2B2B2' },
      { varient: 'Brown Llama', colour: '#8A5B24' },
      { varient: 'Gray Llama', colour: '#CBCBBB' },
    ]
  },
  {
    image: "horse.gif",
    name: "Horse",
    geneModifications: [
      { gene: "Taming Chance", amount: 0.4 },
      { gene: "Jump", amount: 0.3 },
    ],
    colours: [
      { varient: 'White Horse', colour: '#B2B2B2' },
      { varient: 'Creamy Horse', colour: '#926633' },
      { varient: 'Chestnut Horse', colour: '#8A461B' },
      { varient: 'Brown Horse', colour: '#53250D' },
      { varient: 'Black Horse', colour: '#24252D' },
      { varient: 'Gray Horse', colour: '#5F5F5F' },
      { varient: 'Dark Brown Horse', colour: '#2F1A0F' },
    ]
  },
  {
    image: "mule.png",
    name: "Mule",
    geneModifications: [
      { gene: "Speed", amount: -0.2 },
      { gene: "Taming Chance", amount: 0.3 },
      { gene: "Reproductive Capability", amount: -0.3 },
      { gene: "Intelligence", amount: 0.2 },
    ],
    colours: ['#502C1A']
  },
  {
    image: "donkey.png",
    name: "Donkey",
    geneModifications: [
      { gene: "Speed", amount: -0.2 },
      { gene: "Intelligence", amount: 0.25 },
      { gene: "Strength", amount: 0.25 },
    ],
    colours: ['#8A7666']
  },
  {
    image: "cat.gif",
    name: "Cat",
    geneModifications: [
      { gene: "Intelligence", amount: 0.5 },
      { gene: "Taming Chance", amount: 0.45 },
      { gene: "Size", amount: -0.6 },
    ],
    colours: [
      { varient: 'Tabby Cat', colour: ['#856549', '#736B60'] },
      { varient: 'Black Cat', colour: ['#1C1827', '#B2B2B2'] },
      { varient: 'Red Cat', colour: ['#F0B245', '#D97720'] },
      { varient: 'Siamese Cat', colour: ['#F6E7D3', '#5A473E'] },
      { varient: 'British Shorthair Cat', colour: '#BABABA' },
      { varient: 'Calcio Cat', colour: ['#B2B2B2', '#D89A3D'] },
      { varient: 'Persian Cat', colour: '#D89A3D' },
      { varient: 'Ragdoll Cat', colour: ['#B2B2B2', '#544E49'] },
      { varient: 'White Cat', colour: '#B2B2B2' },
      { varient: 'Jellie Cat', colour: ['#B2B2B2', '#616161'] },
      { varient: 'All Black Cat', colour: '#161623' },
    ]
  },
  {
    image: "ocelot.png",
    name: "Ocelot",
    geneModifications: [
      { gene: "Speed", amount: 0.5 },
      { gene: "Taming Chance", amount: -0.3 },
      { gene: "Size", amount: -0.6 },
    ],
    colours: ['#FDD976', '#8C5329']
  },
  {
    image: "mooshroom.gif",
    name: "Mooshroom",
    geneModifications: [],
    dietModifications: [
      { food: 15, water: 15, name: "Mushroom", image: "mushroom.gif" },
      { food: 150, water: 150, name: "Mushroom Block", image: "mushroom_block.gif" }
    ],
    colours: [
      { varient: 'Brown Mooshroom', colour: ['#B68767', '#B0B0B0'] },
      { varient: 'Red Mooshroom', colour: ['#A41012', '#B0B0B0'] },
    ]
  },
  {
    image: "salmon.gif",
    name: "Salmon",
    geneModifications: [
      { gene: "Underwater Capacity", amount: 0.3 },
      { gene: "Health", amount: -0.5 },
      { gene: "Size", amount: -0.5 },
    ],
    colours: ['#A83A38', '#4C6E52']
  },
  {
    image: "cod.gif",
    name: "Cod",
    geneModifications: [
      { gene: "Underwater Capacity", amount: 0.3 },
      { gene: "Health", amount: -0.5 },
      { gene: "Size", amount: -0.5 },
    ],
    colours: ['#AF9878', '#775B49']
  },
  {
    image: "pufferfish.gif",
    name: "Pufferfish",
    geneModifications: [
      { gene: "Underwater Capacity", amount: 0.3 },
      { gene: "Health", amount: -0.5 },
      { gene: "Size", amount: -0.5 },
    ],
    colours: ['#C2B091', '#E3970B']
  },
  {
    image: "tropical_fish.gif",
    name: "Tropical Fish",
    geneModifications: [
      { gene: "Underwater Capacity", amount: 0.3 },
      { gene: "Health", amount: -0.5 },
      { gene: "Size", amount: -0.5 },
    ],
    colours: [
      { varient: 'Black Tropical Fish', colour: '#1D1D21' },
      { varient: 'Red Tropical Fish', colour: '#B02E26' },
      { varient: 'Green Tropical Fish', colour: '#5E7C16' },
      { varient: 'Brown Tropical Fish', colour: '#835432' },
      { varient: 'Blue Tropical Fish', colour: '#3C44AA' },
      { varient: 'Purple Tropical Fish', colour: '#8932B8' },
      { varient: 'Cyan Tropical Fish', colour: '#169C9C' },
      { varient: 'Light Gray Tropical Fish', colour: '#9D9D97' },
      { varient: 'Gray Tropical Fish', colour: '#474F52' },
      { varient: 'Pink Tropical Fish', colour: '#F38BAA' },
      { varient: 'Lime Tropical Fish', colour: '#80C71F' },
      { varient: 'Yellow Tropical Fish', colour: '#FED83D' },
      { varient: 'Light Blue Tropical Fish', colour: '#3AB3DA' },
      { varient: 'Magenta Tropical Fish', colour: '#C74EBD' },
      { varient: 'Orange Tropical Fish', colour: '#F9801D' },
      { varient: 'White Tropical Fish', colour: '#F9FFFE' },
    ]
  },
  {
    image: "squid.gif",
    name: "Squid",
    geneModifications: [
      { gene: "Health Regen Speed", amount: 0.25 },
      { gene: "Underwater Capacity", amount: 0.5 },
      { gene: "Health", amount: -0.3 },
    ],
    colours: ['#132737', '#536B7F']
  },
  {
    image: "bee.gif",
    name: "Bee",
    geneModifications: [
      { gene: "Speed", amount: 0.3 },
      { gene: "Size", amount: -0.5 },
      { gene: "Health", amount: -0.3 },
    ],
    colours: ['#E6C15E', '#5A3023']
  },
  {
    image: "spider.png",
    name: "Spider",
    geneModifications: [
      { gene: "Nocturnal", amount: 0.75 },
    ],
    colours: ['#4E443C']
  },
  {
    image: "cave_spider.png",
    name: "Cave Spider",
    geneModifications: [
      { gene: "Size", amount: -0.5 },
    ],
    colours: ['#153833']
  },
]
mobGenetics.sort((a, b) => a.name.localeCompare(b.name))

export const reverseMobGenetics = mobGenetics.reduce<Map<GeneType, { data: GeneData, amount: number }[]>>((map, data) => {
  data.geneModifications.forEach(m => {
    const arr = map.get(m.gene) ?? []
    arr.push({ amount: m.amount, data })
    map.set(m.gene, arr)
  })
  return map
}, new Map())

export const reverseMobDiets = mobGenetics
  .flatMap(mob => (mob.dietModifications ?? []).map(diet => ({ mob, diet })))
  .reduce<Map<string, {
    image: string,
    data: {
      mob: GeneData,
      diet: DietModification,
    }[]
  }>>((map, value) => {
    const array = map.get(value.diet.name)?.data ?? []
    array.push(value)
    map.set(value.diet.name, {
      image: value.diet.image,
      data: array
    })
    return map
  }, new Map())