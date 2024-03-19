
// "use client";
// import Youtuber from "@/components/Youtuber";
// import { Center } from "@/components/center";
// import React, { Suspense, useEffect, useState } from "react";
// import { motion } from "framer-motion";

// function FourthPage() {
// 	let [index, setIndex] = useState<number>(4);

// 	const url: any = {
// 		1: "",
// 		2: "",
// 		3: "",
// 		4: "https://youtu.be/7JUTF_faWKE?si=E_85iQAY7Z9XlROO",
// 		5: "https://youtu.be/0Z_BWOEZgVY?si=6FDmP5BvLAgu-6M6",
// 		6: "https://youtu.be/3mdePwWGNvU?si=s3ngxP1B1-a3tqS9",
// 		7: "https://youtu.be/83kleurzdAQ?si=ChvY0i3Jn1GbNpLA",
// 		8: "https://youtu.be/5Ra3tjHqwdE?si=o0rvNZacFnW0ETKt",
// 		9: "https://youtu.be/TUVw6Ouyjl4?si=p4DOgTAL4XeO7B8v",
// 		10: "https://youtu.be/F5micLL6Ke0?si=wWcSgHpt4U7EaPLI",
// 		11: "https://youtu.be/arfA9EjkhKI?si=pbhkkH9bjWx2KscC",
// 		12: "https://youtu.be/arfA9EjkhKI?si=Ep7Sb685TkRBIic6",
// 		13: "https://youtu.be/ZuTg9RUgbsE?si=7yKXEkrCj3wFo-b8",
// 		14: "https://youtu.be/JKea6lGHt7A?si=VtZh08KS60-Qbxjn",
// 		15: "https://youtu.be/_reYVy5d4u0?si=5O1IhgrRKI2gAWg4",
// 		16: "https://youtu.be/wbenqvV9w64?si=-VKKRJw5tvBy9oqN",
// 		17: "https://youtu.be/oHcPOdoHqmk?si=82sf1xuPkSJQrDWx",
// 		18: "https://youtu.be/BkLginHoiyM?si=WR6ncoFwa1OJlTTr",
// 		19: "https://youtu.be/VVRLa4Xhzuw?si=yIm88HtjErybz260",
// 		20: "https://youtu.be/9Z9bEnjpLcI?si=ybd1iXYypMyH13L-",
// 		21: "https://youtu.be/9Z9bEnjpLcI?si=24Mc8_uJwkl3Q4u9",
// 		22: "https://youtu.be/1UPzR6r0hzQ?si=mI8hrMnL4NAt9rh6",
// 		23: "https://youtu.be/Mg2KUzEdlQk?si=ijR3_muM1Rf2HKyI",
// 		24: "https://youtu.be/rZ_PlCRFu60?si=htq_KOpb21wSu-TW",
// 		25: "https://youtu.be/HFjKqsFvkuY?si=6qLo6Ct5CdpPCNeb",
// 		26: "https://youtu.be/E0YodwMG6yE?si=OLiX4pPyv4joAmHQ",
// 	};

// 	function URL() {
// 		return url[index];
// 	}

// 	console.log(index);
// 	return (
// 		<div>
// 			<motion.div
// 				initial={{ opacity: 1 }}
// 				// whileInView={{ opacity: 1 }}
// 				transition={{ duration: 2.7 }}
// 				className="grid h-screen w-screen overflow-hidden place-content-center relative"
// 			>
// 				<div className="">
// 					<Youtuber url={url[index]} />
// 					<button
// 						className="absolute left-32 top-[50%]"
// 						onClick={() => {
// 							// if (index > 4) {
// 							// 	return setIndex((prev) => prev - 1);
// 							// }
// 							setIndex((prev) => Math.max(prev - 1, 4));
// 						}}
// 					>
// 						go previous
// 					</button>
// 					<button
// 						className="absolute right-32 top-[50%]"
// 						onClick={() => {
// 							// if (index < Object.keys(url).length) {
// 							// 	return setIndex((prev) => prev + 1);
// 							// }
// 							setIndex((prev) => Math.min(prev + 1, Object.keys(url).length));
// 						}}
// 					>
// 						go next
// 					</button>
// 				</div>
// 			</motion.div>
// 		</div>
// 	);
// }

// export default FourthPage;


// "use client";
// import Youtuber from "@/components/Youtuber";
// import React, { Suspense, useEffect, useState } from "react";
// import { motion } from "framer-motion";

