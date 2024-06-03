import Image from "next/image";

export default function Features() {
	return (
		<div className="bg-gray-50 w-screen overflow-hidden py-20">
			<div className="max-w-5xl xl:max-w-7xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl px-4 w-full grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2 xl:gap-x-16 mx-auto">
				<div className="relative">
					<div className="relative">
						<h1 className="text-[38px] leading-[46px] 2xl:text-5xl 2xl:leading-[58px] w-full tracking-tight bg-gradient-to-r from-purple-500 to-purple-700 animate-gradient-x bg-clip-text text-transparent">
							Beautiful, and simple.
						</h1>
						<p className="mt-3 text-base 2xl:text-lg text-black tracking-tigh font-medium font-sans">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nihil commodi corporis, delectus enim
							doloribus, totam in consectetur maiores corrupti
							molestias debitis aliquam molestiae saepe! Incidunt
							laudantium sint tempore illo recusandae?
						</p>
					</div>
				</div>
				<div className="w-full xl:pl-10 grid place-items-center">
					<div className="h-[250px] sm:h-[400px] xl:h-[600px] w-full rounded-3xl p-5 relative overflow-hidden bg-purple-100">
						<div className="grid grid-cols-2 gap-5 w-full translate rotate-45">
							<div className="flex items-center justify-end">
								<Image
									alt="Logo"
									src="/images/mockup_2.png"
									width={345 * 0.8}
									height={750 * 0.8}
									className="rounded-md"
								/>
							</div>
							<div className="translate rotate-180 flex items-center justify-end">
								<Image
									alt="Logo"
									src="/images/mockup_3.png"
									width={345 * 0.8}
									height={750 * 0.8}
									className="rounded-md"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
