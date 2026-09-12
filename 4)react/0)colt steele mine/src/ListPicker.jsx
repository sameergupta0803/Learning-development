export default function ListPicker({ list }) {
    const randIdx = Math.floor(Math.random() * list.length);
    const randElm = list[randIdx];
    return (
        <>
            <h1>Array:{list}</h1>
            <h2>Random element:{randElm}</h2>
        </>
    )
}