import React , { Component } from 'react';
import {
  IonPage,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonToolbar
} from '@ionic/react';
import { share, logoVimeo, logoGoogleplus, logoTwitter, logoFacebook, options } from 'ionicons/icons';
import './css/Home.css';

class HomePage extends Component {


  render(){
    return(
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>

            <IonSegment>
              <IonSegmentButton value="all">
                All
              </IonSegmentButton>
              <IonSegmentButton value="favorites">
                Favorites
              </IonSegmentButton>
            </IonSegment>

            <IonButtons slot="end">
              <IonButton>
                <IonIcon icon={options} slot="icon-only" />
              </IonButton>
            </IonButtons>
          </IonToolbar>

          <IonToolbar color="primary">
            <IonSearchbar
              placeholder="Search"
            />
          </IonToolbar>
        </IonHeader>

        <IonContent>


          You've been chomped this times!

        </IonContent>

        <IonFab  vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton color="vimeo" >
              <IonIcon icon={logoVimeo} />
            </IonFabButton>
            <IonFabButton color="google" >
              <IonIcon icon={logoGoogleplus} />
            </IonFabButton>
            <IonFabButton color="twitter" >
              <IonIcon icon={logoTwitter} />
            </IonFabButton>
            <IonFabButton color="facebook" >
              <IonIcon icon={logoFacebook} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonPage>

    );
  }
}

export default HomePage;
