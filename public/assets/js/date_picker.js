//  **------01 basic-date**
config = {
    enableTime: false,
}
flatpickr(".basic-date",config);

// **------02 time-picker**
timepicker = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
}
flatpickr(".time-picker",timepicker);

//  **------03 date-time-picker**
datetimepicker = {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
}
flatpickr(".date-time-picker",datetimepicker);

//  **------ 04 picker-range**
pickerrange = {
    mode: "range"
}
flatpickr(".picker-range",pickerrange);


// **------05 human-friendly-dates**

humanfriendlydates = {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
}
flatpickr(".human-friendly-dates",humanfriendlydates);

// **------06 multiple-dates**

Multipledates= {
    mode: "multiple",
    dateFormat: "Y-m-d"
}
flatpickr(".multiple-dates",Multipledates);

//  **------ 07 week-numbers**

weeknumbers= {
    weekNumbers: true,
}
flatpickr(".week-numbers",weeknumbers);


//  **------ 08 hour-time-picker**

hourtimepicker= {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
}
flatpickr(".hour-time-picker",hourtimepicker);

//  **------ 09 time-picker-limits**

timepickerlimits= {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    minTime: "16:00",
    maxTime: "22:30",
}
flatpickr(".time-picker-limits",timepickerlimits);

//  **------ 10 inline**

Inline= {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
}
flatpickr(".inline",Inline);

