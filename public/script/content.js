var numRow = 0;
function delete_entryRowOption3(no)
{
 document.getElementById("Right"+no+"").outerHTML="";
}

function delete_entryRowOption2(no)
{
 document.getElementById("Middle"+no+"").outerHTML="";
}

function delete_entryRowOption1(no)
{
 document.getElementById("Left"+no+"").outerHTML="";
}

function addTemplate3(){
    var table=document.getElementById("newEntryTable");
    var row = table.insertRow(-1).outerHTML="<ul id='Right"+numRow+"' class='ulEntry'>"+
    "<span id='header"+numRow+"' class='headerFont' data-text='Insert Title' style='width:75%' contentEditable=true></span>"+
    "<input id='entryDelete"+numRow+"' type='button' class='delete button buttonManipulate buttonDelete' onclick='delete_entryRowOption3("+numRow+")' style='float:right'>"+
    "<br id='breakLine"+numRow+"'>"+
    "<div id='entryRowBody"+numRow+"' align='right' class='wrapword bodyText option1' contenteditable='true'>Body Text</div>"+
    "<label id='label"+numRow+"'for='file-upload"+numRow+"' class='imageContainerR'>"+
    "<img id='uploadImage"+numRow+"' src='' style='width: 250px;height: auto;' alt='Click To Upload Image\n (size 250xAny)'></label>"+
    "<input id='file-upload"+numRow+"' type='file' onchange='addPicture("+numRow+")'><hr id='entryRowHR"+numRow+"' class='style-seven' /></ul>";
    numRow++;
}

function addTemplate2() {
    var table=document.getElementById("newEntryTable");
    var row = table.insertRow(-1).outerHTML="<ul id='Middle"+numRow+"' class='ulEntry'>"+
    "<span id='header"+numRow+"' class='headerFont' data-text='Insert Title' style='width:75%' contentEditable=true></span>"+
    "<input id='entryDelete"+numRow+"' type='button' class='delete button buttonManipulate buttonDelete' onclick='delete_entryRowOption2("+numRow+")' style='float:right'>"+
    "<div id='entryRowBody"+numRow+"' align='left' class='wrapword bodyText' contenteditable='true' data-text='Body Text'></div><hr id='entryRowHR"+numRow+"' class='style-seven' /></ul>";
    numRow++;
}

function addTemplate1(){
    var table=document.getElementById("newEntryTable");
    var row = table.insertRow(-1).outerHTML="<ul id='Left"+numRow+"' class='ulEntry'>"+
    "<span id='header"+numRow+"' class='headerFont' data-text='Insert Title' style='width:75%' contentEditable=true></span>"+
    "<input id='entryDelete"+numRow+"' type='button' class='delete button buttonManipulate buttonDelete' onclick='delete_entryRowOption1("+numRow+")' style='float:right'>"+
    "<br id='breakLine"+numRow+"'>"+
    "<label id='label"+numRow+"'for='file-upload"+numRow+"' class='imageContainer'>"+
    "<img id='uploadImage"+numRow+"' src='' style='width: 250px;height: auto;' alt='Click To Upload Image\n (size 250xAny)'></label>"+
    "<input id='file-upload"+numRow+"' type='file' onchange='addPicture("+numRow+")'>"+
    "<div id='entryRowBody"+numRow+"' align='right' class='wrapword bodyText option1' contenteditable='true'>Body Text</div><hr id='entryRowHR"+numRow+"' class='style-seven' /></ul>";
    numRow++;
}

function addPicture(no){
    var preview = document.getElementById("uploadImage"+no+"");
    var file    = document.getElementById("file-upload"+no+"").files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}