import { Mountain, TreePalm, Flower2, Sailboat, Landmark, Flower, Umbrella, type LucideIcon } from 'lucide-react';

export interface Package {
	slug: string;
	icon: LucideIcon;
	name: string;
	price: string;
	duration: string;
	origin: string;
	highlights: string[];
	minPax: string;
	imageKey: string;
	popular?: boolean;
}

export const packages: Package[] = [
	{
		slug: 'bromo-ijen-sunrise',
		icon: Mountain,
		name: 'Bromo Ijen Sunrise',
		price: 'Rp 1.8 jt/orang',
		duration: '3D2N dari Surabaya',
		origin: 'Surabaya',
		highlights: ['Sunrise Penanjakan + Blue Fire Ijen', 'Hotel 3★ + all transport', 'Guide lokal'],
		minPax: 'Min 4 orang',
		imageKey: 'packageBromo',
		popular: true
	},
	{
		slug: 'bali-explore',
		icon: TreePalm,
		name: 'Bali Explore',
		price: 'Rp 2.5 jt/orang',
		duration: '4D3N dari Jakarta',
		origin: 'Jakarta',
		highlights: ['Ubud, Uluwatu, Seminyak, Tanah Lot', 'Hotel 3★ Legian area', 'Tiket PP + transport lokal'],
		minPax: 'Min 2 orang',
		imageKey: 'packageBali',
		popular: true
	},
	{
		slug: 'lombok-pink-beach',
		icon: Flower2,
		name: 'Lombok Pink Beach',
		price: 'Rp 3.2 jt/orang',
		duration: '4D3N dari Jakarta',
		origin: 'Jakarta',
		highlights: ['Pantai Pink, Bukit Merese, Gili Trawangan', 'Hotel 3★ Senggigi', 'PP + fast boat + guide'],
		minPax: 'Min 2 orang',
		imageKey: 'packageLombok'
	},
	{
		slug: 'labuan-bajo-komodo',
		icon: Sailboat,
		name: 'Labuan Bajo Komodo',
		price: 'Rp 4.5 jt/orang',
		duration: '4D3N dari Jakarta',
		origin: 'Jakarta',
		highlights: ['Sailing trip, Komodo island, Pink Beach', 'Liveaboard atau hotel', 'PP + all inclusive'],
		minPax: 'Min 2 orang',
		imageKey: 'packageLabuanBajo',
		popular: true
	},
	{
		slug: 'paris-amsterdam-9d',
		icon: Landmark,
		name: 'Paris & Amsterdam 9D',
		price: 'Rp 28 jt/orang',
		duration: '9D8N all-inclusive',
		origin: 'Jakarta',
		highlights: ['Eiffel Tower, Louvre, Amsterdam Canal', 'Hotel 3★ sentral', 'PP + visa + tour guide'],
		minPax: 'Min 4 orang',
		imageKey: 'packageParis'
	},
	{
		slug: 'jepang-cherry-blossom',
		icon: Flower,
		name: 'Jepang Cherry Blossom',
		price: 'Rp 22 jt/orang',
		duration: '8D7N peak season',
		origin: 'Jakarta',
		highlights: ['Tokyo, Kyoto, Osaka', 'JR Pass included', 'PP + visa + hotel'],
		minPax: 'Min 2 orang',
		imageKey: 'packageJepang',
		popular: true
	},
	{
		slug: 'turki-istanbul-cappadocia',
		icon: Landmark,
		name: 'Turki Istanbul & Cappadocia',
		price: 'Rp 18 jt/orang',
		duration: '8D7N all-inclusive',
		origin: 'Jakarta',
		highlights: ['Hot air balloon Cappadocia', 'Hagia Sophia, Grand Bazaar', 'PP + visa + guide'],
		minPax: 'Min 4 orang',
		imageKey: 'packageTurki'
	},
	{
		slug: 'maldives-overwater-bungalow',
		icon: Umbrella,
		name: 'Maldives Overwater Bungalow',
		price: 'Rp 35 jt/couple',
		duration: '5D4N honeymoon special',
		origin: 'Jakarta',
		highlights: ['Overwater villa', 'Romantic dinner, snorkeling', 'PP + speedboat + all breakfast'],
		minPax: 'Couple only',
		imageKey: 'packageMaldives'
	}
];
