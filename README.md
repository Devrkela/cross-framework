# Cross Framework
Ce projet a pour but d'expérimenter l'utilisation de différents framework Javascript au sein d'une même application. L'architecture mise en place est du type MVC avec une distinction entre, d'un côté la vue et les contrôleurs et les modèles de l'autre.

## Pré-requis

Ce projet utilise les Frameworks Vue, React et Svelte. Du côté de l'installation et du serveur de développement, la librairie Vite est utilisée. N'oubliez pas d'installer les paquets requis en effectuant la commande:
```bash
npm install
```

## Développement

Le dossier source s'appelle **src**.
Les dossiers ***react***, ***vue*** et ***svelte*** contiennent les composants de base de chaque Framework.
Les dossiers ***react+vue***, ***svelte+react*** et ***vue+svelte*** contiennent des exemples de combinaison de Framework.
Pour lancer le serveur de développement, effectuez la commande:
```bash
npm run dev
```

## Production

Le dossier **website** contient les ressources directement utilisées en production.
Pour lancer la fabrication des composants, effectuez la commande:
```bash
npm run build
```