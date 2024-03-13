"use client";
import Navbar from "@/components/navbar";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import frierenFull from "../public/output_image.jpeg";
import frierenNotFull from "../public/output_image-removebg.png";

// type Props = {
// 	text: MotionValue<string>;
// 	background: MotionValue<string>;
// };

function FirstPage() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", ["100%"]]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

	return (
		<>
			<motion.div
				className="h-screen grid place-content-center overflow-hidden relative"
				// initial={{ opacity: 0 }}
				// whileInView={{ opacity: 1 }}
				// transition={{ duration: 2.7 }}
				// viewport={{ once: true }}
				ref={ref}
			>
				<Navbar />
				<motion.div
					className="text-center text-7xl tracking-wider mb-36 z-10 relative select-none"
					style={{
						y: textY,
					}}
				>
					Frieren
					<p>Beyond Journey&apos;s End</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 2.7 }}
					viewport={{ once: true }}
				>
					<motion.div
						className="absolute inset-0 z-0 img bg-hero-pattern"
						style={{
							// backgroundImage: `url(${frierenFull.src})`,
							backgroundPosition: "bottom",
							backgroundSize: "cover",
							y: backgroundY,
						}}
					/>
					<div
						className="absolute inset-0 z-5 imgNotFull"
						style={{
							// backgroundImage: `url(${frierenNotFull.src})`,
							backgroundSize: "cover",
							backgroundPosition: "bottom",
						}}
					/>
				</motion.div>
			</motion.div>
		</>
	);
}

export default FirstPage;
