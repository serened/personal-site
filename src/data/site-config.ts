import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://serenecareaga.netlify.app',
    avatar: {
        src: avatar,
        alt: 'Serene Careaga'
    },
    title: 'Serene Careaga',
    subtitle: 'a personal site, kept loosely',
    description: 'Serene Careaga — portfolio, resume, about.',
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
    hero: {
        title: '[hero heading]',
        text: '[hero bio]',
        image: {
            src: hero,
            alt: '[hero image placeholder]'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    projectsPerPage: 8
};

export default siteConfig;
