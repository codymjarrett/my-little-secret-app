import firebase from 'firebase/'
import config from './config'


try {
	firebase.app()
} catch (error) {

  firebase.initializeApp(config)
}


export default firebase

