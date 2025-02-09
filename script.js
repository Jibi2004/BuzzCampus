// Popup functionality
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
});

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}

// Dynamic event details for event.html
const urlParams = new URLSearchParams(window.location.search);
const eventName = urlParams.get('event');

if (eventName) {
  const eventData = {
    'esports': {
      title: 'eSports Tournament',
      image: 'https://d3c9kujynjspib.cloudfront.net/images/2022/08/22/daa725b7a70b6a7c73579283.png',
      description: 'Compete in the ultimate gaming showdown featuring popular titles like Valorant and FIFA.',
      date: 'February 15, 2025',
      time: '10:00 AM - 6:00 PM'
    },
    'drone-show': {
      title: 'Drone Show',
      image: 'https://wp.dronestories.com/app/uploads/2024/05/1666192890.png.webp',
      description: 'Experience a mesmerizing display of synchronized drones lighting up the night sky.',
      date: 'February 16, 2025',
      time: '7:00 PM - 8:00 PM'
    }
    // Add other events similarly
  };

  const event = eventData[eventName];
  if (event) {
    document.getElementById('event-title').textContent = event.title;
    document.getElementById('event-image').src = event.image;
    document.getElementById('event-description').textContent = event.description;
    document.getElementById('event-date').textContent = event.date;
    document.getElementById('event-time').textContent = event.time;
  }
}

// Registration form handling
document.getElementById('registration-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Registration successful!');
});