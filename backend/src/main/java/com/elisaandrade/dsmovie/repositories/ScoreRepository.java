package com.elisaandrade.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elisaandrade.dsmovie.entities.Score;
import com.elisaandrade.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
	
}
