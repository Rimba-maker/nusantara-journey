import { motion } from 'framer-motion';
import { images } from '../../data/images';
import { honeymoonDestinations, honeymoonInclusions } from '../../data/honeymoon';

const stagger = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariant = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function HoneymoonSpecial() {
	return (
		<section id="honeymoon" className="mx-auto max-w-[1280px] px-6 py-16">
			<h2 className="font-serif text-3xl text-ink md:text-4xl">Honeymoon Yang Tak Terlupakan</h2>
			<p className="mt-2 text-lg text-muted">
				Karena momen ini hanya sekali. Biarkan kami yang urus semuanya.
			</p>

			<motion.div
				className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}
				variants={stagger}
			>
				{honeymoonDestinations.map((dest) => (
					<motion.div
						key={dest.slug}
						variants={cardVariant}
						className="group overflow-hidden rounded-md shadow-card"
					>
						<div className="relative aspect-[4/3] w-full overflow-hidden">
							<img
								src={images[dest.imageKey].url}
								alt={images[dest.imageKey].alt}
								className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-cta-gold/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
						</div>
						<div className="p-4">
							<h3 className="flex items-center gap-2 text-base font-semibold text-ink">
								<dest.icon className="h-4 w-4 text-primary-teal" strokeWidth={1.75} />
								{dest.name}
							</h3>
							<p className="mt-1 text-sm text-body">{dest.description}</p>
							<p className="mt-2 text-sm font-semibold text-cta-gold transition-shadow group-hover:drop-shadow-[0_0_8px_rgba(201,122,43,0.4)]">
								{dest.price}
							</p>
						</div>
					</motion.div>
				))}
			</motion.div>

			<motion.ul
				className="mt-10 flex flex-wrap gap-6"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={stagger}
			>
				{honeymoonInclusions.map((inc) => (
					<motion.li
						key={inc.label}
						variants={cardVariant}
						className="flex items-center gap-2 text-sm text-body"
					>
						<inc.icon className="h-4 w-4 text-cta-gold" strokeWidth={1.75} />
						{inc.label}
					</motion.li>
				))}
			</motion.ul>
		</section>
	);
}
