## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <cloned folder name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project and copy the content from `.env.example`:

```bash
cp .env.example .env
```
Replace `<username>` and `<password>` in the DATABASE_URL with your MongoDB credentials.

### 4. Run the application

```bash
npm run start:dev
```
### 5. To build the application

```bash
npm run build
```

### 6. Linting

To check for linting errors, run:

```bash
npm run lint
```
To fix linting errors, run:
```bash
npm run lint:fix
```

# Project Dependencies

This project has the following dependencies:

## Main Dependencies
- dotenv: ^16.4.5
- express: ^4.19.2
- mongoose: ^8.4.0
- typescript-eslint: ^7.10.0
- zod: ^3.23.8

## Dev Dependencies
- @types/express: ^4.17.21
- @types/node: ^20.12.12
- @typescript-eslint/eslint-plugin: ^7.10.0
- @typescript-eslint/parser: ^7.10.0
- eslint: ^8.57.0
- ts-node: ^10.9.2
- typescript: ^5.4.5

Please ensure these dependencies are properly installed and configured in your development environment to run the project successfully.