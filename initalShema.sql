-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Июн 07 2017 г., 12:58
-- Версия сервера: 5.7.18-0ubuntu0.16.04.1
-- Версия PHP: 7.0.18-1+deb.sury.org~xenial+1

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- База данных: `jackenstein_rateProfessor`
--

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL DEFAULT 'comment',
  `meta` text,
  `rate` int(10) NOT NULL DEFAULT '0',
  `comment` text NOT NULL,
  `authorName` varchar(256) NOT NULL DEFAULT '""',
  `isPublished` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `comments`
--

INSERT INTO `comments` (`id`, `type`, `meta`, `rate`, `comment`, `authorName`, `isPublished`) VALUES
('c5bf5d06-43cf-47a2-9521-3a768d49dfde', 'comment', '', 3, 'Его чувство юмора иногда доводит нас до слез. Обещание Аркадия Владимировича отправить одну из нас вслед за Майклом Джексоном почти было приведено в исполнение, а система «черных шаров» просто неподражаема.', 'Андрей Сорокин', 1),
('ec59aa50-f16a-4c67-a28c-92c1be7c05be', 'comment', '', 4, 'Я восхищаюсь этим человеком: безо всяких пометок читать лекции — это ВАУ, цитировать наизусть произведения классиков, по-детски смущаться, если вдруг забыл строчку, — это мило. Это наилучший пример классического, фундаментального образования!', 'Андрей Сорокин', 1);

--
-- Триггеры `comments`
--
DROP TRIGGER IF EXISTS `before_insert_comments`;
DELIMITER $$
CREATE TRIGGER `before_insert_comments` BEFORE INSERT ON `comments` FOR EACH ROW if new.`id` IS NULL or new.`id` = '' then
	set new.`id` = uuid();
end if
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `courses`
--

DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL DEFAULT 'course',
  `meta` text,
  `title` varchar(256) NOT NULL DEFAULT '""',
  `isPublished` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `courses`
--

INSERT INTO `courses` (`id`, `type`, `meta`, `title`, `isPublished`) VALUES
('1b92daf6-4a02-11e7-917e-78929c9590fa', 'course', '', 'Разработка интерфейсов', 1),
('81b820ef-49f3-11e7-917e-78929c9590fa', 'course', '', '	 Архитектура вычислительных систем', 1),
('895f012a-49f3-11e7-917e-78929c9590fa', 'course', '', 'Бaзы данных', 1),
('8c745cfb-49f3-11e7-917e-78929c9590fa', 'course', '', 'Введение в программную инженерию', 1),
('9094d1e7-49f3-11e7-917e-78929c9590fa', 'course', '', 'Защита информации', 1),
('9422e59e-49f3-11e7-917e-78929c9590fa', 'course', '', 'Информационное общество и проблемы прикладной информатики', 1);

--
-- Триггеры `courses`
--
DROP TRIGGER IF EXISTS `before_insert_courses`;
DELIMITER $$
CREATE TRIGGER `before_insert_courses` BEFORE INSERT ON `courses` FOR EACH ROW if new.`id` IS NULL or new.`id` = '' then
	set new.`id` = uuid();
end if
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `user-comments`
--

