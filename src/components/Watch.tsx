import Image from "next/image";

export default function Watch() {
	return (
		<div className="bg-white w-screen overflow-hidden py-20">
			<div className="max-w-5xl xl:max-w-7xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl px-4 w-full grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2 xl:gap-x-16 mx-auto">
				<div className="relative order-last flex flex-col">
					<h1 className="text-[38px] leading-[46px] 2xl:text-5xl 2xl:leading-[58px] w-full tracking-tight bg-gradient-to-r from-purple-500 to-purple-700 animate-gradient-x bg-clip-text text-transparent">
						Watch your spending
					</h1>
					<p className="mt-3 text-base 2xl:text-lg text-black tracking-tight font-medium font-sans">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Alias harum nostrum exercitationem voluptatibus
						quam culpa voluptates quaerat sequi delectus.
						Distinctio, doloremque. Suscipit voluptas nobis harum
						repellat, magnam reprehenderit unde beatae?
					</p>
				</div>
				<div className="w-full grid place-items-center">
					<div className="h-[250px] sm:h-[400px] xl:h-[600px]  w-full rounded-3xl p-5 relative overflow-hidden bg-purple-50 flex items-center justify-center">
						<Image
							alt="Logo"
							src="/images/1.png"
							width={500}
							height={500}
							className="rounded-md"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
