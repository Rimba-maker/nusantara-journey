import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Map, Wallet, Headset, Stamp, Handshake, RefreshCw } from 'lucide-react';

const usps = [
	{
		icon: Map,
		title: 'Custom Itinerary',
		body: 'Tidak mau paket generik? Kami susun rencana perjalanan 100% sesuai preferensi, budget, dan durasi Anda.'
	},
	{
		icon: Wallet,
		title: 'Harga Transparan',
		body: 'Rincian harga detail di awal. Tidak ada hidden fee yang mengejutkan saat perjalanan.'
	},
	{
		icon: Headset,
		title: '24/7 Emergency Support',
		body: 'Ada masalah di sana? Flight delay? Tim kami siap 24 jam selama perjalanan Anda.'
	},
	{
		icon: Stamp,
		title: 'Visa Assistance',
		body: 'Kami bantu proses visa dari A sampai Z untuk 50+ negara. Success rate 98%.'
	},
	{
		icon: Handshake,
		title: 'Local Expert Network',
		body: 'Guide lokal berpengalaman di setiap destinasi. Bukan script — mereka tahu spot terbaik yang tidak ada di Google.'
	},
	{
		icon: RefreshCw,
		title: 'Flexible Booking',
		body: 'Reschedule atau cancel hingga 14 hari sebelum keberangkatan dengan syarat yang jelas.'
	}
];

function Counter({ to }: { to: number }) {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });
	const [value, setValue] = useState(0);

	useEffect(() => {
		if (!inView) return;
		const duration = 1200;
		const start = performance.now();
		const tick = (now: number) => {
			const progress = Math.min((now - start) / duration, 1);
			setValue(Math.round(progress * to));
			if (progress < 1) requestAnimationFrame(tick);
		};
		requestAnimationFrame(tick);
	}, [inView, to]);

	return (
		<span ref={ref} className="font-serif text-4xl text-cta-gold">
			{value}%
		</span>
	);
}

export default function WhyChooseUs() {
	return (
		<section className="mx-auto max-w-[1280px] px-6 py-16">
			<h2 className="text-3xl font-bold text-ink md:text-4xl">Kenapa 5.000+ Traveler Percaya Kami</h2>

			<div className="mt-10 space-y-4">
				{usps.map((usp, i) => (
					<motion.div
						key={usp.title}
						initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
						whileHover={{ y: -4 }}
						className="flex items-center gap-6 rounded-md border border-hairline p-6 shadow-card"
					>
						<motion.span
							initial={{ scale: 0, rotate: -15 }}
							whileInView={{ scale: 1, rotate: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-teal/10 text-primary-teal"
						>
							<usp.icon className="h-6 w-6" strokeWidth={1.75} />
						</motion.span>
						<div>
							<h3 className="text-lg font-semibold text-ink">{usp.title}</h3>
							<p className="mt-1 text-sm text-body">{usp.body}</p>
							{usp.title === 'Visa Assistance' && (
								<div className="mt-2">
									<Counter to={98} />
									<span className="ml-2 text-sm text-muted">visa success rate</span>
								</div>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
