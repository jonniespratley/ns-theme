# ns-theme-tabs



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                      | Type        | Default     |
| --------------- | ---------------- | ------------------------------------------------ | ----------- | ----------- |
| `homeTab`       | --               | The home tab that cannot be closed               | `TabItem`   | `undefined` |
| `items`         | --               | The list of tab items that get added to tab list | `TabItem[]` | `[]`        |
| `selectedIndex` | `selected-index` | The default selected index                       | `number`    | `0`         |


## Events

| Event        | Description | Type                     |
| ------------ | ----------- | ------------------------ |
| `tabAdded`   |             | `CustomEvent<TabItem>`   |
| `tabChange`  |             | `CustomEvent<TabItem>`   |
| `tabClick`   |             | `CustomEvent<TabItem>`   |
| `tabClose`   |             | `CustomEvent<TabItem>`   |
| `tabsChange` |             | `CustomEvent<TabItem[]>` |


## Methods

### `addTab(tab: TabItem) => Promise<{ id: string; default?: boolean; selected?: boolean; href: string; label: string; title?: string; panelId?: string; index?: number; home?: boolean; }>`

Add a tab to the tabs

#### Returns

Type: `Promise<{ id: string; default?: boolean; selected?: boolean; href: string; label: string; title?: string; panelId?: string; index?: number; home?: boolean; }>`



### `closeTab(tab: TabItem) => Promise<TabItem>`

Close a tab from the tab set.

#### Returns

Type: `Promise<TabItem>`



### `getTabs() => Promise<TabsMap>`

Get the current tabs rendered

#### Returns

Type: `Promise<TabsMap>`



### `selectHomeTab() => Promise<TabItem>`

Select home tab finds the home tab from the tabs.

#### Returns

Type: `Promise<TabItem>`



### `toggleTab(tab: TabItem) => Promise<TabItem>`

Handles toggling a tab's selected property.

#### Returns

Type: `Promise<TabItem>`




## Dependencies

### Used by

 - [ns-theme](../ns-theme)

### Graph
```mermaid
graph TD;
  ns-theme --> ns-theme-tabs
  style ns-theme-tabs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Build with Love by JS!*
