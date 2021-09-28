



$(document).ready(function() {
    ordenarPerguntas();
   
  });


  function ordenarPerguntas(){
    var perguntas = Array();
    perguntas[0] = "perguntaAlfa";
    perguntas[1] = "perguntaBeta";
    perguntas[2] = "perguntaGama";
    
    perguntas.sort(randOrd);
    
    $( "#pergunta1" ).load( "../htmls/"+perguntas[0]+".html" );
    $( "#pergunta2" ).load( "../htmls/"+perguntas[1]+".html" );
    $( "#pergunta3" ).load( "../htmls/"+perguntas[2]+".html" );

  }

  function randOrd() {
    return (Math.round(Math.random())-0.5);
}
