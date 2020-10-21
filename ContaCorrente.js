
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    
    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas+=1;
    }
    sacar(valor){  //sobreescrevendo o comportamento de sacar
        let taxa = 1.1
        return this._sacar(valor, taxa);
    }
}
/* A palavra-chave 'static' define um método estático de uma classe. 
    Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe
    é instanciada. Métodos estáticos são geralmente usados para criar funções de utilidades por uma aplicação. */
 
/* # serve para deixar a variável privada assim ela não pode ser alterada diretamente.
    No exemplo acima vc pode add valor usando o método 'depositar', mas não usando contaCorrente.saldo = tal valor
    # ainda não é oficial então usa-se _ para mostrar que é privada */

    