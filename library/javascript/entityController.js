admin.controller('MainIndex', 
    function ($scope, $sce, $http) {
        $scope.entityTypes = [
            {name: "Products", slug: "products"},
            {name: "Users", slug: "users"}
        ];
    }
);

admin.controller('EntityIndex', 
    function ($scope, $sce, $http) {
        $scope.entityName = "Products";
        $scope.fields = [
            {name: 'Id'},
            {name: 'Name'},
            {name: 'Slug'},
            {name: 'Image'},
            {name: 'Date'}
        ];
        $scope.entities = [
            {id: 1, name: "Product 1", slug: 'product-1', image: '', date: new Date()},
            {id: 2, name: "Product 2", slug: 'product-2', image: '', date: new Date()},
            {id: 3, name: "Product 3", slug: 'product-3', image: '', date: new Date()}
        ];
    }
);

admin.controller('EntityDetail', 
    function ($scope, $sce, $http) {
        $scope.entity = {id: 1, name: "Product 1", slug: 'product-1', desc: '', image: '', date: new Date()};
    }
);

admin.controller('EntityCreate', 
    function ($scope, $sce, $http) {
        $scope.entity = {};
    }
);

admin.controller('EntityEdit', 
    function ($scope, $sce, $http) {
        $scope.entity = {id: 1, name: "Product 1", slug: 'product-1', desc: '', image: '', date: new Date()};
    }
);

admin.controller('EntityDelete', 
    function ($scope, $sce, $http) {
        $scope.entity = {id: 1, name: "Product 1", slug: 'product-1', desc: '', image: '', date: new Date()};
    }
);

