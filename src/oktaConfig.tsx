const oktaAuthConfig = {
  issuer: `${process.env.REACT_APP_OKTA_URL_ISSUER}/oauth2/default`,
  clientId: `${process.env.REACT_APP_OKTA_CLIENT_ID}`,
  redirectUri: `${window.location.origin}/implicit/callback`,
  pkce: true,
  scopes: ["openid", "email", "profile"],
};

export { oktaAuthConfig };
