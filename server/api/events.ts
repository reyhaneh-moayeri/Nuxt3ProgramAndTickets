import events from "./data.json";

export default defineEventHandler((event) => {
  return {
    events: events?.events,
  };
});
