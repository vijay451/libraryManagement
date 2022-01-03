import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';
import { IssuedBookComponent } from './issued-book/issued-book.component';
import { BooksService } from './books/books.service';
import { UsersService } from './users/users.service';
import { IssuedBookService } from './issued-book/issued-book.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    UsersComponent,
    IssuedBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ UsersService, BooksService, IssuedBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
