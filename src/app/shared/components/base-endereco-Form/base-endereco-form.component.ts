import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Endereco } from './shared/model/endereco.model';
import { EnderecoService } from './shared/service/endereco.service';

@Component({
  selector: 'app-base-endereco-form',
  templateUrl: './base-endereco-form.component.html',
  styleUrls: ['./base-endereco-form.component.css']
})
export class BaseEnderecoFormComponent implements OnInit {




  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

  }

  public buildResourceForm(endereco: Endereco) {
    return this.formBuilder.group({
      id: [null],
      cep: [endereco.cep, Validators.required],
      logradouro: [endereco.logradouro, Validators.required],
      complemento: [endereco.complemento],
      numero: [endereco.complemento, Validators.required],
      bairro: [endereco.bairro, Validators.required],
      localidade: [endereco.localidade, Validators.required],
      uf: [endereco.uf, Validators.required],
      unidade: [endereco.unidade],
      ibge: [endereco.ibge],
      gia: [endereco.gia],

    });
  }
}
