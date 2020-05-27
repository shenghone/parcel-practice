import Test from "./index.js";

const func = () => {
  let data;
  try {
    data = Test();
  } catch (err) {
    console.error(err);
  }
  return data;
};

func().then(({ data }) => console.log(data));
