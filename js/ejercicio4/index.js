
function string(){
    const palabra1 = document.querySelector("#Saray").value;
    const palabra2 = document.querySelector("#Cristhian").value;
    const palabra3 = document.querySelector("#Thiago").value;

    let Resultado = document.querySelector("#Resultado");
    Resultado.innerHTML = `Palabra 1: ${palabra1},
    Palabra 2: ${palabra2},
    Palabra 3: ${palabra3}, `
}

function StringBuffer() {
    this.__strings__ = new Array;
}
 
StringBuffer.prototype.append = function (str) {
    this.__strings__.push(str);
};
 
StringBuffer.prototype.toString = function () {
    return this.__strings__.join("");
};

function secuenciaStringBuffer(){
    var myStringBuffer = new StringBuffer();
    const texto1 = document.querySelector("#texto1").value;
    const texto2 = document.querySelector("#texto2").value;
    const texto3 = document.querySelector("#texto3").value;
    myStringBuffer.append(texto1);
    myStringBuffer.append(texto2);
    myStringBuffer.append(texto3);
    let result = myStringBuffer;
    let myResult = document.querySelector("#textResult");
    myResult.innerHTML = `El resultado es el siguiente: ${result}`
}

function splitwithStringTokenizer(){
    var stringBuffer = new StringBuffer();
    const texto1 = document.querySelector("#texto1").value;
    const texto2 = document.querySelector("#texto2").value;
    const texto3 = document.querySelector("#texto3").value;
    stringBuffer.append(texto1);
    stringBuffer.append(texto2);
    stringBuffer.append(texto3);
    let resultado = stringBuffer.toString();
    const separador = document.querySelector("#separador").value;

    let textResult = document.querySelector("#resultadoTexto");
    textResult.innerHTML = `Texto Completo: ${resultado}, Texto tokenizer: ${resultado.split(separador)}`
}