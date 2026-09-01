import { type CollectionEntry } from 'astro:content';

export function sortItemsByDateDesc(itemA: CollectionEntry<'projects'>, itemB: CollectionEntry<'projects'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function splitArchivedProjects(projects: CollectionEntry<'projects'>[]) {
    return projects.reduce(
        (acc, project) => {
            if (project.data.isArchived) acc.archived.push(project);
            else acc.current.push(project);
            return acc;
        },
        { current: [] as CollectionEntry<'projects'>[], archived: [] as CollectionEntry<'projects'>[] }
    );
}

export function seasonLabel(date: Date) {
    const month = date.getUTCMonth();
    const season = month >= 11 || month < 2 ? 'Winter' : month < 5 ? 'Spring' : month < 8 ? 'Summer' : 'Autumn';
    const year = date.getUTCFullYear().toString().slice(-2);
    return `${season} '${year}`;
}
