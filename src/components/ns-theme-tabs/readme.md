# ns-theme-tabs



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                | Type        | Default |
| --------------- | ---------------- | -------------------------- | ----------- | ------- |
| `items`         | --               | The default tabs to render | `TabItem[]` | `[]`    |
| `selectedIndex` | `selected-index` | The default selected index | `number`    | `0`     |


## Events

| Event       | Description | Type                     |
| ----------- | ----------- | ------------------------ |
| `tabAdded`  |             | `CustomEvent<TabItem>`   |
| `tabChange` |             | `CustomEvent<TabItem[]>` |
| `tabClick`  |             | `CustomEvent<TabItem>`   |
| `tabClose`  |             | `CustomEvent<any>`       |


## Methods

### `addTab(tab: TabItem) => Promise<{ index: number; id: string; selected?: boolean; href: string; label: string; title?: string; panelId?: string; }>`

Add a tab to the tabs

#### Returns

Type: `Promise<{ index: number; id: string; selected?: boolean; href: string; label: string; title?: string; panelId?: string; }>`



### `closeTab(index: any) => Promise<TabItem>`

Close a tab from the tab set.

#### Returns

Type: `Promise<TabItem>`



### `getTabs() => Promise<TabItem[]>`

Get the current tabs rendered

#### Returns

Type: `Promise<TabItem[]>`




----------------------------------------------

*Build with Love by JS!*
