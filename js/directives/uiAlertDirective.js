angular.module("listaTelefonica").directive("uiAlert", function(){
    return {
        templateUrl: "views/alert.html",
        replace: true, //Serve apenas para remover o elemento Original. no Caso, se fosse false (padrão), no HTML iria criar: <div ui-alert> AQUI DENTRO O COMPONENTE </div>
        restrict: "AE",//restringe o modo de utilização da diretiva ao atributo (A), elemento (E), classe (C) e comentário (M) ou ainda a combinação deles. Caso não for definido, o padrão é que a diretiva seja atribuida pelo atributo
        scope:  {
            topic: "@title", //tittle foi passado pelo HTML que chama a diretiva e está sendo atribuido em topic para ser utilizado no HTML da diretiva   
            bonus: "@", //caso a propriedade vinda do HTML que chama a diretiva tiver o mesmo nome da variavel do scope, então basta passar @ sem colocar mais nada.
            error: "=message" //quando é =, ocorre um two way data binding, onde o parametro passado equiale ao scope do controlador que a diretiva chamada
        }, // o scope é neessário para definir qual scope ela vai compartilhar, caso isso não seja informado, ela compartilha o scope que a diretiva foi inserida. @ serve para realizar diretamente a passagem do parametro para a variavel
        transclude: true // Serve para encapsular conteudo... visualizar o Alert.html e também o index.html para melhor entendimento. 
    };
});