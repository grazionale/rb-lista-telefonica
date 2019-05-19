angular.module("listaTelefonica").config(function (generateSerialProvider) {
    generateSerialProvider.setLength(10);
});