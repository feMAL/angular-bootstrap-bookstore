//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule} from '@angular/common/http'

//ROUTES
import { __ROUTES } from './app.routes'

//COMPONENTS
import { AppComponent } from './app.component';


//MODULES-COMPONENTS
import { PrivateModule } from './components/private/private.module'
import { PublicModule } from './components/public/public.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(__ROUTES, {useHash:true}),
    PrivateModule,
    PublicModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
