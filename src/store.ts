import { createStore } from "@stencil/store";
/**
 * https://stenciljs.com/docs/stencil-store
 * store.on(event, listener)
 * store.onChange(propName, listener)
 * store.get(propName)
 * store.set(propName, value)
 * store.reset();
 * store.use(...subscriptions)
 * 
 */
const { state, onChange } = createStore({
  clicks: 0,
  seconds: 0,
  squaredClicks: 0
});

onChange('clicks', value => {
  state.squaredClicks = value ** 2;
});

export default state;