import { useState, type FormEvent, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface FormState {
	nama: string;
	whatsapp: string;
	email: string;
	destinasi: string;
	tipeTrip: string;
	jumlahPeserta: string;
	budget: string;
	tanggal: string;
	pesan: string;
}

const initialState: FormState = {
	nama: '',
	whatsapp: '',
	email: '',
	destinasi: '',
	tipeTrip: 'Domestik',
	jumlahPeserta: '',
	budget: '',
	tanggal: '',
	pesan: ''
};

const stepFade = {
	hidden: { opacity: 0, x: 20 },
	visible: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: -20 }
};

export default function BookingCta() {
	const [step, setStep] = useState(0);
	const [form, setForm] = useState(initialState);
	const [submitted, setSubmitted] = useState(false);

	const update = (field: keyof FormState, value: string) => setForm((f) => ({ ...f, [field]: value }));

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// ponytail: frontend-only scope — no backend yet, dummy success state
		setSubmitted(true);
	};

	if (submitted) {
		return (
			<section id="booking" className="mx-auto max-w-[1280px] px-6 py-16">
				<div className="rounded-md bg-surface-soft p-10 text-center">
					<h2 className="font-serif text-2xl text-ink">Terima kasih, {form.nama || 'Traveler'}!</h2>
					<p className="mt-2 text-body">
						Request trip kamu sudah kami terima. Tim kami akan kirim itinerary & harga dalam 24 jam.
					</p>
				</div>
			</section>
		);
	}

	return (
		<section id="booking" className="mx-auto max-w-[1280px] px-6 py-16">
			<h2 className="text-3xl font-bold text-ink md:text-4xl">Mulai Rencanakan Perjalananmu</h2>
			<p className="mt-2 max-w-xl text-lg text-muted">
				Ceritakan destinasi impianmu — kami kirim itinerary & harga dalam 24 jam. Konsultasi gratis, tidak ada
				commitment.
			</p>

			<form onSubmit={handleSubmit} className="mt-8 max-w-xl rounded-md border border-hairline p-8 shadow-card">
				<div className="mb-6 flex gap-2">
					{[0, 1, 2].map((i) => (
						<span
							key={i}
							className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-primary-teal' : 'bg-hairline'}`}
						/>
					))}
				</div>

				<AnimatePresence mode="wait">
					{step === 0 && (
						<motion.div
							key="step0"
							variants={stepFade}
							initial="hidden"
							animate="visible"
							exit="exit"
							transition={{ duration: 0.3 }}
							className="space-y-4"
						>
							<Field label="Destinasi impian">
								<input
									required
									value={form.destinasi}
									onChange={(e) => update('destinasi', e.target.value)}
									className="input"
									placeholder="Mis. Raja Ampat, Jepang, Maldives..."
								/>
							</Field>
							<Field label="Tipe trip">
								<select
									value={form.tipeTrip}
									onChange={(e) => update('tipeTrip', e.target.value)}
									className="input"
								>
									<option>Domestik</option>
									<option>Internasional</option>
									<option>Honeymoon</option>
									<option>MICE</option>
								</select>
							</Field>
						</motion.div>
					)}

					{step === 1 && (
						<motion.div
							key="step1"
							variants={stepFade}
							initial="hidden"
							animate="visible"
							exit="exit"
							transition={{ duration: 0.3 }}
							className="space-y-4"
						>
							<Field label="Jumlah peserta">
								<input
									required
									type="number"
									min={1}
									value={form.jumlahPeserta}
									onChange={(e) => update('jumlahPeserta', e.target.value)}
									className="input"
								/>
							</Field>
							<Field label="Estimasi budget/orang (Rp)">
								<input
									value={form.budget}
									onChange={(e) => update('budget', e.target.value)}
									className="input"
									placeholder="Mis. 5.000.000"
								/>
							</Field>
						</motion.div>
					)}

					{step === 2 && (
						<motion.div
							key="step2"
							variants={stepFade}
							initial="hidden"
							animate="visible"
							exit="exit"
							transition={{ duration: 0.3 }}
							className="space-y-4"
						>
							<Field label="Nama">
								<input
									required
									value={form.nama}
									onChange={(e) => update('nama', e.target.value)}
									className="input"
								/>
							</Field>
							<Field label="WhatsApp">
								<input
									required
									value={form.whatsapp}
									onChange={(e) => update('whatsapp', e.target.value)}
									className="input"
								/>
							</Field>
							<Field label="Email">
								<input
									type="email"
									value={form.email}
									onChange={(e) => update('email', e.target.value)}
									className="input"
								/>
							</Field>
							<Field label="Estimasi tanggal">
								<input
									type="date"
									value={form.tanggal}
									onChange={(e) => update('tanggal', e.target.value)}
									className="input"
								/>
							</Field>
							<Field label="Pesan tambahan">
								<textarea
									value={form.pesan}
									onChange={(e) => update('pesan', e.target.value)}
									className="input"
									rows={3}
								/>
							</Field>
						</motion.div>
					)}
				</AnimatePresence>

				<div className="mt-6 flex justify-between gap-4">
					{step > 0 && (
						<button
							type="button"
							onClick={() => setStep((s) => s - 1)}
							className="rounded-sm border border-hairline px-6 py-3 text-sm font-medium text-ink"
						>
							Kembali
						</button>
					)}
					{step < 2 ? (
						<motion.button
							type="button"
							whileTap={{ scale: 0.96 }}
							onClick={() => setStep((s) => s + 1)}
							className="ml-auto rounded-sm bg-primary-teal px-6 py-3 text-sm font-medium text-white"
						>
							Lanjut
						</motion.button>
					) : (
						<motion.button
							type="submit"
							whileTap={{ scale: 0.96 }}
							className="ml-auto rounded-sm bg-cta-gold px-6 py-3 text-sm font-medium text-white hover:bg-cta-gold-active"
						>
							Kirim Request Trip
						</motion.button>
					)}
				</div>
			</form>

			<a
				href="https://wa.me/6280000000000"
				target="_blank"
				rel="noreferrer"
				className="mt-4 inline-block text-sm font-semibold text-primary-teal"
			>
				Atau chat WhatsApp langsung →
			</a>
		</section>
	);
}

function Field({ label, children }: { label: string; children: ReactNode }) {
	return (
		<label className="block">
			<span className="mb-1 block text-sm font-medium text-ink">{label}</span>
			{children}
		</label>
	);
}
