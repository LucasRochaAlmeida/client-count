import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    _saldo = 0;
/* # serve para deixar a variável privada assim ela não pode ser alterada diretamente.
    No exemplo acima vc pode add valor usando o método 'depositar', mas não usando contaCorrente.saldo = tal valor
    # ainda não é oficial então usa-se _ para mostrar que é privada */

    get saldo(){
        this._saldo;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor <= 0){
            return
        }
        this._saldo += valor;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}