# Frontend - React TypeScript

Application React TypeScript avec architecture en couches pour l'analyse de texte IA.

## 🏗️ Architecture

```
src/
├── models/          # Modèles TypeScript (interfaces)
├── repositories/    # Appels API (couche d'accès aux données)
├── services/        # Logique métier
├── views/           # Composants React (UI)
├── config/          # Configuration
└── App.tsx          # Composant principal
```

## 🚀 Installation

```bash
cd frontend
npm install
```

## 🔧 Configuration

Créez un fichier `.env` à la racine du projet `frontend` :

```env
VITE_BACKEND_URL=http://localhost:3000
VITE_AI_SERVICE_URL=http://localhost:3001
```

## 🏃 Démarrage

```bash
npm run dev
```

L'application démarre sur `http://localhost:5173`

## 📋 Fonctionnalités

- ✅ Champ texte pour saisir le texte à analyser
- ✅ Bouton "Analyser" pour déclencher l'analyse
- ✅ Affichage du score avec code couleur
- ✅ Affichage de l'historique des analyses
- ✅ Gestion des erreurs API avec messages d'erreur

## 🎨 Structure des Couches

### Models (`src/models/`)
- Interfaces TypeScript pour les données
- `Analyze.ts` : Modèles pour l'analyse
- `Historique.ts` : Modèles pour l'historique

### Repositories (`src/repositories/`)
- Appels API HTTP (axios)
- `AnalyzeRepository` : Appels vers le service IA
- `HistoriqueRepository` : Appels vers le backend

### Services (`src/services/`)
- Logique métier
- `AnalyzeService` : Gestion de l'analyse
- `HistoriqueService` : Gestion de l'historique avec cache

### Views (`src/views/`)
- Composants React fonctionnels
- `AnalyzeForm` : Formulaire de saisie
- `ScoreDisplay` : Affichage du score
- `HistoriqueList` : Liste de l'historique
- `ErrorDisplay` : Affichage des erreurs

## 🔄 Flux de Données

1. **Utilisateur saisit un texte** → `AnalyzeForm`
2. **Clic sur "Analyser"** → `AnalyzeService.analyze()`
3. **Appel API** → `AnalyzeRepository` → Service IA
4. **Résultat** → `ScoreDisplay` + Sauvegarde dans `HistoriqueService`
5. **Historique mis à jour** → `HistoriqueList`

## 📄 Licence

ISC
