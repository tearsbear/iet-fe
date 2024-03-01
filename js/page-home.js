$(document).ready(function () {
  AOS.init();

  let projects = [
    {
      id: 1,
      name: "PLN",
      description: "The projects are owned by <br> PLN based on RUPTL",
      link: "#",
    },
    {
      id: 2,
      name: "IPP",
      description: "The projects are owned by <br> IPP based on RUPTL",
      link: "#",
    },
    {
      id: 3,
      name: "PRIVATE <br> SECTOR",
      description: "The projects are owned by <br> PRIVATE SECTOR beyond RUPTL",
      link: "#",
    },
    {
      id: 4,
      name: "ESDM",
      description: "The projects are <br> under MEMR",
      link: "#",
    },
    {
      id: 5,
      name: "COMMUNITY BASED",
      description: "The projects are initiated by <br> Community",
      link: "#",
    },
  ];

  let partners = [
    {
      link: "https://maritim.go.id/",
      image: "1.svg",
    },
    {
      link: "https://www.ekon.go.id/",
      image: "2.svg",
    },
    {
      link: "https://www.esdm.go.id/",
      image: "3.svg",
    },
    {
      link: "https://www.kemenkeu.go.id/",
      image: "4.svg",
    },
    {
      link: "https://www.bappenas.go.id/",
      image: "5.svg",
    },
    {
      link: "https://www.bumn.go.id/",
      image: "6.svg",
    },
    {
      link: "https://www.menlhk.go.id/",
      image: "7.svg",
    },
    {
      link: "https://www.pln.co.id/",
      image: "8.svg",
    },
    {
      link: "https://ptsmi.co.id/",
      image: "9.svg",
    },
  ];

  function getProject() {
    for (let ip = 0; ip < projects.length; ip++) {
      let delay = ip * 100; // Adjust the delay for each card
      let item = `<div class="col anchor-${ip}" data-aos="fade-up" data-aos-duration="1300" data-aos-anchor=".anchor-${ip}" data-aos-delay="${delay}">
                <div class="shadow-sm card-grow">
                    <div class="before title-${ip} font-inter-extrabold">
                        ${projects[ip].name}
                    </div>
                    <div class="after">
                        <p class="font-inter-regular card-desc">${projects[ip].description}</p>
                        <a href="${projects[ip].link}" class="font-inter-regular card-link">more info here</a>
                    </div>
                </div>
            </div>`;

      $(item).appendTo(".content-project");

      // Additional customization if needed
      if (projects[ip].id == 3) {
        $(`.title-${ip}`).css("font-size", "25px");
      } else if (projects[ip].id == 5) {
        $(`.title-${ip}`).css("font-size", "22px");
      }
    }
  }

  function getPartner() {
    for (let ir = 0; ir < partners.length; ir++) {
      let item = `<div class="col">
                    <a href="${partners[ir].link}" target="_blank">
                        <img src="../iet/assets/partner/${partners[ir].image}" alt="">
                    </a>
                </div>`;
      $(item).appendTo(".content-partner");
    }
  }

  getProject();
  getPartner();

  // Define custom icon
  var defaultIcon = L.icon({
    iconUrl: "../iet/assets/icons/marker.svg",
    iconSize: [32, 32], // size of the icon
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
  });

  var activeIcon = L.icon({
    iconUrl: "../iet/assets/icons/marker-active.svg",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
  });

  var markersData = [];

  // Fetch the JSON file of province
  fetch("js/provinces.json")
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      // Assign the parsed data to the markersData array
      markersData = data;

      // Initialize Leaflet map
      var map = L.map("mapid", {
        dragging: false, // Disable dragging
        scrollWheelZoom: false, // Disable zooming
        zoomControl: false, // Disable zoom control
        doubleClickZoom: false, // Disable double-click zoom
      }).setView([-2, 120], 5.4); // Adjusted coordinates and zoom level

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
        {
          attribution: "©OpenStreetMap, ©CartoDB",
        }
      ).addTo(map);

      var activeMarker = null;

      markersData.forEach(function (markerData, index) {
        var marker = L.marker(markerData.latlng, { icon: defaultIcon }).addTo(
          map
        );

        marker.on("mouseover", function (e) {
          if (activeMarker !== null && activeMarker !== marker) {
            activeMarker.setIcon(defaultIcon);
          }
          marker.setIcon(activeIcon);
          activeMarker = marker;
          marker.openPopup();
        });

        marker.on("mouseout", function () {
          if (activeMarker !== this) {
            this.setIcon(defaultIcon);
            this.closePopup();
          }
        });

        marker.on("click", function (e) {
          if (index == 0) {
            map.setView(markerData.latlng, 7);
          } else {
            map.setView(markerData.latlng, 10);
          }
          if (activeMarker === this) {
            // Close popup if clicked on the active marker
            this.closePopup();
          } else {
            // Set icon for the clicked marker and update activeMarker
            if (activeMarker) {
              activeMarker.setIcon(defaultIcon);
            }
            this.setIcon(activeIcon);
            activeMarker = this;
            // Log message when marker is clicked
          }
          console.log("Marker clicked: " + markerData.capital);
          // Clear project list
          $("#project-list").empty();

          $(".ptitle").text(`${markerData.capital} Province`);

          // Populate project list when marker is clicked
          $.each(markerData.projects, function (index, project) {
            let pitem = `<div class="pcontent">
                        <img class="picon" src="assets/icons/file-alt.svg" alt="">
                        <a href="#" class="font-inter-regular plink">
                            ${project.name}
                        </a>
                    </div>`;
            $("#project-list").append(pitem);
          });

          // Show project panel
          $("#project-panel").addClass("show");
        });

        marker.bindPopup(
          `<h3 class="font-inter-medium text-primary">${markerData.capital}</h3>
      <p class="font-inter-regular">
          <img src="assets/icons/file.svg" alt=""> 55 projects
      </p>`
        );
      });

      map.on("click", function (e) {
        map.eachLayer(function (layer) {
          if (layer instanceof L.Marker) {
            layer.setIcon(defaultIcon);
          }
        });
        activeMarker = null;
      });

      $("#close-panel-btn").click(function () {
        activeMarker.setIcon(defaultIcon);
        activeMarker.closePopup();
        activeMarker = null;
        $("#project-panel").removeClass("show");
        // Reset map view to default position and zoom level
        map.setView([-2, 121], 5); // Adjusted coordinates and zoom level
      });
    })
    .catch((error) => {
      console.error("Error fetching provinces:", error);
    });
});
