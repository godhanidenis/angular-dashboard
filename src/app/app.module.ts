import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from "../header/header.component";
import { ChartCardComponent } from "../chart-card/chart-card.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ClassAnalyticsComponent } from "../class-analytics/class-analytics.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, FontAwesomeModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartCardComponent,
    PortfolioComponent,
    ClassAnalyticsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
