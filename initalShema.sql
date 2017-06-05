-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Июн 05 2017 г., 10:16
-- Версия сервера: 5.7.18-0ubuntu0.16.04.1
-- Версия PHP: 7.0.18-1+deb.sury.org~xenial+1

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `jackenstein_rateProfessor`
--

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `rate` int(1) UNSIGNED DEFAULT NULL,
  `comment` text,
  `userId` int(10) UNSIGNED DEFAULT NULL,
  `authorId` int(10) UNSIGNED DEFAULT NULL,
  `isPublished` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Триггеры `comments`
--
DROP TRIGGER IF EXISTS `before_insert_comments`;
DELIMITER $$
CREATE TRIGGER `before_insert_comments` BEFORE INSERT ON `comments` FOR EACH ROW SET new.id = uuid()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `courses`
--

DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `isPublished` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `courses`
--

INSERT INTO `courses` (`id`, `title`, `isPublished`) VALUES
(1, 'Современные проблемы информатики и вычислительной техники', 1),
(2, 'Автоматизированные информационные системы в экономике', 1),
(3, 'Информационные технологии управления', 1);

--
-- Триггеры `courses`
--
DROP TRIGGER IF EXISTS `before_insert_courses`;
DELIMITER $$
CREATE TRIGGER `before_insert_courses` BEFORE INSERT ON `courses` FOR EACH ROW SET new.id = uuid()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `run_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `user-comments`
--

DROP TABLE IF EXISTS `user-comments`;
CREATE TABLE `user-comments` (
  `id` int(11) NOT NULL,
  `userId` varchar(256) DEFAULT NULL,
  `commentId` varchar(256) DEFAULT NULL,
  `uid` varchar(256) DEFAULT NULL,
  `type` varchar(256) DEFAULT NULL,
  `meta` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Триггеры `user-comments`
--
DROP TRIGGER IF EXISTS `before_insert_user_comments`;
DELIMITER $$
CREATE TRIGGER `before_insert_user_comments` BEFORE INSERT ON `user-comments` FOR EACH ROW SET new.id = uuid()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `user-courses`
--

DROP TABLE IF EXISTS `user-courses`;
CREATE TABLE `user-courses` (
  `id` int(10) UNSIGNED NOT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL,
  `courseId` int(10) UNSIGNED DEFAULT NULL,
  `uid` varchar(256) DEFAULT NULL,
  `type` varchar(256) DEFAULT NULL,
  `meta` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user-courses`
--

INSERT INTO `user-courses` (`id`, `userId`, `courseId`, `uid`, `type`, `meta`) VALUES
(1, 640065, 1, '', '', ''),
(2, 640065, 2, '', '', ''),
(3, 640066, 1, NULL, NULL, NULL),
(4, 640066, 2, NULL, NULL, NULL),
(8, 640067, 1, NULL, NULL, NULL),
(9, 640067, 2, NULL, NULL, NULL),
(30847, 0, 1, NULL, NULL, NULL),
(30848, 0, 2, NULL, NULL, NULL),
(30849, 0, 1, NULL, NULL, NULL),
(30850, 0, 1, NULL, NULL, NULL),
(30851, 0, 2, NULL, NULL, NULL);

--
-- Триггеры `user-courses`
--
DROP TRIGGER IF EXISTS `before_insert_user_courses`;
DELIMITER $$
CREATE TRIGGER `before_insert_user_courses` BEFORE INSERT ON `user-courses` FOR EACH ROW SET new.id = uuid()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `user-createdComments`
--

DROP TABLE IF EXISTS `user-createdComments`;
CREATE TABLE `user-createdComments` (
  `id` int(11) NOT NULL,
  `userId` varchar(256) DEFAULT NULL,
  `commentId` varchar(256) DEFAULT NULL,
  `uid` varchar(256) DEFAULT NULL,
  `meta` varchar(256) DEFAULT NULL,
  `type` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Триггеры `user-createdComments`
--
DROP TRIGGER IF EXISTS `before_insert_user_createdComments`;
DELIMITER $$
CREATE TRIGGER `before_insert_user_createdComments` BEFORE INSERT ON `user-createdComments` FOR EACH ROW SET new.id = uuid()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` varchar(40) NOT NULL,
  `userType` int(1) UNSIGNED NOT NULL DEFAULT '1',
  `type` varchar(256) NOT NULL DEFAULT 'user',
  `title` varchar(255) NOT NULL DEFAULT '""',
  `login` varchar(100) NOT NULL DEFAULT '""',
  `yearStart` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `yearFinish` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `rate` float UNSIGNED NOT NULL DEFAULT '0',
  `isPublished` tinyint(1) NOT NULL DEFAULT '1',
  `meta` varchar(256) DEFAULT NULL,
  `password` varchar(256) NOT NULL DEFAULT '""',
  `photo` varchar(256) NOT NULL DEFAULT '""',
  `about` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `userType`, `type`, `title`, `login`, `yearStart`, `yearFinish`, `rate`, `isPublished`, `meta`, `password`, `photo`, `about`) VALUES
('0dbc1fde-49be-11e7-917e-78929c9590fa', 1, 'user', 'Евгениц', '', 190, 190, 4, 1, NULL, '', '', ''),
('3083f7f6-4969-11e7-917e-78929c9590fa', 1, 'user', 'Николай Афанасиевич Оц', '', 0, 0, 4.5, 1, NULL, '12345', '', ''),
('c0ae769b-4969-11e7-917e-78929c9590fa', 1, 'user', 'Петр', '', 0, 0, 4, 1, NULL, '', '', ''),
('e996342f-49bb-11e7-917e-78929c9590fa', 1, 'user', 'Евгений', '', 190, 190, 4, 1, NULL, '', '', ''),
('efe6cc84-4968-11e7-917e-78929c9590fa', 2, 'user', 'Анастасия Тулина', 'tulina', 0, 0, 0, 1, NULL, '12345', '', '');

--
-- Триггеры `users`
--
DROP TRIGGER IF EXISTS `before_insert_mytable`;
DELIMITER $$
CREATE TRIGGER `before_insert_mytable` BEFORE INSERT ON `users` FOR EACH ROW SET new.id = uuid()
$$
DELIMITER ;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user-comments`
--
ALTER TABLE `user-comments`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user-courses`
--
ALTER TABLE `user-courses`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user-createdComments`
--
ALTER TABLE `user-createdComments`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `user-comments`
--
ALTER TABLE `user-comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `user-courses`
--
ALTER TABLE `user-courses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30852;
--
-- AUTO_INCREMENT для таблицы `user-createdComments`
--
ALTER TABLE `user-createdComments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
