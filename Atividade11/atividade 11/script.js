//exercicio 1
function Retangulo(b, h) {

    this.b = b;
    this.h = h;

    this.Area = function () {
        return b * h;
    }

}

var retangulo = new Retangulo(12, 9);

alert("Base: " + retangulo.b + "\nAltura: " + retangulo.h + "\nÁrea: " + retangulo.Area() + " cm²");


function Conta(nomeCorrentista, banco, numConta, saldo) {

    this.nomeCorrentista = nomeCorrentista;
    this.banco = banco;
    this.numConta = numConta;
    this.saldo = saldo;

    this.getnomeCorrentista = function () {
        return nomeCorrentista;
    }
    this.getBanco = function () {
        return banco;
    }
    this.getnumConta = function () {
        return numConta;
    }
    this.getSaldo = function () {
        return saldo;
    }

    this.setnomeCorrentista = function (nome) {
        nomeCorrentista = nome;
    }
    this.setBanco = function (nomeBanco) {
        banco = nomeBanco;
    }
    this.setnumConta = function (numConta) {
        numConta = numConta;
    }
    this.setSaldo = function (valor) {
        saldo = valor;
    }

}

function ContaCorrente(saldoEspecial) {

    this.saldoEspecial = saldoEspecial;

    this.getSaldoEspecial = function () {
        return saldoEspecial;
    }

    this.setSaldoEspecial = function (valor) {
        saldoEspecial = valor;
    }
}

function ContaPoupanca(juros, dataVencimento) {

    this.juros = juros;
    this.dataVencimento = dataVencimento;

    this.getJuros = function () {
        return juros;
    }
    this.getdataVencimento = function () {
        return dataVencimento;
    }

    this.setJuros = function (valor) {
        juros = valor;
    }
    this.setdataVencimento = function (data) {
        dataVencimento = data;
    }
}


//objeto Conta Poupança
ContaPoupanca.prototype = new Conta();
var contaP = new ContaPoupanca();

contaP.setnomeCorrentista('Giulia');
contaP.setBanco('Itaú');
contaP.setnumConta('1234567-8');
contaP.setSaldo('7800');
contaP.setJuros('10%');
contaP.setdataVencimento('20/02/2031');

//objeto Conta Corrente
ContaCorrente.prototype = new Conta();
var contaC = new ContaCorrente();

contaC.setnomeCorrentista('Caique');
contaC.setBanco('Caixa');
contaC.setnumConta('9876543-2');
contaC.setSaldo('2500');
contaC.setSaldoEspecial('1200');

alert("CONTA POUPANÇA (Correntista: " + contaP.getnomeCorrentista() + ")\n" + "Juros: " + contaP.getJuros() + "\n" + "Data de vencimento: " + contaP.getdataVencimento() + "\n\nCONTA CORRENTE (Correntista: " + contaC.getnomeCorrentista() + ")\n" + "Saldo Especial: R$" + contaC.getSaldoEspecial());