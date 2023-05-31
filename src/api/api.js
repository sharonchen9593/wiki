import axios from "axios";

export const fetchArticles = async (date) => {
  const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${date[0]}/${date[1]}/${date[2]}`;

  const result = await axios.get(url);
  return result.data.items[0].articles;
};
