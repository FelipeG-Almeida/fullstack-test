package com.smartfit.backend.controller;

import com.smartfit.backend.domain.Academia;
import com.smartfit.backend.domain.AcademiaRepository;
import com.smartfit.backend.domain.DadosCadastroAcademia;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("academias")
public class AcademiaControler {
	@Autowired
	private AcademiaRepository repository;

	@PostMapping
	public ResponseEntity cadastra(@RequestBody @Valid DadosCadastroAcademia dados, UriComponentsBuilder uriBuilder) {
		var academia = new Academia(dados);
		if (academia.getSab() == null) {
			academia.setSab("Fechada");
		}
		if (academia.getDom() == null) {
			academia.setDom("Fechada");
		}
		repository.save(academia);
		var uri = uriBuilder.path("/academias/{id}").buildAndExpand(academia.getId()).toUri();

		return ResponseEntity.created(uri).body(new DadosCadastroAcademia(academia));
	}

	@GetMapping
	public ResponseEntity<List<Academia>> listar() {
		List<Academia> academias = new ArrayList<>();
		academias = repository.findAll();

		return ResponseEntity.ok(academias);
	}

	@PutMapping
	@Transactional
	public ResponseEntity atualizar(@RequestBody @Valid DadosCadastroAcademia dados) {
		var academia = repository.getReferenceById(dados.id());
		academia.atualizarInformacoes(dados);

		return ResponseEntity.ok(new DadosCadastroAcademia(academia));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity remover(@PathVariable Long id) {
		repository.deleteById(id);

		return ResponseEntity.noContent().build();
	}
}