// function Fourth() {
// 	let [index, setIndex] = useState<number>(4);

	const url: any = {
		1: "",
		2: "",
		3: "",
		4: "https://youtu.be/7JUTF_faWKE?si=E_85iQAY7Z9XlROO",
		5: "https://youtu.be/0Z_BWOEZgVY?si=6FDmP5BvLAgu-6M6",
		6: "https://youtu.be/3mdePwWGNvU?si=s3ngxP1B1-a3tqS9",
		7: "https://youtu.be/83kleurzdAQ?si=ChvY0i3Jn1GbNpLA",
		8: "https://youtu.be/5Ra3tjHqwdE?si=o0rvNZacFnW0ETKt",
		9: "https://youtu.be/TUVw6Ouyjl4?si=p4DOgTAL4XeO7B8v",
		10: "https://youtu.be/F5micLL6Ke0?si=wWcSgHpt4U7EaPLI",
		11: "https://youtu.be/arfA9EjkhKI?si=pbhkkH9bjWx2KscC",
		12: "https://youtu.be/arfA9EjkhKI?si=Ep7Sb685TkRBIic6",
		13: "https://youtu.be/ZuTg9RUgbsE?si=7yKXEkrCj3wFo-b8",
		14: "https://youtu.be/JKea6lGHt7A?si=VtZh08KS60-Qbxjn",
		15: "https://youtu.be/_reYVy5d4u0?si=5O1IhgrRKI2gAWg4",
		16: "https://youtu.be/wbenqvV9w64?si=-VKKRJw5tvBy9oqN",
		17: "https://youtu.be/oHcPOdoHqmk?si=82sf1xuPkSJQrDWx",
		18: "https://youtu.be/BkLginHoiyM?si=WR6ncoFwa1OJlTTr",
		19: "https://youtu.be/VVRLa4Xhzuw?si=yIm88HtjErybz260",
		20: "https://youtu.be/9Z9bEnjpLcI?si=ybd1iXYypMyH13L-",
		21: "https://youtu.be/9Z9bEnjpLcI?si=24Mc8_uJwkl3Q4u9",
		22: "https://youtu.be/1UPzR6r0hzQ?si=mI8hrMnL4NAt9rh6",
		23: "https://youtu.be/Mg2KUzEdlQk?si=ijR3_muM1Rf2HKyI",
		24: "https://youtu.be/rZ_PlCRFu60?si=htq_KOpb21wSu-TW",
		25: "https://youtu.be/HFjKqsFvkuY?si=6qLo6Ct5CdpPCNeb",
		26: "https://youtu.be/E0YodwMG6yE?si=OLiX4pPyv4joAmHQ",
	};

// 	let data:any= []
// 	for(const key in url) {
// 		const id = Number(key)
// 		const link = url[key]
// 		data.push({id:id,url:link})
// 	}

// 	async function post(e:React.FormEvent){
// 		e.preventDefault()
// 		try {
// 		const result = await fetch("http://localhost:3000/api",{
// 			method:"POST",
// 			headers:{"Content-Type":"application/json"},
// 			body:JSON.stringify({data})
// 		})		
// 		if (result.ok) {
// 			return result;
// 		} else {
// 			throw new Error('request fail')
// 		}
		
// 		} catch (error) {
// 			console.log('error', error)
// 		}
// 	}



	
// 	console.log(index);
// 	return (
// 		<div>
// 			<motion.div
// 				initial={{ opacity: 1 }}
// 				// whileInView={{ opacity: 1 }}
// 				transition={{ duration: 2.7 }}
// 				className="grid h-screen w-screen overflow-hidden place-content-center relative"
// 			>
// 				<div className="">
// 					{/* <Youtuber url={url[index]} /> */}
// 					<form onSubmit={post}>
// 						<button type="submit">wow</button>
// 					</form>
// 					<button
// 						className="absolute left-32 top-[50%]"
// 						onClick={() => {
// 							// if (index > 4) {
// 							// 	return setIndex((prev) => prev - 1);
// 							// }
// 							setIndex((prev) => Math.max(prev - 1, 4));
// 						}}
// 					>
// 						go previous
// 					</button>
// 					<button
// 						className="absolute right-32 top-[50%]"
// 						onClick={() => {
// 							// if (index < Object.keys(url).length) {
// 							// 	return setIndex((prev) => prev + 1);
// 							// }
// 							setIndex((prev) => Math.min(prev + 1, Object.keys(url).length));
// 						}}
// 					>
// 						go next
// 					</button>
// 				</div>
// 			</motion.div>
// 		</div>
// 	);
// }

// export default Fourth;