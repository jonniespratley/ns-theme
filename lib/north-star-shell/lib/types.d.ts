import { Ducklet, StatelessDucklet } from '@ix/guiduck';

export namespace HelpButton {
    export interface Attrs {
        baseUrl: string;
        context?: string;
        culture: string;
        icon: string;
        onClick: (ev: any) => void;
        searchTerm?: string;
        testid?: string;
        tooltip: string;
    }

    export type Type = StatelessDucklet<Attrs>;

    export function of(type: string, attrs?: Partial<Attrs>): Type;
}

export namespace ImmutableDuckletList {
    export interface Attrs {
        className: string;
        testid: string;
    }

    export type Type = StatelessDucklet<Attrs>;

    export function of(children: Ducklet<any, any>[], immutableClassName?: string, attrs?: Partial<Attrs>): Type;

    export function ofEmpty(): Type;
}

export namespace StatusBar {
    // eslint-disable-next-line no-shadow
    export namespace Ducklet {
        export type Attrs = ImmutableDuckletList.Attrs;

        export type Type = ImmutableDuckletList.Type;

        export function of(leftDucklets: Ducklet<any, any>[], rightDucklets: Ducklet<any, any>[]): Type;
    }

    export namespace PipeDivider {
        export type Attrs = undefined;

        export type Type = StatelessDucklet<Attrs>;

        export function of(): Type;
    }

    export namespace SpaceDivider {
        export type Attrs = undefined;

        export type Type = StatelessDucklet<Attrs>;

        export function of(): Type;
    }
}

export namespace UtilityMenu {
    export type Attrs = ImmutableDuckletList.Attrs;

    export type Type = ImmutableDuckletList.Type;

    export function of(children: Ducklet<any, any>[], attrs?: Partial<Attrs>): Type;
}

export namespace UtilityMenuDropdown {
    export interface Attrs {
        onClick?: (ev: any) => void;
        tooltip: string;
        testid?: string;
        dropdownTestId?: string;
        expanded?: boolean;
        children: Array<DropdownItemProps>;
        icon: string;
    }

    export interface DropdownItemProps {
        onClick: (ev: DropdownItemClickEvent) => void;
        testid?: string;
        icon?: string;
        topSeparator?: boolean;
        bottomSeparator?: boolean;
        caption: string;
    }

    type DropdownItemClickEvent = StatelessEvent<MouseEvent, DropdownItemProps>;

    type StatelessEvent<Tevent extends Event, Tprops, Tcustom = {}> = { nativeEvent: Tevent } & {
        props: Tprops;
    } & Tcustom;

    export type Type = StatelessDucklet<Attrs>;

    export function of(attrs?: Partial<Attrs>): Type;
}
