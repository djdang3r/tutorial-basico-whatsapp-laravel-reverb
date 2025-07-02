//  **------calender **

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
  
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      navLinks: true,
      editable: true,
      dayMaxEvents: true,
      headerToolbar: {
        left: 'prev,next,addEventButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      },
      customButtons: {
        addEventButton: {
          text: 'add event...',
          click: function() {
            var dateStr = prompt('Enter a date in YYYY-MM-DD format');
            var date = new Date(dateStr + 'T00:00:00');

            if (!isNaN(date.valueOf())) { 
              calendar.addEvent({
                title: 'dynamic event',
                start: date,
                allDay: true
              });
              alert('Great. Now, update your database...');
            } else {
              alert('Invalid date.');
            }
          }
        }
      },
      events: [
        {
          title: 'Holiday',
          start: '2024-07-01',
          end: '2024-07-02',
          color:'#26C450',
          className: "event-success",
        },
        {
          title: 'Meeting',
          start: '2024-07-09',
          className: "event-primary",
        },
        {
          title: 'Meeting',
          start: '2024-07-15',
          className: "event-primary",
        },
        {
          title: 'Tour',
          start: '2024-07-18',
          end: '2024-07-21',
          className: "event-warning",
        },
        {
          title: 'Lunch',
          start: '2024-07-30',
          end: '2024-07-31',
          color:' #F09E3C',
          className: "event-secondary",
        },
        {
          title: 'Meeting',
          start: '2024-07-12T10:30:00',
          end: '2024-07-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2024-07-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2024-07-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2024-07-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2024-07-12T20:00:00'
        },
        {
          groupId: 'availableForMeeting',
          start: '2024-07-11T10:00:00',
          end: '2024-07-11T16:00:00',
          display: 'background',
        },
        {
          groupId: 'availableForMeeting',
          start: '2024-07-13T10:00:00',
          end: '2024-07-13T16:00:00',
          display: 'background'
        },  
      ],
      eventClick:function(){
        $('#exampleModal').modal('show');
      },
      selectable: true,
      selectMirror: true,
      select: function (arg) {
        var title = prompt('Event Title:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
        }
        calendar.unselect()
      },
      
      droppable: true,
      drop: function (arg) {
        if (document.getElementById('drop-remove').checked) {
  
          arg.draggedEl.parentNode.removeChild(arg.draggedEl);
        }
      }
    })
  
    var containerEl = document.getElementById('events-list');
    new FullCalendar.Draggable(containerEl, {
      itemSelector: '.list-event',
      eventData: function (eventEl) {
        return {
          title: eventEl.innerText.trim(), 
          start: new Date,
          className: eventEl.getAttribute("data-class")
        }
      }
    });
  

    calendar.render();
  });
  
// **------ slider js**

$('.slider').slick({
  dots: false,
  speed: 1000,
  slidesToShow: 3,
  centerMode: true,
  arrows: false,
 vertical: true,
 verticalSwiping: true,
 focusOnSelect: true,
 autoplay: true,
 autoplaySpeed: 1000,             
});

// $('.moreless-button').click(function() {
//   $('.moretext').slideToggle();
//   if ($('.moreless-button').text() == "Read more") {
//     $(this).text("Read less")
//   } else {
//     $(this).text("Read more")
//   }
// });