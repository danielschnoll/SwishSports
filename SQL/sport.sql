-- Table: public.sport

-- DROP TABLE public.sport;

CREATE TABLE public.sport
(
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    semesters text[] COLLATE pg_catalog."default",
    divisions text[] COLLATE pg_catalog."default",
    CONSTRAINT sport_pkey PRIMARY KEY (name)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.sport
    OWNER to postgres;