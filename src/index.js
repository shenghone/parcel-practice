import axios from "axios";

const Test = async () => {
  return await axios(`${process.env.NEWS_API}`);
};

export default Test;
