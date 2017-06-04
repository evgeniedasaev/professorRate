-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Июн 04 2017 г., 22:57
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
(2, 640065, 2, '', '', '');

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

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `userType` int(1) UNSIGNED DEFAULT NULL,
  `type` varchar(256) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `login` varchar(100) DEFAULT NULL,
  `passwordCrypted` varchar(255) DEFAULT NULL,
  `yearStart` int(4) UNSIGNED DEFAULT NULL,
  `yearFinish` int(4) UNSIGNED DEFAULT NULL,
  `rate` float UNSIGNED DEFAULT NULL,
  `isPublished` tinyint(1) DEFAULT NULL,
  `meta` varchar(256) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `photo` varchar(256) DEFAULT NULL,
  `about` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `userType`, `type`, `title`, `login`, `passwordCrypted`, `yearStart`, `yearFinish`, `rate`, `isPublished`, `meta`, `password`, `photo`, `about`) VALUES
(640065, 1, 'user', 'Евгений Дасаев', 'djekoff@gmail.com', NULL, 0, 0, 0, NULL, '', '12345', '20160921_134344.jpg', '1234');

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
-- Индексы таблицы `user-courses`
--
ALTER TABLE `user-courses`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`);

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
-- AUTO_INCREMENT для таблицы `user-courses`
--
ALTER TABLE `user-courses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=640066;SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
