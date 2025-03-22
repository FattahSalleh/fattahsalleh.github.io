import { SAMPLE_TITLE } from "../../../constants/practice.constants"
import { Rating } from "./Rating"


export function RatingStar() {

    return (<><header className="mb-8 font-bold">STAR RATING</header>
        {
            SAMPLE_TITLE.map((title, index) => { return <h1 key={index}>{title}<Rating /></h1> })
        }</>)
}