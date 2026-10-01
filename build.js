/**
  Nous importons les librairies permettant de fabriquer les actifs.
**/

import   fs      from "node:fs";
import { build } from 'vite';

/**
  Ensuite, nous importons les librairies
  permettant d'interpréter les syntaxes des frameworks.
**/
import   react    from '@vitejs/plugin-react';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import   vue      from '@vitejs/plugin-vue';

/**
  Nous définissons par la suite un alias
  représentant le chemin racine du projet.
**/
const root = import.meta.dirname;

/**
  Nous créons deux objets vides
  qui contiendront les informations de configuration et de fabrication des actifs.
**/
const config  = {};
const builder = {};

/**
  Nous configurons d'abord la page avec le framework React.
**/
config.react  = {
  rolldownOptions:{
    input:"index.html",
    output:{
      assetFileNames: "[name].[ext]",
      chunkFileNames: "[name].js",
      entryFileNames: "[name].js",
    }
  },
  external:    root + "/common/style.css",
  emptyOutDir: true,
  outDir:      root + "/website/react/"
};

/**
  Nous réutilisions la configuration de la page React
  pour les autres pages.
**/
config.svelte          = {};
config.vue             = {};
config["react+vue"]    = {};
config["svelte+react"] = {};
config["vue+svelte"]   = {};

Object.assign(config.svelte         , config.react);
Object.assign(config.vue            , config.react);
Object.assign(config["react+vue"]   , config.react);
Object.assign(config["svelte+react"], config.react);
Object.assign(config["vue+svelte"]  , config.react);


/**
  Nous modifions les dossiers de sortie pour chaque configuration.
**/
config.svelte.outDir          = root + "/website/svelte/";
config.vue.outDir             = root + "/website/vue/";
config["react+vue"].outDir    = root + "/website/react+vue";
config["svelte+react"].outDir = root + "/website/svelte+react";
config["vue+svelte"].outDir   = root + "/website/vue+svelte";


/**
  Nous définissons ensuite les information de construction
  pour chaque page.
**/
builder.react  = {
  base:    "./",
  build:   config.react,
  plugins: [react()],
  root:    root + "/src/react/"
};

builder.svelte = {
  base:    "./",
  build:   config.svelte,
  plugins: [svelte({configFile: root + "/svelte.config.js"})],
  root:    root + "/src/svelte/"
};

builder.vue    = {
  base:    "./",
  build:   config.vue,
  plugins: [vue()],
  root:    root + "/src/vue/",
};

builder["react+vue"]  = {
  base:    "./",
  build:   config["react+vue"],
  plugins: [react(), vue()],
  root:    root + "/src/react+vue/"
};

builder["svelte+react"]  = {
  base:    "./",
  build:   config["svelte+react"],
  plugins: [svelte({configFile: root + "/svelte.config.js"}), react()],
  root:    root + "/src/svelte+react/"
};

builder["vue+svelte"]  = {
  base:    "./",
  build:   config["vue+svelte"],
  plugins: [vue(), svelte({configFile: root + "/svelte.config.js"})],
  root:    root + "/src/vue+svelte/"
};

/**
  Nous construisons les différentes pages.
**/
await build(builder.react );
await build(builder.svelte);
await build(builder.vue   );
await build(builder["react+vue"]);
await build(builder["svelte+react"]);
await build(builder["vue+svelte"]);


/**
  Enfin, nous copions les actifs qui n'ont pas besoin d'être construit
  par Vite.
**/
fs.cpSync(root + "/src/common/icons"    , root + "/website/common/icons"    , {recursive: true});
fs.cpSync(root + "/src/common/style.css", root + "/website/common/style.css", {recursive: true});