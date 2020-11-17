// Clock
 
function clock()
{
	let date = new Date();

	let time = [date.getHours(),date.getMinutes(),date.getSeconds()]; // |[0] = Часы| |[1] = Минуты| |[2] = Секунды|
	let week = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
	let days = date.getDay();

	if(time[0] < 10){time[0] = "0"+ time[0];}
	if(time[1] < 10){time[1] = "0"+ time[1];}
	if(time[2] < 10){time[2] = "0"+ time[2];}

	let current_time = [time[0],time[1],time[2]].join(':');
	let clock = document.getElementById("clock");
	let day = document.getElementById("week");

clock.innerHTML = current_time;
day.innerHTML = week[days];


setTimeout("clock()", 1000);
}

clock();

// ShowHide element
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

btn.addEventListener("click", btnClick);

function btnClick() {
  console.log(content.classList);

  if (content.classList.contains("hidden")) {
    btn.textContent = "Скрыть";
  } else {
    btn.textContent = "Показать";
  }

  content.classList.toggle("hidden");
}

// MenuJQuery

$(document).ready(function(){    
  $('#ddmenu li').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('ul',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul',this).stop(true,true).slideUp(200);
    }, this), 100));
  });

});

// Add image with timeout

$(document).ready(function(){
    
	setTimeout(function () {
    $("#img").append(' <img src="img/d19.jpg" alt="Дом с террасой" title="двухэтажный дом "/>'); 
}, 4000);	
  });