
<!-- File: js/config.js -->
<script>
/* Global config Wild-Rydes expects */
window._config = {
  cognito: {
    // *** Your pool & client ***
    userPoolId: 'ap-south-1_P6doqunEC',                   // <- your user pool ID
    userPoolClientId: '792rolav85en8cmtcghbi2cbka',       // <- your public client ID (no secret)
    region: 'ap-south-1',

    // *** Your Hosted UI domain (without https:// in AppWebDomain field usage) ***
    domain: 'ap-south-15cvoixmg.auth.ap-south-1.amazoncognito.com',

    // *** Redirects (MUST match app client Allowed URLs) ***
    redirectSignIn: 'https://main.d1bh5cxy59uqi4.amplifyapp.com//ride.html',
    redirectSignOut: 'https://main.d1bh5cxy59uqi4.amplifyapp.com/signout',

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














