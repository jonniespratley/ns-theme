import { store } from '../components/store';
/**
 * Custom Data Source to get menu items
 */
export class CustomDataSource {
  data: any;
  constructor(initialData) {
    this.data = initialData;
    store.set('session', initialData);
  }
  /**
   * Fetchs the initial app menu data.
   * @returns Object of data for the app menu
   */
  async initialAppData() {
    let { items = [] } = await this.getFromStore('main');
    let tabs = await this.getFromStore('tabs');
    let apps = [];
    items.forEach(item => {
      const subApps = [];
      const { items } = item;
      if (items) {
        items.forEach(subItem => {
          subApps.push({
            ...subItem,
            href: item.path,
            onclick: () => {
              console.log('test');
            },
          });
        });
      }
      const app = {
        ...item,
        href: item.path,
        subApps,
      };
      apps.push(app);
    });

    return {
      tabs,
      folders: [
        {
          label: 'Microapps',
          apps,
        },
      ],
    };
  }

  async get(key) {
    return this.getFromStore(key);
  }
  async getFromStore(key) {
    let val = store.get(key);
    return val;
  }
  async setToStore(key, val) {
    let result = store.set(key, val);
    return result;
  }
}

export default async () => {
  //const shell = window.shell;
  const prefix = 'js';
  console.log('global/app.ts');
  const appMenuContainer = document.querySelector(`#${prefix}-menu`);

  let ds = {};
  if (appMenuContainer) {
    console.log('found', appMenuContainer);
    //let appMenu = shell.AppMenu.AppMenuDucklet.of(ds, {});
    //appMenu.mount(document.querySelector('#js-menu'));
  }
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
};
