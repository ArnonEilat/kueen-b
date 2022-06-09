function changeURL(){
  let api_url = "https://attend-k-back.herokuapp.com";
    if (typeof process!=='undefined' && process.env && process.env.REACT_APP_API_URL) {
      api_url = process?.env?.REACT_APP_API_URL;
    }
    return api_url;
  }
  export default  changeURL;