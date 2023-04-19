// navigator.geolocation.getCurrentPosition((position) => {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;

//   abc(latitude, longitude);
// });

// function abc(la, lo) {
//   status.textContent = '';
//   mapLink.href = `https://www.openstreetmap.org/#map=18/${la}/${lo}`;
//   mapLink.textContent = `Latitude: ${la} °, Longitude: ${lo} °`;
// }

// function abc(lo, la) {
//   console.log(`lo: ${lo}, la: ${la}`);
//   $.ajax({
//     url: `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${la}&y=${lo}&input_coord=WGS84`,
//     type: 'GET',
//     headers: {
//       Authorization: '5cfb336f1c50b92baecb583abde4862a',
//     },
//     success: function (result) {
//       let totatlCount = result.meta.total_count; //총 문서 수
//       if (totatlCount > 0) {
//         if (result.documents[0].road_address === null) {
//           addressName = result.documents[0].address.region_1depth_name; //지역(시) 이름
//         } else {
//           addressName = result.documents[0].road_address.region_1depth_name;
//         }
//       }
//       addr = addressName;
//     },
//     error: function (e) {
//       console.log(e);
//     },
//   });
// }

function geoFindMe() {
  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
