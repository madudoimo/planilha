export class Atividades{
    descricao: string;
    nota: number;
    data_post: Date;
    data_ent: Date;

    constructor(_descricao: string, _nota: number, _data_post: Date, _data_ent: Date){
        this.descricao = _descricao;
        this.nota = _nota;
        this.data_post = _data_post;
        this.data_ent = _data_ent;
    }
}