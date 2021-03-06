import { on } from "library/events";
import { writable } from "library/store";

const store = writable({}, {
  adapter: "ls",
  name: "stores/updated",
});

on("reset", () => {
  store.set({});
});

export default store;
