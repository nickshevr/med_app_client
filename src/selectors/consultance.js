import {map} from 'lodash/fp';

export const mapConsultance = map(event => ({
    start: new Date(event.time_start.replace(' ', 'T')),
    end: new Date(event.time_end.replace(' ', 'T')),
    ...event,
}));
