import { useState } from "react";
import Dice from "./Dice";
import Button from "./Button";
import { getRolls, sum } from "./utils";
export default function LuckyN({ numDice = 2,title="Lucky 7",winCheck=(dice)=>sum(dice)===7}) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice)
  const roll = () => setDice(getRolls(numDice));
  return (
    <main className="LuckyN">
      <h1>
        {title} {isWinner && "You Win"}
      </h1>
      <Dice dice={dice} />
      <Button clickFunc={roll} label="Re-Roll"/>
    </main>
  );
}
