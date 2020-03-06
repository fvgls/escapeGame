-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 03, 2018 at 06:27 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `escape_game`
--

-- --------------------------------------------------------

--
-- Table structure for table `objet`
--

CREATE TABLE `objet` (
  `id` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `lng` float NOT NULL,
  `lat` float NOT NULL,
  `zoom` float NOT NULL,
  `tailleX` int(11) NOT NULL,
  `tailleY` int(11) NOT NULL,
  `ancreX` int(11) NOT NULL,
  `ancreY` int(11) NOT NULL,
  `indice` text NOT NULL,
  `needed` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `objet`
--

INSERT INTO `objet` (`id`, `type`, `nom`, `lng`, `lat`, `zoom`, `tailleX`, `tailleY`, `ancreX`, `ancreY`, `indice`, `needed`) VALUES
(1, 'objblocked', 'pingouin1', 6, 40, 2, 130, 70, 0, -5, '<p>On a faim, si tu veux ton indice résous notre énigme et ramène nous à manger !</p>\r\n<p><p>Mon premier n\'est pas le début,</p>\r\n<p>Mon second est le département le plus boisé de France métropolitaine,</p>\r\n<p>Au nord de mon tout, tu trouveras de quoi nous nourrir.</p></p>', 'worm'),
(2, 'stay', 'pingouin2', 6, 40, 2, 130, 100, 0, -30, 'Miam merci ! Tu trouveras peut-être ce que tu cherches en haut du volcan Eyjafjallajökull ;)', NULL),
(3, 'recuperable', 'worm', 27.9, 70.05, 8, 60, 60, 0, 0, '', NULL),
(4, 'codeblocked', 'coffre1', -19.6, 63.6, 9, 60, 60, 10, -20, '<p>Il te faut un code ! En quelle année suis-je rentré en eruption pour la dernière fois ?</p>\r\n\r\n<p><form id=\"code\"><select id=\"num1\"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option></select> <select id=\"num2\"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option></select> <select id=\"num3\"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option></select> <select id=\"num4\"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option></select>   <button type=\"button\" name=\"button\" id=\"envoi\" onclick=\"validation(this)\">Ok</button></form></p>\r\n\r\n<script src=\"code.js\"></script>\r\n\r\n<p>Les deux premiers chiffre sont connu par Mr. M., il est actuellement au ski sur l\'un des plus haut sommets de France.\r\nLes deux autres chiffres ont voyagé sur le Danube et devraient être arrivés dans la Mer Noire.</p>\r\n\r\n', '2010'),
(5, 'stay', 'coffre2', -19.6, 63.6, 9, 60, 60, 10, -25, '<p>Bravo tu as sauvé Marty !</p>\r\n\r\n<img src=\"img/Alex_Marty.png\" alt=\"photo de retrouvaille\" height=\"150px\">\r\n\r\n<p><form id=\"code\" action=last.html>\r\n<button type=\"submit\" name=\"button\" id=\"envoi\">Voir la table des scores</button></form></p>', NULL),
(6, 'stay', 'melman', 6.85, 45.84, 10, 120, 150, -20, -50, 'La première partie du code est 20.', NULL),
(7, 'stay', 'gloria', 30, 45.2, 8, 100, 150, -25, -65, 'La deuxième partie du code est 10.', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `score`
--

CREATE TABLE `score` (
  `idScore` int(11) NOT NULL,
  `pseudo` varchar(20) NOT NULL,
  `temps` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `score`
--

INSERT INTO `score` (`idScore`, `pseudo`, `temps`) VALUES
(1, 'TheBest', 68201),
(27, ' Oreo', 80374),
(36, ' King', 97567),
(37, ' Crocodile', 206253),
(38, ' Clown', 82505),
(39, ' Lulu', 29658),
(41, ' Pouet', 109427),
(44, ' unknown', 10264);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `objet`
--
ALTER TABLE `objet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`idScore`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `objet`
--
ALTER TABLE `objet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `score`
--
ALTER TABLE `score`
  MODIFY `idScore` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