DROP TABLE IF EXISTS `user-comments`;
CREATE TABLE `user-comments` (
  `uid` varchar(50) NOT NULL DEFAULT '',
  `id` varchar(50) NOT NULL DEFAULT '""',
  `userId` varchar(50) NOT NULL DEFAULT '""',
  `type` varchar(256) NOT NULL DEFAULT 'comment',
  `meta` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user-comments`
--

INSERT INTO `user-comments` (`uid`, `id`, `userId`, `type`, `meta`) VALUES
('f7810124-4a13-11e7-917e-78929c9590fa', 'c5bf5d06-43cf-47a2-9521-3a768d49dfde', '2901ce4a-49f5-11e7-917e-78929c9590fa', 'comment', ''),
('f781ed21-4a13-11e7-917e-78929c9590fa', 'ec59aa50-f16a-4c67-a28c-92c1be7c05be', '2901ce4a-49f5-11e7-917e-78929c9590fa', 'comment', '');

--
-- Триггеры `user-comments`
--
DROP TRIGGER IF EXISTS `before_insert_user_comments`;
DELIMITER $$
CREATE TRIGGER `before_insert_user_comments` BEFORE INSERT ON `user-comments` FOR EACH ROW if new.`uid` IS NULL or new.`uid` = '' then
	set new.`uid` = uuid();
end if
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `user-courses`
--

DROP TABLE IF EXISTS `user-courses`;
CREATE TABLE `user-courses` (
  `uid` varchar(50) NOT NULL DEFAULT '',
  `id` varchar(50) NOT NULL DEFAULT '""',
  `type` varchar(256) NOT NULL DEFAULT 'course',
  `meta` text,
  `userId` varchar(50) NOT NULL DEFAULT '""'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user-courses`
--

INSERT INTO `user-courses` (`uid`, `id`, `type`, `meta`, `userId`) VALUES
('f77db41c-4a13-11e7-917e-78929c9590fa', '81b820ef-49f3-11e7-917e-78929c9590fa', 'course', '', '2901ce4a-49f5-11e7-917e-78929c9590fa'),
('f77f073d-4a13-11e7-917e-78929c9590fa', '895f012a-49f3-11e7-917e-78929c9590fa', 'course', '', '2901ce4a-49f5-11e7-917e-78929c9590fa'),
('f7803be6-4a13-11e7-917e-78929c9590fa', '8c745cfb-49f3-11e7-917e-78929c9590fa', 'course', '', '2901ce4a-49f5-11e7-917e-78929c9590fa');

--
-- Триггеры `user-courses`
--
DROP TRIGGER IF EXISTS `before_insert_user_courses`;
DELIMITER $$
CREATE TRIGGER `before_insert_user_courses` BEFORE INSERT ON `user-courses` FOR EACH ROW if new.`uid` IS NULL or new.`uid` = '' then
	set new.`uid` = uuid();
end if
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `user-createdComments`
--

DROP TABLE IF EXISTS `user-createdComments`;
CREATE TABLE `user-createdComments` (
  `uid` varchar(50) NOT NULL DEFAULT '',
  `id` varchar(50) NOT NULL DEFAULT '""',
  `type` varchar(256) NOT NULL DEFAULT 'comment',
  `meta` text,
  `userId` varchar(50) NOT NULL DEFAULT '""'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user-createdComments`
--

INSERT INTO `user-createdComments` (`uid`, `id`, `type`, `meta`, `userId`) VALUES
('f77608a7-4a13-11e7-917e-78929c9590fa', 'c5bf5d06-43cf-47a2-9521-3a768d49dfde', 'comment', '', '73450b95-c29d-439f-b74b-e1511dde29f2'),
('f7762415-4a13-11e7-917e-78929c9590fa', 'ec59aa50-f16a-4c67-a28c-92c1be7c05be', 'comment', '', '73450b95-c29d-439f-b74b-e1511dde29f2');

--
-- Триггеры `user-createdComments`
--
DROP TRIGGER IF EXISTS `before_insert_user_createdComments`;
DELIMITER $$
CREATE TRIGGER `before_insert_user_createdComments` BEFORE INSERT ON `user-createdComments` FOR EACH ROW if new.`uid` IS NULL or new.`uid` = '' then
	set new.`uid` = uuid();
end if
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL DEFAULT 'user',
  `meta` text,
  `userType` int(10) UNSIGNED NOT NULL DEFAULT '1',
  `login` varchar(256) NOT NULL DEFAULT '""',
  `password` varchar(256) NOT NULL DEFAULT '""',
  `title` varchar(256) NOT NULL DEFAULT '""',
  `photo` varchar(256) NOT NULL DEFAULT '""',
  `about` text NOT NULL,
  `yearStart` int(10) NOT NULL DEFAULT '0',
  `yearFinish` int(10) NOT NULL DEFAULT '0',
  `rate` double NOT NULL DEFAULT '0',
  `isPublished` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `type`, `meta`, `userType`, `login`, `password`, `title`, `photo`, `about`, `yearStart`, `yearFinish`, `rate`, `isPublished`) VALUES
('2901ce4a-49f5-11e7-917e-78929c9590fa', 'user', '', 1, '', '12345', 'Николай Александрович Оц', 'Menachem-Cohen-5.jpg', '', 1900, 1900, 5, 1),
('73450b95-c29d-439f-b74b-e1511dde29f2', 'user', '', 2, 'hellbass@gmail.com', '12345', 'Андрей Сорокин', '""', '', 0, 0, 0, 1),
('a7a800ef-49fe-11e7-917e-78929c9590fa', 'user', '', 2, 'blackhover@gmail.com', '12345', 'Евгений Дасаев', '""', '', 0, 0, 0, 1),
('bd2bdb74-49f3-11e7-917e-78929c9590fa', 'user', '', 2, 'tulina@gmail.com', '12345', 'Анастасия Тулина', '', '', 1901, 1902, 5, 1),
('d303aaec-8be7-4d11-8bb0-34457ec9b04a', 'user', '', 2, 'blackhover@gmail.com', '12345', 'Иван Дьяченко', '""', '', 0, 0, 0, 1),
('e35fb48d-49fc-11e7-917e-78929c9590fa', 'user', '', 1, 'djekoff@gmail.com', '12345', 'Евгений Дасаев', '""', '', 0, 0, 0, 1);

--
-- Триггеры `users`
--
DROP TRIGGER IF EXISTS `before_insert_users`;
DELIMITER $$
CREATE TRIGGER `before_insert_users` BEFORE INSERT ON `users` FOR EACH ROW if new.`id` IS NULL or new.`id` = '' then
	set new.`id` = uuid();
end if
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
-- Индексы таблицы `user-comments`
--
ALTER TABLE `user-comments`
  ADD PRIMARY KEY (`uid`);

--
-- Индексы таблицы `user-courses`
--
ALTER TABLE `user-courses`
  ADD PRIMARY KEY (`uid`);

--
-- Индексы таблицы `user-createdComments`
--
ALTER TABLE `user-createdComments`
  ADD PRIMARY KEY (`uid`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;
