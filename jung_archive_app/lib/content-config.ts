import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PILLAR_META, PillarConfig } from './pillar-constants';
import { ArticleConfig } from './types';

// Define the content directory
const contentDirectory = path.join(process.cwd(), 'content');

// Helper to map filename prefix to Pillar ID
function getPillarFromFilename(filename: string): string {
    if (filename.startsWith('biography_')) return 'biography';
    if (filename.startsWith('concepts_')) return 'concepts';
    if (filename.startsWith('red_book_')) return 'red_book';
    if (filename.startsWith('alchemy_')) return 'alchemy';
    if (filename.startsWith('practice_')) return 'practice';
    if (filename.startsWith('symbols_')) return 'symbols';
    if (filename.startsWith('spirit_')) return 'spirit';
    if (filename.startsWith('legacy_')) return 'legacy';
    if (filename.startsWith('cosmos_')) return 'cosmos';
    if (filename.startsWith('encounters_')) return 'encounters';
    return 'concepts'; // Default fallback
}

export function getPillars(): PillarConfig[] {
    // 1. Read all MD files
    if (!fs.existsSync(contentDirectory)) return [];

    const fileNames = fs.readdirSync(contentDirectory);
    const allArticles: { pillarId: string; article: ArticleConfig }[] = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            const fullPath = path.join(contentDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            const pillarId = getPillarFromFilename(fileName);
            // Construct slug from filename (remove extension)
            const slug = fileName.replace(/\.md$/, '');

            return {
                pillarId,
                article: {
                    slug: slug,
                    sourceFile: fileName,
                    title: data.title || slug,
                    description: data.description || ""
                }
            };
        });

    // 2. Group by Pillar
    const pillars: Record<string, PillarConfig> = {};

    // Initialize pillars structure based on META to ensure order
    Object.keys(PILLAR_META).forEach(id => {
        const meta = PILLAR_META[id];
        if (meta) {
            pillars[id] = {
                ...meta,
                articles: []
            };
        }
    });

    // Distribute articles
    allArticles.forEach(({ pillarId, article }) => {
        if (pillars[pillarId] && pillars[pillarId].articles) {
            pillars[pillarId].articles!.push(article);
        }
    });

    return Object.values(pillars);
}


export function getPillarById(id: string) {
    const pillars = getPillars();
    return pillars.find(p => p.id === id);
}

export function getArticle(pillarId: string, slug: string) {
    const pillar = getPillarById(pillarId);
    return pillar?.articles?.find(a => a.slug === slug);
}

export function getAllArticleSlugs() {
    const pillars = getPillars();
    let slugs: { pillar: string; slug: string }[] = [];
    pillars.forEach(p => {
        p.articles?.forEach(a => {
            slugs.push({ pillar: p.id, slug: a.slug });
        });
    });
    return slugs;
}

export function getAllArticlesFlat() {
    const pillars = getPillars();
    let articles: any[] = [];
    pillars.forEach(p => {
        p.articles?.forEach(a => {
            articles.push({
                ...a,
                pillarId: p.id,
                pillarName: p.nameVi,
                pillarColor: p.color
            });
        });
    });
    return articles;
}
