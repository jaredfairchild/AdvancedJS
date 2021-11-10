import React from "react";
import Sound from "react-sound";
import bg from "./bg_music.wav";
import effect from "./effect.wav";

export default class Music extends React.Component {
	soundEffect() {
		const { playing } = this.props;

		let isPlaying = playing ? Sound.status.PLAYING : Sound.status.STOPPED;

		return (
			<div>
				<Sound
					url={bg}
					playStatus={isPlaying}
					loop={true}
					onLoading={this.handleSongLoading}
					onPlaying={this.handleSongPlaying}
				/>
				<Sound
					url={effect}
					playStatus={isPlaying}
					loop={false}
					onLoading={this.handleSongLoading}
					onPlaying={this.handleSongPlaying}
				/>
			</div>
		);
	}

	render() {
		return <div>{this.soundEffect()}</div>;
	}
}
