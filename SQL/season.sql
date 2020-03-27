-- Table: public.season

-- DROP TABLE public.season;

CREATE TABLE public.season
(
    semester character varying(50) COLLATE pg_catalog."default" NOT NULL,
    sports text[] COLLATE pg_catalog."default",
    CONSTRAINT season_pkey PRIMARY KEY (semester)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.season
    OWNER to postgres;