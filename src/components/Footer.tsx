import Image from "next/image";

export default function Footer() {
	return (
		<div className="relative bg-white">
			<div className="max-w-5xl xl:max-w-7xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl pb-8 pt-8 mx-auto px-4">
				<div className="justify-between w-full flex flex-col lg:flex-row gap-5">
					<div className="md:text-left">
						<div className="flex justify-start">
							<Image
								src="/images/icon.png"
								width={40}
								height={40}
								alt="logo"
								className="rounded-md"
							/>
						</div>
						{/* <div className="mt-4 max-w-xl lg:mx-0 leading-loose">
							<p className="mt-3 text-sm text-black tracking-tight font-medium font-sans">
								Purple is a free and open-source finance
								tracking application that helps you keep track
								of your finances and manage your money better.
							</p>
						</div> */}
					</div>
					<div className="text-sm md:text-left" id="column">
						<p className="uppercase text-purple-700">Contact</p>
						<ul className="mt-4 text-md text-black" id="link-list">
							<li className="mt-3">
								<a
									className="pb-1 transition duration-300"
									href="phone:+233550120156"
								>
									+233 55 012 0156
								</a>
							</li>
							<li className="mt-3">
								<a
									className="pb-1 transition duration-300"
									href="mailto:akangah89@gmail.com"
								>
									akangah89@gmail.com
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="my-8 border-b border-gray-300" />
				<div className="pb-0 text-sm flex flex-col sm:flex-row justify-between items-center text-black">
					<div>2024, Joshua Akangah</div>
					<div className="hidden sm:flex">
						<span className="my-auto mr-2">Proudly made in </span>{" "}
						<Image
							alt="Ghana flag"
							src="/images/ghana.webp"
							width={32}
							height={32}
							decoding="async"
							data-nimg={1}
							className="flex-shrink-0 rounded align-middle my-auto"
							loading="lazy"
							style={{ color: "transparent" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
