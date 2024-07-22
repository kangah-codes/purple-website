import Image from "next/image";

export default function Reconcile() {
	return (
		<div className="bg-gray-50 w-screen overflow-hidden py-20">
			<div className="max-w-5xl xl:max-w-7xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl px-4 w-full grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2 xl:gap-x-16 mx-auto">
				<div className="relative">
					<h1 className="text-[38px] leading-[46px] 2xl:text-5xl 2xl:leading-[58px] w-full tracking-tight bg-gradient-to-r from-purple-500 to-purple-700 animate-gradient-x bg-clip-text text-transparent">
						Reconcile your finance tracking.
					</h1>
					<p className="mt-3 text-base 2xl:text-lg text-black tracking-tigh font-medium font-sans">
						Away with the spreadsheets and manual tracking, let
						Purple do the work for you!
					</p>
				</div>
				<div className="w-full xl:pl-10 grid place-items-center">
					<div className="h-[450px] sm:h-[500px] xl:h-[600px]  w-full rounded-3xl p-5 relative overflow-hidden bg-purple-100 flex items-center justify-center">
						<Image
							alt="Logo"
							src="/images/13.png"
							width={400}
							height={400}
							className="rounded-md"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
