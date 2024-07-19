<template>
  <div class="event-card">
    <div class="event-date">
      <p>
        <span class="event-date-day">{{ formattedDate.day }},</span>
        {{ formattedDate.fullDate }}
      </p>
      <p class="event-date-time">{{ formattedTime }}</p>
    </div>
    <div class="event-data">
      <p class="event-category">{{ event.category }}</p>
      <div class="event-title-description">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
      </div>
      <p class="event-location">{{ event.location }}</p>
    </div>

    <div class="event-action">
      <div>
        <div v-if="eventCount > 0" class="counter-container">
          <button class="circle-button" @click="removeFromCart">-</button>
          <span class="count">{{ eventCount }}</span>
          <button class="circle-button" @click="addToCart">+</button>
        </div>
        <template v-else>
          <Button @click="addToCart" label="Buy tickets" :icon="shopIcon" />
        </template>
      </div>
      <p>{{ event.price }}€</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const dayjs = useDayjs();
import shopIcon from "~/assets/icons/shop.svg";
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

const isSelected = computed(() => cartStore.getEventCount(props.event.id) > 0);
const eventCount = computed(() => cartStore.getEventCount(props.event.id));

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

function addToCart() {
  cartStore.addEventToCart(props.event.id);
}

function removeFromCart() {
  cartStore.removeEventFromCart(props.event.id);
}

const formattedDate = computed(() => {
  const day = dayjs(props.event.date).format("ddd");
  const fullDate = dayjs(props.event.date).format("DD. MMMM YYYY");
  return { day, fullDate };
});
const formattedTime = computed(() => {
  const timeString = `2000-01-01T${props.event.time}`;
  return dayjs(timeString).format("h A");
});
</script>

<style scoped lang="scss">
.event-card {
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  display: flex;

  @include breakpoint("large") {
    flex-direction: column;
    gap: 24px;
  }

  h3 {
    margin-top: 0;
    font-size: 48px;
  }

  p {
    margin-bottom: 5px;
  }
}

.event-date {
  padding-right: 32px;
  font-size: 18px;

  &-day,
  &-time {
    font-weight: 700;
  }

  @include breakpoint("large") {
    display: flex;
    gap: 4px;
  }
}

.event-category {
  background: $blackColor;
  display: inline;
  color: $whiteColor;
  font-size: 14px;
  padding: 4px;

  @include breakpoint("small") {
    font-size: 14px;
  }
}

.event-title-description {
  margin: 8px 0;

  @include breakpoint("small") {
    h3 {
      font-size: 32px;
    }

    p {
      font-size: 24px;
    }
  }
}

.event-data {
  flex-grow: 1;
}

.event-location {
  @include breakpoint("small") {
    font-size: 16px;
  }
}

.event-action {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 8px;

  @include breakpoint("large") {
    align-items: flex-start;
  }
}

.circle-button {
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: $blackColor;
  color: $whiteColor;
  font-size: 18px;

  @include breakpoint("large") {
    width: 30px;
    height: 30px;
  }
}

.counter-container {
  display: flex;
  align-items: center;
  gap: 8px;

  & .count {
    font-size: 24px;
    font-weight: 500;
  }
}
</style>
