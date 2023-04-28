# La Tour des Héros

![accueil La Tour des Héros](/src/assets/Capture.PNG)

## Introduction

Cette appli à été conçu pour but de prendre en main AngularJS en veillant à respecter les règles du W3C.

Nous affichons une liste d'héros et des détails le concernant.

## Build

Installer les modules de l'application (CLI):

    npm install

## Run Demo

Lancer l'application
    
    npx ng serve

Une erreur du type 'ERR_OSSL_EVP_UNSUPPORTED' peut être générer par Angular.

![Erreur ERR_OSSL_EVP_UNSUPPORTED](/src/assets/Capture2.PNG)

Pour le résoudre éxécuter la ligne de commande:
    
Windows

    set NODE_OPTIONS=--openssl-legacy-provider

Linux / Mac

    export NODE_OPTIONS=--openssl-legacy-provider


Explication du problème : [ERR_OSSL_EVP_UNSUPPORTED](https://levelup.gitconnected.com/how-to-fix-the-err-ossl-evp-unsupported-error-in-node-js-197082f42185)
