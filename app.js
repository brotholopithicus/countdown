function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60) % 24));
	var days = Math.floor((t / (1000 * 60 * 60 * 24)));
	return {
		'total': t,
		'seconds': seconds,
		'minutes': minutes,
		'hours': hours,
		'days': days
	}
}

function initializeCountdown(id, endtime) {
	var timer = document.getElementById(id);
	var daysSpan = timer.querySelector('.days');
	var hoursSpan = timer.querySelector('.hours');
	var minutesSpan = timer.querySelector('.minutes');
	var secondsSpan = timer.querySelector('.seconds');

	function updateTimer() {
		var t = getTimeRemaining(endtime);
		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeInterval);
		}
	}

	updateTimer();

	var timeInterval = setInterval(updateTimer, 1000);
}

var arrival = new Date(2016, 6, 30, 20, 36);
initializeCountdown('timer', arrival);
