EcoVente -> Site de fin d'année : 

Items de recherche : 

-> Mode & Accesoires : 
			-> Vêtements (Homme, Femme, Enfant, Bébé)
			-> Chaussures
			-> Sacs & Maroquinerie
			-> Bijoux & Montres
			-> Lunettes de Soleil
			-> Accessoires de Mode
-> Eléctronique & high-tech  : 
			-> Smartphones & Tablettes
			-> Ordinateurs & Périphériques
			-> Télévisions & Home Cinema
			-> Consoles & Jeux Vidéo
			-> Appareils Photo & Caméras
			-> Audio & Casques
-> Maison & déco : 
			-> Meubles
			-> Décoration d'intérieur
			-> Luminaires
			-> Arts de la Table
			-> Textiles (rideaux, tapis, etc.)
			-> Rangements
-> Electromenager :
			-> Gros Électroménager (Réfrigérateurs, 
			Machines à laver, etc.)
			-> Petit Électroménager (Aspirateurs, Mixeurs, etc.)
			-> Climatiseurs & Chauffages
			-> Cafetières & Machines à café
-> Bricolage & Jardinage :
			-> Outils & Matériel de Bricolage
			-> Mobilier de Jardin
			-> Équipement de Jardinage 
			(Tondeuses, Tracteurs, etc.)
			-> Décoration extérieure (Plantes, Pots, etc.)
			-> Construction & Rénovation 
			(Peintures, matériaux, etc.)
-> Loisirs & sports :
			-> Matériel de Sport (Vélos, Tapis de course, etc.)
			-> Sports d'équipe (Football, Basket, etc.)
			-> Sports de glisse (Skateboards, Snowboards, etc.)
			-> Musique & Instruments (Guitares, Pianos, etc.)
			-> Livres & BD
			-> Films & Séries
			-> Jeux de Société
-> Véhicule :
			-> Voitures
			-> Motos & Scooters
			-> Vélos & Trottinettes
			-> Pièces détachées & Accessoires
			-> Équipement Auto (GPS, Housses, etc.)
			-> Campings-cars & Caravans
-> Bébé & enfants :
			-> Vêtements Bébé & Enfant
			-> Jouets & Jeux éducatifs
			-> Poussettes & Sièges auto
			-> Matériel de puériculture 
			(Chaises hautes, berceaux, etc.)
			-> Livres & Décoration pour enfants
-> Animaux :
			-> Accessoires pour Animaux (Litières, Cages, etc.)
			-> Nourriture 
			-> Soins
			-> Jouets pour Animaux
			-> Vêtements pour Animaux
			-> Équipement d'entraînement (laisses, harnais, etc.)
-> Beauté & bien-être :
			-> Produits de soin (Soins du visage, du corps)
			-> Maquillage & Cosmétique
			-> Parfums
			-> Équipements de bien-être (massages, appareils, etc.)
			-> Coiffure (Sèche-cheveux, Lisseurs, etc.)	
-> Livre, musique & Films :
			-> Livres & BD d'occasion
			-> CD, Vinyles
			-> DVD & Blu-ray
			-> Instruments de Musique
-> Jeux & jouets :
			-> Jeux vidéo & Consoles
			-> Jeux de société & puzzles
			-> Jouets
			-> Modélisme & Maquettes
-> Collectibles & Arts :
			-> Antiquités
			-> Objets de Collection (Timbres, Monnaies, etc.)
			-> Peintures & Sculptures
			-> Figurines, Modèles réduits
			-> Posters & Photographies
-> Services :
			-> Cours & Leçons (Musique, Sport, Soutien scolaire)
			-> Services à la personne (Ménage, Jardinage, etc.)
			-> Réparations & Dépannage
			-> Livraisons & Déménagements
-> Informatique & bureautique :
			-> Ordinateurs portables & de bureau 
			-> Imprimantes & Scanners
			-> Accessoires de Bureau (Chaises, Étagères, etc.)
			-> Équipements réseau & Périphériques (claviers, souris, etc.)
-> Voyages & Loisirs :
			-> Bagages & Valises
			-> Matériel de camping (tentes, sacs de couchage, etc.)
			-> Équipements de randonnée
			-> Accessoires de voyage

----------------------------------------------------------------------------------------------

Base de donnée : 

-> User : 
	-> id (int)
   -> sexe (string)
   -> firstName (string)
   -> lastName  (string)
   -> phone (int)
   -> e-mail (string)
   -> password (string)
   -> birthDate (dateImmutable)
   -> city (string)
   -> country (string)
   -> picture (string)
   -> createdAt (dateImmutable)
   -> updatedAt (dateImmutable)
   -> deletedAt (dateImmutable)

-> Categorie : 
   -> id (int)
   -> category_id (int)
   -> category_name (string)
   -> createdAt(datetime)
   -> deletedAt (datetime)

-> Product     
	-> id (int)
   -> product_id (int)	
   -> user_id (int)
   -> category_id	(int)
   -> title (varchar)	
   -> description (varchar)
   -> price (float)	
   -> condition (varchar)
   -> image_url (varchar)	
   -> created_at (datetime)	
   -> updated_at (datetime)	
	
-> Product-Image :
	-> id (int)
	-> image_id (int)
	-> product_id (int)
	-> image_url (varchar)

-> Transaction : 
	-> id (int)
   -> buyerId (int)
   -> sellerId (int)
   -> productId (int)
   -> price (int)
   -> status(string)
   -> transactionDate (dateImmutable)
   -> createdAt (dateImmutable)

-> Message : 
	-> id (int)
   -> senderId (int)
   -> receiverId (int)
   -> productId (int)
   -> content (string)
   -> createdAt (dateImmutable)
   -> updatedAt (dateImmutable)
   -> deletedAt (dateImmutable)

-> Favorite : 
	-> id (int)
	-> favorite_id(int)
	-> user_id (int)
	-> product_id (varchar)


-> Notificatation : 
	-> id (int)
	-> notification_id (int)
	-> user_id (int)
	-> title (varchar)
	-> content (varchar)
	-> isRead (booléin)
   -> createdAt (dateImmutable)
   -> deletedAt (dateImmutable)