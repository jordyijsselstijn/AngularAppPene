angular.module('sideBar', [])
  .directive('sideBar', function(){
      return {
        restrict:"E",
        link: function(s, e, a){

          s.sideB = e;

          $(e.context.childNodes[1]).sidebar('setting',{dimPage:false, closable:false}).sidebar('show');

        },
        transclude:true,
        templateUrl:"app/shared/side-bar/sidebarView.html"
      };
    });