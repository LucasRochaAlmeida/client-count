import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
 
/* # serve para deixar a variável privada assim ela não pode ser alterada diretamente.
    No exemplo acima vc pode add valor usando o método 'depositar', mas não usando contaCorrente.saldo = tal valor
    # ainda não é oficial então usa-se _ para mostrar que é privada */

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        this._saldo;
    }
    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas+=1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}