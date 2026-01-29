# Frontend - React TypeScript

Application React TypeScript avec architecture en couches pour l'analyse de texte IA.

## 📦 Instructions d'Installation

```bash
cd frontend
npm install
npm run dev
```

L'application démarre sur `http://localhost:5173`

**Configuration** : Créez un fichier `.env` à la racine :

```env
VITE_BACKEND_URL=http://localhost:3000
VITE_AI_SERVICE_URL=http://localhost:3001
```

## 🛠️ Choix Techniques

- **React 18** : Bibliothèque UI avec hooks fonctionnels
- **TypeScript** : Typage statique pour la robustesse
- **Vite** : Build tool rapide et moderne
- **Axios** : Client HTTP pour les appels API
- **Architecture en couches** : Séparation logique UI / appels API
- **Composants fonctionnels** : Utilisation exclusive de hooks React

## 📁 Structure du Projet

```
src/
├── models/          # Interfaces TypeScript (Analyze, Historique)
├── repositories/    # Appels API HTTP (AnalyzeRepository, HistoriqueRepository)
├── services/        # Logique métier (AnalyzeService, HistoriqueService)
├── views/           # Composants React UI (AnalyzeForm, ScoreDisplay, HistoriqueList, ErrorDisplay)
├── config/          # Configuration API (URLs des services)
├── App.tsx          # Composant principal avec orchestration
└── main.tsx         # Point d'entrée React
```

## 🎨 Flux de Données

1. **View** (AnalyzeForm) → **Service** (AnalyzeService)
2. **Service** → **Repository** (AnalyzeRepository)
3. **Repository** → **API Backend**
4. **Réponse** → **Service** → **View** (ScoreDisplay + HistoriqueList)
