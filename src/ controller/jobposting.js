import axios from "axios";

export const jobposting = async ({}) => {
  try {
    const response = await axios.get(
      "http://openapi.work.go.kr/opi/opi/opia/wantedApi.do?authKey=WNL1TYI6B8EEDV4BS5BZ92VR1HK&callTp=L&returnType=XML&startPage=1&display=10&occupation=024"
    );
    return response.data;
  } catch (err) {
    console.log("Error >>", err);
  }
};
