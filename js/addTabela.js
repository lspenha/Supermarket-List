$(document).ready(function(){

  $('.money').mask('000.000.000.000.000.00', {reverse: true});
  $("#add-produto").bind("click", gerarTabela);

});

  function clear(){
    $(".clear",).val("");
  }


  function valorTotal(){
    var vt = parseFloat($('#valor-total').text());
    var v =  (vt + $('#qtd-produto').val() * $('#preco-unitario-produto').val()).toFixed(2);
    $('#valor-total').text(v); 
  };

  function gerarTabela(){

    $conteudo = "<tr class='row'>" +
        "<td class='col-7'>" + $('#nome-produto').val() + "</th>" +
        "<td class='col-2 text-center'>" + $('#qtd-produto').val() + "</th>" +
        "<td class='col-2'>R$ " + parseFloat($('#preco-unitario-produto').val()).toFixed(2) + "</th>" +
        "<td class='col-1 text-center'><button id='gerarIdParaCadaitem' class='btn btn-outline-danger btn-sm circle .btnExcluir'><i class='fas fa-trash'></i></button></th>" +
        "</tr>";
        
    $('#tBody').append($conteudo);
    valorTotal();
    clear();
  }

 