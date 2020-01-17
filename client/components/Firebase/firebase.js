import firebase from 'firebase/'
import config from './config'


try {
	firebase.app()
} catch (error) {

  firebase.initializeApp(config)
}

// class Firebase {
//   constructor(){
//     app.initializeApp(config)
//   }
// }

export default firebase

// export const facebookProvider = new app.auth.FacebookAuthProvider()
