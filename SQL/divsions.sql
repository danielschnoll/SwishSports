-- Table: public.divisions

-- DROP TABLE public.divisions;

CREATE TABLE public.divisions
(
    id smallint NOT NULL,
    teams text[] COLLATE pg_catalog."default",
    CONSTRAINT divisions_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.divisions
    OWNER to postgres;