var dateValue = '';
var eventIDList = [];
var eventTitleList = [];
var eventBodyList = [];

var upcomingNameList = [];
var upcomingLinkList = [];
var upcomingInfoList = [];
var linkAt = [];

var imgList = [];

function savingCurrentValuesInTemplate(){
    var date = '';
    var eventEntry = '';
    var upcomingEvent = '';

    dateValue = '';
    eventIDList = [];
    eventTitleList = [];
    eventBodyList = [];

    tempIDHolder = '';
    tempTitleHolder= '';
    tempBodyHolder = '';

    upcomingNameList = [];
    upcomingLinkList = [];
    upcomingInfoList = [];
    linkAt = [];

    imgList = [];

    var tempLinkName = '';
    var templinkURL = '';
    var tempUpInfo = '';
    var tempImg = '';
    
    var numb = '';
    date = document.getElementById("date-input-field-ID");

    dateValue = date.value;

    if(dateValue == ""){
        alert("Please enter a date underneath the TRIO banner");
        return;
    }

    eventEntry = document.getElementsByClassName('ulEntry');
    upcomingEvent = document.getElementById('upcomingEventTable');

    for(var i = 0; i < eventEntry.length; i++){
        tempIDHolder = eventEntry[i].id.replace(/[0-9]/g, '');
        numb = eventEntry[i].id.match(/\d/g);
        numb = numb.join("");
        tempTitleHolder = eventEntry[i].children[0].innerHTML

        if(tempIDHolder === "Left"){
            tempBodyHolder = eventEntry[i].children[5].innerHTML;
            tempImg = '#'+'uploadImage'+numb
            $(tempImg).appendTo("#FakeHoldingBay")
            imgList.push(tempImg);
        }else if(tempIDHolder === "Middle"){
            tempBodyHolder = eventEntry[i].children[2].innerHTML;
        }else{
            tempBodyHolder = eventEntry[i].children[3].innerHTML;
            tempImg = '#'+'uploadImage'+numb
            $(tempImg).appendTo("#FakeHoldingBay")
            imgList.push(tempImg);
        }

        eventTitleList.push(tempTitleHolder);
        eventIDList.push(tempIDHolder);
        eventBodyList.push(tempBodyHolder);
    }

    for(var i = 0; i < upcomingEvent.rows.length; i++){
        if(upcomingEvent.rows[i].children[0].children.length === 1){
            templinkURL = upcomingEvent.rows[i].children[0].children[0].href;
            upcomingLinkList.push(templinkURL); 
            linkAt.push(i);
        }
        tempUpInfo = upcomingEvent.rows[i].children[1].innerText;
        tempLinkName = upcomingEvent.rows[i].children[0].innerText;

        upcomingInfoList.push(tempUpInfo);
        upcomingNameList.push(tempLinkName);
    }


    $('#socialMedia').appendTo("#FakeTableBay");
    removeTemplate();
    insertPublishedTemplate();
}

function removeTemplate(){
    var mainDocument = document.getElementById("originTable");
    var publish_button = document.getElementById("publish_buttonID");
    var modal = document.getElementById("modal_ID");
    mainDocument.outerHTML="";
    publish_button.outerHTML="";
    modal.outerHTML="";

}

