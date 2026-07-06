export interface Testimonial {
	quote: string;
	author: string;
	role: string;
	imageKey: string;
}

export const testimonials: Testimonial[] = [
	{
		quote:
			'Honeymoon ke Maldives — semua kami serahkan ke Nusantara Journey. Room decoration sudah ada waktu kami masuk, private dinner di tepi laut sudah ter-arrange. Kami tinggal menikmati. 10/10.',
		author: 'Dinda & Aldo',
		role: 'Honeymooners',
		imageKey: 'testimonialCouple'
	},
	{
		quote:
			'Company trip 80 orang ke Bali. Koordinasi sempurna dari airport transfer sampai gala dinner. Tidak ada satupun yang missed. Akan pakai lagi tahun depan.',
		author: 'Bu Rina',
		role: 'HR Manager, PT Maju Bersama',
		imageKey: 'testimonialGroup'
	},
	{
		quote:
			'Open trip Labuan Bajo, gabung sama orang-orang baru. Guide-nya seru, kapal nyaman, itinerary padat tapi tidak lelah. Worth every rupiah.',
		author: 'Bayu',
		role: 'Solo traveler',
		imageKey: 'testimonialGroup'
	},
	{
		quote:
			'Visa Jepang kami diurus Nusantara Journey. Semua dokumen dipandu step by step. Approved di attempt pertama. Terima kasih!',
		author: 'Keluarga Wijaya',
		role: 'Jepang trip',
		imageKey: 'testimonialCouple'
	}
];
