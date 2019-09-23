import React from 'react';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { Link } from 'react-router-dom';

import {
  home,
  apps,
  hammer,
  informationCircle,
  paper,
  image,
  person,
  help,
  logIn,
  logOut,
  personAdd
} from 'ionicons/icons';

const routes = {
  appPages: [
    { title: 'Home', path: '/', icon: home },
    { title: 'Categories', path: '/categories', icon: apps },
    { title: 'News', path: '/news', icon: paper },
    { title: 'About', path: '/about', icon: informationCircle },
    { title: 'Alligator', path: '/alligator', icon: image }
  ],
  loggedInPages: [
    { title: 'Account', path: '/account', icon: person },
    { title: 'Support', path: '/support', icon: help },
    { title: 'Logout', path: '/logout', icon: logOut }
  ],
  loggedOutPages: [
    { title: 'Login', path: '/login', icon: logIn },
    { title: 'Support', path: '/support', icon: help },
    { title: 'Signup', path: '/signup', icon: personAdd }
  ]
}

const Menu: React.FC = () => {
  let isAuthenticated: false;
  function renderlistItems(list: any[]) {
    return list
      .filter(route => !!route.path)
      .map(p => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <Link to={p.path}>
          <IonItem>
            <IonIcon slot="start" icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
          </Link>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="outer-content">
        <IonList>
          <IonListHeader>Navigate</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList>
        <IonList>
          <IonListHeader>Account</IonListHeader>
          {isAuthenticated ? renderlistItems(routes.loggedInPages) : renderlistItems(routes.loggedOutPages)}
        </IonList>
        <IonList>
          <IonListHeader>User Manual</IonListHeader>
          <IonItem onClick={() => {}}>
            <IonIcon slot="start" icon={hammer} />
            Document
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}
export default Menu;
