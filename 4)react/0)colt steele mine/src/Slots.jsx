export default function Slots({val1,val2,val3}){
    const isWinner=(val1===val2 && val2===val3 && val1===val3)
    const txt=isWinner?"You Win!":"You Lose";
    const txtColor=isWinner?"green":"red";
    return(
        <div>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={{color:txtColor}}>{txt}</h2>
            {isWinner && <h2>Congrats!</h2>}
        </div>
    )
}