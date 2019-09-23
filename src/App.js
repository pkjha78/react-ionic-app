import React from 'react';
import './App.css';
import { IonApp, IonContent, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Menu from './components/Menu';
import Main from './components/Main';

class App extends React.Component {

  render(){
    return (

        <IonApp>
          <IonContent>
            <IonReactRouter>
              <IonSplitPane contentId="main">
                <Menu />
                <Main />
              </IonSplitPane>
            </IonReactRouter>
          </IonContent>
        </IonApp>

    );
  }

}

export default App;
