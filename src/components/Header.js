import React from "react";
import GithubButton from "react-github-btn";

export default function Header() {
	return (
		<div>
			<h1>React Search Emoji 🦄</h1>
			<p>Simple tool to search emoji with ReactJS</p>
			{/* <button>stars</button> */}
			{/* use the method below */}
			<GithubButton
				href="https://github.com/Hammed-Waheed"
				data-size="large"
				data-icon="octicon-star"
				data-show-count={true}
			>
				Star
			</GithubButton>
			{/* <button>forked</button> */} {/* use the method below */}
			<GithubButton
				href="https://github.com/Hammed-Waheed"
				data-size="large"
				data-icon="octicon-repo-forked"
				data-show-count={true}
			>
				Forked
			</GithubButton>
		</div>
	);
}
