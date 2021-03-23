import { createStore } from "@stencil/store";


export const loadFromSession = (itemKeyToLoad: any = 'state') => {
  try {
      const serializedSessionItem = sessionStorage.getItem(itemKeyToLoad);
      if (serializedSessionItem === null) {
          return;
      }
      return JSON.parse(serializedSessionItem);
  } catch (err) {
      return {};
  }
};

export const saveToSession = (item: any, key: any = 'state') => {
  try {
      const serializedSessionItem = JSON.stringify(item);
      sessionStorage.setItem(key, serializedSessionItem);
  } catch (err) {
      // Ignore write errors
  }
};

/**
 * store.state
The state object is proxied, i. e. you can directly get and set properties and Store will automatically take care of component re-rendering when the state object is changed.

Note: Proxy objects are not supported by IE11 (not even with a polyfill), so you need to use the store.get and store.set methods of the API if you wish to support IE11.

store.on(event, listener)
Add a listener to the store for a certain action.

store.onChange(propName, listener)
Add a listener that is called when a specific property changes (either from a set or reset).

store.get(propName)
Get a property's value from the store.

store.set(propName, value)
Set a property's value in the store.

store.reset()
Reset the store to its initial state.

store.use(...subscriptions)
Use the given subscriptions in the store. A subscription is an object that defines one or more of the properties get, set or reset.

store.dispose()
Resets the store and all the internal state of the store that should not survive between tests.
 */

const baseState = {
  clicks: 0,
  seconds: 0,
  squaredClicks: 0,
  selectedTab: 0,
  tabs: [],
  appLogo: '',
  appName: '',
  session: {},
  main: {},
  paths: {},
  profile: {},
  settings: {},
  preferences: {},
  contextPath: '',
  localeData: {},
  user: {}
};



const persistedState = loadFromSession('apphub-session');
const initialState = Object.assign(baseState, persistedState);
export const store = createStore(initialState);

const { state, onChange } = store;



onChange('session', value => {
    console.log('session changed', value);
    saveToSession(value, 'apphub-session')
});

export default state;