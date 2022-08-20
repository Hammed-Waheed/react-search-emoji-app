import React, {useState} from "react";
import emojis from "../json/emoji.json";
import EmojiItem from "./EmojiItem";

export default function EmojisContainer() {

	const [inputValue, setInputValue] = useState("")
	const [emojiState, setImojiState] = useState(emojis)


	const getInputValue = (e) => {
		// console.log(e.target.value);
		setInputValue(e.target.value)
		/* const filterEmojis = emojiState.filter(emoji => emoji.keywords.includes(e.target.value))
		setImojiState(filterEmojis) */ // it will make issue change our emoji state permamnently
	}

	 const filteredEmojis = emojiState.filter(emoji => emoji.keywords.includes(inputValue))

	console.log("render ....");
	return (
		<div style={{ marginTop: "20px", textAlign: "center" }}>
			<input
				type="text"
				name="search"
				style={{ fontSize: "20px", borderRadius: "10px", width: "30%" }}
				onChange={getInputValue}
			/>

			<div
				className="container"
				style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
			>
				{filteredEmojis.map((emoji) => {
					return <EmojiItem symbol={emoji.symbol} title={emoji.title} />;
				})}
				
			</div>
		</div>
	);
}
