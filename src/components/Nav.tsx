import Image from "next/image";

export default function Nav() {
	return (
		<div className="flex flex-col px-5 xl:px-20">
			<div className="flex justify-between items-center py-5 w-full max-w-screen-2xl mx-auto">
				<div className="flex flex-row items-center justify-center space-x-2">
					<Image
						alt="Logo"
						src="/images/icon.png"
						width={30}
						height={30}
						className="rounded-md"
					/>
					<h1 className="text-3xl font-bold text-purple-700">
						Purple
					</h1>
				</div>
				<div>
					<a
						href="https://github.com/kangah-codes/purple"
						className="bg-gradient-to-br from-purple-400 to-purple-700 rounded-full flex items-center justify-center px-4 py-2 text-white transition duration-500"
					>
						<p className="text-sm">Download</p>
					</a>
				</div>
			</div>
		</div>
	);
}
