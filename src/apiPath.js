const isProduction = import.meta.env.MODE === 'production';

const apiPath = isProduction ? 'https://manage.winterhymns.com/graphql' : 'http://localhost:1337/graphql';

export default apiPath;