import { Source } from '../source/source';

export interface Post {
    title(): string;
    text(): string;
    read(source: Source): Post;
}
