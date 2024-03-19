"use client";
import React, { useEffect } from "react";
import YouTube from "react-youtube";
import ReactPlayer from "react-player/youtube";

type Props = {
	url: string;
};

function Youtuber({ url }: Props) {
	return (
		<div>
			<ReactPlayer
				url={url}
				pip={true}
				light={true}
				controls={true}
				muted={false}
				playing={false}
				loop={false}
			/>
			{/* <YouTube videoId="7JUTF_faWKE?si=E_85iQAY7Z9XlROO" /> */}
		</div>
	);
}

export default Youtuber;
