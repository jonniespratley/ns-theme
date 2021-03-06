/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { NavItem } from "./components/props";
export namespace Components {
    interface NsThemeBrandingBar {
        /**
          * The text for the branding bar
         */
        "headerText": string;
    }
    interface NsThemeDrawer {
        "headerText": string;
        "isFixed": boolean;
        "isOpened": boolean;
        "items": [];
    }
    interface NsThemeHeader {
        /**
          * The title for the header
         */
        "headerText": string;
        /**
          * Drawer in fixed position or not
         */
        "isFixed": boolean;
        /**
          * Main navigation items
         */
        "items": NavItem[];
        /**
          * Profile navigation items
         */
        "profile": [];
        /**
          * Settings navigation items
         */
        "settings": [];
        /**
          * User properties for user menu
         */
        "user": object;
    }
}
declare global {
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
    interface HTMLElementTagNameMap {
        "ns-theme-branding-bar": HTMLNsThemeBrandingBarElement;
        "ns-theme-drawer": HTMLNsThemeDrawerElement;
        "ns-theme-header": HTMLNsThemeHeaderElement;
    }
}
declare namespace LocalJSX {
    interface NsThemeBrandingBar {
        /**
          * The text for the branding bar
         */
        "headerText"?: string;
    }
    interface NsThemeDrawer {
        "headerText"?: string;
        "isFixed"?: boolean;
        "isOpened"?: boolean;
        "items"?: [];
    }
    interface NsThemeHeader {
        /**
          * The title for the header
         */
        "headerText"?: string;
        /**
          * Drawer in fixed position or not
         */
        "isFixed"?: boolean;
        /**
          * Main navigation items
         */
        "items"?: NavItem[];
        /**
          * Profile navigation items
         */
        "profile"?: [];
        /**
          * Settings navigation items
         */
        "settings"?: [];
        /**
          * User properties for user menu
         */
        "user"?: object;
    }
    interface IntrinsicElements {
        "ns-theme-branding-bar": NsThemeBrandingBar;
        "ns-theme-drawer": NsThemeDrawer;
        "ns-theme-header": NsThemeHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ns-theme-branding-bar": LocalJSX.NsThemeBrandingBar & JSXBase.HTMLAttributes<HTMLNsThemeBrandingBarElement>;
            "ns-theme-drawer": LocalJSX.NsThemeDrawer & JSXBase.HTMLAttributes<HTMLNsThemeDrawerElement>;
            "ns-theme-header": LocalJSX.NsThemeHeader & JSXBase.HTMLAttributes<HTMLNsThemeHeaderElement>;
        }
    }
}
