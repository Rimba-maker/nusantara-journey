import { TreePalm, Sunset, Landmark, Flower2, Fish, Waves, Flower, Wine, Camera, Cake, type LucideIcon } from 'lucide-react';

export interface HoneymoonDestination {
	slug: string;
	icon: LucideIcon;
	name: string;
	description: string;
	price: string;
	imageKey: string;
}

export const honeymoonDestinations: HoneymoonDestination[] = [
	{
		slug: 'maldives',
		icon: TreePalm,
		name: 'Maldives',
		description: 'Overwater bungalow, snorkeling, private sunset dinner.',
		price: 'Mulai Rp 35 jt/couple',
		imageKey: 'honeymoonMaldives'
	},
	{
		slug: 'santorini',
		icon: Sunset,
		name: 'Santorini, Yunani',
		description: 'Cave hotel, Oia sunset, wine tasting.',
		price: 'Mulai Rp 45 jt/couple',
		imageKey: 'honeymoonSantorini'
	},
	{
		slug: 'paris',
		icon: Landmark,
		name: 'Paris, Prancis',
		description: 'Eiffel dinner, Seine cruise, champagne.',
		price: 'Mulai Rp 50 jt/couple',
		imageKey: 'packageParis'
	},
	{
		slug: 'bali-ubud',
		icon: Flower2,
		name: 'Bali Ubud',
		description: 'Jungle villa, spa, rice terrace.',
		price: 'Mulai Rp 8 jt/couple',
		imageKey: 'honeymoonBali'
	},
	{
		slug: 'raja-ampat',
		icon: Fish,
		name: 'Raja Ampat',
		description: 'Overwater cottage, diving paradise, sunset.',
		price: 'Mulai Rp 15 jt/couple',
		imageKey: 'destRajaAmpat'
	},
	{
		slug: 'lombok-gili',
		icon: Waves,
		name: 'Lombok & Gili',
		description: 'Private villa, snorkeling, horse riding.',
		price: 'Mulai Rp 9 jt/couple',
		imageKey: 'packageLombok'
	}
];

export const honeymoonInclusions = [
	{ icon: Flower, label: 'Room decoration (flowers, candles, petals)' },
	{ icon: Wine, label: 'Welcome drink + welcome fruit basket' },
	{ icon: Camera, label: '1 sesi photo session' },
	{ icon: Cake, label: 'Anniversary/honeymoon cake (optional)' }
];
