export default function DoubleDice(){
    const num1=Math.floor(Math.random()*3)+1
    const num2=Math.floor(Math.random()*3)+1
    const isWinner=(num1==num2)
    const styles={color:isWinner?"green":"red"}
    return(
        <div style={styles}>
            <h1>Dice Game:</h1>
            {isWinner && <h3>You Win</h3>}
            <h2>Dice Roll 1:{num1}</h2>
            <h2>Dice Roll 2:{num2}</h2>
        </div>
    )
}