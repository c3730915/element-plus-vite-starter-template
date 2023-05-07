export interface Event {
    title: string;
    content: string;
    timestamp: string;
    icon: any;
    color: string;
}

export default interface EventList extends Array<Event> {}