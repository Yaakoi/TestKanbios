# TestKanbios

Pour démarrer le projet dans un environnement avec Docker installé :

**`docker-compose up -d --build`**

Cette commande créer 3 containers :

- client
- server
- mongo

Pour lancer le script python permettant d'insérer les données de "data.csv", il vous faut pymongo :

**`sudo pip install pymongo`**

Et lancer le script : 

**`python3 csvToMongo.py`**

Si le script indique que le module pymongo est toujours inconnu, il faut donner son chemin via la variable d'environnement "PYTHONPATH" :

1- Trouver le chemin :

**`sudo pip show pymongo`**

2- Indiquer le chemin (exemple sous linux) :

**`export PYTHONPATH=$PYTHONPATH:/usr/local/lib/python3.8/dist-packages/`**

Le script va générer un fichier JSON et importer les données dans la collection "employees" de la base Mongo.

L'application est maintenant accessible : http://localhost:3000

Une fois connecté, le tableau des employés est accessible via le bouton "Employés" sur le dashboard ou directement via le chemin : http://localhost:3000/employees

NOTES : 
- Sur la partie server, j'ai réalisé l'ensemble des appels API CRUD pour les employés. Mais je n'ai utilisé que l'appel permettant de récupérer la liste entière des employés au niveau du client.
- Pour le script, j'ai transformé le .xls en .csv que j'ai directement ajouté au repo pour faciliter le test de l'application après le git clone. 

Problèmes rencontrés :
- J'ai rencontré un problème lorsque j'ai voulu faire le système de chargement au niveau du client, je n'ai pas réussi à utiliser Redux correctement pour mettre à jour un state "loading" et me baser dessus pour le rendu de ma page "employees". J'ai donc trouvé une solution alternative.
- Les scripts python d'insertion de données ne fonctionnent potentiellement pas sur tous les environnements
