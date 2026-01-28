# Architecture Microservices - Test Fullstack

Projet démontrant une architecture microservices avec Node.js TypeScript, où chaque service est **complètement isolé** et peut être déployé indépendamment.

## 🏗️ Architecture

```
test-fullstask/
├── backend-starter/     # Service principal (Monolithe modulaire)
│   └── Port: 3000
│
└── ai-service/          # Microservice IA (Isolé)
    └── Port: 3001
```

### Principe de Séparation

- **backend-starter** : Service principal avec logique métier classique (Users, etc.)
- **ai-service** : Microservice dédié à l'IA, complètement indépendant
- **Communication** : HTTP REST entre les services

## 🚀 Démarrage Rapide

### 1. Service Principal

```bash
cd backend-starter
npm install
npm run dev
```

Le service démarre sur `http://localhost:3000`

### 2. Microservice IA

```bash
cd ai-service
npm install
npm run dev
```

Le service démarre sur `http://localhost:3001`

## 📡 Communication Inter-Services

Le service principal peut appeler le microservice IA via le client HTTP :

```typescript
import { AiServiceClient } from './clients/AiServiceClient';

const aiClient = new AiServiceClient('http://localhost:3001');
const sentiment = await aiClient.analyzeSentiment("Great!");
```

## 🎯 Avantages de cette Architecture

### ✅ Isolation Complète
- Chaque service a sa propre base de données (virtuelle pour l'instant)
- Déploiement indépendant
- Scaling indépendant
- Équipes différentes peuvent travailler sur chaque service

### ✅ Séparation des Responsabilités
- **backend-starter** : Gestion des utilisateurs, logique métier classique
- **ai-service** : Traitement IA, analyse de texte, prédictions

### ✅ Évolutivité
- Le service IA peut être remplacé sans impacter le service principal
- Facile d'ajouter de nouveaux microservices
- Chaque service peut utiliser des technologies différentes

## 🔄 Workflow de Développement

### Développement Local

1. **Terminal 1** - Service Principal :
```bash
cd backend-starter
npm run dev
```

2. **Terminal 2** - Microservice IA :
```bash
cd ai-service
npm run dev
```

### Test de Communication

```bash
# Tester le service IA directement
curl -X POST http://localhost:3001/api/analysis/sentiment \
  -H "Content-Type: application/json" \
  -d '{"text": "I love this!"}'

# Tester le service principal
curl http://localhost:3000/api/users
```

## 📦 Structure des Services

### backend-starter
- Clean Architecture en couches
- Gestion des utilisateurs
- Client HTTP pour appeler le service IA
- Port : 3000

### ai-service
- Clean Architecture en couches
- Analyse de sentiment
- Classification de texte
- Extraction d'entités
- Port : 3001

## 🔧 Configuration

### Variables d'Environnement

**backend-starter/.env** :
```env
PORT=3000
NODE_ENV=development
LOG_LEVEL=INFO
AI_SERVICE_URL=http://localhost:3001
```

**ai-service/.env** :
```env
AI_SERVICE_PORT=3001
NODE_ENV=development
LOG_LEVEL=INFO
```

## 🧪 Exemple d'Utilisation

### 1. Créer un utilisateur dans le service principal
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "name": "John Doe"}'
```

### 2. Analyser le sentiment d'un texte via le service IA
```bash
curl -X POST http://localhost:3001/api/analysis/sentiment \
  -H "Content-Type: application/json" \
  -d '{"text": "This product is amazing!"}'
```

### 3. Le service principal peut appeler le service IA
Voir `backend-starter/src/clients/AiServiceClient.ts` pour l'implémentation.

## 🎓 Concepts Clés

### Microservice vs Monolithe Modulaire

**Monolithe Modulaire** (backend-starter) :
- Tout dans un seul processus
- Communication directe entre modules
- Déploiement unique

**Microservice** (ai-service) :
- Processus séparé
- Communication via réseau (HTTP)
- Déploiement indépendant

### Pourquoi cette Architecture ?

1. **Isolation** : Le service IA peut évoluer sans impacter le service principal
2. **Scalabilité** : On peut scaler le service IA indépendamment (plus de charge IA)
3. **Technologies** : Chaque service peut utiliser des technologies différentes
4. **Équipes** : Équipes différentes peuvent travailler sur chaque service

## 🔮 Évolutions Possibles

### Court Terme
- Ajouter une vraie base de données pour chaque service
- Ajouter l'authentification entre services
- Ajouter le logging centralisé

### Moyen Terme
- Ajouter un API Gateway
- Ajouter Service Discovery (Consul, Eureka)
- Ajouter un Message Queue (RabbitMQ, Kafka)

### Long Terme
- Containerisation (Docker)
- Orchestration (Kubernetes)
- Monitoring (Prometheus, Grafana)
- Tracing distribué (Jaeger, Zipkin)

## 📚 Documentation

- [backend-starter README](./backend-starter/README.md)
- [ai-service README](./ai-service/README.md)

## 📄 Licence

ISC
