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
    hiddenMensagens();
    hiddenMinhaConta();
    hiddenPromocoes();
    hiddenServicos();
}

function hiddenTreinos(){
   var div = document.getElementById("treinos");
   div.style.display = "none";
}
function hiddenMensagens(){
    var div = document.getElementById("mensagens");
   div.style.display = "none";
}
function hiddenMinhaConta(){
    var div = document.getElementById("minha-conta");
    div.style.display = "none";
}
function hiddenPromocoes(){
    var div = document.getElementById("promocoes");
    div.style.display = "none";
}
function hiddenServicos(){
    var div = document.getElementById("servicos");
   div.style.display = "none";
}
function openMensagens(){
    HiddenAll();
    var div = document.getElementById("mensagens");
    div.style.display = "block";
    changeTitleScreen("Mensagens");
    closeMenuMobile();
}

function openMinhaConta(){
    HiddenAll();
    var div = document.getElementById("minha-conta");
    div.style.display = "inherit";
    changeTitleScreen("Minha Conta");
    closeMenuMobile();
}

function openTreinos(){
    HiddenAll();
    var div = document.getElementById("treinos");
    div.style.display = "inherit";
    changeTitleScreen("Treinos");
    closeMenuMobile();
}
function openPromocoes(){
    HiddenAll();
    var div = document.getElementById("promocoes");
    div.style.display = "inherit";
    changeTitleScreen("Promoções");
    closeMenuMobile();
}

function openServicos(){
    HiddenAll();
    var div = document.getElementById("servicos");
    div.style.display = "inherit";
    changeTitleScreen("Serviços");
    closeMenuMobile();
}
function closeMenuMobile(){
    var menu = document.getElementById("container-menu");
}

function changeTitleScreen(titleScreen_var){
    var titleScreen = document.getElementById("title-screen");
    titleScreen.innerHTML = titleScreen_var;
}

function logout(){

}
