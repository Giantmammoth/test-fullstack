# Test Fullstack - Architecture Microservices

Projet fullstack avec architecture microservices : backend (services Node.js TypeScript) et frontend (React TypeScript).

## 📦 Instructions d'Installation

### Prérequis

- Node.js (v18+)
- MongoDB (pour historic-service)
- npm ou yarn

### Backend - Historic Service

```bash
cd backend/historic-service
npm install
npm run dev
```

Le service démarre sur `http://localhost:3000`

**Note** : Assurez-vous que MongoDB est démarré localement.

### Backend - AI Service

```bash
cd backend/ai-service
npm install
npm run dev
```

Le service démarre sur `http://localhost:3001`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

L'application démarre sur `http://localhost:5173`

### Démarrage Complet

Pour démarrer tous les services, ouvrez 3 terminaux :

**Terminal 1 - Historic Service :**
```bash
cd backend/historic-service && npm run dev
```

**Terminal 2 - AI Service :**
```bash
cd backend/ai-service && npm run dev
```

**Terminal 3 - Frontend :**
```bash
cd frontend && npm run dev
```

## 📚 Documentation

- [Historic Service](./backend/historic-service/README.md)
- [AI Service](./backend/ai-service/README.md)
- [Frontend](./frontend/README.md)
