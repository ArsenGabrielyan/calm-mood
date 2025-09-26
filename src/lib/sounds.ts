import { ISounds } from "./types"
import {Birds, Rain, River, Beach, Train, Thunderstorm, Night, Lake, Waves, Waterfall} from "@/icons"

const soundBaseURL = "https://arsengabrielyan.github.io/calm-mood/sounds"
const soundIds = [
     "birds", "rain",
     "river", "beach",
     "train", "thunderstorm",
     "night", "lake",
     "waves", "waterfall"
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
     lake: Lake,
     waves: Waves,
     waterfall: Waterfall
} satisfies Record<SoundsType, React.ComponentType<React.SVGProps<SVGSVGElement>>>;

export const sounds: ISounds[] = soundIds.map(id=>({
     id,
     Icon: soundIcons[id],
     url:`${soundBaseURL}/${id}.mp3`,
}))