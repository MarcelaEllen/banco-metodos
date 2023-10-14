function Banco(conta, saldo, tipo, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipo = tipo;
        this.agencia = agencia;
    
        this.buscarSaldo = function() {
            return "Seu saldo é: " + this.saldo;
        };
    
        this.deposito = function(valorDep) {
            this.saldo += valorDep;
            console.log("Você realizou um depósito, novo Saldo: " + this.saldo);
        };
    
        this.saque = function(valorSaque) {
                this.saldo -= valorSaque;
                console.log("Você realizou um saque, novo Saldo: " + this.saldo);
        };
    
        this.numeroConta = function() {
            return "O número da sua conta é: " + this.conta;
        };

        this.numeroAgencia = function() {
            return "A sua agência é: " + this.agencia;
        };
    }
    
    const meuBanco = new Banco("1", 100, "Corrente", "283");
    meuBanco.buscarSaldo();
    meuBanco.deposito(10);
    meuBanco.saque(50);
    console.log(meuBanco.numeroConta());
    console.log(meuBanco.numeroAgencia());
    
