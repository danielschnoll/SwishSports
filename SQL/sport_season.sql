-- Table: public.sport_season

-- DROP TABLE public.sport_season;

CREATE TABLE public.sport_season
(
    sport_name character varying(50) COLLATE pg_catalog."default",
    season_name character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT sport_season_season_name_fkey FOREIGN KEY (season_name)
        REFERENCES public.season (semester) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT sport_season_sport_name_fkey FOREIGN KEY (sport_name)
        REFERENCES public.sport (name) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.sport_season
    OWNER to postgres;