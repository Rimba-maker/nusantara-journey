import { motion } from 'framer-motion';
import { images } from '../../data/images';
import { packages } from '../../data/packages';

const stagger = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariant = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function FeaturedPackages() {
	return (
		<section id="paket-tour" className="mx-auto max-w-[1280px] px-6 py-16">
			<h2 className="text-3xl font-bold text-ink md:text-4xl">Paket Tour Terpopuler</h2>
			<p className="mt-2 text-lg text-muted">
				Dipilih ribuan traveler Indonesia — sudah terbukti, harga terjangkau.
			</p>

			<motion.div
				className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}
				variants={stagger}
			>
				{packages.map((pkg) => (
					<motion.a
						href={`#paket-${pkg.slug}`}
						key={pkg.slug}
						variants={cardVariant}
						whileHover={{ y: -10 }}
						className="overflow-hidden rounded-md bg-white shadow-card"
					>
						<div className="relative aspect-square w-full overflow-hidden">
							<img
								src={images[pkg.imageKey].url}
								alt={images[pkg.imageKey].alt}
								className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
							/>
							{pkg.popular && (
								<span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink shadow-card">
									Terpopuler
								</span>
							)}
						</div>
						<div className="p-4">
							<h3 className="flex items-center gap-2 text-base font-semibold text-ink">
								<pkg.icon className="h-4 w-4 text-primary-teal" strokeWidth={1.75} />
								{pkg.name}
							</h3>
							<p className="mt-1 text-sm text-muted">{pkg.duration}</p>
							<ul className="mt-2 space-y-0.5">
								{pkg.highlights.slice(0, 2).map((h) => (
									<li key={h} className="text-sm text-body">
										• {h}
									</li>
								))}
							</ul>
							<div className="mt-3 flex items-center justify-between">
								<span className="text-sm font-semibold text-cta-gold">{pkg.price}</span>
								<span className="text-xs text-muted">{pkg.minPax}</span>
							</div>
							<span className="mt-3 inline-block text-sm font-medium text-primary-teal">Lihat Detail →</span>
						</div>
					</motion.a>
				))}
			</motion.div>
		</section>
	);
}
