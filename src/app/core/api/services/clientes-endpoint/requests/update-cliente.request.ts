export interface UpdateClienteRequest {
    cpf: string | null,
    nome: string,
    dataNascimento: Date | null,
    telefone: string | null
}