
import axios from 'axios';

const BaseUrl = 'https://youtube-v38.p.rapidapi.com'
const options = {
    url: BaseUrl,
    params: { q: 'despacito', hl: 'en', gl: 'US' },
    headers: {
        'X-RapidAPI-Key': process.env.ReactApp_RapidApiKey,
        'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
    }
};

//Exporting the fetchApi that is an sync function that uses axios.get. for the api route to GET, we will use the BaseUrl we saved that came from the api code we copied then add the url that we will pass in the async function.
const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BaseUrl}/${url}`, options)

    return data;
}

export default fetchFromApi;