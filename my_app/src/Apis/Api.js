import axios from "axios"

const baseUrl = "https://www.googleapis.com/youtube/v3/videos"

export const get_popular_videos = async () => {
    try{
      const response = await axios.get(baseUrl,{
        params: {
            part: "snippet",
            chart: "mostPopular",
            regionCode: "US",
            maxResults: 10,
            key: "AIzaSyCmpumZE2pz-Vk8vTlB_5jWNBHc8pyEvDs"
        }
      });
      console.log(response)
    }catch(error){
            console.log(error)
    }
}