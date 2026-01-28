# Test Fullstack - Node.js TypeScript avec Clean Architecture

Projet Node.js TypeScript utilisant une architecture en couches propre (Clean Architecture) avec Express, Zod pour la validation, et une structure modulaire.

## 📁 Structure du Projet

```
src/
├── config/          # Configuration de l'application
├── controllers/     # Contrôleurs (couche présentation)
├── middlewares/     # Middlewares Express (validation, erreurs, etc.)
├── models/          # Modèles de données et DTOs
├── repositories/    # Couche d'accès aux données (interfaces et implémentations)
├── routes/          # Définition des routes
├── services/        # Logique métier (interfaces et implémentations)
├── utils/           # Fonctions utilitaires (logger, erreurs, constantes)
├── validations/     # Schémas de validation Zod
└── index.ts         # Point d'entrée de l'application
```

## 🏗️ Architecture en Couches

### 1. **Models** (`src/models/`)
Définit les entités et DTOs (Data Transfer Objects) du domaine.

### 2. **Repositories** (`src/repositories/`)
- **Interfaces** : Définissent les contrats d'accès aux données
- **Implémentations** : Implémentent la persistance (actuellement en mémoire, facilement remplaçable par une vraie base de données)

### 3. **Services** (`src/services/`)
- **Interfaces** : Définissent les contrats de la logique métier
- **Implémentations** : Contiennent la logique métier et la gestion des erreurs

### 4. **Controllers** (`src/controllers/`)
Gèrent les requêtes HTTP et les réponses, délèguent la logique aux services.

### 5. **Routes** (`src/routes/`)
Définissent les endpoints et appliquent les middlewares de validation.

### 6. **Middlewares** (`src/middlewares/`)
- **validation.ts** : Middleware de validation avec Zod
- **errorHandler.ts** : Gestion centralisée des erreurs
- **notFound.ts** : Gestion des routes non trouvées

### 7. **Validations** (`src/validations/`)
Schémas Zod pour la validation des données d'entrée.

### 8. **Utils** (`src/utils/`)
- **errors.ts** : Classes d'erreurs personnalisées
- **logger.ts** : Système de logging
- **constants.ts** : Constantes de l'application

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Compiler le projet
npm run build

# Lancer en production
npm start
```

## 📝 Variables d'Environnement

Créez un fichier `.env` à la racine du projet :

```env
PORT=3000
NODE_ENV=development
LOG_LEVEL=INFO
```

## 🧪 Exemple d'Utilisation

### Créer un utilisateur
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "name": "John Doe"}'
```

### Récupérer tous les utilisateurs
```bash
curl http://localhost:3000/api/users
```

### Récupérer un utilisateur par ID
```bash
curl http://localhost:3000/api/users/{id}
```

### Mettre à jour un utilisateur
```bash
curl -X PUT http://localhost:3000/api/users/{id} \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe"}'
```

### Supprimer un utilisateur
```bash
curl -X DELETE http://localhost:3000/api/users/{id}
```

## 🔍 Validation avec Zod

Les schémas de validation sont définis dans `src/validations/` et appliqués automatiquement via le middleware `validate()`.

Exemple de schéma :
```typescript
createUser: z.object({
  body: z.object({
    email: z.string().email('Invalid email format'),
    name: z.string().min(2).max(100),
  }),
})
```

## 🛠️ Technologies Utilisées

- **Node.js** : Runtime JavaScript
- **TypeScript** : Typage statique
- **Express** : Framework web
- **Zod** : Validation de schémas
- **ESLint** : Linting du code

## 📦 Dépendances Principales

- `express` : Framework web
- `zod` : Validation de schémas
- `dotenv` : Gestion des variables d'environnement
- `uuid` : Génération d'identifiants uniques

## 🎯 Bonnes Pratiques

1. **Séparation des responsabilités** : Chaque couche a une responsabilité claire
2. **Dependency Injection** : Les dépendances sont injectées via les constructeurs
3. **Interfaces** : Utilisation d'interfaces pour découpler les couches
4. **Validation** : Validation des données d'entrée avec Zod
5. **Gestion d'erreurs** : Erreurs personnalisées et gestion centralisée
6. **Logging** : Système de logging structuré

## 🔄 Extension du Projet

Pour ajouter une nouvelle entité (ex: Product) :

1. Créer le modèle dans `src/models/Product.ts`
2. Créer l'interface du repository dans `src/repositories/IProductRepository.ts`
3. Implémenter le repository dans `src/repositories/ProductRepository.ts`
4. Créer l'interface du service dans `src/services/IProductService.ts`
5. Implémenter le service dans `src/services/ProductService.ts`
6. Créer le contrôleur dans `src/controllers/ProductController.ts`
7. Créer les schémas de validation dans `src/validations/productSchemas.ts`
8. Créer les routes dans `src/routes/productRoutes.ts`
9. Enregistrer les routes dans `src/index.ts`

## 📄 Licence

ISC
