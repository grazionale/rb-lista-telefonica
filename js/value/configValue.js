angular.module("listaTelefonica").value("config", { //no lugar de value, também poderia ser constant. A diferença é que o constant pode ser injetado em serviços do tipo provider
    baseUrl: "http://localhost:8000"
});