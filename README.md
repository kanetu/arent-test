# Arent Test Interview

## Demo

https://github.com/kanetu/arent-test

## Tech Stack

React, SCSS, VISX, Webpack

## Run Locally

Clone the project

```bash
  git clone https://github.com/kanetu/arent-test
```

Go to the project directory

```bash
  cd arent-test
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Usage/Examples

To go `personal-info` route please change `isAuthenticated` to `true`

```javascript
const AuthRoute: React.FC = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
```
