// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDnRblLt04UPvU9lvz8QfEU4HGKfPJd-tY',
    authDomain: 'tmc-firebase-1f3c5.firebaseapp.com',
    databaseURL: 'https://tmc-firebase-1f3c5.firebaseio.com',
    projectId: 'tmc-firebase-1f3c5',
    storageBucket: 'tmc-firebase-1f3c5.appspot.com',
    messagingSenderId: '319435978367'
  }
};