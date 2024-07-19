<template>
  <h1>Program and tickets</h1>
  <div class="filters-container">
    <SelectFilter
      id="location"
      label="Location"
      :options="locationOptions"
      v-model="selectedLocation"
    />
    <SelectFilter
      id="category"
      label="Category"
      :options="categoryOptions"
      v-model="selectedCategory"
    />
  </div>
  <div v-if="loading" class="loading"><Spinner /></div>
  <div v-if="error">Error loading events: {{ error }}</div>
  <div v-if="!loading && filteredEvents.length === 0" class="empty-state">
    <EmptyState />
  </div>
  <div v-else class="events-list" ref="eventsList">
    <EventCard
      v-for="event in filteredEvents"
      :key="event.id"
      :event="event"
      class="event-card"
    />
  </div>
</template>

<script setup lang="ts">
import type { EventModel, EventsResponseModel } from "~/models/events.models";
import gsap from "gsap";

const selectedLocation = ref<string>("");
const selectedCategory = ref<string>("");
const data = ref<EventsResponseModel>([]);
const error = ref<string | null>(null);
const eventsList = ref<HTMLElement | null>(null);
const loading = ref<boolean>(true);

onMounted(async () => {
  await fetchEvents();

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

const locationOptions = computed(() => {
  if (!data?.value) return [];

  const uniqueLocations = [
    ...new Set(data.value?.events?.map((event: EventModel) => event.location)),
  ];

  return uniqueLocations.map((location) => ({
    value: location as string,
    title: location as string,
  }));
});
const categoryOptions = computed(() => {
  if (!data.value?.events) return [];

  const uniqueCategories = [
    ...new Set(data.value?.events?.map((event: EventModel) => event.category)),
  ];
  return uniqueCategories.map((category) => ({
    value: category as string,
    title: category as string,
  }));
});

const filteredEvents = computed(() => {
  if (!data.value?.events) return [];

  return data.value.events.filter((event: any) => {
    const matchesLocation =
      !selectedLocation.value || event.location === selectedLocation.value;
    const matchesCategory =
      !selectedCategory.value || event.category === selectedCategory.value;
    return matchesLocation && matchesCategory;
  });
});

const fetchEvents = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const queryParams = new URLSearchParams({
      location: selectedLocation.value,
      category: selectedCategory.value,
    }).toString();
    const response = await fetch(`/api/events?${queryParams}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const res = await response.json();
    data.value = res;
  } catch (err) {
    error.value = (err as Error).message;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 32px;
  font-size: 60px;

  @include breakpoint("large") {
    font-size: 40px;
  }
}
.filters-container {
  display: flex;
  gap: 20px;

  div {
    width: 180px;
  }
}

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
</style>
