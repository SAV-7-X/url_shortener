-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2024 at 07:44 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `url_shortener`
--

-- --------------------------------------------------------

--
-- Table structure for table `urls`
--

CREATE TABLE `urls` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `short_code` varchar(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `urls`
--

INSERT INTO `urls` (`id`, `url`, `short_code`, `created_at`) VALUES
(1, 'http://localhost/url_shortener/', 'aoCSHO', '2024-08-20 15:24:57'),
(2, 'http://localhost/url_shortener/', 'aZChLu', '2024-08-20 15:28:03'),
(3, 'http://localhost/url_shortener/', 'NCn77v', '2024-08-20 15:34:10'),
(4, 'https://claude.ai/chat/59cb05ec-3ad3-403f-bd26-b3e4a6a6eb2b', 'vEzkRg', '2024-08-20 15:35:57'),
(5, 'https://claude.ai/chat/59cb05ec-3ad3-403f-bd26-b3e4a6a6eb2b', 'VubVz5', '2024-08-20 15:36:15'),
(6, 'http://localhost/url_shortener/index.html', 'FMGMEJ', '2024-08-20 15:41:59'),
(7, 'https://claude.ai/chat/59cb05ec-3ad3-403f-bd26-b3e4a6a6eb2b', 'p3fHJU', '2024-08-20 15:42:27'),
(8, 'https://chatgpt.com/c/3fb7dfaf-95e5-4721-8b56-bbbd1b9170ab', 'WPSIIJ', '2024-08-21 03:14:34'),
(9, 'https://chatgpt.com/c/3fb7dfaf-95e5-4721-8b56-bbbd1b9170ab', 'YEKkgO', '2024-08-22 05:42:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `urls`
--
ALTER TABLE `urls`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `short_code` (`short_code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `urls`
--
ALTER TABLE `urls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
