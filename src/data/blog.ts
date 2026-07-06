export interface BlogArticle {
	slug: string;
	title: string;
	category: string;
	imageKey: string;
}

export const blogArticles: BlogArticle[] = [
	{
		slug: 'destinasi-honeymoon-terbaik-2025',
		title: '10 Destinasi Honeymoon Terbaik 2025 Untuk Budget Rp 20 Juta',
		category: 'Honeymoon',
		imageKey: 'blogHoneymoon'
	},
	{
		slug: 'visa-schengen-sendiri',
		title: 'Cara Urus Visa Schengen Sendiri dari Indonesia — Panduan Lengkap',
		category: 'Visa',
		imageKey: 'blogVisa'
	},
	{
		slug: 'labuan-bajo-atau-raja-ampat',
		title: 'Labuan Bajo atau Raja Ampat? Mana Yang Cocok Untuk Tripmu?',
		category: 'Destinasi',
		imageKey: 'blogKomodo'
	}
];
