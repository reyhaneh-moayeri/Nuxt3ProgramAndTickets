import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import EventCard from "@/components/EventCard.vue";
import dayjs from "dayjs";

describe("EventCard", () => {
  const event = {
    date: "2023-07-20",
    time: "14:00:00",
    category: "Music",
    title: "Live Concert",
    description: "An amazing live concert.",
    location: "Stadium",
    price: 50,
  };

  it("renders the event details correctly", () => {
    const wrapper = mount(EventCard, {
      props: { event },
    });

    const formattedDate = {
      day: dayjs(event.date).format("ddd"),
      fullDate: dayjs(event.date).format("DD. MMMM YYYY"),
    };
    const formattedTime = dayjs(`2000-01-01T${event.time}`).format("h A");

    expect(wrapper.find(".event-date-day").text()).toBe(
      `${formattedDate.day},`
    );
    expect(wrapper.find(".event-date p").text()).toContain(
      formattedDate.fullDate
    );
    expect(wrapper.find(".event-date-time").text()).toBe(formattedTime);
    expect(wrapper.find(".event-category").text()).toBe(event.category);
    expect(wrapper.find(".event-title-description h3").text()).toBe(
      event.title
    );
    expect(wrapper.find(".event-title-description p").text()).toBe(
      event.description
    );
    expect(wrapper.find(".event-location").text()).toBe(event.location);
    expect(wrapper.find(".event-action p").text()).toBe(`${event.price}€`);
  });

  it("renders the Buy tickets button with the correct icon", () => {
    const wrapper = mount(EventCard, {
      props: { event },
    });

    const button = wrapper.findComponent({ name: "Button" });
    expect(button.exists()).toBe(true);
    expect(button.props().label).toBe("Buy tickets");
  });
});
