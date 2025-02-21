CREATE TABLE `adoptantes` (
  `id_adoptante` int PRIMARY KEY,
  `nombre` varchar(255),
  `email` varchar(255) UNIQUE,
  `telefono` varchar(255),
  `direccion` varchar(255)
);

CREATE TABLE `refugios` (
  `id_refugio` int PRIMARY KEY,
  `nombre` varchar(255),
  `email` varchar(255) UNIQUE,
  `contrasena` varchar(255),
  `tipo_refugio` enum(particular,organizacion),
  `ubicacion` varchar(255)
);

CREATE TABLE `mascotas` (
  `id_mascota` int PRIMARY KEY,
  `nombre` varchar(255),
  `edad` int,
  `fotos` text,
  `raza` varchar(255),
  `tamano` varchar(255),
  `estado_salud` varchar(255),
  `descripcion` text,
  `ubicacion` varchar(255),
  `id_refugio` int
);

CREATE TABLE `solicitudes_adopcion` (
  `id_solicitud` int PRIMARY KEY,
  `id_adoptante` int,
  `id_mascota` int,
  `motivo_adopcion` text,
  `experiencia_mascotas` text,
  `fecha_solicitud` date,
  `estado` enum(pendiente,aprobada,rechazada)
);

CREATE TABLE `colaboraciones` (
  `id_colaboracion` int PRIMARY KEY,
  `id_refugio` int,
  `tipo_colaboracion` enum(donacion,voluntariado),
  `detalles` text
);

CREATE TABLE `administradores` (
  `id_admin` int PRIMARY KEY,
  `nombre` varchar(255),
  `email` varchar(255) UNIQUE,
  `contrasena` varchar(255)
);

CREATE TABLE `gestion_usuarios` (
  `id_gestion` int PRIMARY KEY,
  `id_admin` int,
  `id_adoptante` int,
  `id_refugio` int,
  `accion` enum(activar,desactivar,eliminar),
  `fecha_accion` date
);

CREATE TABLE `filtros_busqueda` (
  `id_filtro` int PRIMARY KEY,
  `especie` varchar(255),
  `raza` varchar(255),
  `edad_min` int,
  `edad_max` int,
  `tamano` varchar(255),
  `ubicacion` varchar(255)
);

ALTER TABLE `mascotas` ADD FOREIGN KEY (`id_refugio`) REFERENCES `refugios` (`id_refugio`);

ALTER TABLE `solicitudes_adopcion` ADD FOREIGN KEY (`id_adoptante`) REFERENCES `adoptantes` (`id_adoptante`);

ALTER TABLE `solicitudes_adopcion` ADD FOREIGN KEY (`id_mascota`) REFERENCES `mascotas` (`id_mascota`);

ALTER TABLE `colaboraciones` ADD FOREIGN KEY (`id_refugio`) REFERENCES `refugios` (`id_refugio`);

ALTER TABLE `gestion_usuarios` ADD FOREIGN KEY (`id_admin`) REFERENCES `administradores` (`id_admin`);

ALTER TABLE `gestion_usuarios` ADD FOREIGN KEY (`id_adoptante`) REFERENCES `adoptantes` (`id_adoptante`);

ALTER TABLE `gestion_usuarios` ADD FOREIGN KEY (`id_refugio`) REFERENCES `refugios` (`id_refugio`);
