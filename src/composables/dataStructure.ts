export interface Event {
    title: string;
    content: string;
    timestamp: string;
    icon: any;
    color: string;
    check:boolean;
}

export default interface EventList extends Array<Event> {}
