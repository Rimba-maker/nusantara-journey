import { motion } from 'framer-motion';
import { images } from '../../data/images';
import { blogArticles } from '../../data/blog';

const stagger = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } }
};

const cardVariant = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function TravelTipsBlog() {
	return (
		<section id="blog" className="mx-auto max-w-[1280px] px-6 py-16">
			<h2 className="text-3xl font-bold text-ink md:text-4xl">Travel Tips & Inspirasi</h2>

			<motion.div
				className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={stagger}
			>
				{blogArticles.map((article) => (
					<motion.a
						href={`#blog-${article.slug}`}
						key={article.slug}
						variants={cardVariant}
						whileHover={{ y: -8 }}
						className="group overflow-hidden rounded-md shadow-card"
					>
						<div className="aspect-[4/3] w-full overflow-hidden">
							<img
								src={images[article.imageKey].url}
								alt={images[article.imageKey].alt}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<div className="p-4">
							<span className="text-xs font-semibold text-primary-teal transition-colors group-hover:text-cta-gold">
								{article.category}
							</span>
							<h3 className="mt-1 text-base font-semibold leading-snug text-ink">{article.title}</h3>
							<span className="mt-3 inline-block translate-y-1 text-sm font-medium text-cta-gold opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
								Baca selengkapnya →
							</span>
						</div>
					</motion.a>
				))}
			</motion.div>
		</section>
	);
}
