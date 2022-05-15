package com.elisaandrade.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elisaandrade.dsmovie.entities.Serie;

public interface SerieRepository extends JpaRepository<Serie, Long> {
	
	
}
