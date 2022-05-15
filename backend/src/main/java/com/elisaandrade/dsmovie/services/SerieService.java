package com.elisaandrade.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.elisaandrade.dsmovie.dto.SerieDTO;
import com.elisaandrade.dsmovie.entities.Serie;
import com.elisaandrade.dsmovie.repositories.SerieRepository;

@Service
public class SerieService {
	
	@Autowired
	private SerieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<SerieDTO> findAll(Pageable pageable) {
		Page<Serie> result = repository.findAll(pageable);
		Page<SerieDTO> page = result.map(x -> new SerieDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public SerieDTO findById(Long id) {
		Serie result = repository.findById(id).get();
		SerieDTO dto = new SerieDTO(result);
		return dto;
	}
	
}
