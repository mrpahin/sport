// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
//import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
//import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:*/
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'


// Import App Custom Styles
import AppStyles from './css/app.css'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app'

//var db = window.openDatabase('sport', '1.0', 'sport', 2*1024*1024);

//import DB from './components/db.js'
import Start from './components/start_app.js'

import Exercise from './components/exercise.js'

Start.initDB()

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    swipePanel: 'left',
    material: true,
    modalTitle:'Дневник тренеровок',
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  }
});
