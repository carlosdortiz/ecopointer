import React from 'react';
import { Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonRouterOutlet
} from '@ionic/react';

import { reader } from 'ionicons/icons';
import './organizador.tsx';
import Perfil from './perfil';

const Organizador: React.FC = () => {
  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center" color="success">EcoPointer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked" color="success">NOMBRE</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked" color="success">CORREO</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked" color="success">CONTRASEÑA</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked" color="danger">CODIGO DE ORGANIZADOR</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/tab3" component={Perfil} exact={true} />  
            </IonRouterOutlet>
            <IonCol class="ion-text-center" >
                <IonButton size="small" color="dark" href='/tab3'>
                  <IonIcon slot='start' icon={reader}/>
                    Registrarse
                </IonButton>
              </IonCol>
          </IonReactRouter>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Organizador;