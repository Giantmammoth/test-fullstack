# AI Service

Microservice d'analyse de texte avec simulation d'IA.

## 📦 Instructions d'Installation

```bash
cd backend/ai-service
npm install
npm run dev
```

Le service démarre sur `http://localhost:3001`

## 🛠️ Choix Techniques

- **Node.js + TypeScript** : Typage statique pour la robustesse
- **Express** : Framework web minimaliste et performant
- **Clean Architecture** : Séparation en couches (models, services, controllers, routes)
- **Zod** : Validation de schémas pour la sécurité des données
- **CORS** : Configuration pour autoriser toutes les origines
- **Dependency Injection** : Découplage des dépendances via constructeurs

## 📁 Structure du Projet

```
src/
├── config/          # Configuration (port, environnement)
├── controllers/     # Contrôleurs HTTP (AnalyzeController, HealthController)
├── middlewares/     # Middlewares Express (validation, erreurs, CORS)
├── models/          # Modèles TypeScript (Analyze)
├── routes/          # Définition des routes API
├── services/        # Logique métier (AnalyzeService, HealthService)
├── utils/           # Utilitaires (logger, erreurs)
├── validations/     # Schémas Zod pour validation
└── index.ts         # Point d'entrée Express
```

## 🔌 Endpoints

- `GET /health` - Health check
- `POST /api/analyze` - Analyse de texte avec calcul de score