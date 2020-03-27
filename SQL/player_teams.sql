-- Table: public.player_teams

-- DROP TABLE public.player_teams;

CREATE TABLE public.player_teams
(
    player_name character varying(250) COLLATE pg_catalog."default",
    team_name character varying(250) COLLATE pg_catalog."default",
    CONSTRAINT player_teams_player_name_fkey FOREIGN KEY (player_name)
        REFERENCES public.player (name) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT player_teams_team_name_fkey FOREIGN KEY (team_name)
        REFERENCES public.teams (name) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.player_teams
    OWNER to postgres;