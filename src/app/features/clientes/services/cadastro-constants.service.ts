import { Injectable } from '@angular/core';

@Injectable()
export class CadastroConstantsService {
    /* Validação de formulário */
    public NOME_OBRIGATORIO: string = 'Nome é obrigatório.';
    public NOME_MIN_LENGHT: string = 'Nome deve ter 10 caracteres.';
    public NOME_COMPOSTO: string = 'Nome deve ser composto';
    public CPF_INVALIDO: string = 'CPF inválido';
    public TELEFONE_INVALIDO: string = 'Telefone inválido';
}