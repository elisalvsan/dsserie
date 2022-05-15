package com.elisaandrade.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elisaandrade.dsmovie.dto.SerieDTO;
import com.elisaandrade.dsmovie.services.SerieService;

@RestController
@RequestMapping(value = "/series")
public class SerieController {
	
	@Autowired
	private SerieService service;
	
	@GetMapping
	public Page<SerieDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public SerieDTO findById(@PathVariable Long id){
		return service.findById(id);
	}
}
