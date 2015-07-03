angular.module('toolTip', [])
    .directive('toolTip', function(){
        return {
            restrict:"A",
            link: function(s, e, a){

                s.elem = e;

                $(s.elem).popup({on: 'hover', position : 'top right'});
            }
        };
    });