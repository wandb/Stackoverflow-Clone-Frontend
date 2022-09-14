const config = {
  BASE_URL: process.env.REACT_APP_API_URL,
};

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // config.BASE_URL = process.env.REACT_APP_API_URL;
  config.BASE_URL = `http://localhost:1337`;
}

export default config;
