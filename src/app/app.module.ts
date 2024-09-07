import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { LinechartComponent } from './linechart/linechart.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    ForecastComponent,
    ComparisonComponent,
    LinechartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
