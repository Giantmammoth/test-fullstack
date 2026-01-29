# Historic Service

Service de gestion de l'historique des analyses avec MongoDB.

## 📦 Instructions d'Installation

```bash
cd backend/historic-service
npm install
npm run dev
```

**Prérequis** : MongoDB doit être démarré localement sur `mongodb://localhost:27017`

Le service démarre sur `http://localhost:3000`

## 🛠️ Choix Techniques

- **Node.js + TypeScript** : Typage statique pour la robustesse
- **Express** : Framework web minimaliste et performant
- **MongoDB + Mongoose** : Base de données NoSQL pour la persistance
- **Clean Architecture** : Séparation en couches (models, repositories, services, controllers, routes)
- **Zod** : Validation de schémas pour la sécurité des données
- **CORS** : Configuration pour autoriser toutes les origines
- **Dependency Injection** : Découplage des dépendances via constructeurs

## 📁 Structure du Projet

```
src/
├── config/          # Configuration (port, MongoDB URI, environnement)
├── controllers/     # Contrôleurs HTTP (HistoriqueController, HealthController)
├── middlewares/     # Middlewares Express (validation, erreurs, CORS)
├── models/          # Modèles TypeScript + Schémas Mongoose (Historique)
├── repositories/    # Couche d'accès aux données (interfaces + implémentations)
├── routes/          # Définition des routes API
├── services/        # Logique métier (HistoriqueService, HealthService)
├── utils/           # Utilitaires (logger, erreurs, constantes)
├── validations/     # Schémas Zod pour validation
└── index.ts         # Point d'entrée Express avec connexion MongoDB
```

## 🔌 Endpoints

- `GET /health` - Health check
- `GET /api/historiques` - Récupérer tous les historiques
- `GET /api/historiques/:id` - Récupérer un historique par ID
- `POST /api/historiques` - Créer un nouvel historique
