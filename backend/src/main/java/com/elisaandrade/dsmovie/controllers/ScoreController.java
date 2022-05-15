package com.elisaandrade.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elisaandrade.dsmovie.dto.ScoreDTO;
import com.elisaandrade.dsmovie.dto.SerieDTO;
import com.elisaandrade.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService service;
	
	@PutMapping
	public SerieDTO saveScore(@RequestBody ScoreDTO dto){
		SerieDTO serieDTO = service.saveScore(dto);
		return serieDTO;
	}
}
