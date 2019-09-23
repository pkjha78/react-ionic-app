import React , { Component } from 'react';
import {
  IonPage,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonContent,
  IonTitle,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonBadge,
  IonNote,
  IonFab,
  IonFabButton
} from '@ionic/react';

import { add } from 'ionicons/icons';


class CategoriesPage extends Component {

  render(){
    return(
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Categories</IonTitle>
            <IonButtons slot="end">
              <IonButton icon-only>
                <IonIcon slot="icon-only" name="more"></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
        <IonList>
          <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel>
                <h1>Create Idea</h1>
                <IonNote>Run Idea by Brandy</IonNote>
              </IonLabel>
              <IonBadge color="success" slot="end">
                5 Days
              </IonBadge>
            </IonItem>
          </IonList>
          <IonFab vertical="bottom" horizontal="end">
            <IonFabButton>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    )
  }
}

export default CategoriesPage;
