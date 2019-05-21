angular.module("listaTelefonica").controller("listaTelefonicaController", function ( $scope, 
    contatosAPI, operadorasAPI, generateSerial) {
    $scope.appName = "Lista Telefônica";
    $scope.contatos = [];
    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
        }).catch(function (reject){
            $scope.error = "Não foi possível carregar os dados." + reject;
        });
    };

    $scope.teste = "asdfasd";
    $scope.adicionarContato = function (contato) {
        contato.serial = generateSerial.generate();
        contato.data = new Date();
        contatosAPI.saveContatos(contato).then(function (response){
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $scope.contatos.push(response.data);
        });
    }

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        }, function error(response){
            console.log("Erro: " + response);
        });
    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    }
    $scope.temContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    }
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }
    carregarOperadoras();
    carregarContatos();
});
