angular.module("listaTelefonica").controller("listaTelefonicaController", function ( $scope, 
    contatosAPI, operadorasAPI) {
    $scope.appName = "Lista Telefônica";
    $scope.contatos = [];
    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
        }, function error(response){
            console.log("Erro: " + response);
        });
    };
    
    $scope.adicionarContato = function (contato) {
        contatosAPI.saveContatos(contato).then(function (response){
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $scope.contatos.push(response.data);
        });
        
        // $scope.contatos.push(angular.copy(contato));
        // delete $scope.contato;
        // $scope.contatoForm.$setPristine();
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
