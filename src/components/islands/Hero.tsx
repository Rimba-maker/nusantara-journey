import { motion } from 'framer-motion';
import { images } from '../../data/images';

const wanderlustReveal = {
	hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
	visible: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const, staggerChildren: 0.2 }
	}
};

const item = {
	hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
	visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const } }
};

const trustBadges = ['Terdaftar ASITA', '10+ Tahun Pengalaman', '5.000+ Happy Travelers', '24/7 Trip Support'];

export default function Hero() {
	return (
		<section className="relative flex h-[90vh] min-h-[600px] items-center overflow-hidden">
			<motion.img
				src={images.heroMain.url}
				alt={images.heroMain.alt}
				className="absolute inset-0 h-full w-full object-cover"
				initial={{ scale: 1, x: 0 }}
				animate={{ scale: 1.1, x: -30 }}
				transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-teal-deep/80 via-teal-deep/30 to-transparent" />

			<motion.div
				className="relative mx-auto max-w-[1280px] px-6"
				initial="hidden"
				animate="visible"
				variants={wanderlustReveal}
			>
				<motion.h1 variants={item} className="max-w-2xl font-serif text-4xl text-white md:text-6xl">
					Dunia Menunggu. Biarkan Kami Rencanakan Perjalananmu.
				</motion.h1>
				<motion.p variants={item} className="mt-6 max-w-xl text-lg text-white/90">
					Travel agent & tour operator terpercaya untuk wisata domestik dan internasional. Custom itinerary,
					harga transparan, didampingi dari perencanaan sampai pulang.
				</motion.p>

				<motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
					<a
						href="#booking"
						className="rounded-sm bg-cta-gold px-6 py-3 text-base font-medium text-white transition-colors hover:bg-cta-gold-active"
					>
						Konsultasi Trip Gratis
					</a>
					<a
						href="#paket-tour"
						className="rounded-sm border border-white px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
					>
						Lihat Paket Tour
					</a>
				</motion.div>

				<motion.ul variants={item} className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
					{trustBadges.map((badge) => (
						<li key={badge} className="text-sm font-medium text-white/80">
							{badge}
						</li>
					))}
				</motion.ul>
			</motion.div>
		</section>
	);
}
