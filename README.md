## Proof of concept - structure

 - Shared (common components, can be used in each other component in the app)
 - Services (common services)
 - Modules (example: Dashboard)
  - Containers (components connected to the store)
    - ducks.ts (acion types, action creators, redcuer)
    - sagas.ts
    - index.ts
    - interfaces
    - styles.sass
    - components (shared between containers in Module)
      - index.ts
      - styles.sass
    - services (shared between containers in Module)
 - Utils
  - validators
  - hocs
  - etc...

## Required libs to use:
 - react
 - react-redux
 - redux
 - redux-saga

