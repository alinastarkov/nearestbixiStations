import axios from "axios";

export function getAllBixiStationsInfo() {
  return axios({
    url: "https://api-core.bixi.com/gbfs/en/station_information.json",
    method: "GET"
  })
    .then(res => res.data)
    .catch(err => console.error(err));
}

export function getAllBixiStationsAvailability() {
  return axios({
    url: "https://api-core.bixi.com/gbfs/en/station_status.json",
    method: "GET"
  })
    .then(res => res.data)
    .catch(err => console.error(err));
}
