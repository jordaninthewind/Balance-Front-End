import React from 'react';

const MeditationSession = props => {
	let seconds = props.session.duration % 60;
	let minutes = Math.floor(props.session.duration / 60);
		if (minutes > 10) { minutes = minutes / 10};
	let hours = Math.floor(props.session.duration / 3600);

	return (
		<div className="tile">
			<p>Duration: 
				{hours >= 10 ? " " + hours : " 0" + hours}: 
				{minutes >= 10 ? minutes : "0" + minutes}:
				{seconds >= 10 ? seconds : "0" + seconds}
			</p>
			<p>Date: {props.session.date}</p>
			<button onClick={() => props.deleteSession(props.currentUser, props.session.id)}>Delete Session</button>
		</div>
	)
};

export default MeditationSession;
