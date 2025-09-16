import { Component, Input } from '@angular/core';
import { Category } from '../../interfaces/category.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.html',
  styleUrl: './main-content.css'
})
export class MainContent {
private _activeCategory?: Category;
  safeLink: SafeResourceUrl | null = null;

  @Input()
  set activeCategory(cat: Category | undefined) {
    this._activeCategory = cat;

    const raw = cat?.link?.trim();
    if (!raw) { this.safeLink = null; return; }

    // Asegura /assets… y archivo (index.html) si solo viene la carpeta
    let path = raw.startsWith('/') ? raw : `/${raw}`;
    if (path.endsWith('/')) path += 'index.html';
    if (!path.endsWith('.html')) {
      // Si te llegan rutas tipo '/assets/projects/html/modelo1' sin archivo
      path = path.replace(/\/$/, '') + '/index.html';
    }

    const abs = new URL(path, window.location.origin).toString();
    this.safeLink = this.sanitizer.bypassSecurityTrustResourceUrl(abs);
  }
  get activeCategory(): Category | undefined { return this._activeCategory; }

  constructor(private sanitizer: DomSanitizer) {}
}
