import { Component, computed, EventEmitter, OnInit, Output, signal } from "@angular/core";
import { Category } from "../../interfaces/category.interface";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CategoryItem } from "../category-item/category-item";
import { CATEGORIES } from "../../data/categories-data";

@Component({
	selector: "app-category-sidebar",
	imports: [FormsModule, CommonModule, CategoryItem],
	templateUrl: "./category-sidebar.html",
	styleUrl: "./category-sidebar.css",
})
export class CategorySidebar {
	@Output() categorySelected = new EventEmitter<Category>();

	private all = signal<Category[]>(structuredClone(CATEGORIES));

	query = signal<string>("");

	filtered = computed<Category[]>(() => {
		const queryFormatted = this.query().trim().toLowerCase();
		if (!queryFormatted) return this.all();

		const filterNode = (node: Category): Category | null => {
			const name = node.name?.toLowerCase() ?? "";
			const selfHit = name.includes(queryFormatted);

			const filteredChildren = (node.children ?? []).map(filterNode).filter(Boolean) as Category[];

			if (selfHit || filteredChildren.length > 0) {
				return {
					...node,
					expanded: true,
					children: filteredChildren,
				};
			}
			return null;
		};

		return this.all().map(filterNode).filter(Boolean) as Category[];
	});

	onInput(value: string) {
		this.query.set((value ?? "").trim());
	}

	onSelect(cat: Category) {
		this.categorySelected.emit(cat);
	}

	private loadTreeCategories() {}
}
