package com.smartfit.backend.domain;

import jakarta.validation.constraints.NotBlank;

public record DadosCadastroAcademia(
		Long id,
		boolean status,
		@NotBlank
		String nome,
		@NotBlank
		String endereco,
		@NotBlank
		String mascara,
		@NotBlank
		String toalha,
		@NotBlank
		String bebedouro,
		@NotBlank
		String vestiario,
		@NotBlank
		String weekDays,
		String sab,
		String dom
) {
	public DadosCadastroAcademia(Academia academia) {
		this(academia.getId(), academia.isStatus(), academia.getNome(), academia.getEndereco(), academia.getMascara(), academia.getToalha(), academia.getBebedouro(), academia.getVestiario(), academia.getWeekDays(), academia.getSab(), academia.getDom());
	}
}
