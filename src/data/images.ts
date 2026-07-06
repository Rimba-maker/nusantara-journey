export interface ImageRef {
	url: string;
	alt: string;
	source: 'unsplash' | 'pexels';
}

// Real, hotlink-safe CDN URLs verified against live Unsplash/Pexels photo pages.
const u = (id: string, alt: string, w: number): ImageRef => ({
	url: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`,
	alt,
	source: 'unsplash'
});
const p = (id: string, alt: string, w: number): ImageRef => ({
	url: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`,
	alt,
	source: 'pexels'
});

export const images: Record<string, ImageRef> = {
	heroMain: u('1703769605300-95c02ea2cb67', 'Kepulauan Raja Ampat dari udara dengan air laut biru kehijauan', 1920),
	heroAlt: p('9159926', 'Petualang membawa ransel menyusuri jalur pegunungan tropis', 1920),
	categoryDomestik: u('1675377668920-86545643d25c', 'Gugusan pulau kecil Raja Ampat, Papua Barat dilihat dari udara', 800),
	categoryInternasional: u('1750196995049-d9019c34271e', 'Jalanan Eropa dengan bangunan warna-warni yang khas', 800),
	categoryHoneymoon: u('1753939223042-872934ffda15', 'Bungalow apung di atas laut jernih Maladewa', 800),
	categoryMice: p('20752572', 'Tim profesional berkumpul untuk perjalanan bisnis dan MICE', 800),
	packageBromo: u('1505993597083-3bd19fb75e57', 'Matahari terbit di Gunung Bromo, Jawa Timur', 1200),
	packageBali: u('1557093793-d149a38a1be8', 'Terasering sawah Tegalalang di Ubud, Bali', 1200),
	packageLombok: u('1641504653230-c20e9865dd97', 'Pantai berpasir merah muda dengan ombak yang tenang', 1200),
	packageLabuanBajo: u('1678449722615-80036bf6e762', 'Perahu berlayar di dekat Pink Beach, Labuan Bajo', 1200),
	packageParis: u('1563321753-6394c9e5b77b', 'Menara Eiffel Paris menyala di malam hari', 1200),
	packageJepang: u('1761847587996-fbbf092cf29a', 'Bunga sakura bermekaran di halaman kuil Kyoto', 1200),
	packageTurki: u('1669111957528-6d4e78328692', 'Balon udara warna-warni terbang di atas Cappadocia, Turki', 1200),
	packageMaldives: u('1485149316715-2cce76e6ee74', 'Pasangan berdiri di tepi vila mewah tepi laut Maladewa', 1200),
	destRajaAmpat: u('1745917784557-a93bf209232c', 'Air laut biru jernih di antara formasi karst Raja Ampat', 800),
	destDanauToba: u('1569081562679-6d71c00aab86', 'Danau Toba dilihat dari udara, Sumatra Utara', 800),
	destSantorini: u('1572979224231-c56000d15a09', 'Desa putih khas Santorini, Yunani menjelang matahari terbenam', 800),
	destDubai: u('1748373452031-ee1ae4eb624d', 'Cakrawala kota Dubai dengan Burj Khalifa', 800),
	destJepang: u('1754672519474-b63317b52ccd', 'Kuil tradisional Jepang dikelilingi pepohonan hijau di Kyoto', 800),
	destMaroko: u('1708823081494-3e5bbd2ce931', 'Suasana ramai alun-alun Jemaa el-Fna di medina Marrakech', 800),
	whyUsCustom: p('5405598', 'Perlengkapan perjalanan, paspor, dan peta untuk menyusun itinerary', 800),
	whyUsSupport: p('6560572', 'Staf customer service ramah dengan headset siap membantu', 800),
	whyUsVisa: p('7235900', 'Paspor dan kompas di atas peta dunia untuk pengurusan visa', 800),
	howItWorks: p('34104783', 'Merencanakan perjalanan dengan tablet dan globe', 1600),
	honeymoonMaldives: p('1449729', 'Pasangan pengantin baru di kottage tepi laut Maladewa', 1200),
	honeymoonSantorini: p('20797210', 'Pasangan berpelukan dengan latar kubah biru khas Santorini', 1200),
	honeymoonBali: p('3851963', 'Pasangan berpelukan romantis di kolam renang vila Bali', 1200),
	miceCorporate: p('4553368', 'Rombongan karyawan menikmati matahari terbenam di tepi pantai', 1200),
	miceTeamBuilding: p('7551464', 'Kelompok karyawan bermain team building di taman terbuka', 1200),
	testimonialCouple: p('8907693', 'Pasangan tersenyum bahagia berlibur di pantai', 800),
	testimonialGroup: p('8021265', 'Sekelompok teman berfoto bersama saat liburan di tepi danau', 800),
	blogHoneymoon: p('30716714', 'Pasangan berpelukan romantis di pantai saat matahari terbenam', 800),
	blogVisa: p('8193761', 'Paspor dan dokumen perjalanan untuk pengurusan visa Eropa', 800),
	blogKomodo: p('4096544', 'Komodo di habitat alaminya, Pulau Komodo Flores', 800)
};
