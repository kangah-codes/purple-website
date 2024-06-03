import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Reconcile from "@/components/Reconcile";
import Watch from "@/components/Watch";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col w-full overflow-x-hidden">
			<div className="sticky top-0 z-50 bg-white border-b border-gray-50">
				<Nav />
			</div>
			<Hero />
			<Features />
			<Watch />
			<Reconcile />
			<CTA />
			<Footer />
		</main>
	);
}
