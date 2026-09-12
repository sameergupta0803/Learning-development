import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
const randomEmoji = () => {
  const choices = ["🤡", "🥀", "💔", "💀", "😂", "🗿"];
  const randIdx = Math.floor(Math.random() * choices.length);
  return choices[randIdx];
};
const EmojiClicker = () => {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };
  const deleteEmoji = (id) => {
    setEmojis((oldEmojis) => oldEmojis.filter((e) => e.id != id));
  };
  const makeHeartEmoji=()=>{
    setEmojis((oldEmojis)=>oldEmojis.map(e=>({...e,emoji:"💗"})))
  }
  return (
    <div>
      <div>
        {emojis.map((e) => (
          <span key={e.id} onClick={() => deleteEmoji(e.id)}>
            {e.emoji}
          </span>
        ))}
      </div>

      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeHeartEmoji}>Make All hearts</button>
    </div>
  );
};

export default EmojiClicker;
