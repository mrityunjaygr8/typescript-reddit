import snoowrap from 'snoowrap';

/* eslint-disable-next-line */
const r = new snoowrap({
  userAgent: process.env.VUE_APP_user_agent,
  clientId: process.env.VUE_APP_client_ID,
  clientSecret: process.env.VUE_APP_client_secret,
  refreshToken: process.env.VUE_APP_refresh_token,
});

export default r;
