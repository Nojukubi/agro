export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '74c8f9c3aa211598236f3fc2eeaa047e')
  }
});
