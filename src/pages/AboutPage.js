import React , { Component } from 'react';
import { IonPage, IonIcon, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonContent, IonList, IonItem, IonLabel, IonDatetime, IonTitle } from '@ionic/react';
import { calendar, pin } from 'ionicons/icons';
import './css/About.css';

class AboutPage extends Component {

  render(){
    return(
      <IonPage id="main">
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>About</IonTitle>
            <IonButtons slot="end">
              <IonButton icon-only>
                <IonIcon slot="icon-only" name="more"></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div className="about-header">
            <img src="assets/img/appicon.svg" height="100" alt="ionic logo" />
          </div>
          <div className="ion-padding about-info">
            <h4>Ionic Conference</h4>

            <IonList lines="none">
              <IonItem>
                <IonIcon icon={calendar} slot="start"></IonIcon>
                <IonLabel>Date</IonLabel>
                <IonDatetime displayFormat="MMM DD, YYYY" max="2056"></IonDatetime>
              </IonItem>

              <IonItem>
                <IonIcon icon={pin} slot="start"></IonIcon>
                <IonLabel>Location</IonLabel>
                <IonSelect>
                  <IonSelectOption value="madison" selected>Madison, WI</IonSelectOption>
                  <IonSelectOption value="austin">Austin, TX</IonSelectOption>
                  <IonSelectOption value="chicago">Chicago, IL</IonSelectOption>
                  <IonSelectOption value="seattle">Seattle, WA</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>

            <p>
              The Ionic Conference is a one-day conference featuring talks from the
              Ionic team. It is focused on Ionic applications being built with
              Ionic 2. This includes migrating apps from Ionic 1 to Ionic 2,
              Angular concepts, Webpack, Sass, and many other technologies used
              in Ionic 2. Tickets are completely sold out, and we’re expecting
              more than 1000 developers – making this the largest Ionic
              conference ever!
            </p>
          </div>
        </IonContent>
      </IonPage>
    )
  }
}
export default AboutPage;
