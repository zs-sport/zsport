import { Result } from '../result';
import { Event } from './event';

export interface EventEntity extends Event {
    results: Result[];
}
