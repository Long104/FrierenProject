"use client";
import Image from "next/image";
import React, { useRef } from "react";
import frierenFull from "../public/output_image.jpeg";
import frierenGif from "../public/frieren.gif";
import frierenNotFull from "../public/output_image-removebg.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Center } from "@/components/center";
import Navbar from "@/components/navbar";
import { text } from "stream/consumers";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

import ThirdPage from "./ThirdPage";
function Page() {
	return (
		<>
			<FirstPage />
			<SecondPage />
			<ThirdPage />
		</>
	);
}

export default Page;
