import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { MatDialogModule } from '@angular/material/dialog';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
function provideAnimations(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

