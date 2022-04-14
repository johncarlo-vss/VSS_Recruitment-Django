function initMap() {
  // Styles a map in night mode.

  const labels = 'Virtual Staffing Solutions';
  let labelIndex = 0;
  // let marker_carlosta;
  // let marker_tacloban;
  // let marker_chinatown;

  const carlosta = { lat: 11.025065, lng: 124.604183 };
  const chinatown = { lat: 11.018179, lng: 124.606279 };
  const tacloban = { lat: 11.191775, lng: 124.992549 };
  const center = { lat: 11.091933, lng: 124.783100 }

  const map = new google.maps.Map(document.getElementById("map"), {
    center: chinatown,
    zoom: 15,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#0d0d0d" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#2B2B2B" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#4C4C4C" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#191919" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });

  // The marker, positioned at Uluru

  // For VSS Carlosta
    marker_carlosta = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: carlosta,
      map: map,
      title: "Virtual Staffing Solutions",
    });
    window.addEventListener("load", (event) => {
      toggleBounce_carlosta();
    });
    window.onload = (event) => {
      toggleBounce_carlosta();
    };

    const infowindow_carlosta = new google.maps.InfoWindow({
      content: "<p style='color: #000; font-size: 15px; font-weight:500'>VIRTUAL STAFFING SOLUTIONS &nbsp <br/> Carlosta Site </p><p style='margin-top: -10px; font-weight:400'>Infront of Robinsons Place Ormoc</p><p style='margin-top: -14px; font-weight:400'>Inside the Carlosta Hotel</p><p style='margin-top: -14px; font-weight:400'>Ormoc City</p><p style='margin-top: -14px;  font-weight:400; margin-bottom: 0;'>Leyte, Philippines</p>",
    });
    google.maps.event.addListener(marker_carlosta, "click", () => {
      infowindow_carlosta.open(map, marker_carlosta);
    });

    marker_carlosta.addListener("click", () => {
      map.setZoom(17);
      map.setCenter(marker_carlosta.getPosition());
    });

  // For VSS Chinatown
    marker_chinatown = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: chinatown,
      map: map,
      title: "Virtual Staffing Solutions",
    });
    window.addEventListener("load", (event) => {
      toggleBounce_chinatown();
    });
    window.onload = (event) => {
      toggleBounce_chinatown();
    };


    const infowindow_chinatown = new google.maps.InfoWindow({
      content: "<p style='color: #000; font-size: 15px; font-weight:500'>VIRTUAL STAFFING SOLUTIONS &nbsp <br/>Chinatown East Gate Site</p><p style='margin-top: -10px; font-weight:400'>In 2nd Floor and 3rd Floor of </p><p style='margin-top: -14px; font-weight:400'>Chinatown East Gate</p><p style='margin-top: -14px; font-weight:400'>Ormoc City</p><p style='margin-top: -14px;  font-weight:400; margin-bottom: 0;'>Leyte, Philippines</p>",
    });
    google.maps.event.addListener(marker_chinatown, "click", () => {
      infowindow_chinatown.open(map, marker_chinatown);
    });

    marker_chinatown.addListener("click", () => {
      map.setZoom(17);
      map.setCenter(marker_chinatown.getPosition());
    });

  // For VSS Tacloban
    marker_tacloban = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: tacloban,
      map: map,
      title: "Virtual Staffing Solutions",
    });
    window.addEventListener("load", (event) => {
      toggleBounce_tacloban();
    });
    window.onload = (event) => {
      toggleBounce_tacloban();
    };


    const infowindow_tacloban = new google.maps.InfoWindow({
      content: "<p style='color: #000; font-size: 15px; font-weight:500'>VIRTUAL STAFFING SOLUTIONS &nbsp<br/> Tacloban Site</p><p style='margin-top: -10px; font-weight:400'>Dragon Ball Compound</p><p style='margin-top: -14px; font-weight:400'>Maharlika Highway</p><p style='margin-top: -14px; font-weight:400'>Tacloban City</p><p style='margin-top: -14px;  font-weight:400; margin-bottom: 0;'>Leyte, Philippines</p>",
    });
    google.maps.event.addListener(marker_tacloban, "click", () => {
      infowindow_tacloban.open(map, marker_tacloban);
    });

    marker_tacloban.addListener("click", () => {
      map.setZoom(17);
      map.setCenter(marker_tacloban.getPosition());
    });



}


// Bouncing marker for VSS Carlosta
function toggleBounce_carlosta() {
  if (marker_carlosta.getAnimation() !== null) {
    marker_carlosta.setAnimation(null);
  } else {
    marker_carlosta.setAnimation(google.maps.Animation.BOUNCE);
  }
}
// Bouncing marker for VSS Chinatown
function toggleBounce_chinatown() {
  if (marker_chinatown.getAnimation() !== null) {
    marker_chinatown.setAnimation(null);
  } else {
    marker_chinatown.setAnimation(google.maps.Animation.BOUNCE);
  }
}
// Bouncing marker for VSS Tacloban
function toggleBounce_tacloban() {
  if (marker_tacloban.getAnimation() !== null) {
    marker_tacloban.setAnimation(null);
  } else {
    marker_tacloban.setAnimation(google.maps.Animation.BOUNCE);
  }
}
