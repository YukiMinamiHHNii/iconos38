/* Comentarios en SQL */
DROP DATABASE IF EXISTS portafolio_web;

CREATE DATABASE IF NOT EXISTS portafolio_web;

USE portafolio_web;

/* Tabla catálogo: Es aquella donde sus registros deben estar previamente cargados */
CREATE TABLE categorias (
  cat_id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  cat_nombre VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO categorias (cat_nombre) VALUES
  ('Sitio Web'),
  ('Gestor de Contenidos'),
  ('Aplicación Web'),
  ('Aplicación Móvil'),
  ('Identidad Visual'),
  ('Marketing Digital'),
  ('Capacitación');

/* Tabla de datos: es aquella que se llena con la información generada de las interacciones del sistema */
CREATE TABLE proyectos (
  proyecto_id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  proyecto_fecha DATE NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT,
  imagen VARCHAR(255),
  enlace VARCHAR(255),
  cliente VARCHAR(255) NOT NULL,
  categoria INTEGER UNSIGNED NOT NULL,
  FOREIGN KEY (categoria)
    REFERENCES categorias(cat_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO proyectos (proyecto_fecha, titulo, cliente, categoria) VALUES
  (NOW(), 'LucyLara.com', 'Lucy Lara', 2);

/* CREATE TABLE usuarios () ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; */
