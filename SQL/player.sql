-- Table: public.player

-- DROP TABLE public.player;

CREATE TABLE public.player
(
    name character varying(200) COLLATE pg_catalog."default" NOT NULL,
    year character varying(4) COLLATE pg_catalog."default",
    status character varying(20) COLLATE pg_catalog."default",
    teams text[] COLLATE pg_catalog."default",
    CONSTRAINT player_pkey PRIMARY KEY (name)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.player
    OWNER to postgres;