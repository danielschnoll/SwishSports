-- Table: public.teams

-- DROP TABLE public.teams;

CREATE TABLE public.teams
(
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    semester character varying(50) COLLATE pg_catalog."default",
    sport character varying(50) COLLATE pg_catalog."default",
    players text[] COLLATE pg_catalog."default",
    games text[] COLLATE pg_catalog."default",
    games_played smallint,
    wins smallint,
    losses smallint,
    ties smallint,
    CONSTRAINT teams_pkey PRIMARY KEY (name),
    CONSTRAINT teams_semester_key UNIQUE (semester)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.teams
    OWNER to postgres;