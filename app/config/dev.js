export default {
    secrets: {
        JWT_SECRET: 'thisISnotAsecret'
    },
    db: {
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        url: process.env.DB_URL
    }
};
