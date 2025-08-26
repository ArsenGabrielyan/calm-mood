import { ISounds } from "./types"

const baseUrls = {
     sounds: "https://arsengabrielyan.github.io/calm-mood/sounds",
     icons: "/images/icons"
} as const
const volumeProps = {volume: 0}
const soundIds = [
     "birds", "rain",
     "river", "beach",
     "train", "thunderstorm",
     "night", "lake",
]

export const sounds: ISounds[] = soundIds.map(id=>({
     name: `sounds.${id}`,
     icon:`${baseUrls.icons}/${id}.svg`,
     url:`${baseUrls.sounds}/${id}.mp3`,
     ...volumeProps
}))