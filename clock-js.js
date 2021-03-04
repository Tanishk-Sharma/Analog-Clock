setInterval(() => {
	curr_date = new Date();

	hours = curr_date.getHours();
	minutes = curr_date.getMinutes();
	seconds = curr_date.getSeconds();
	
	rotate_hours_hand_by = 30*hours + 0.5*minutes;
	rotate_minutes_hand_by = 6*minutes;
	rotate_seconds_hand_by = 6*seconds;
	
	hours_hand.style.transform = `rotate(${rotate_hours_hand_by}deg)`;
	minutes_hand.style.transform = `rotate(${rotate_minutes_hand_by}deg)`;
	seconds_hand.style.transform = `rotate(${rotate_seconds_hand_by}deg)`;
}, 1000);