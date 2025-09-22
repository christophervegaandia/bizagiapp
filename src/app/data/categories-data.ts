import { Category } from "../interfaces/category.interface";

export const CATEGORIES: Category[] = [
	{
		id: "modeloc4",
		name: "Modelo C4",
		icon: "bi-bi-folder",
		expanded: false,
		children: [
			{
				id: "code",
				name: "Code",
				icon: "bi bi-folder",
				expanded: false,
				children: [
					{
						id: "db",
						name: "Database",
						icon: "bi-folder",
						expanded: false,
						children: [
							{
								id: "fee",
								name: "Fee",
								icon: "bi-file-earmark",
								link: "/assets/projects/html/drawio/Code/Database/Fee.html",
							},
							{
								id: "landingpage",
								name: "LandingPage",
								icon: "bi-file-earmark",
								link: "/assets/projects/html/drawio/Code/Database/LandingPage.html",
							},
						],
					},
					{
						id: "common",
						name: "Common",
						icon: "bi-file",
						link: "/assets/projects/html/drawio/Modelo C4/Code/Common.html",
					},
					{
						id: "feeaggregate",
						name: "Fee Agreggate",
						icon: "bi-file",
						link: "/assets/projects/html/drawio/Modelo C4/Code/Fee Agreggate.html",
					},
					{
						id: "landingpageaggregate",
						name: "LandingPage Agreggate",
						icon: "bi-file",
						link: "/assets/projects/html/drawio/Modelo C4/Code/LandingPage Agreggate.html",
					},
					{
						id: "masteraggregate",
						name: "Master Agreggate",
						icon: "bi-file",
						link: "/assets/projects/html/drawio/Modelo C4/Code/Master Agreggate.html",
					},
					{
						id: "periodaggregate",
						name: "Period Agreggate",
						icon: "bi-file",
						link: "/assets/projects/html/drawio/Modelo C4/Code/Period Agreggate.html",
					},
				],
			},
			{
				id: "component",
				name: "Component",
				icon: "bi bi-folder",
				expanded: false,
				children: [
					{
						id: "fee_dashboard",
						name: "Fee Dashboard",
						icon: "bi-folder",
						expanded: false,
						children: [
							{
								id: "fee_frontend",
								name: "Frontend",
								icon: "bi-file-earmark",
								link: "/assets/projects/html/drawio/Modelo C4/Component/Fee Dashboard/Frontend.html",
							},
						],
					},
					{
						id: "component_landingpage",
						name: "Landingpage",
						icon: "bi-folder",
						expanded: false,
						children: [
							{
								id: "component_landingpage_frontend",
								name: "Frontend",
								icon: "bi-file-earmark",
								link: "/assets/projects/html/drawio/Modelo C4/Component/Landing Page/Frontend.html",
							},
						],
					},
					{
						id: "component_backend",
						name: "Backend",
						icon: "bi-file",
						link: "/assets/projects/html/drawio/Modelo C4/Component/Backend.html",
					},
				],
			},
			{
				id: "container",
				name: "Container",
				icon: "bi bi-file",
				link: "/assets/projects/html/drawio/Modelo C4/Container.html",
			},
			{
				id: "context",
				name: "Context",
				icon: "bi bi-file",
				link: "/assets/projects/html/drawio/Modelo C4/Context.html",
			},
		],
	},

	{
		id: "api_rest",
		name: "Diseño de API REST",
		icon: "bi bi-file",
		link: "/assets/projects/html/markdown/Diseño de apis.html",
	},
];
