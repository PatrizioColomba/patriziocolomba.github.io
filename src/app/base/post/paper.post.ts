import { Post } from './post';
import { formatDate } from '@angular/common';

export class Paper implements Post {
    public id: number;
    public title: string;
    public text: string;
    public created: Date;

    public constructor(id: number, title: string, text: string, created: Date) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.created = created;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }
    public getText(): string {
        return this.text;
    }

    public getCreated(): Date {
        return this.created;
    }

    public getCreatedStr(locale: string): string {
        return formatDate(this.created, 'dd/MM/yyyy', locale);
    }
}
