
export interface NavItemProps extends NavItem {
  onClick:() => void;
  onRemove:() => void;
  //selected?: boolean;
}

export interface TabItem {
  id: string;
  selected?: boolean;
  href: string;
  label: string;
  title?: string;
}

export interface TabProps extends TabItem {
  onClick?: () => void;
  onRemove?: () => void;
}

/**
 * Interfaces for config for template
 */
 export interface NavItem {
    selected: boolean;
    id: string;
    icon?: string;
    location: string;
    path: string;
    label: string;
    template: string;
    uri: string;
    default?: boolean;
    host?: string;
    order?: number;
    items?: NavItem[];
    index?: number;
  }
  
  export interface NavItems {
    items?: NavItem[];
  }
  
  export interface User {
    firstName?: string;
    lastName?: string;
    name: string;
    id?: string;
    picture?: string;
  }
  
  export interface Workflow {
    id?: string;
    name?: string;
    items: NavItem[];
  }
  
  export interface Session {
    main?: NavItems;
    name?: string;
    id?: string;
    workflows?: Workflow[];
    workflow?: Workflow;
    menus?: any;
  }
  
  export interface Config {
    session?: Session;
    menus?: any;
    workflows?: Workflow[];
    appName?: string;
    appLogo?: string;
    contextPath?: string;
    paths?: object;
    user?: User;
    main?: NavItems;
    settings?: NavItems;
    profile?: NavItems;
    localeData?: object;
    preferences?: object;
  }
  