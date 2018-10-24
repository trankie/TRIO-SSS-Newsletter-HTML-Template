function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function addUpcomingEvent(){
    var new_name=document.getElementById("upcomingEvent_Name").value;
    var new_link=document.getElementById("upcomingEvent_Link").value;
    var new_info=document.getElementById("upcomingEvent_Date_Time_Location").value;
       
    var table=document.getElementById("upcomingEventTable");
    var table_len=(table.rows.length);
    if(new_name === '' || new_info === ''){
        alert("Error, please fill in both \n'Name of Upcoming Event' and 'Date/ Location/ Time'");
    }else{
        if(new_link === ''){
            var row = table.insertRow(table_len).outerHTML="<tr class='UpERow' id='row"+table_len+"'><td align='center' id='name_row"+table_len+"' colspan='2' style='float:right' class='wrapword'>"+new_name+"</td><td id='info_col"+table_len+"'class='wrapword'><span style='border-left:2px solid #000;height:500px'></span>"
                +new_info+"</td><td><input type='button' class='delete button buttonManipulate buttonDelete' onclick='delete_row("+table_len+")' style='float:right'></td></tr>";
        }else{
            var row = table.insertRow(table_len).outerHTML="<tr class='UpERow' id='row"+table_len+"'><td align='center' id='name_row"+table_len+"' colspan='2' style='float:right' class='wrapword'><a class='center' target='_blank' rel='noopener noreferrer' href='"+new_link+"'>"+new_name+"</a></td><td id='info_col"+table_len+"'class='wrapword'><span style='border-left:2px solid #000;height:500px'></span>"
                +new_info+"</td><td><input type='button' class='delete button buttonManipulate buttonDelete' onclick='delete_row("+table_len+")' style='float:right'></td></tr>";
        }
    }
    document.getElementById("upcomingEvent_Name").value="";
    document.getElementById("upcomingEvent_Link").value="";
    document.getElementById("upcomingEvent_Date_Time_Location").value="";
}