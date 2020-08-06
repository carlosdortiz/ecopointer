import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, 
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import { person, peopleCircle } from 'ionicons/icons';

import Participante from './pages/participante';
import Organizador from './pages/organizador';
import Perfil from './pages/perfil';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Participante} exact={true} />
          <Route path="/tab2" component={Organizador} exact={true} />
          <Route path="/tab3" component={Perfil} exact={true} /> 
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab="tab1" href='/tab1'>
            <IonIcon icon={person}/> 
            <IonLabel>Participante</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href='/tab2'>
            <IonIcon icon={peopleCircle}/> 
            <IonLabel>Organizador</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
