import { Identifiable } from '../base';

export interface File extends Identifiable {
    content: unknown;
    meta: { [key: string]: string };
    path: string;
}
