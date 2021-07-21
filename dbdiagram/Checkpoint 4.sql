DROP DATABASE IF EXISTS portefolio ;
CREATE DATABASE portefolio ;
USE portefolio;


CREATE TABLE `Projects` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(128),
  `language` varchar(128),
  `description` varchar(255),
  `site_url` varchar(255),
  `gitHub_url` varchar(255)
);

INSERT INTO `Projects` (`id`, `title`, `language`, `description`, `site_url`, `gitHub_url`) VALUES
(1, 'TocToc', 'React.js - Node.js - Material-ui.js', 'MarketPlace facilitant la relation entre propriétaire et locataire', 'https://source.unsplash.com/N04FIfHhv_k', 'https://github.com/NicolasGeneste/bdx-naca'),
(2, 'Jardin Botanique', 'HTML5 - CSS3 - JavaScript', 'Revaloriser le jardin botanique', 'https://source.unsplash.com/hjzs2nA4y-k', 'https://github.com/calsuoile/Project-1---Jardin-Botanique'),
(3, 'LabelIt', 'React.js - Node.js', 'Labeliser des images afin de perfectionner une intelligence artificielle en gamifiant loool', 'https://source.unsplash.com/tG36rvCeqng', 'https://gitlab.com/labelit/front');


CREATE TABLE `Message` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` varchar(128),
  `lastname` varchar(128),
  `email` varchar(128),
  `phone` int(128),
  `object` varchar(128),
  `message` varchar(255)
);


