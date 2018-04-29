
1. > create-react-app yourprojectnamehere

  to create the react project in the folder you want

2. in App.js

import firebase from 'firebase'
import {DB_CONFIG} from './Config'

3. make file Config.js in src folder

4. in App.js in between class App extends Component {
  -->here:
  render() {

constructor(){
  super();
  this.app = firebase.initializeApp(DB_CONFIG)
  this.database = this.app.database().ref().child('projects')
  this.state = {
    projects: []
  }
}
componentDidMount(){
  this.database.on('value', snap => {
    this.setState({
      projects: snap.val()
    })
  })
}

4. in Config.js paste this, which is modified from the 'add firebase to your web app' from firebase website

5. > npm install --save firebase
    > npm install if it doesn't work

    >npm run start (to run it)

6. > firebase init
      (choose the desired options)
    > firebase login --reauth (if it's not working)

    > yarn build

7. in database.rules.json

{
  "rules": {
    ".read": true,
    ".write": true
  }
}

8. {
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  },
  "database": {
    "rules": "database.rules.json"
  }
}

  IMPORTANT: public: build


9.  go to hosting in firebase
  copy that thing

10.
