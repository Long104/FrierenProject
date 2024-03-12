import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Frieren1 from "../public/1.jpg";
import Frieren2 from "../public/2.jpg";
import Frieren3 from "../public/3.jpg";
import Frieren4 from "../public/4.jpg";
import Frieren5 from "../public/5.jpg";
import Frieren6 from "../public/6.jpg";
import Frieren7 from "../public/7.png";
import { motion } from "framer-motion";
import { text } from "stream/consumers";

function SecondPage() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 2.7 }}
				className="grid h-screen w-screen place-items-center gap-0 relative overflow-hidden"
				ref={ref}
			>
				<motion.img
					className="w-48 h-72 absolute right-36"
					src={Frieren1.src}
					alt="loading..."
					style={{ x: backgroundY }}
				/>
				<motion.img
					className="w-80 h-72 absolute bottom-10 right-80"
					src={Frieren2.src}
					alt="loading..."
					style={{ x: backgroundY, y: backgroundY }}
				/>
				<motion.img
					className="w-80 h-72 absolute left-24"
					src={Frieren3.src}
					alt="loading..."
					style={{ x: textY }}
				/>
				<motion.img
					className="w-48 h-72 absolute left-96 bottom-10"
					src={Frieren4.src}
					alt="loading..."
					style={{ y: backgroundY }}
				/>
				<motion.img
					className="w-48 h-72 absolute left-1/2 top-32"
					src={Frieren5.src}
					alt="loading..."
					style={{ y: textY }}
				/>
				<motion.img
					className="w-48 h-72 absolute left-1/3 top-40"
					src={Frieren6.src}
					alt="loading..."
					style={{ y: textY, x: textY }}
				/>
				<motion.img
					className="w-48 h-72 absolute"
					src={Frieren7.src}
					alt="loading..."
					style={{ opacity: backgroundY, width: "70vw", height: "80vh" }}
				/>
			</motion.div>
		</>
	);
}

export default SecondPage;
