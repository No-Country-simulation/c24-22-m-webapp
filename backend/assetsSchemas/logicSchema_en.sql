CREATE TABLE `adopters` (
  `id_adopter` int PRIMARY KEY,
  `name` varchar(255),
  `email` varchar(255) UNIQUE,
  `phone` varchar(255),
  `address` varchar(255)
);

CREATE TABLE `shelters` (
  `id_shelter` int PRIMARY KEY,
  `name` varchar(255),
  `email` varchar(255) UNIQUE,
  `password` varchar(255),
  `shelter_type` enum(private,organization),
  `location` varchar(255)
);

CREATE TABLE `pets` (
  `id_pet` int PRIMARY KEY,
  `name` varchar(255),
  `age` int,
  `photos` text,
  `breed` varchar(255),
  `size` varchar(255),
  `health_status` varchar(255),
  `description` text,
  `location` varchar(255),
  `id_shelter` int
);

CREATE TABLE `adoption_requests` (
  `id_request` int PRIMARY KEY,
  `id_adopter` int,
  `id_pet` int,
  `adoption_reason` text,
  `pet_experience` text,
  `request_date` date,
  `status` enum(pending,approved,rejected)
);

CREATE TABLE `collaborations` (
  `id_collaboration` int PRIMARY KEY,
  `id_shelter` int,
  `collaboration_type` enum(donation,volunteering),
  `details` text
);

CREATE TABLE `administrators` (
  `id_admin` int PRIMARY KEY,
  `name` varchar(255),
  `email` varchar(255) UNIQUE,
  `password` varchar(255)
);

CREATE TABLE `user_management` (
  `id_management` int PRIMARY KEY,
  `id_admin` int,
  `id_adopter` int,
  `id_shelter` int,
  `action` enum(activate,deactivate,delete),
  `action_date` date
);

CREATE TABLE `search_filters` (
  `id_filter` int PRIMARY KEY,
  `species` varchar(255),
  `breed` varchar(255),
  `min_age` int,
  `max_age` int,
  `size` varchar(255),
  `location` varchar(255)
);

ALTER TABLE `pets` ADD FOREIGN KEY (`id_shelter`) REFERENCES `shelters` (`id_shelter`);

ALTER TABLE `adoption_requests` ADD FOREIGN KEY (`id_adopter`) REFERENCES `adopters` (`id_adopter`);

ALTER TABLE `adoption_requests` ADD FOREIGN KEY (`id_pet`) REFERENCES `pets` (`id_pet`);

ALTER TABLE `collaborations` ADD FOREIGN KEY (`id_shelter`) REFERENCES `shelters` (`id_shelter`);

ALTER TABLE `user_management` ADD FOREIGN KEY (`id_admin`) REFERENCES `administrators` (`id_admin`);

ALTER TABLE `user_management` ADD FOREIGN KEY (`id_adopter`) REFERENCES `adopters` (`id_adopter`);

ALTER TABLE `user_management` ADD FOREIGN KEY (`id_shelter`) REFERENCES `shelters` (`id_shelter`);
