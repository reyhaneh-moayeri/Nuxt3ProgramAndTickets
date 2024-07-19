import { mount, flushPromises, VueWrapper } from "@vue/test-utils";
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import CustomSelect from "@/components/SelectFilter.vue";

describe("CustomSelect", () => {
  let wrapper: VueWrapper<InstanceType<typeof CustomSelect>>;

  const options = [
    { value: "option 1", title: "option 1" },
    { value: "option 2", title: "option 2" },
    { value: "option 3", title: "option 3" },
  ];

  beforeAll(() => {
    wrapper = mount(CustomSelect, {
      props: {
        id: "test-select",
        options: options,
        label: "Select an option",
        modelValue: "",
      },
    });
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it("renders the select component with options", async () => {
    expect(wrapper.find(".selected-option").text()).toBe("Select an option");
    await wrapper.setProps({ modelValue: "option 1" });
    await flushPromises();
    expect(wrapper.find(".selected-option").text()).toBe("Select an option");
  });

  it("toggles the dropdown", async () => {
    const selectedOption = wrapper.find(".selected-option");
    await selectedOption.trigger("click");
    expect(wrapper.find(".options-container").exists()).toBe(true);
    await selectedOption.trigger("click");
    expect(wrapper.find(".options-container").exists()).toBe(false);
  });

  it("selects an option", async () => {
    const selectedOption = wrapper.find(".selected-option");
    await selectedOption.trigger("click");
    const option = wrapper.findAll(".option-item").at(2);
    await option?.trigger("click");

    expect(wrapper.find(".selected-option").text()).toBe("option 2");
    expect(wrapper.emitted()["update:modelValue"][0]).toEqual(["option 2"]);
  });

  it("selects an option", async () => {
    const selectedOption = wrapper.find(".selected-option");
    await selectedOption.trigger("click");
    const option = wrapper.findAll(".option-item").at(3);
    await option?.trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    await nextTick();

    expect(wrapper.find(".selected-option").text()).toBe("option 3");
    expect(wrapper.emitted()["update:modelValue"][2]).toEqual(["option 3"]);
  });

  it("resets the selection", async () => {
    const selectedOption = wrapper.find(".selected-option");
    await selectedOption.trigger("click");
    const option = wrapper.findAll(".option-item").at(0);
    await option?.trigger("click");

    expect(wrapper.find(".selected-option").text()).toBe("Select an option");
    expect(wrapper.emitted()["update:modelValue"]?.[4]).toEqual([""]);
    expect(wrapper.find(".options-container").exists()).toBe(false);
  });

  it("closes the dropdown when clicking outside", async () => {
    const selectedOption = wrapper.find(".selected-option");
    await selectedOption.trigger("click");
    expect(wrapper.find(".options-container").exists()).toBe(true);

    await document.body.click();
    expect(wrapper.find(".options-container").exists()).toBe(false);
  });
});
