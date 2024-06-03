export default function CTA() {
	return (
		<div className="py-10 md:py-20 bg-white w-full">
			<div className="container px-4 max-w-5xl xl:max-w-7xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto lg:flex lg:items-center lg:justify-between">
				<div className="text-3xl font-semibold text-black sm:text-4xl max-w-2xl">
					<h1 className="text-[38px] leading-[46px] 2xl:text-4xl 2xl:leading-[48px] w-full tracking-tight bg-gradient-to-r from-purple-500 to-purple-700 animate-gradient-x bg-clip-text text-transparent">
						Try Purple today
					</h1>
					<p className="mt-3 text-base 2xl:text-lg text-black tracking-tigh font-medium font-sans">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nihil commodi corporis, delectus enim doloribus, totam
						in consectetur maiores corrupti molestias debitis
						aliquam molestiae saepe! Incidunt laudantium sint
						tempore illo recusandae?
					</p>
				</div>
				<div className="mt-4 md:mt-8 flex lg:mt-0 lg:flex-shrink-0">
					<div className="inline-flex">
						<button className="bg-gradient-to-br from-purple-400 to-purple-700 rounded-full flex items-center justify-center px-4 py-2 text-white transition duration-500">
							<p className="text-sm">Download</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
