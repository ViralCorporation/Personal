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
