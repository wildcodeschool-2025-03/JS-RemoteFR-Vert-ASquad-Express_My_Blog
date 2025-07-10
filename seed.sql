-- Catégories
INSERT INTO category (label) VALUES
('Culture'),
('Nature'),
('Gastronomie'),
('Histoire'),
('Aventure');

-- Pays
INSERT INTO country (name) VALUES
('France'),
('Italie'),
('Japon'),
('Brésil'),
('Canada');

-- Articles
INSERT INTO article (title, subtitle, summary, description, image_src, image_alt, rating, is_archived, visit_duration, country_id) VALUES
('Mont Saint-Michel', 'Un joyau normand', 'Visitez ce site emblématique au cœur de la Normandie.', 'Le Mont Saint-Michel est une île rocheuse célèbre pour son abbaye.', 'mont_saint_michel.jpg', 'Vue du Mont Saint-Michel', 5, false, '01:30:00', 1),
('Vignobles de Toscane', 'Entre vin et collines', 'Explorez les paysages vallonnés et les vignobles réputés.', 'La Toscane est une région d’Italie célèbre pour son vin.', 'toscane.jpg', 'Vignobles en Toscane', 4, false, '02:00:00', 2),
('Kyoto traditionnel', 'Temples et sérénité', 'Plongez dans la culture japonaise ancestrale.', 'Kyoto regorge de temples, jardins et traditions japonaises.', 'kyoto.jpg', 'Temple de Kyoto', 5, false, '01:45:00', 3),
('Amazonie sauvage', 'Une immersion verte', 'Partez à la découverte de la jungle amazonienne.', 'La forêt amazonienne est la plus vaste du monde.', 'amazonie.jpg', 'Forêt amazonienne', 5, false, '03:00:00', 4),
('Québec historique', 'Un héritage francophone', 'Revivez l’histoire coloniale à travers ses rues pavées.', 'Québec mêle culture française et nord-américaine.', 'quebec.jpg', 'Centre historique du Québec', 4, false, '01:20:00', 5),
('Tokyo moderne', 'La ville futuriste', 'Explorez les gratte-ciel et la culture pop japonaise.', 'Tokyo est une mégapole mêlant tradition et modernité.', 'tokyo.jpg', 'Vue de Tokyo de nuit', 4, false, '01:50:00', 3),
('Châteaux de la Loire', 'L’élégance française', 'Admirez l’architecture Renaissance dans la vallée de la Loire.', 'Les châteaux de la Loire racontent l’histoire de France.', 'loire.jpg', 'Château de Chambord', 5, false, '02:30:00', 1),
('Carnaval de Rio', 'Fête et couleurs', 'Plongez dans l’un des plus grands carnavals du monde.', 'Le Carnaval de Rio est une explosion de musique et danse.', 'rio.jpg', 'Défilé du carnaval de Rio', 5, false, '01:00:00', 4),
('Niagara Falls', 'Spectacle naturel', 'Admirez les célèbres chutes entre Canada et USA.', 'Les chutes du Niagara sont un site naturel impressionnant.', 'niagara.jpg', 'Chutes du Niagara', 4, false, '01:10:00', 5),
('Cuisine lyonnaise', 'Capitale de la gastronomie', 'Goûtez à la richesse culinaire de Lyon.', 'Lyon est reconnue pour ses bouchons et spécialités.', 'lyon.jpg', 'Plat lyonnais traditionnel', 5, false, '01:15:00', 1);

-- Catégories par article
INSERT INTO category_by_article (article_id, category_id) VALUES
(1, 1), (1, 4),
(2, 2), (2, 3),
(3, 1), (3, 4),
(4, 2), (4, 5),
(5, 1), (5, 4),
(6, 1), (6, 5),
(7, 1), (7, 4),
(8, 1), (8, 5),
(9, 2),
(10, 3), (10, 1);
