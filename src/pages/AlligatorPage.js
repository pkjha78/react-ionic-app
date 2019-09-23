import React , { Component } from 'react';
import {
  IonApp,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

class AlligatorPage extends Component {
  constructor(prop){
    super(prop);
    this.state = {
      chomps: 0,
    };
  }
  render(){
    return(
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Alligator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <img src="https://images.unsplash.com/photo-1549240923-93a2e080e653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2165&q=80" alt="Alligator" />
            <IonCardHeader>
              <IonCardSubtitle>Crocco</IonCardSubtitle>
              <IonCardTitle>
                You've been chomped!
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton>Chomp</IonButton>
              <IonButton>UnChomp</IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    )
  }
}
export default AlligatorPage;
