// client/app.js

// WebSocket connection setup
const socket = new WebSocket('ws://your-websocket-url');

socket.onopen = function() {
    console.log('WebSocket connection established');
};

socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    renderProvinces(data.provinces);
};

socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};

// Function to render provinces
function renderProvinces(provinces) {
    const provinceContainer = document.getElementById('provinces');
    provinceContainer.innerHTML = '';
    provinces.forEach(province => {
        const provinceElement = document.createElement('div');
        provinceElement.textContent = province.name;
        provinceContainer.appendChild(provinceElement);
    });
}

// Initial function call
// socket.send('Request initial provinces');
