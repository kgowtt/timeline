import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// view
import { IndexComponent } from './view/index/index.component';
import { TestComponent } from './view/test/test.component';
// plugin
import { MaterialPluginModule } from './module/material-plugin/material-plugin.module';
import { AnimationPluginModule } from './module/animation-plugin/animation-plugin.module';
import { WarningComponent } from './components/warning/warning.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { FreshPipe } from './pipe/fresh.pipe';
import { EllipsisPipe } from './pipe/ellipsis.pipe';
import { UseMyPipeToFormatThatValuePipe } from './pipe/use-my-pipe-to-format-that-value.pipe';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TestComponent,
    WarningComponent,
    MovieListComponent,
    FreshPipe,
    EllipsisPipe,
    UseMyPipeToFormatThatValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialPluginModule,
    AnimationPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

