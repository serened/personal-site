export type ImageInput = {
    src: ImageMetadata | string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type SiteConfig = {
    website: string;
    title: string;
    subtitle?: string;
    description: string;
    image?: ImageInput;
    headerNavLinks?: Link[];
    socialLinks?: Link[];
    projectsPerPage?: number;
};
