-- Table: public.team_division

-- DROP TABLE public.team_division;

CREATE TABLE public.team_division
(
    team_name character varying(50) COLLATE pg_catalog."default",
    division smallint,
    CONSTRAINT team_division_division_fkey FOREIGN KEY (division)
        REFERENCES public.divisions (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT team_division_team_name_fkey FOREIGN KEY (team_name)
        REFERENCES public.teams (name) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.team_division
    OWNER to postgres;