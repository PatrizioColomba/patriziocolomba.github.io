import { Post } from './post';
import { PaperSource } from '../source/paper.source';

export class Paper implements Post {
    private _title: string;
    private _text: string;

    public constructor(title: string, text: string) {
        this._title = title;
        this._text = text;
    }

    public title(): string {
        return this._title;
    }
    public text(): string {
        return this._text;
    }

    read(source: PaperSource): Post {
        return new Paper(source.title(), source.text());
    }
}
