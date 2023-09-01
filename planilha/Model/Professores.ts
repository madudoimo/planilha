import { Usuario } from "./Usuario";
import { Atividades } from "./Atividades";

class Professores extends Usuario{
    materia: string;

    constructor(_materia: string, nome: string, email: string, senha: string, nivel: number){
        super(nome, email, senha, nivel)
        this.materia = _materia;
    }

    CriarAtividade(){

    }

    EditarAtividade(){

    }

    ExcluirAtividade(){

    }

    GerarNota(){

    }

    CriarMedia(){

    }
}