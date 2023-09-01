import { Usuario } from "./Usuario";

class Alunos extends Usuario{
    rm: string;
    turma: string;

    constructor(_rm: string, _turma: string, nome: string, email: string, senha: string, nivel: number){
        super(nome, email, senha, nivel)
        this.rm = _rm;
        this.turma = _turma;
    }
}