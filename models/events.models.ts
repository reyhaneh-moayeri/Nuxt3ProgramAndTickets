export interface EventModel {
  id: number;
  title: string;
  date: string;
  time: string;
  category: string;
  description: string;
  location: string;
  price: number;
}

export interface EventsResponseModel {
  events: EventModel[];
}
