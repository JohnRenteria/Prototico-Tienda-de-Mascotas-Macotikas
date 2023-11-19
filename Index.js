const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
initMap();

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

document.getElementById("calendar").addEventListener("click", function() {
  window.location.href = "https://calendar.google.com/calendar/u/0/r?pli=1";
});

document.getElementById("visita").addEventListener("click", function() {
  window.location.href = "https://www.instagram.com/petfinder/?hl=es";
});
