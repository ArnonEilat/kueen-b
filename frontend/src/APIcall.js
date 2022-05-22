// fetching the GET route from the Express server which matches the GET route from server.js
const getData = async (path) => {
  try {
    const response = await fetch(process.env.REACT_APP_SERVER_URL +path);
    const body = await response.json();
    if (response.status !== 200) {
      throw (body);
    }
    return body;
  } catch (e) {
    throw e;
  }
};
export default getData;




