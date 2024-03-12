"use client";
import React from "react";
import Frieren1 from "../public/1.jpg";
import Frieren2 from "../public/2.jpg";
import Frieren3 from "../public/3.jpg";
import Frieren4 from "../public/4.jpg";
import Frieren5 from "../public/5.jpg";
import Frieren6 from "../public/6.jpg";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Center } from "@/components/center";
import Image from "next/image";
function ThirdPage() {
	return (
		<div>
			<Center>
				<Carousel>
					<CarouselContent className="overflow-hidden">
						<CarouselItem className="grid place-content-center">
							<Image src={Frieren1} alt="loading.." className="w-80 h-96" />
						</CarouselItem>
						<CarouselItem className="grid place-content-center">
							<Image src={Frieren1} alt="loading.." className="w-80 h-96" />
						</CarouselItem>
						<CarouselItem>hello</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</Center>
		</div>
	);
}

export default ThirdPage;
