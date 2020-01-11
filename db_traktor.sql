-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Jan 2020 pada 14.03
-- Versi server: 10.4.8-MariaDB
-- Versi PHP: 7.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_traktor`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `authId` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `authId` int(11) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `displayName` varchar(255) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `noHp` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `authId`, `userName`, `password`, `displayName`, `alamat`, `noHp`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'abu', '123', 'surya8', 'buaran', '082284133322', 'aboe2769@gmail.com', '2020-01-04 16:37:35', '2020-01-04 16:37:35'),
(2, 1, 'surya', '123', 'surya8', 'buaran', '082284133322', 'aboe2769@gmail.com', '2020-01-04 16:38:08', '2020-01-04 16:38:08'),
(3, 1, 'kevin', '1232', 'kevin', 'ntt', '0822841333222', 'aboe2769ss@gmail.com', '2020-01-04 16:39:13', '2020-01-04 16:39:13'),
(4, 2, 'kevin', '1232', 'kevin', 'ntt', '0822841333222', 'aboe2769ss@gmail.com', '2020-01-04 18:04:49', '2020-01-04 18:04:49'),
(5, 2, 'kevin2', '1232', 'kevin', 'ntt', '0822841333222', 'aboe2769ss@gmail.com', '2020-01-10 22:59:44', '2020-01-10 22:59:44');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
