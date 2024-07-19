<template>
  <div class="custom-select" ref="dropdownContainer">
    <div class="selected-option" @click="toggleDropdown">
      {{
        selectedOption
          ? options.find((option) => option.value === selectedOption)?.title
          : label
      }}
      <span class="arrow"></span>
    </div>
    <div v-if="isDropdownOpen" class="options-container">
      <div class="option-item" @click="selectOption('')">
        {{ label }}
      </div>
      <div
        v-for="option in options"
        :key="option.value"
        class="option-item"
        @click="selectOption(option.value)"
        :class="{ selected: option.value === selectedOption }"
      >
        {{ option.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Option {
  value: string;
  title: string;
}

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  label: {
    type: String,
    required: true,
    default: "Select an option",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue", "change"]);

const selectedOption = ref<string>(props.modelValue);
const isDropdownOpen = ref(false);
const dropdownContainer = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (value: string) => {
  selectedOption.value = value;
  emit("update:modelValue", value);
  emit("change", value);
  isDropdownOpen.value = false;
};

watch(selectedOption, (newValue: string) => {
  emit("update:modelValue", newValue);
});

const handleClickOutside = (event: MouseEvent) => {
  if (
    dropdownContainer.value &&
    !dropdownContainer.value.contains(event.target as Node)
  ) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped lang="scss">
.custom-select {
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
}

.selected-option {
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid $blackColor;
  background-color: $whiteColor;
  position: relative;
  font-weight: 500;
  min-height: 36px;
  @include breakpoint("small") {
    font-size: 14px;
  }
}

.arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: solid transparent;
  border-width: 5px 5px 0;
  border-top-color: $blackColor;
}

.options-container {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid $lighterGray;
  border-top: none;
  background-color: $whiteColor;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  font-weight: 500;
  padding: 12px 0;
  @include breakpoint("small") {
    padding: 8px 0;
  }
}

.option-item {
  cursor: pointer;
  padding: 12px 32px;
  @include breakpoint("small") {
    font-size: 14px;
    padding: 8px 16px;
  }

  &:hover {
    background-color: $whiteColor;
  }

  &.selected {
    background-color: $blackColor;
    color: $whiteColor;
  }
}
</style>
