# ai-service

Service Express TypeScript avec une architecture en couches (model / repository / service / controller / route / middleware / utils), **mais avec un seul endpoint** :

- `GET /health`

## Démarrer

```bash
cd ai-service
npm install
npm run dev
```

Test :

```bash
curl http://localhost:3001/health
```

