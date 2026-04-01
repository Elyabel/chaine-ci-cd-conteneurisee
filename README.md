````markdown
# VitalSync

## Description
VitalSync est une application de suivi médical et sportif.  
Architecture : frontend React servie par Nginx, backend Node.js/Express, base de données PostgreSQL.

## Prérequis
- Docker ≥ 20
- Docker Compose ≥ 2.15
- Node.js ≥ 20 (pour développement local)
- Git

## Lancement en local

1. Copier le fichier `.env.example` en `.env` et remplir les variables sensibles.
2. Lancer Docker Compose :
```bash
docker-compose up --build
````

3. Accéder à l’application :

```
http://localhost:8080
```

## Pipeline CI/CD

* **Lint & Tests** : installation dépendances backend, exécution Jest, ESLint.
* **Build Docker** : construction des images backend et frontend, tag par SHA commit, push vers Docker Hub.
* **Déploiement staging** : docker-compose déployé localement, health check backend.

Secrets et déclencheurs configurés sur la plateforme CI pour éviter stockage en clair.

## Choix techniques

* Docker multi-stage build backend → image légère et sécurisée.
* Node:20-alpine → légère et compatible production.
* Nginx pour frontend → stable et performant.
* Bridge réseau personnalisé → isolation des conteneurs.
* Volume persistant PostgreSQL → sauvegarde des données même après `docker-compose down`.
