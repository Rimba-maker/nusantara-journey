import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { images } from '../../data/images';
import { destinations, filterChips } from '../../data/destinations';

export default function Destinations() {
	const [active, setActive] = useState<(typeof filterChips)[number]>('Semua');

	const filtered =
		active === 'Semua' ? destinations : destinations.filter((d) => d.category === active);

	return (
		<section id="destinasi" className="mx-auto max-w-[1280px] px-6 py-16">
			<h2 className="text-3xl font-bold text-ink md:text-4xl">Jelajahi Destinasi</h2>
			<p className="mt-2 text-lg text-muted">50+ destinasi domestik & 30+ negara — kami sudah pijak medannya.</p>

			<div className="mt-8 flex flex-wrap gap-2">
				{filterChips.map((chip) => (
					<button
						key={chip}
						onClick={() => setActive(chip)}
						className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
					>
						{active === chip && (
							<motion.span
								layoutId="filter-indicator"
								className="absolute inset-0 rounded-full bg-primary-teal"
								transition={{ type: 'spring', stiffness: 300, damping: 30 }}
							/>
						)}
						<span className={`relative z-10 ${active === chip ? 'text-white' : 'text-ink'}`}>{chip}</span>
					</button>
				))}
			</div>

			<motion.div layout className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
				<AnimatePresence mode="popLayout">
					{filtered.map((dest) => (
						<motion.div
							key={dest.slug}
							layout
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.4 }}
							className="group overflow-hidden rounded-md shadow-card"
						>
							<div className="relative aspect-[4/3] w-full overflow-hidden">
								<img
									src={images[dest.imageKey].url}
									alt={images[dest.imageKey].alt}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
								/>
								{dest.flag && (
									<span className="absolute right-2 top-2 text-xl opacity-0 transition-opacity group-hover:opacity-100">
										{dest.flag}
									</span>
								)}
							</div>
							<div className="p-3">
								<h3 className="text-sm font-semibold text-ink">{dest.name}</h3>
								<p className="text-xs text-muted">Best for: {dest.bestFor}</p>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>
		</section>
	);
}
