-- Insertar datos ficticios en la tabla adopters (adoptantes)
INSERT INTO guau_miau_app_adopter (name, email, phone, address)
VALUES 
    ('Ana López', 'ana.lopez@example.com', '555-1234', 'Calle Primavera 123, Ciudad de México'),
    ('Carlos Martínez', 'carlos.martinez@example.com', '555-5678', 'Avenida Reforma 456, Guadalajara'),
    ('Laura García', 'laura.garcia@example.com', '555-9101', 'Calle Libertad 789, Monterrey');

-- Insertar datos ficticios en la tabla shelters (refugios)
INSERT INTO guau_miau_app_shelter (name, email, password, shelter_type, location)
VALUES 
    ('Refugio Amigo Fiel', 'amigofiel@example.com', 'securepass123', 'organization', 'Ciudad de México'),
    ('Hogar de Mascotas Felices', 'hogarmascotas@example.com', 'happyhome456', 'private', 'Guadalajara'),
    ('Patitas Salvadas', 'patitassalvadas@example.com', 'savedpaws789', 'organization', 'Monterrey');

-- Insertar datos ficticios en la tabla pets (mascotas)
INSERT INTO guau_miau_app_pet (name, age, photos, breed, size, health_status, description, location, shelter_id)
VALUES 
    ('Max', 2, 'https://example.com/max.jpg', 'Golden Retriever', 'Grande', 'Saludable', 'Max es un perro juguetón y amigable. Le encanta correr en el parque.', 'Ciudad de México', 1),
    ('Luna', 1, 'https://example.com/luna.jpg', 'Siamés', 'Pequeño', 'Saludable', 'Luna es una gata cariñosa y tranquila. Le gusta dormir en lugares cálidos.', 'Guadalajara', 2),
    ('Rocky', 3, 'https://example.com/rocky.jpg', 'Bulldog Francés', 'Mediano', 'En tratamiento', 'Rocky está en tratamiento por una alergia cutánea, pero es muy activo y sociable.', 'Monterrey', 3),
    ('Bella', 4, 'https://example.com/bella.jpg', 'Labrador', 'Grande', 'Saludable', 'Bella es una perra obediente y leal. Ideal para familias con niños.', 'Ciudad de México', 1),
    ('Milo', 2, 'https://example.com/milo.jpg', 'Mestizo', 'Pequeño', 'Saludable', 'Milo es un perrito pequeño y juguetón. Le encanta estar en compañía.', 'Guadalajara', 2);

-- Insertar datos ficticios en la tabla adoption_requests (solicitudes de adopción)
INSERT INTO guau_miau_app_adoptionrequest (adopter_id, pet_id, adoption_reason, pet_experience, request_date, status)
VALUES 
    (1, 1, 'Quiero adoptar a Max porque siempre he querido un perro grande y activo.', 'He tenido perros toda mi vida.', '2025-02-28', 'pending'),
    (2, 2, 'Luna parece ser una gata perfecta para mi hogar tranquilo.', 'Nunca he tenido mascotas, pero estoy emocionado de aprender.', '2025-02-28', 'pending'),
    (3, 3, 'Rocky es exactamente el tipo de perro que estoy buscando.', 'He cuidado perros con necesidades especiales antes.', '2025-02-28', 'approved');

-- Insertar datos ficticios en la tabla collaborations (colaboraciones)
INSERT INTO guau_miau_app_collaboration (shelter_id, collaboration_type, details)
VALUES 
    (1, 'donation', 'Donación de $500 para comida y medicinas.'),
    (2, 'volunteering', 'Voluntariado los fines de semana para pasear a los perros.'),
    (3, 'donation', 'Donación de $1000 para la construcción de nuevas instalaciones.');

-- Insertar datos ficticios en la tabla administrators (administradores)
INSERT INTO guau_miau_app_administrator (name, email, password)
VALUES 
    ('Admin Principal', 'admin@example.com', 'adminpass123'),
    ('Supervisor', 'supervisor@example.com', 'superpass456');

-- Insertar datos ficticios en la tabla user_management (gestión de usuarios)
INSERT INTO guau_miau_app_usermanagement (admin_id, adopter_id, shelter_id, action, action_date)
VALUES 
    (1, 1, NULL, 'activate', '2025-02-28'),
    (2, NULL, 2, 'deactivate', '2025-02-28');

-- Insertar datos ficticios en la tabla search_filters (filtros de búsqueda)
INSERT INTO guau_miau_app_searchfilter (species, breed, min_age, max_age, size, location)
VALUES 
    ('Perro', 'Golden Retriever', 1, 5, 'Grande', 'Ciudad de México'),
    ('Gato', 'Siamés', 1, 3, 'Pequeño', 'Guadalajara'),
    ('Perro', 'Bulldog Francés', 2, 4, 'Mediano', 'Monterrey');