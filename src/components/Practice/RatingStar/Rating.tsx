import { useState } from "react"
import { Star } from "./Star"

export function Rating() {
    const [stars, setStars] = useState<boolean[]>(Array(5).fill(false))

    const handleStarClick = (starIndex: number): void => {
        const newStars = [...stars];

        
        /**
         * Handle star click to update the rating.
         * If the clicked star is not filled, fill all stars up to and including it.
         * If the clicked star is filled and is the last filled star, clear all stars.
         * Otherwise, clear all stars after the clicked star.
         */
        if (newStars[starIndex] === false) {
            for (let i = 0; i <= starIndex; i++) {
                newStars[i] = true;
            }
        } else if (newStars.lastIndexOf(true) === starIndex) {
            for (let i = 0; i <= starIndex; i++) {
                newStars[i] = false;
            }
        }
        else {
            for (let i = 0; i <= newStars.length - 1; i++) {
                if (i > starIndex) {
                    newStars[i] = false
                }
            }
        }

        // Newer way below using .fill()
        // if (!newStars[starIndex]) {
        //     newStars.fill(true, 0, starIndex + 1);
        // } else if (newStars.lastIndexOf(true) === starIndex) {
        //     newStars.fill(false, 0, starIndex + 1);
        // } else {
        //     newStars.fill(false, starIndex + 1);
        // }

        setStars(newStars);
    }


    return (
        <div className="flex flex-row gap-2 text-xl">
            {stars.map((star, index) => {
                return <Star key={index} index={index} star={star} onClick={handleStarClick} />
            })}
        </div>
    )
}
