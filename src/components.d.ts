/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IUser, NavItem, Session, TabItem, TabsMap } from "./components/props";
export namespace Components {
    interface NsSpinner {
        "height": number;
        "width": number;
    }
    interface NsTheme {
        "addPanel": (tab: any, element: any) => Promise<HTMLNsThemePanelElement>;
        "addTab": (tab: any) => Promise<TabItem>;
        "addTabAndPanel": (tab: any, el?: any) => Promise<{ newTab: TabItem; newPanel: HTMLNsThemePanelElement; }>;
        "addTabs": (tabs: TabItem[]) => Promise<void>;
        "createPane": (t: any) => Promise<HTMLDivElement>;
        "getNsPanels": () => Promise<HTMLNsThemePanelsElement>;
        "getNsTabs": () => Promise<HTMLNsThemeTabsElement>;
        "open": () => Promise<boolean>;
        "selectHomeTab": () => Promise<TabItem>;
        "session": Session;
        "tabs": TabItem[];
    }
    interface NsThemeBrandingBar {
        /**
          * The text for the branding bar
         */
        "headerText": string;
    }
    interface NsThemeDrawer {
        /**
          * The anchor position of the drawer.
         */
        "anchor": string;
        /**
          * The header action text for the drawer.
         */
        "headerActionText": string;
        /**
          * The header text for the drawer.
         */
        "headerText": string;
        /**
          * Make the drawer be in fixed position.
         */
        "isFixed": boolean;
        /**
          * The open state of the drawer.
         */
        "isOpened": boolean;
        /**
          * The navigation list items.
         */
        "items": [];
        "toggle": () => Promise<void>;
    }
    interface NsThemeHeader {
        /**
          * The title for the header
         */
        "headerText": string;
        /**
          * Header in fixed position or not
         */
        "isFixed": boolean;
        /**
          * Main navigation items
         */
        "items": NavItem[];
        /**
          * Profile navigation items
         */
        "profile": NavItem[];
        /**
          * Settings navigation items
         */
        "settings": NavItem[];
        /**
          * Show Home menu button
         */
        "showHome": boolean;
        /**
          * Show Toggle menu button
         */
        "showMenu": boolean;
        /**
          * The tabCount for the tab manager
         */
        "tabCount": number;
        /**
          * User properties for user menu
         */
        "user": IUser;
    }
    interface NsThemeListGroup {
        "items": TabItem[];
    }
    interface NsThemePanel {
        "selected": boolean;
    }
    interface NsThemePanels {
        "addPanel": (tab: TabItem, element: any) => Promise<HTMLNsThemePanelElement>;
        "closePanel": (tab: TabItem) => Promise<void>;
        "getActivePanel": () => Promise<void>;
        "getPanelNodes": () => Promise<NodeListOf<HTMLNsThemePanelElement>>;
        "getPanels": () => Promise<any[]>;
        "selectedIndex": number;
        "togglePanel": (tab: TabItem) => Promise<void>;
    }
    interface NsThemeTabs {
        /**
          * Add a tab to the tabs
          * @param tab TabItem to add
          * @returns Updated array of tabs
         */
        "addTab": (tab: TabItem) => Promise<TabItem>;
        /**
          * Close a tab from the tab set.
          * @param index number The index of the tab to close.
          * @returns
         */
        "closeTab": (tab: TabItem) => Promise<TabItem>;
        "getHomeTab": () => Promise<TabItem>;
        /**
          * Get the current tabs rendered
          * @returns Array of tabs
         */
        "getTabs": () => Promise<TabsMap>;
        /**
          * Get the current tabs rendered
          * @returns Array of tabs
         */
        "getTabsArray": () => Promise<TabItem[]>;
        "getTabsArraySorted": () => Promise<any>;
        /**
          * The home tab that cannot be closed
         */
        "homeTab": TabItem;
        /**
          * The list of tab items that get added to tab list
         */
        "items": TabItem[];
        /**
          * Select home tab finds the home tab from the tabs.
          * @returns Home tab
         */
        "selectHomeTab": () => Promise<TabItem>;
        /**
          * The default selected index
         */
        "selectedIndex": number;
        /**
          * Handles toggling a tab's selected property.
          * @param tab The tab item to toggle
         */
        "toggleTab": (tab: TabItem) => Promise<TabItem>;
    }
}
declare global {
    interface HTMLNsSpinnerElement extends Components.NsSpinner, HTMLStencilElement {
    }
    var HTMLNsSpinnerElement: {
        prototype: HTMLNsSpinnerElement;
        new (): HTMLNsSpinnerElement;
    };
    interface HTMLNsThemeElement extends Components.NsTheme, HTMLStencilElement {
    }
    var HTMLNsThemeElement: {
        prototype: HTMLNsThemeElement;
        new (): HTMLNsThemeElement;
    };
    interface HTMLNsThemeBrandingBarElement extends Components.NsThemeBrandingBar, HTMLStencilElement {
    }
    var HTMLNsThemeBrandingBarElement: {
        prototype: HTMLNsThemeBrandingBarElement;
        new (): HTMLNsThemeBrandingBarElement;
    };
    interface HTMLNsThemeDrawerElement extends Components.NsThemeDrawer, HTMLStencilElement {
    }
    var HTMLNsThemeDrawerElement: {
        prototype: HTMLNsThemeDrawerElement;
        new (): HTMLNsThemeDrawerElement;
    };
    interface HTMLNsThemeHeaderElement extends Components.NsThemeHeader, HTMLStencilElement {
    }
    var HTMLNsThemeHeaderElement: {
        prototype: HTMLNsThemeHeaderElement;
        new (): HTMLNsThemeHeaderElement;
    };
    interface HTMLNsThemeListGroupElement extends Components.NsThemeListGroup, HTMLStencilElement {
    }
    var HTMLNsThemeListGroupElement: {
        prototype: HTMLNsThemeListGroupElement;
        new (): HTMLNsThemeListGroupElement;
    };
    interface HTMLNsThemePanelElement extends Components.NsThemePanel, HTMLStencilElement {
    }
    var HTMLNsThemePanelElement: {
        prototype: HTMLNsThemePanelElement;
        new (): HTMLNsThemePanelElement;
    };
    interface HTMLNsThemePanelsElement extends Components.NsThemePanels, HTMLStencilElement {
    }
    var HTMLNsThemePanelsElement: {
        prototype: HTMLNsThemePanelsElement;
        new (): HTMLNsThemePanelsElement;
    };
    interface HTMLNsThemeTabsElement extends Components.NsThemeTabs, HTMLStencilElement {
    }
    var HTMLNsThemeTabsElement: {
        prototype: HTMLNsThemeTabsElement;
        new (): HTMLNsThemeTabsElement;
    };
    interface HTMLElementTagNameMap {
        "ns-spinner": HTMLNsSpinnerElement;
        "ns-theme": HTMLNsThemeElement;
        "ns-theme-branding-bar": HTMLNsThemeBrandingBarElement;
        "ns-theme-drawer": HTMLNsThemeDrawerElement;
        "ns-theme-header": HTMLNsThemeHeaderElement;
        "ns-theme-list-group": HTMLNsThemeListGroupElement;
        "ns-theme-panel": HTMLNsThemePanelElement;
        "ns-theme-panels": HTMLNsThemePanelsElement;
        "ns-theme-tabs": HTMLNsThemeTabsElement;
    }
}
declare namespace LocalJSX {
    interface NsSpinner {
        "height"?: number;
        "width"?: number;
    }
    interface NsTheme {
        "session"?: Session;
        "tabs"?: TabItem[];
    }
    interface NsThemeBrandingBar {
        /**
          * The text for the branding bar
         */
        "headerText"?: string;
    }
    interface NsThemeDrawer {
        /**
          * The anchor position of the drawer.
         */
        "anchor"?: string;
        /**
          * The header action text for the drawer.
         */
        "headerActionText"?: string;
        /**
          * The header text for the drawer.
         */
        "headerText"?: string;
        /**
          * Make the drawer be in fixed position.
         */
        "isFixed"?: boolean;
        /**
          * The open state of the drawer.
         */
        "isOpened"?: boolean;
        /**
          * The navigation list items.
         */
        "items"?: [];
    }
    interface NsThemeHeader {
        /**
          * The title for the header
         */
        "headerText"?: string;
        /**
          * Header in fixed position or not
         */
        "isFixed"?: boolean;
        /**
          * Main navigation items
         */
        "items"?: NavItem[];
        /**
          * menuToggleClick dispatches when menu button is pressed
         */
        "onMenuToggleClick"?: (event: CustomEvent<any>) => void;
        "onTabManagerClick"?: (event: CustomEvent<any>) => void;
        /**
          * Profile navigation items
         */
        "profile"?: NavItem[];
        /**
          * Settings navigation items
         */
        "settings"?: NavItem[];
        /**
          * Show Home menu button
         */
        "showHome"?: boolean;
        /**
          * Show Toggle menu button
         */
        "showMenu"?: boolean;
        /**
          * The tabCount for the tab manager
         */
        "tabCount"?: number;
        /**
          * User properties for user menu
         */
        "user"?: IUser;
    }
    interface NsThemeListGroup {
        "items"?: TabItem[];
        "onTabClick"?: (event: CustomEvent<TabItem>) => void;
    }
    interface NsThemePanel {
        "selected"?: boolean;
    }
    interface NsThemePanels {
        "selectedIndex"?: number;
    }
    interface NsThemeTabs {
        /**
          * The home tab that cannot be closed
         */
        "homeTab"?: TabItem;
        /**
          * The list of tab items that get added to tab list
         */
        "items"?: TabItem[];
        "onTabAdded"?: (event: CustomEvent<TabItem>) => void;
        "onTabChange"?: (event: CustomEvent<TabItem>) => void;
        "onTabClick"?: (event: CustomEvent<TabItem>) => void;
        "onTabClose"?: (event: CustomEvent<TabItem>) => void;
        "onTabsChange"?: (event: CustomEvent<TabItem[]>) => void;
        /**
          * The default selected index
         */
        "selectedIndex"?: number;
    }
    interface IntrinsicElements {
        "ns-spinner": NsSpinner;
        "ns-theme": NsTheme;
        "ns-theme-branding-bar": NsThemeBrandingBar;
        "ns-theme-drawer": NsThemeDrawer;
        "ns-theme-header": NsThemeHeader;
        "ns-theme-list-group": NsThemeListGroup;
        "ns-theme-panel": NsThemePanel;
        "ns-theme-panels": NsThemePanels;
        "ns-theme-tabs": NsThemeTabs;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ns-spinner": LocalJSX.NsSpinner & JSXBase.HTMLAttributes<HTMLNsSpinnerElement>;
            "ns-theme": LocalJSX.NsTheme & JSXBase.HTMLAttributes<HTMLNsThemeElement>;
            "ns-theme-branding-bar": LocalJSX.NsThemeBrandingBar & JSXBase.HTMLAttributes<HTMLNsThemeBrandingBarElement>;
            "ns-theme-drawer": LocalJSX.NsThemeDrawer & JSXBase.HTMLAttributes<HTMLNsThemeDrawerElement>;
            "ns-theme-header": LocalJSX.NsThemeHeader & JSXBase.HTMLAttributes<HTMLNsThemeHeaderElement>;
            "ns-theme-list-group": LocalJSX.NsThemeListGroup & JSXBase.HTMLAttributes<HTMLNsThemeListGroupElement>;
            "ns-theme-panel": LocalJSX.NsThemePanel & JSXBase.HTMLAttributes<HTMLNsThemePanelElement>;
            "ns-theme-panels": LocalJSX.NsThemePanels & JSXBase.HTMLAttributes<HTMLNsThemePanelsElement>;
            "ns-theme-tabs": LocalJSX.NsThemeTabs & JSXBase.HTMLAttributes<HTMLNsThemeTabsElement>;
        }
    }
}
