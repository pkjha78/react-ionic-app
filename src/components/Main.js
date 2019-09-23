import React from 'react';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/NewsPage';
import AboutPage from '../pages/AboutPage';
import CategoriesPage from '../pages/CategoriesPage';
import AlligatorPage from '../pages/AlligatorPage';
import { IonPage, IonRouterOutlet} from '@ionic/react';
import { Route } from 'react-router';
import Tab from './Tab';

class Main extends React.Component {
  render(){
    return(
      <IonPage id="main">
        <IonRouterOutlet>
          <Route path="/:tab(home)" component={HomePage} exact={true} />
          <Route path="/:tab(news)" component={NewsPage} exact/>
          <Route path="/:tab(about)" component={AboutPage} exact/>
          <Route path="/:tab(categories)" component={CategoriesPage} exact/>
          <Route path="/:tab(alligator)" component={AlligatorPage} />
        </IonRouterOutlet>
        <Tab />
      </IonPage>
    )
  }
}

export default Main;
