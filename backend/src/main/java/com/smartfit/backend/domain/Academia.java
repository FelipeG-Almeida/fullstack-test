package com.smartfit.backend.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "academias")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Academia {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nome;
	private String endereco;
	private boolean status;
	private String mascara;
	private String toalha;
	private String bebedouro;
	private String vestiario;
	private String weekDays;
	private String sab;
	private String dom;

	public Academia(DadosCadastroAcademia dados) {
		this.status = dados.status();
		this.nome = dados.nome();
		this.endereco = dados.endereco();
		this.mascara = dados.mascara();
		this.toalha = dados.toalha();
		this.bebedouro = dados.bebedouro();
		this.vestiario = dados.vestiario();
		this.weekDays = dados.weekDays();
		this.sab = dados.sab();
		this.dom = dados.dom();
	}

	public void atualizarInformacoes(DadosCadastroAcademia dados) {
		this.status = dados.status();

		if (dados.nome() != null) {
			this.nome = dados.nome();
		}
		if (dados.endereco() != null) {
			this.endereco = dados.endereco();
		}
		if (dados.mascara() != null) {
			this.mascara = dados.mascara();
		}
		if (dados.toalha() != null) {
			this.toalha = dados.toalha();
		}
		if (dados.bebedouro() != null) {
			this.bebedouro = dados.bebedouro();
		}
		if (dados.vestiario() != null) {
			this.vestiario = dados.vestiario();
		}
		if (dados.weekDays() != null) {
			this.weekDays = dados.weekDays();
		}
		if (dados.sab() != null) {
			this.sab = dados.sab();
		}
		if (dados.dom() != null) {
			this.dom = dados.dom();
		}
	}
}
