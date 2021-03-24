# North Star Shell

Suite of UI components implementing the North Star application shell.

## Build Commands

Although these are specific to this workspace they are executed from the root.

-   `yarn n shell.build` - build this workspace
-   `yarn n shell.build.fast` - faster build that only runs the bare minimum
-   `yarn n shell.lint` - run the linter and code formatter
-   `yarn n shell.test` - unit test
-   `yarn n shell.test.coverage` - unit test with code coverage

## Sub-Workspaces

Written as NPM packages, but we are not quite sure if they will
ever become standalone.

-   `design-system` - CSS-in-JS implementation of NorthStart design system
-   `preact-common` - utility functionality for [Preact](https://preactjs.com/)
-   `type-dictionary` - repository of common data types
-   `ui-primitives` - basic UI components not tied to a design system
