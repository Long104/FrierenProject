"use client";
import { motion } from "framer-motion";
import React, { LegacyRef } from "react";

type Props = {
	children: React.ReactNode;
};

export function Center({ children }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 2.7 }}
			className="grid h-screen w-screen overflow-hidden place-content-center"
		>
			{children}
		</motion.div>
	);
}
