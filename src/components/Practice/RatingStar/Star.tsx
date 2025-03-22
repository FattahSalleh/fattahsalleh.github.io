export function Star({ index, star, onClick }: { index: number, star: boolean, onClick: (starIndex: number) => void }) {


    return (
        <span className="cursor-pointer" onClick={() => onClick(index)}>{star ? <span>⭐</span> : <span>★</span>}</span>
    )
}