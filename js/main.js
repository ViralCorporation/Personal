function showRowsOfTable(idTbody){
    var rowsTable = document.getElementById(idTbody);
    rowsTable.style.display = "block";

}

function hiddenRowsOfTable(idTbody){
    var rowsTable = document.getElementById(idTbody);
    rowsTable.style.display = "none";

}

function changeDisplayTable(idTbody){
    var rowsTable = document.getElementById(idTbody);

    if(rowsTable.style.display == "none"){
        showRowsOfTable(idTbody);
    } else{
        hiddenRowsOfTable(idTbody);
    }
}
