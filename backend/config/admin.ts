export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c10b15b5ed853dc6b998d5b53598f23'),
  },
});
