var dateValue = '';
var eventIDList = [];
var eventTitleList = [];
var eventBodyList = [];

var tempIDHolder = '';
var tempTitleHolder= '';
var tempBodyHolder = '';

var upcomingNameList = [];
var upcomingLinkList = [];
var upcomingInfoList = [];
var linkAt = [];

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

    var tempLinkName = '';
    var templinkURL = '';
    var tempUpInfo = '';

    date = document.getElementById("date-input-field-ID");

    dateValue = date.value;

    eventEntry = document.getElementsByClassName('ulEntry');
    upcomingEvent = document.getElementById('upcomingEventTable');

    for(var i = 0; i < eventEntry.length; i++){
        tempIDHolder = eventEntry[i].id.replace(/[0-9]/g, '');
        tempTitleHolder = eventEntry[i].children[0].innerHTML

        if(tempIDHolder === "Left"){
            tempBodyHolder = eventEntry[i].children[5].innerHTML;
        }else if(tempIDHolder === "Middle"){
            tempBodyHolder = eventEntry[i].children[2].innerHTML;
        }else{
            tempBodyHolder = eventEntry[i].children[3].innerHTML;
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
        //console.log(upcomingEvent.rows)
    }

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
    var mainContainer = document.getElementById("publishContainer");
    mainContainer.setAttribute('display', 'block')
    
}