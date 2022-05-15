package com.elisaandrade.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.elisaandrade.dsmovie.dto.ScoreDTO;
import com.elisaandrade.dsmovie.dto.SerieDTO;
import com.elisaandrade.dsmovie.entities.Score;
import com.elisaandrade.dsmovie.entities.Serie;
import com.elisaandrade.dsmovie.entities.User;
import com.elisaandrade.dsmovie.repositories.ScoreRepository;
import com.elisaandrade.dsmovie.repositories.SerieRepository;
import com.elisaandrade.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {

	@Autowired
	private SerieRepository serieRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ScoreRepository scoreRepository;

	@Transactional
	public SerieDTO saveScore(ScoreDTO dto) {

		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}

		Serie serie = serieRepository.findById(dto.getSerieId()).get();

		Score score = new Score();
		score.setSerie(serie);
		score.setUser(user);
		score.setValue(dto.getScore());

		score = scoreRepository.saveAndFlush(score);

		double sum = 0.0;
		for (Score s : serie.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / serie.getScores().size();
		
		serie.setScore(avg);
		serie.setCount(serie.getScores().size());
		
		serie = serieRepository.save(serie);
		
		return new SerieDTO(serie);

	}

}
