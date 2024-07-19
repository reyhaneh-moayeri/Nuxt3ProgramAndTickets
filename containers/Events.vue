<template>
  <div v-if="optionStore.loading" class="loading"><Spinner /></div>
  <div v-if="optionStore.error">
    Error loading events: {{ optionStore.error }}
  </div>
  <div
    v-if="!optionStore.loading && filteredEvents.length === 0"
    class="empty-state"
  >
    <EmptyState />
  </div>
  <div v-else ref="eventsList" class="events-list">
    <EventCard
      v-for="event in filteredEvents"
      :key="event.id"
      :event="event"
      class="event-card"
    />
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";

const filterStore = useFilterStore();
const optionStore = useOptionsStore();

// ref for adding animation to each card
const eventsList = ref<HTMLElement | null>(null);

const filteredEvents = computed(() => {
  if (!optionStore?.events) return [];

  return optionStore?.events.filter((event: any) => {
    const matchesLocation =
      !filterStore.selectedLocation ||
      event.location === filterStore.selectedLocation;
    const matchesCategory =
      !filterStore.selectedCategory ||
      event.category === filterStore.selectedCategory;
    return matchesLocation && matchesCategory;
  });
});

onMounted(async () => {
  if (!optionStore?.events?.length) await optionStore.fetchEvents();

  const cards = eventsList?.value?.querySelectorAll(".event-card");
  if (cards) {
    cards.forEach((card: Element, index: number) => {
      gsap.fromTo(
        card,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power1.out",
        }
      );
    });
  }
});
</script>

<style scoped lang="scss">
.loading {
  display: flex;
  width: 100%;
  justify-content: center;
}

.empty-state {
  display: flex;
  align-items: center;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @include breakpoint("small") {
    gap: 24px;
  }
}
</style>