function insertPublishedTemplate(){
    var imgCounter = 0;
    var mainContainer = document.getElementById("publishContainer");
    var dateContainer = document.getElementById("date-input-field-ID");
    var attachMe = document.getElementById('divToLatchOn');
    mainContainer.style.display='block';
    dateContainer.innerHTML = dateValue;
    
    var newBreakLine = document.createElement("hr");
    newBreakLine.classList.add("style-nine")
    var table1 = document.createElement("table");
    table1.style.width = "600px";
    var tbody1 = document.createElement("tbody");
    var tr1 = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.appendChild(newBreakLine);
    tr1.appendChild(td1);
    tbody1.appendChild(tr1);
    table1.appendChild(tbody1);
    attachMe.appendChild(table1);

    for(var i = 0; i < eventIDList.length; i++){

        var table2 = document.createElement("table");
        var tbody2 = document.createElement("tbody");
        var tr2 = document.createElement("tr");
        var td2 = document.createElement("td");

        var titleDiv = document.createElement("div");
        var textDiv = document.createElement("div");

        titleDiv.classList.add("date-input-field")
        titleDiv.classList.add("headerFont");
        textDiv.classList.add("wrapword");
        textDiv.classList.add("bodyText");
        

        titleDiv.innerHTML = eventTitleList[i];
        textDiv.innerHTML = eventBodyList[i];

        attachMe.appendChild(titleDiv);

        if(eventIDList[i] === "Left"){
            td2.style.display = "inline-block";
            var td3 = document.createElement("td");

            td3.setAttribute("id", "td"+i);
            var newlink = "#"+"td"+i
            textDiv.classList.add("option1")

            td3.classList.add("verticaltop");
            
            tr2.appendChild(td3);
            tbody2.appendChild(tr2);
            td2.appendChild(textDiv);
            tr2.appendChild(td2);
            tbody2.appendChild(tr2);
            table2.appendChild(tbody2);
            attachMe.appendChild(table2);
            $(imgList[imgCounter]).appendTo(newlink)
            $(imgList[imgCounter]).css('margin', '10px')
            imgCounter++;
        }else if(eventIDList[i] === "Right"){
            td2.style.display = "inline-block";
            var td3 = document.createElement("td");

            td3.setAttribute("id", "td"+i);
            var newlink = "#"+"td"+i
            textDiv.classList.add("option1")
            
            td3.classList.add("verticaltop");
            
            td2.appendChild(textDiv);
            tr2.appendChild(td2);
            tbody2.appendChild(tr2);
            tr2.appendChild(td3);
            tbody2.appendChild(tr2);
            table2.appendChild(tbody2);
            attachMe.appendChild(table2);
            $(imgList[imgCounter]).appendTo(newlink)
            $(imgList[imgCounter]).css('margin', '10px')
            imgCounter++;
        }else{
            textDiv.style.width = "570px";
            header.style.textAlign = "center";
            td2.appendChild(textDiv);
            tr2.appendChild(td2);
            tbody2.appendChild(tr2);
            table2.appendChild(tbody2);
            attachMe.appendChild(table2);
        }
        if( i+1 !== eventIDList.length){
            var newBreakLine = document.createElement("hr");
            newBreakLine.classList.add("style-ten")
            var table1 = document.createElement("table");
            table1.style.width = "600px"
            var tbody1 = document.createElement("tbody");
            var tr1 = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.appendChild(newBreakLine);
            tr1.appendChild(td1);
            tbody1.appendChild(tr1);
            table1.appendChild(tbody1);
            attachMe.appendChild(table1);
        }
        
    }
    var newBreakLine = document.createElement("hr");
    newBreakLine.classList.add("style-nine")
    var table1 = document.createElement("table");
    table1.style.width = "600px";
    var tbody1 = document.createElement("tbody");
    var tr1 = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.appendChild(newBreakLine);
    tr1.appendChild(td1);
    tbody1.appendChild(tr1);
    table1.appendChild(tbody1);
    attachMe.appendChild(table1);

    var table1 = document.createElement("table");
    table1.style.width = "600px";
    var tbody1 = document.createElement("tbody");
    var tr1 = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = 'TRIO Upcoming Events'
    td1.classList.add('headerFont')

    tr1.appendChild(td1);
    tbody1.appendChild(tr1);
    table1.appendChild(tbody1);
    attachMe.appendChild(table1);

    var linkTable = document.createElement("table");
    linkTable.style.width = "600px";
    var linkBody = document.createElement("tbody");
    var linkRow = document.createElement("tr");
    var linkColumn1 = document.createElement("td");
    var linkColumn2 = document.createElement("td");
    var linkCounter = 0;
    for(var i = 0; i < upcomingNameList.length; i++){
        var linkRow = document.createElement("tr");
        var linkColumn1 = document.createElement("td");
        var linkColumn2 = document.createElement("td");

        linkColumn1.style.height = "auto";
        linkColumn1.classList.add('wrapword');
        linkColumn1.classList.add('MiddleDivider');
        linkColumn1.setAttribute('align', 'center');
        linkColumn2.classList.add('wrapword');
        linkColumn2.setAttribute('align', 'center');

        if(i === linkAt[linkCounter]){
            var linkContainer = document.createElement("a");
            linkContainer.classList.add('center');
            linkContainer.setAttribute('target', '_blank');
            linkContainer.setAttribute('rel', 'noopener noreferrer');
            linkContainer.setAttribute('href', upcomingLinkList[linkCounter]);
            linkCounter++;
            linkContainer.innerHTML = upcomingNameList[i];
        }else{
            var linkContainer = document.createElement("span");
            linkContainer.classList.add('center');
            linkContainer.innerHTML = upcomingNameList[i];
        }
        linkColumn2.innerHTML = upcomingInfoList[i];
        linkColumn1.appendChild(linkContainer)

        linkRow.appendChild(linkColumn1);
        linkRow.appendChild(linkColumn2);
        linkBody.appendChild(linkRow);
        linkTable.appendChild(linkBody);
        attachMe.appendChild(linkTable);

    }

    var newBreakLine = document.createElement("hr");
    newBreakLine.classList.add("style-nine")
    var table1 = document.createElement("table");
    table1.style.width = "600px";
    var tbody1 = document.createElement("tbody");
    var tr1 = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.appendChild(newBreakLine);
    tr1.appendChild(td1);
    tbody1.appendChild(tr1);
    table1.appendChild(tbody1);
    attachMe.appendChild(table1);
    
    var socialTable = document.createElement("table");
    socialTable.style.width = "600px";
    var socialBody = document.createElement("tbody");
    socialBody.setAttribute('id', 'socialMediaPublished');
    socialTable.appendChild(socialBody);
    attachMe.appendChild(socialTable);
    $("#socialMedia").appendTo("#socialMediaPublished");

    var newBreakLine = document.createElement("hr");
    newBreakLine.classList.add("style-nine")
    var table1 = document.createElement("table");
    table1.style.width = "600px";
    var tbody1 = document.createElement("tbody");
    var tr1 = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.appendChild(newBreakLine);
    tr1.appendChild(td1);
    tbody1.appendChild(tr1);
    table1.appendChild(tbody1);
    attachMe.appendChild(table1);
    
    var header = document.createElement("div");
    header.classList.add('headerFont');
    header.innerText = "Contact Info";
    var address = document.createElement("div");
    address.classList.add('bodyText')
    address.innerText = "337 Waldo Hall Oregon State University Corvallis, Oregon 97331-6405";
    var phone = document.createElement("div");
    phone.classList.add('bodyText')
    phone.innerText = "Phone: 541-737-3628";
    var fax = document.createElement("div");
    fax.classList.add('bodyText')
    fax.innerText = "Fax: 541-737-3998";
    var table1 = document.createElement("table");
    table1.style.width = "600px";
    var tbody1 = document.createElement("tbody");

    var tr1 = document.createElement("tr");
    var tr2 = document.createElement("tr");
    var tr3 = document.createElement("tr");
    var tr4 = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.appendChild(header);
    td2.appendChild(address);
    td3.appendChild(phone);
    td4.appendChild(fax);
    header.style.textAlign = "center";
    address.style.textAlign = "center";
    phone.style.textAlign = "center";
    fax.style.textAlign = "center";
    header.style.margin = 0;
    address.style.margin = 0;
    phone.style.margin = 0;
    fax.style.margin = 0;

    tr1.appendChild(td1);
    tr2.appendChild(td2);
    tr3.appendChild(td3);
    tr4.appendChild(td4);
    tbody1.appendChild(tr1);
    tbody1.appendChild(tr2);
    tbody1.appendChild(tr3);
    tbody1.appendChild(tr4);
    table1.appendChild(tbody1);
    attachMe.appendChild(table1);
    

}