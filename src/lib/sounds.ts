import { ISounds } from "./types"
import {Birds, Rain, River, Beach, Train, Thunderstorm, Night, Lake} from "@/icons"

const soundBaseURL = "https://arsengabrielyan.github.io/calm-mood/sounds"
const volumeProps = {volume: 0}
const soundIds = [
     "birds", "rain",
     "river", "beach",
     "train", "thunderstorm",
     "night", "lake",
] as const
export type SoundsType = typeof soundIds[number];
const soundIcons = {
     birds: Birds,
     rain: Rain,
     river: River,
     beach: Beach,
     train: Train,
     thunderstorm: Thunderstorm,
     night: Night,
     lake: Lake
} satisfies Record<SoundsType, React.ComponentType<React.SVGProps<SVGSVGElement>>>;

export const sounds: ISounds[] = soundIds.map(id=>({
     id,
     name: `sounds.${id}`,
     Icon: soundIcons[id],
     url:`${soundBaseURL}/${id}.mp3`,
     ...volumeProps
}))