## Getting Started

### Prerequisites

The following software are required:

- nodejs.
- vs code.

### Installation

1. Clone the repo using below URL

```sh
https://github.com/Mary1210/SET_Test_Noema
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```

```sh
npm i -D @playwright/test
```

```sh
npx playwright install
```

## Running local and show the report

1. Run local
```JS
npx playwright test
```
2. Run local in non headless mode
```JS
npx playwright test --headed
```
3. Show the report
```JS
npx playwright show-report
