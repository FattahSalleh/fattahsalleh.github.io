import { Sidebar } from "../Navigation/Sidebar";
import { RatingStar } from "./RatingStar/RatingStar";

export function Practice() {

    return <>
        <Sidebar />
        <section
            className="w-full h-[calc(100dvh)] lg:min-h-screen flex flex-col items-center justify-center text-center"
            id="introSection"
        >
            <RatingStar />
        </section>
    </>
}