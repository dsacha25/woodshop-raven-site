import { services } from '@/components/services-list';
import portfolioItems from '@/objects/portfolio/portfolio-items-list';
import servicesList from '@/objects/services/services-list';
import shopItemsList from '@/objects/shop/shop-items-list';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const shopItems: MetadataRoute.Sitemap = shopItemsList.map((item) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`,
	}));

	const portfolioPieces: MetadataRoute.Sitemap = portfolioItems.map((item) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/${item.url}`,
	}));

	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
		},

		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`,
		},
		...portfolioPieces,
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/woodworking`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/woodburning`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/kink`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop`,
		},
		...shopItems,
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
		},
	];
}
