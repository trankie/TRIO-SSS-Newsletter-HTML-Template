var eventNumber = 0;
function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function addUpcomingEvent(){
    var new_name=document.getElementById("upcomingEvent_Name").value;
    var new_link=document.getElementById("upcomingEvent_Link").value;
    var new_info=document.getElementById("upcomingEvent_Date_Time_Location").value;
       
    var table=document.getElementById("upcomingEventTable");
    if(new_name === '' || new_info === ''){
        alert("Error, please fill in both \n'Name of Upcoming Event' and 'Date/ Location/ Time'");
    }else{
        if(new_link === ''){
            var row = table.insertRow(-1).outerHTML="<tr class='UpERow' id='row"+eventNumber+"'><td align='center' id='name_row"+eventNumber+"' class='wrapword' style='border-right:2px solid #000;height:auto'>"+new_name+"</td><td align='center' id='info_col"+eventNumber+"'class='wrapword'>"
                +new_info+"</td><td><input type='button' class='delete button buttonManipulate buttonDelete' onclick='delete_row("+eventNumber+")' style='float:right'></td></tr>";
        }else{
            var row = table.insertRow(-1).outerHTML="<tr class='UpERow' id='row"+eventNumber+"'><td align='center' id='name_row"+eventNumber+"' class='wrapword' style='border-right:2px solid #000;height:auto'><a class='center' target='_blank' rel='noopener noreferrer' href='"+new_link+"'>"+new_name+"</a></td><td align='center' id='info_col"+eventNumber+"'class='wrapword'>"
                +new_info+"</td><td><input type='button' class='delete button buttonManipulate buttonDelete' onclick='delete_row("+eventNumber+")' style='float:right'></td></tr>";
        }
        eventNumber++;
    }
    document.getElementById("upcomingEvent_Name").value="";
    document.getElementById("upcomingEvent_Link").value="";
    document.getElementById("upcomingEvent_Date_Time_Location").value="";
}