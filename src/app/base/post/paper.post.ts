import { Post } from './post';
import { PaperSource } from '../source/paper.source';

export class Paper implements Post {
    private _title: string;
    private _text: string;
    private _created: Date;

    public constructor(title: string, text: string, created: Date) {
        this._title = title;
        this._text = text;
        this._created = created;
    }

    public title(): string {
        return this._title;
    }
    public text(): string {
        return this._text;
    }

    public created(): Date {
        return this._created;
    }
}
