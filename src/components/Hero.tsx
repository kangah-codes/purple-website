import Image from "next/image";

export default function Hero() {
	return (
		<div className="w-screen bg-white flex flex-col">
			<div className="w-full flex px-5">
				<div className="w-full max-w-5xl xl:max-w-7xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto">
					<div className="mx-auto flex flex-col items-center h-screen max-h-[900px] overflow-hidden">
						<div className="pt-[8rem] pb-[3rem] 4xl:pt-[10rem] space-y-5 flex flex-col text-center">
							<h1 className="text-[38px] 2xl:text-5xl leading-[38px] w-full tracking-tight text-purple-700">
								Budgeting made easy
							</h1>
							<div className="space-y-5 flex flex-col items-center justify-center max-w-2xl mx-auto">
								<p className="text-lg text-insurerity-text-gray font-sans text-black">
									Revolutionizing the way you budget your
									money. Get started today and take control of
									your finances.
								</p>
								<div className="text-md space-x-4 gap-y-2.5 text-sm 3xl:text-base flex flex-row">
									<a
										className="bg-gradient-to-br from-purple-400 to-purple-700 rounded-full flex px-4 py-2 text-white transition duration-500"
										href="/get-started"
									>
										<p className="my-auto">Download</p>
									</a>
								</div>
							</div>
						</div>
						<div>
							<Image
								alt="Logo"
								src="/images/mockup_1.png"
								width={345}
								height={750}
								className="rounded-md"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
