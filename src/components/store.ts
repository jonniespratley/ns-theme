import { createStore } from '@stencil/store';
import { Session } from './props';

import { loadFromSession, saveToSession } from '../global/utils';
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
const baseState: Session = {
  tabs: null,
  appLogo: '',
  appName: 'APM AppHub',
  session: {},
  main: {},
  paths: {},
  profile: {},
  settings: {},
  preferences: {},
  contextPath: '',
  localeData: {},
  user: {
    name: 'Demo',
  },
};

const persistedState = loadFromSession('apphub-session');
const initialState = Object.assign(baseState, persistedState, { tabs: loadFromSession('ns-theme-tabs') });

export const store = createStore(initialState);

const { state, onChange } = store;

onChange('session', value => {
  console.log('save to session-store', value);
  saveToSession(value, 'apphub-session');
});

onChange('tabs', value => {
  saveToSession(value, 'ns-theme-tabs');
  console.log('save to session-store tabs', value);
});

export default state;
