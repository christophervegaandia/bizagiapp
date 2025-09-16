import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { CategorySidebar } from "./components/category-sidebar/category-sidebar";
import { MainContent } from "./components/main-content/main-content";
import { Category } from './interfaces/category.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CategorySidebar, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bizagi-app');
    active?: Category;
}
