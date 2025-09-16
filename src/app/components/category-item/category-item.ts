import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { Category } from '../../interfaces/category.interface';
import { CommonModule, NgClass, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-item',
 standalone: true,
  imports: [NgIf, NgForOf, NgClass],
  templateUrl: './category-item.html',
  styleUrl: './category-item.css'
})
export class CategoryItem {
  @Input() item!: Category;
  @Input() level = 0;
  @Output() select = new EventEmitter<Category>();

  toggleExpand(e: MouseEvent) {
    this.item.expanded = !this.item.expanded;
    this.select.emit(this.item);
  }

  onSelect() {
    this.select.emit(this.item);
  }

   get hasChildren(): boolean {
    return Array.isArray(this.item.children) && this.item.children.length > 0;
  }

onRowClick(e: MouseEvent) {
  e.stopPropagation();
  e.preventDefault();               // 👈 evita que el click dispare navegación/router

  if (this.item.link && !this.hasChildren) {
    this.select.emit(this.item);    // solo emitimos para renderizar en el iframe
    return;
  }
  if (this.hasChildren) {
    this.item.expanded = !this.item.expanded;
    return;
  }
  this.select.emit(this.item);
}


}
