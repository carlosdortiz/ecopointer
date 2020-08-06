import React from 'react';
import { IonPage, 
  IonHeader, 
  IonContent, 
  IonToolbar,
  IonAvatar,
  IonIcon,
  IonButton,
  IonGrid
} from '@ionic/react';
import { personCircle} from 'ionicons/icons';
import './perfil.tsx';

const Perfil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='success'>
          <IonButton shape='round' fill='clear' color="dark">
            <IonIcon  icon={personCircle} size='large' color='dark'/>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonAvatar class="ion-margin-start">
            <img src='https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png'></img>
          </IonAvatar>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Perfil;