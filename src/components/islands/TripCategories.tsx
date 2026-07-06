import { motion } from 'framer-motion';
import { TreePalm, Plane, Gem, Building2 } from 'lucide-react';
import { images } from '../../data/images';

const categories = [
	{
		icon: TreePalm,
		title: 'Wisata Domestik',
		lines: ['Bali, Labuan Bajo, Raja Ampat, Bromo, Lombok', 'Private trip & open trip'],
		price: 'Mulai Rp 1.5 jt/orang',
		imageKey: 'categoryDomestik'
	},
	{
		icon: Plane,
		title: 'Wisata Internasional',
		lines: ['Eropa, Jepang, Korea, Turki, Middle East, Australia', 'Paket lengkap: visa, tiket, hotel, guide'],
		price: 'Mulai Rp 8 jt/orang',
		imageKey: 'categoryInternasional'
	},
	{
		icon: Gem,
		title: 'Honeymoon Package',
		lines: ['Maldives, Santorini, Paris, Bali, Raja Ampat', 'Romantic setup, surprise decoration'],
		price: 'Mulai Rp 12 jt/couple',
		imageKey: 'categoryHoneymoon'
	},
	{
		icon: Building2,
		title: 'MICE & Corporate',
		lines: ['Team building, company trip, incentive tour', 'Full event management'],
		price: 'Custom quote',
		imageKey: 'categoryMice'
	}
];

const stagger = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } }
};

const cardVariant = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function TripCategories() {
	return (
		<section className="mx-auto max-w-[1280px] px-6 py-16">
			<h2 className="text-3xl font-bold text-ink md:text-4xl">Mau Pergi ke Mana?</h2>
			<p className="mt-2 text-lg text-muted">Domestik atau mancanegara, kami punya paket dan tim yang tepat.</p>

			<motion.div
				className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={stagger}
			>
				{categories.map((cat) => (
					<motion.div
						key={cat.title}
						variants={cardVariant}
						className="group relative overflow-hidden rounded-md shadow-card"
					>
						<div className="relative h-72 w-full overflow-hidden">
							<img
								src={images[cat.imageKey].url}
								alt={images[cat.imageKey].alt}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
							/>
							<div className="absolute inset-0 translate-y-2/3 bg-gradient-to-t from-teal-deep/90 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
						</div>
						<div className="absolute inset-x-0 bottom-0 p-5 text-white">
							<motion.span
								className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
								initial={{ rotate: 0 }}
								whileInView={{ rotate: 360 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
							>
								<cat.icon className="h-5 w-5" strokeWidth={1.75} />
							</motion.span>
							<h3 className="text-lg font-semibold">{cat.title}</h3>
							{cat.lines.map((line) => (
								<p key={line} className="mt-1 text-sm text-white/80">
									{line}
								</p>
							))}
							<p className="mt-2 text-sm font-semibold text-cta-gold">{cat.price}</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
