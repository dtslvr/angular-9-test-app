import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { environment } from "./environments/environment";
import { AppModule } from "./app.module";

if (environment.production) {
  enableProdMode();
} else {
  console.log("Running in development mode");
}

platformBrowserDynamic().bootstrapModule(AppModule);
