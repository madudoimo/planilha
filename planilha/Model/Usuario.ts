export abstract class Usuario{
    nome: string;
    email: string;
    senha: string;
    nivel: number;

    constructor(_nome: string, _email: string, _senha: string, _nivel: number){
        this.nome = _nome;
        this.email = _email;
        this.senha = _senha;
        this.nivel = _nivel;
    }

    Cadastrar(){

    }

    Login(){

    }
}