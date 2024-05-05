import axios from "axios";

const bikesUrl = "https://bikes-api.onrender.com/bikes";

const getBikes = () => {
  return axios.get(bikesUrl);
};

const getImgUrl = (bikeId) => {
  return `${bikesUrl}/${bikeId}/imagen`;
};

export default {
  getBikes,
  getImgUrl,
};
