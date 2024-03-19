"use client";
import React from "react";
import Frieren1 from "../../public/1.jpg";
import Frieren2 from "../../public/2.jpg";
import Frieren3 from "../../public/3.jpg";
import Frieren4 from "../../public/4.jpg";
import Frieren5 from "../../public/5.jpg";
import Frieren6 from "../../public/6.jpg";
import Frieren7 from "../../public/7.png";
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
		<>
			<Center>
				<Carousel>
					<CarouselContent>
						<CarouselItem className="grid place-content-center aspect-square ">
							<Image src={Frieren1} alt="loading.." className="w-80 h-96" />
						</CarouselItem>
						<CarouselItem className="grid place-content-center ">
							<Image src={Frieren2} alt="loading.." className="w-[28] h-96" />
						</CarouselItem>
						<CarouselItem className="grid place-content-center">
							<Image src={Frieren3} alt="loading.." className="w-[28] h-96" />
						</CarouselItem>
						<CarouselItem className="grid place-content-center">
							<Image src={Frieren4} alt="loading.." className="w-80 h-96" />
						</CarouselItem>
						<CarouselItem className="grid place-content-center">
							<Image src={Frieren5} alt="loading.." className="w-80 h-96" />
						</CarouselItem>
						<CarouselItem className="grid place-content-center">
							<Image src={Frieren6} alt="loading.." className="w-80 h-96" />
						</CarouselItem>
						<CarouselItem className="grid place-content-center">
							<Image src={Frieren7} alt="loading.." className="w-96 h-96" />
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious className="absolute left-56" />
					<CarouselNext className="absolute right-56" />
				</Carousel>
			</Center>
		</>
	);
}

export default ThirdPage;
