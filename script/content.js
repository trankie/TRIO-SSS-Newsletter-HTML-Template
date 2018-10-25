var numRow = 0;
function delete_entryRowOption2(no)
{
 document.getElementById("entryRowHeader"+no+"").outerHTML="";
 document.getElementById("header"+no+"").outerHTML="";
 document.getElementById("entryRowBody"+no+"").outerHTML="";
 document.getElementById("entryDelete"+no+"").outerHTML="";
 document.getElementById("entryRowHR"+no+"").outerHTML="";
}

function addTemplate2() {
    var table=document.getElementById("newEntryTable");
    var row = table.insertRow(-1).outerHTML="<tr id='entryRowHeader"+numRow+"'><span id='header"+numRow+"' class='headerFontLeft' data-text='Insert Title' style='width:75%' contentEditable=true></span><input id='entryDelete"+numRow+"' type='button' class='delete button buttonManipulate buttonDelete' onclick='delete_entryRowOption2("+numRow+")' style='float:right'><div id='entryRowBody"+numRow+"' align='left' class='wrapword bodyText' contenteditable='true' data-text='Body Text'></div><hr id='entryRowHR"+numRow+"' class='style-seven' />";
    numRow++;
}
