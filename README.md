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
