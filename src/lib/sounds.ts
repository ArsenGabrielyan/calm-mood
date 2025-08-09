import { ISounds } from "./types"

const baseUrls = {
     sounds: "https://arsengabrielyan.github.io/calm-mood/sounds",
     icons: "/images/icons"
} as const
const volumeProps = {volume: 0}
const soundsMap = {
     birds: "Թռչուններ",
     rain: "Անձրև",
     river: "Գետ",
     beach: "Ծովափ",
     train: "Գնացք",
     thunderstorm: "Ամպրոպ",
     night: "Գիշեր",
     lake: "Լճափ",
} as const

export const sounds: ISounds[] = Object.entries(soundsMap).map(([id,name])=>({
     name,
     icon:`${baseUrls.icons}/${id}.svg`,
     url:`${baseUrls.sounds}/${id}.mp3`,
     ...volumeProps
}))