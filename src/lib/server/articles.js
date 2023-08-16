import fs from 'node:fs';
import path from 'node:path';
import parseMD from 'parse-md';


export function getArticles() {
    const fileContent = fs.readFileSync(
        path.resolve('src', 'resources', 'articles', 'typescript-vs-jsdoc.md'),
        'utf8'
    );
    const { metadata, content } = parseMD(fileContent);

    return {
        metadata,
        content
    }
}