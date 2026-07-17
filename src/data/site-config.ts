import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://serenecareaga.com',
    title: 'Serene Careaga',
    subtitle: 'a personal site, kept loosely',
    description: 'Serene Careaga: portfolio, resume, about.',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Now',
            href: '/now'
        },
        {
            text: 'Garden',
            href: '/projects'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/serened'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/pizza_reina/'
        }
    ],
    projectsPerPage: 8
};

export default siteConfig;
