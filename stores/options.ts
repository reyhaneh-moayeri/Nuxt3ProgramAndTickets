import { defineStore } from "pinia";
import { ref } from "vue";
import type { EventModel, EventsResponseModel } from "~/models/events.models";
import { getUniqueValues } from "~/utils/index";
export const useOptionsStore = defineStore(
  "options",
  () => {
    const events = ref<EventModel[]>([]);
    const locations = ref<string[]>([]);
    const categories = ref<string[]>([]);
    const loading = ref<boolean>(true);
    const error = ref<string>("");

    const fetchEvents = async () => {
      try {
        loading.value = true;

        // added this promise in order to feel nutral and show the spinner cause the data in mock

        await new Promise((resolve) => setTimeout(resolve, 500));

        const response = await fetch("/api/events");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const res: EventsResponseModel = await response.json();
        events.value = res.events;

        // Get the unique locations and category for dropdown filter
        locations.value = getUniqueValues(res.events, "location");
        categories.value = getUniqueValues(res.events, "category");
      } catch (err) {
        console.error("Error fetching events:", err);
        error.value = (err as Error).message;
      } finally {
        loading.value = false;
      }
    };

    return {
      events,
      locations,
      categories,
      fetchEvents,
      loading,
      error,
    };
  },
  {
    persist: true,
  }
);
