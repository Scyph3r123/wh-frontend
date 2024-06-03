const isProduction = import.meta.env.MODE === 'production';

const apiPath = isProduction
                ? 'manage.winterhymns.com'
                : 'http://localhost:1337';

export default apiPath;