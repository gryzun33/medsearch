# 💊 MedSearch

## 🚧 Project Status

⚠️ **Note:** This project is still under active development.  
Some features are already working, but others are in progress.

## 📥 Downloading

Clone the project

```
git clone https://github.com/gryzun33/medsearch.git
```

Go to folder with project

```
cd medsearch
```

Check if you are in branch `develop`

## 📦 Installing NPM modules

```
npm install

```

## ⚙️ Preparing to run

In folder `server` rename file `.env.example` to `.env`

To create database (apply prisma migrations and add seeds)

```
npm run migrate:seed
```

## 🚀 Running the project

To run project in development mode, it's recommended to run frontend and backend in separate terminals:

To run frontend:

```
npm run frontend
```

To run backend:

```
npm run server
```

To run frontend and backend in one terminal in development mode:

```
npm run dev
```

To build the project:

```
npm run build
```

To run project in production mode:

```
npm run start
```
