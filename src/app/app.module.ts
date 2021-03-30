import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule  } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { routes } from './routes/tutorialRouter';
import { CardsWidget } from './widgets/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { FabButtonComponent } from './components/fab-button/fabButton.component';
import { TextBoxComponent } from './components/text-box/textbox.component';
import { NotFoundComponent } from './views/notFound/notFound.component';
import { HomeView } from './views/home/home.component';

import { StoreModule } from '@ngrx/store';
import { selectWithIconReducer } from './store/selectWithIcon/selectWithIcon.reducer';
import { AddCards } from './widgets/addCards/AddCards.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeView,
    CardComponent,
    FabButtonComponent,
    TextBoxComponent,
    CardsWidget,
    AddCards
  ],
  imports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    StoreModule.forRoot(
      { 
        selectWithIcons: selectWithIconReducer
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
