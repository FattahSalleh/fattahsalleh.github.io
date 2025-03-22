import { Carousel } from "../components/Practice/Carousel/Carousel";
import { RatingStar } from "../components/Practice/RatingStar/RatingStar"
import { PracticeComponentMapProps } from "../types/types"

export const PATH: Record<string, string> = {
    MAIN: "/",
    LOGIN: "/login",
    HOME: "/home",
    PRACTICE: "/practice"
}

export const PRACTICE_NAME: string[]= ["Rating Star", "Carousel"];

export const PRACTICE_COMPONENT_MAP: PracticeComponentMapProps = {
    "Rating Star": RatingStar,
    "Carousel": Carousel,
}