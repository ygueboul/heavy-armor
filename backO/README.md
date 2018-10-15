LDC (ligne de commande) : R�cup�rer sur GitHub le projet dans un r�pertoire

	git clone git://github.com/ygueboul/heavy-armor.git

Installer NodeJS

	https://nodejs.org/

Installer Composer

	https://getcomposer.org/download/

Installer PHP 7.2.4 et MySQL

	Si Windows

		Installer WAMPSERVER 3.0.6 ou sup�rieur : https://sourceforge.net/projects/wampserver/files/

		Rajouter dans le Path : C:\wamp64\bin\php\php7.2.4

		Lancer WAMPSERVER (pour MySQL)

	Si Linux

		D�brouillez-vous pour avoir PHP en ligne de commande et un serveur MySQL qui tourne :) !

LDC : dans le r�pertoire du projet, "Updater" Symfony

	composer update

LDC : Installer Doctrine (si la commande pr�c�dente ne l'a pas d�j� fait)

	composer require symfony/orm-pack
	composer require symfony/maker-bundle --dev

Editeur : Modifier le fichier /.env

	DATABASE_URL=mysql://login:pass@server:port/heavyarmor

	(remplacer login, pass et port par ceux de votre config MySQL)

LDC : Cr�ation de la BDD (apr�s avoir lanc� le serveur MySQL)

	php bin/console doctrine:database:create

LDC : Migration de la BDD

	php bin/console make:migration
	php bin/console doctrine:migrations:migrate

LDC : Lancement du serveur

	php bin/console server:run localhost:8000

Tester le site (v�rifier l'id du port)

	http://localhost:8000/

LDC : Installer Encore (pour JS et CSS)

	composer require encore

Installer Yarn :

	https://yarnpkg.com/

LDC : Installer Yarn pour le projet :

	yarn install

LDC : Installer le loader SASS

	yarn add sass-loader node-sass --dev

LDC : lancer le watcher SASS

	yarn run encore dev --watch

	(� chaque compilation, il cr�era les fichiers /public/build/css/style.css et /public/build/js/js.js)