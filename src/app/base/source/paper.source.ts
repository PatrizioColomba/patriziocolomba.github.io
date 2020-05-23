import { Source } from './source';

export interface PaperSource extends Source{
    title(): string;
    text(): string; 
    created(): Date;
}
