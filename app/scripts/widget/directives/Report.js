(function (ng) {
    'use strict';

    ng.module('piwikExtDash.widget').directive('report', function() {

        return {
            restrict: 'C',
            transclude: true,
            scope: {
                module: '@',
                action: '@',
                evolution: '='
            },
            templateUrl: 'views/widget/report.html',
            controller: 'ReportCtrl',
            controllerAs: 'report'
        };
    });
})(angular);
