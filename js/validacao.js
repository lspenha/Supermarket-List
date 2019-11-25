/**
 * Validações e máscaras
 */

function validar() {
    var cont = 0
    $('.errorProduto').empty();
    $('.errorPreco').empty();
    $('.errorQtd').empty();

    validacoes = [
        required('#nomeProduto'),
        required('#precoUnitarioProduto'),
        min('#precoUnitarioProduto', 0.01),
        money('#precoUnitarioProduto'),
        required('#qtdProduto'),
        min('#qtdProduto', 1)
    ]

    for (var i in validacoes) {
        if (validacoes[i]) cont++
    }

    if (cont == validacoes.length) return true
    else return false
}

function required(nomeCampo) {
    var valorInput = $(nomeCampo).val().trim()
    if (!valorInput) {
        $(nomeCampo).next().append(errorMessage("Preencha este campo."))
        return false
    } else {
        return true
    }
}

function min(nomeCampo, value) {
    var valorInput = moneyToFloat($(nomeCampo).val())
    if (valorInput < value) {
        $(nomeCampo).next().append(errorMessage("Valor minímo permitido (Min:" + value + ")"))
        return false
    } else {
        return true
    }
}

function money(nomeCampo) {
    var valorInput = $(nomeCampo).val()
    if (!valorInput.includes(',')) {
        $(nomeCampo).next().append(errorMessage("Digite um valor monetário. (Ex: 100,00)"))
        return false
    } else {
        return true
    }
}

function moneyToFloat(valor) {
    return valor.replace(".", '').replace(',', '.');
}

function errorMessage(message) {
    return '<span class="text-error text-danger small py-4 py-sm-0 d-block">' + message + '</span>'
}

$('#precoUnitarioProduto').mask('00000,00', { reverse: true })
$('#qtdProduto').mask('000')

function clearInputs() {
    $(".clear").val("");
  }
