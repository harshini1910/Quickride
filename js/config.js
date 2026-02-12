
<!-- File: js/config.js -->
<script>
/* Global config Wild-Rydes expects */
window._config = {
  cognito: {
    // *** Your pool & client ***
    userPoolId: 'ap-south-1_5cvvOiXMg',                   // <- your user pool ID
    userPoolClientId: '1mr0nva3ocpv5e56hs166ro7o0',       // <- your public client ID (no secret)
    region: 'ap-south-1',

    // *** Your Hosted UI domain (without https:// in AppWebDomain field usage) ***
    domain: 'ap-south-15cvoixmg.auth.ap-south-1.amazoncognito.com',

    // *** Redirects (MUST match app client Allowed URLs) ***
    redirectSignIn: 'https://main.d3i50cxxjjccqp.amplifyapp.com/ride.html',
    redirectSignOut: 'https://main.d3i50cxxjjccqp.amplifyapp.com/',

    // *** Scopes & Flow ***
    scope: ['openid','email','profile','phone'],
    responseType: 'token'  // <- IMPORTANT: implicit flow so tokens arrive in URL hash on ride.html
  },

  // Leave empty for now to show the “Successfully Authenticated!” banner
  api: {
    invokeUrl: ''   // We'll fill later when your API Gateway URL is ready
  }
};
</script>













