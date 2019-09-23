import React , { Component } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonButton,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react';

import axios from 'axios';

class NewsPage extends Component {
  NEWS_API_KEY = "e40d07f00b094602953cc3bf8537477e";
  NEWS_TOP_HEADLINES_API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.NEWS_API_KEY}`;

  constructor(prop){
    super(prop);
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    axios.get(this.NEWS_TOP_HEADLINES_API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ items: data.articles })
      console.log(this.state.items)
     })
  }

  render(){
    return(
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>News App v1.0</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        {
          this.state.items.map((item, index) =>
          <IonCard key={index}>
              <img src={item.urlToImage} alt={item.title} />
              <IonCardHeader>
                <IonCardTitle>
                  {item.title}

                </IonCardTitle>
                 <IonCardSubtitle>
                    {item.author}
                  </IonCardSubtitle>
              </IonCardHeader>
                  <IonCardContent>
                    <p>{item.content}</p>
                    <IonButton href={item.url}> Read</IonButton>
                  </IonCardContent>
                  </IonCard>

        )
      }

        </IonContent>
      </IonPage>
    )
  }
}

export default NewsPage;
