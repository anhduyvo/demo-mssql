var app = angular.module('cargo', [
	'ngCookies',
	'ui.router',
	'cargo.common',
	'cargo.directives',
	'cargo.components.navigation'
]);

app.config(function ($stateProvider) {
	$stateProvider
	.state('/', {
		url: '/',
		views: {
			'view': {
				templateUrl: 'app/views/dashboard.tpl.html',
				controller: 'dashboardController'
			}
		}
	})	
	.state('dashboard', {
		url: '/dashboard',
		views: {
			'view': {
				templateUrl: 'app/views/dashboard.tpl.html',
				controller: 'dashboardController'
			}
		}
	})
	.state('login', {
		url: '/login',
		views: {
			'view': {
				templateUrl: 'app/views/login.tpl.html',
				controller: 'loginController'
			}
		}
	})	
	.state('customer', {
		url: '/customer',
		views: {
			'view': {
				templateUrl: 'app/views/customer.tpl.html',
				controller: 'customerController'
			}
		}
	})
	.state('customerEdit', {
		url: '/customer/:customerKey',
		parentState: 'customer',
		views: {
			'view': {
				templateUrl: 'app/views/customerEdit.tpl.html',
				controller: 'customerEditController'
			}
		}
	})
	.state('truck', {
		url: '/truck',
		views: {
			'view': {
				templateUrl: 'app/views/truck.tpl.html',
				controller: 'truckController'
			}
		}
	})
	.state('truckEdit', {
		url: '/truck/:truckKey',
		parentState: 'truck',
		views: {
			'view': {
				templateUrl: 'app/views/truckEdit.tpl.html',
				controller: 'truckEditController'
			}
		}
	})
	.state('brand', {
		url: '/brand',
		views: {
			'view': {
				templateUrl: 'app/views/brand.tpl.html',
				controller: 'brandController'
			}
		}
	})
	.state('brandEdit', {
		url: '/brand/:brandKey',
		parentState: 'brand',
		views: {
			'view': {
				templateUrl: 'app/views/brandEdit.tpl.html',
				controller: 'brandEditController'
			}
		}
	})
	.state('product', {
		url: '/product',
		views: {
			'view': {
				templateUrl: 'app/views/product.tpl.html',
				controller: 'productController'
			}
		}
	})
	.state('productEdit', {
		url: '/product/:productKey',
		parentState: 'product',
		views: {
			'view': {
				templateUrl: 'app/views/productEdit.tpl.html',
				controller: 'productEditController'
			}
		}
	})
	.state('chart', {
		url: '/chart',
		views: {
			'view': {
				templateUrl: 'app/views/chart.tpl.html',
				controller: 'chartController'
			}
		}
	})
	.state('table', {
		url: '/table',
		views: {
			'view': {
				templateUrl: 'app/views/table.tpl.html',
				controller: 'tableController'
			}
		}
	})
	.state('form', {
		url: '/form',
		views: {
			'view': {
				templateUrl: 'app/views/form.tpl.html',
				controller: 'formController'
			}
		}
	})	
	.state('bootstrapElement', {
		url: '/bootstrapElement',
		views: {
			'view': {
				templateUrl: 'app/views/bootstrapElement.tpl.html',
				controller: 'bootstrapElementController'
			}
		}
	})
	.state('bootstrapGrid', {
		url: '/bootstrapGrid',
		views: {
			'view': {
				templateUrl: 'app/views/bootstrapGrid.tpl.html',
				controller: 'bootstrapGridController'
			}
		}
	})
	.state('blank', {
		url: '/blank',
		views: {
			'view': {
				templateUrl: 'app/views/blank.tpl.html',
				controller: 'blankController'
			}
		}
	})
	.state('otherwise', {
		url: '/error',
		views: {
			'view': {
				templateUrl: '/app/views/error.tpl.html'
			}
		}
	});
});