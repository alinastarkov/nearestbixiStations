function closestLocation(targetLocation, locationData) {
  function vectorDistance(dx, dy) {
    return dx * dx + dy * dy;
  }

  function locationDistance(location1, location2) {
    var dx = location1.lat - location2.lat,
      dy = location1.lon - location2.lon;
    return vectorDistance(dx, dy);
  }

  function coordinatesWithDistance() {
    return locationData.map(location => {
      var coordObj = Object.assign(location, {
        relDistance: locationDistance(targetLocation, location)
      });
      return coordObj;
    });
  }

  const sortedCoordinates = coordinatesWithDistance().sort((a, b) => {
    return a.relDistance - b.relDistance;
  });
  return sortedCoordinates.slice(0, 6);
}

export function getNearestStations(
  currentLat,
  currentLong,
  stationsInfo,
  stationsAvailability
) {
  const targetLocation = { lat: currentLat, lon: currentLong };
  const closestStations = closestLocation(
    targetLocation,
    stationsInfo.data.stations
  );
  const ids = closestStations.map(station => station.station_id);
  const availableStationsInfo = stationsAvailability.data.stations.filter(
    station => ids.indexOf(station.station_id) !== -1
  );
  const closestStationsWithInfo = closestStations.map(itm => ({
    ...availableStationsInfo.find(item => item.station_id === itm.station_id),
    ...itm
  }));
  return closestStationsWithInfo;
}

export function getNearestStationsToRent(listOfNearestStations, quantity) {
  return listOfNearestStations.filter(
    station => station.num_bikes_available >= quantity
  );
}

export function getNearestStationsToReturn(listOfNearestStations, quantity) {
  return listOfNearestStations.filter(
    station => station.num_docks_available >= quantity
  );
}
