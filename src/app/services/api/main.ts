import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class MainService {
	constructor() {}
	private apiUrl = "https://api.example.com/data";
}
