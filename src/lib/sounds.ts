import { ISounds } from "./types"

const baseUrls = {
     sounds: "https://arsengabrielyan.github.io/calm-mood/sounds",
     icons: "/images/icons"
}
const volumeProps = {volume: 0}
const soundsMap: Record<string,string> = {
     "Թռչուններ": 'birds',
     "Անձրև": "rain",
     "Գետ": "river",
     "Ծովափ": "beach",
     "Գնացք": "train",
     "Ամպրոպ": "thunderstorm",
     "Գիշեր": "night",
     "Լճափ": "lake",
}

export const SOUNDS: ISounds[] = Object.entries(soundsMap).map(([key,val])=>({
     name: key,
     icon:`${baseUrls.icons}/${val}.svg`,
     url:`${baseUrls.sounds}/${val}.mp3`,
     ...volumeProps
}))