import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardsWidget } from './widgets/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { FabButtonComponent } from './components/fab-button/fabButton.component';
import { TextBoxComponent } from './components/text-box/textbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule  } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { routes } from './routes/tutorialRouter';
@NgModule({
  declarations: [
    AppComponent,
    CardsWidget,
    CardComponent,
    FabButtonComponent,
    TextBoxComponent
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
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
