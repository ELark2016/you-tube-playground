import axios from "axios";
const BASEURL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=";
const APIKEY = "&key=AIzaSyC8VseU5VjUiSae-P22Yz0pjifR_JJS48k";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
