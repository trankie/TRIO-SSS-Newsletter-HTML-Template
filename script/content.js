function addContent() {
    var tbl1 = document.createElement("table");
    tbl1.style.width = '100%';
    tbl1.style.tableLayout = "fixed";
    tbl1.setAttribute('border', '1');
    var tbdy1 = document.createElement('tbody');
    var tr1 = document.createElement('tr');

    //Picture
    var td1 = document.createElement('td');
    td1.style.width = '250px';
    td1.style.height = '250px';

    //Content
    var td2 = document.createElement('td');
    td2.setAttribute("id", "edit");
    td2.setAttribute("contenteditable", "true");
    td2.setAttribute("valign", "top");
    td2.setAttribute("overflow", "hidden");

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tbdy1.appendChild(tr1);
    tbl1.appendChild(tbdy1);

    document.getElementById("beginBody").appendChild(tbl1);
}