const isProduction = import.meta.env.MODE === 'production';

const apiPath = isProduction ? 'https://manage.winterhymns.com' : 'http://localhost:1337';

export default apiPath;