import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    const selectedEvents = ref<Record<number, number>>({});

    function addEventToCart(eventId: number) {
      if (selectedEvents.value[eventId]) {
        selectedEvents.value[eventId] += 1;
      } else {
        selectedEvents.value[eventId] = 1;
      }
    }

    function removeEventFromCart(eventId: number) {
      if (selectedEvents.value[eventId]) {
        if (selectedEvents.value[eventId] > 1) {
          selectedEvents.value[eventId] -= 1;
        } else {
          delete selectedEvents.value[eventId];
        }
      }
      console.log(
        "Event removed:",
        eventId,
        "Count:",
        selectedEvents.value[eventId]
      );
    }

    function getEventCount(eventId: number) {
      return selectedEvents.value[eventId] || 0;
    }

    return {
      addEventToCart,
      removeEventFromCart,
      getEventCount,
      selectedEvents,
    };
  },
  {
    persist: true,
  }
);
