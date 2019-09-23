import React from 'react';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { Redirect, Route } from 'react-router';
import { home, apps, paper, informationCircle } from 'ionicons/icons';

class Tab extends React.Component{

  render() {
    return (
      <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="categories" href="/categories">
              <IonIcon icon={apps} />
              <IonLabel>categories</IonLabel>
            </IonTabButton>
            <IonTabButton tab="news" href="/news">
              <IonIcon icon={paper} />
              <IonLabel>News</IonLabel>
            </IonTabButton>
            <IonTabButton tab="about" href="/about">
              <IonIcon icon={informationCircle} />
              <IonLabel>About</IonLabel>
            </IonTabButton>
          </IonTabBar>
      </IonTabs>
    );
  }
}
export default Tab;
