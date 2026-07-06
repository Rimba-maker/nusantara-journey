import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { images } from '../../data/images';
import { testimonials } from '../../data/testimonials';

export default function Testimonial() {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		if (paused) return;
		const timer = setInterval(() => {
			setIndex((i) => (i + 1) % testimonials.length);
		}, 8000);
		return () => clearInterval(timer);
	}, [paused]);

	const current = testimonials[index];

	return (
		<section
			className="mx-auto max-w-[1280px] px-6 py-16"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<h2 className="text-3xl font-bold text-ink md:text-4xl">Cerita Para Traveler</h2>

			<div className="relative mt-10 min-h-[280px] overflow-hidden rounded-md bg-surface-soft p-8 md:p-12">
				<AnimatePresence mode="wait">
					<motion.div
						key={current.author}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.6 }}
						className="flex flex-col items-start gap-6 md:flex-row md:items-center"
					>
						<img
							src={images[current.imageKey].url}
							alt={images[current.imageKey].alt}
							className="h-20 w-20 rounded-full object-cover"
						/>
						<div>
							<motion.blockquote
								initial={{ filter: 'blur(6px)', opacity: 0 }}
								animate={{ filter: 'blur(0px)', opacity: 1 }}
								transition={{ duration: 0.7, delay: 0.1 }}
								className="font-serif text-xl leading-relaxed text-ink md:text-2xl"
							>
								"{current.quote}"
							</motion.blockquote>
							<p className="mt-4 text-sm font-semibold text-primary-teal">
								{current.author} — {current.role}
							</p>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			<div className="mt-6 flex gap-2">
				{testimonials.map((t, i) => (
					<button
						key={t.author}
						onClick={() => setIndex(i)}
						className={`h-2 rounded-full transition-all ${
							i === index ? 'w-8 bg-primary-teal' : 'w-2 bg-hairline'
						}`}
						aria-label={`Testimoni ${i + 1}`}
					/>
				))}
			</div>
		</section>
	);
}
