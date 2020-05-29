import { Source } from '../source/source';

export interface Post {
    getId(): number;
    getTitle(): string;
    getText(): string;
    getCreated(): Date;
    getCreatedStr(locale: string): string;
}
