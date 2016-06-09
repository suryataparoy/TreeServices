/*var TreeServices= angular.module('TreeServices',['ngAnimate']);
TreeServices.controller('TreeController',['$scope', '$http', function ($scope,$http){
	$scope.slides= [{image:'/images/photo4.jpg', desp:'my images' }, {image:'/images/photo5.jpg', desp:'my images' }, {image:'/images/photo3.jpg', desp:'my images' }];
	<pre><code>    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };
    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };
    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };
});
</code></pre>
}])

.animation('.slide-animation', function () {
        return {
            addClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
					TweenMax.set(element, { left: element.parent().width() });
                	TweenMax.to(element, 0.5, {left: 0, onComplete: done });                }
                else {
                    done();
                }
            }
        };
    });	
    */







var sliderApp = angular.module('sliderApp', ['ngAnimate']);
sliderApp.directive('slider', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
},
link: function(scope, elem, attrs)
{
	scope.currentIndex = 0; // Initially the index is at the first image
	scope.next = function() {
  		scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
	};
	scope.prev = function() {
  		scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
	};
	scope.$watch('currentIndex', function() {
  		scope.images.forEach(function(image) {
    		image.visible = false; // make every image invisible
});

scope.images[scope.currentIndex].visible = true; // make the current image visible
});

}
//templateUrl: 'TreeServices/test2.html'
  };
});

sliderApp.controller('SliderController', function($scope) {
  $scope.images = [{
    src: 'photo5.jpg',
    title: 'Pic 1'
  }, {
    src: 'photo2.jpg',
    title: 'Pic 2'
  }, {
    src: 'photo3.jpg',
    title: 'Pic 3'
  }, {
    src: 'photo4.jpg',
    title: 'Pic 4'
  }, {
    src: 'photo7.jpg',
    title: 'Pic 5'
  }];
});

				