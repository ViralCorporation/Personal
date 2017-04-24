function showRowsOfTable(idTbody){
    var rowsTable = document.getElementById(idTbody);
    rowsTable.style.display = "inherit";

}

function hiddenRowsOfTable(idTbody){
    var rowsTable = document.getElementById(idTbody);
    rowsTable.style.display = "none";
    rowsTable.style.width = "100%";

}

function changeDisplayTable(idTbody){
    var rowsTable = document.getElementById(idTbody);

    if(rowsTable.style.display == "none"){
        showRowsOfTable(idTbody);
    } else{
        hiddenRowsOfTable(idTbody);
    }
}

function changeArrow(id){

}
function HiddenAll(){
    hiddenTreinos();
}
function hiddenTreinos(){
   var div = document.getElementById("treinos");
   div.style.display = "none";
}

function openMensagens(){
    HiddenAll();
    var div = document.getElementById("mensagens");
    div.style.display = "inherit";
    changeTitleScreen("Mensagens")
}

function openMinhaConta(){
    HiddenAll();
    var div = document.getElementById("minha-conta");
    div.style.display = "inherit";
    changeTitleScreen("Minha Conta")
}

function openTreinos(){
    HiddenAll();
    var div = document.getElementById("treinos");
    div.style.display = "inherit";
    changeTitleScreen("Treinos")
}
function openPromocoes(){
    HiddenAll();
    var div = document.getElementById("promocoes");
    div.style.display = "inherit";
    changeTitleScreen("Promoções")
}

function openServicos(){
    HiddenAll();
    var div = document.getElementById("servicos");
    div.style.display = "inherit";
    changeTitleScreen("Serviços");
}

function changeTitleScreen(titleScreen_var){
    var titleScreen = document.getElementById("title-screen");
    titleScreen.innerHTML = titleScreen_var;
}

function logout(){

}
