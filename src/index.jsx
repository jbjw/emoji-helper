import React from 'react';
import ReactDOM from 'react-dom';

export default class View extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			<h1>World</h1>
			<EmojiList></EmojiList>

		</div>

	}
}

class EmojiList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			emojis: [
				{ emoji: '🔥', name: ':fire:'},
				{ emoji: '⛺', name: ':tent:'},
				{ emoji: '🛩️', name: ':airplane:'},
				{ emoji: '🆒', name: ':cool:'},
			],
		}
	}
	render() {
		return <div>{this.state.emojis.map( e => <Emoji key={e.name} emoji={e}></Emoji> )}</div>
	}
}

class Emoji extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			<p>{this.props.emoji.emoji} {this.props.emoji.name}</p>
		</div>
	}
}
