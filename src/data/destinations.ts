export interface Destination {
	slug: string;
	name: string;
	category: 'Domestik' | 'Asia' | 'Eropa' | 'Middle East' | 'Amerika & Australia';
	bestFor: string;
	imageKey: string;
	flag?: string;
}

export const destinations: Destination[] = [
	{ slug: 'bali', name: 'Bali', category: 'Domestik', bestFor: 'Couple & family', imageKey: 'packageBali' },
	{ slug: 'lombok', name: 'Lombok', category: 'Domestik', bestFor: 'Couple & solo', imageKey: 'packageLombok' },
	{
		slug: 'labuan-bajo',
		name: 'Labuan Bajo',
		category: 'Domestik',
		bestFor: 'Solo & group',
		imageKey: 'packageLabuanBajo'
	},
	{
		slug: 'raja-ampat',
		name: 'Raja Ampat',
		category: 'Domestik',
		bestFor: 'Diving enthusiast',
		imageKey: 'destRajaAmpat'
	},
	{ slug: 'bromo', name: 'Bromo', category: 'Domestik', bestFor: 'Group & solo', imageKey: 'packageBromo' },
	{ slug: 'danau-toba', name: 'Danau Toba', category: 'Domestik', bestFor: 'Family', imageKey: 'destDanauToba' },
	{
		slug: 'jepang',
		name: 'Jepang',
		category: 'Asia',
		bestFor: 'Family & couple',
		imageKey: 'destJepang',
		flag: '🇯🇵'
	},
	{ slug: 'korea', name: 'Korea', category: 'Asia', bestFor: 'Solo & group', imageKey: 'destJepang', flag: '🇰🇷' },
	{
		slug: 'turki',
		name: 'Turki',
		category: 'Middle East',
		bestFor: 'Couple & family',
		imageKey: 'packageTurki',
		flag: '🇹🇷'
	},
	{ slug: 'eropa', name: 'Eropa', category: 'Eropa', bestFor: 'Family & couple', imageKey: 'packageParis', flag: '🇪🇺' },
	{
		slug: 'maldives',
		name: 'Maldives',
		category: 'Asia',
		bestFor: 'Honeymoon',
		imageKey: 'packageMaldives',
		flag: '🇲🇻'
	},
	{ slug: 'dubai', name: 'Dubai', category: 'Middle East', bestFor: 'Family & group', imageKey: 'destDubai', flag: '🇦🇪' },
	{
		slug: 'santorini',
		name: 'Santorini',
		category: 'Eropa',
		bestFor: 'Honeymoon',
		imageKey: 'destSantorini',
		flag: '🇬🇷'
	},
	{
		slug: 'maroko',
		name: 'Maroko',
		category: 'Middle East',
		bestFor: 'Solo & group',
		imageKey: 'destMaroko',
		flag: '🇲🇦'
	}
];

export const filterChips = ['Semua', 'Domestik', 'Asia', 'Eropa', 'Middle East', 'Amerika & Australia'] as const;
