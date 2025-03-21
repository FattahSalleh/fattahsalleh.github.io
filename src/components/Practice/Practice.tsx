import { Rating } from "./Rating";

export function Practice() {

    const SAMPLE_TITLE: string[] = ["Title 1", "Title 2", "Title 3"];

    return <>
        <section
            className="w-full h-[calc(100dvh)] lg:min-h-screen flex flex-col items-center justify-center text-center"
            id="introSection"
        >
            <header className="mb-8 font-bold">STAR RATING</header>
            {SAMPLE_TITLE.map((title, index) => { return <h1 key={index}>{title}<Rating /></h1> })
            }
        </section>
    </>
}