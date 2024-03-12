"use client";

import { motion, spring } from "framer-motion";
import * as React from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
	const [state, setState] = React.useState(false);

	const menus = [
		{ title: "Home", path: "#home" },
		{ title: "About", path: "#about" },
		{ title: "project", path: "#project" },
		{ title: "Contact", path: "#contact" },
	];

	return (
		<nav className=" w-full border-b md:border-0 z-10 absolute top-0">
			<div className=" items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 ">
				<div className="flex items-center justify-between py-3 md:py-5 md:block">
					<Link href="/">
						<h1 className="text-3xl font-bold  ">Logo</h1>
					</Link>
					<div className="md:hidden">
						<button
							className=" outline-none p-2 rounded-md focus:border"
							onClick={() => setState(!state)}
						>
							<Menu />
						</button>
					</div>
				</div>
				<div
					className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
						state ? "block" : "hidden"
					}`}
				>
					<ul className="justify-end items-center space-y-8 md:flex md:space-y-0 md:space-x-6 ">
						{menus.map((item, idx) => (
							<li key={idx}>
								<motion.div
									whileHover={{ scale: 1.3, y: [0, 4, -4, 0] }}
									transition={{ duration: 0.4, damping: 30 }}
									className="z-20"
								>
									<Link className="" href={item.path}>
										{item.title}
									</Link>
								</motion.div>
							</li>
						))}
						<ModeToggle />
					</ul>
				</div>
			</div>
		</nav>
	);
}
