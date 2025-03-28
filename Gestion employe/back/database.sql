CREATE TABLE IF NOT EXISTS enseignant(
    numens varchar(10) unique not null,
    nom varchar(50) not null,
    nbheures int,
    taux_horaire int
)