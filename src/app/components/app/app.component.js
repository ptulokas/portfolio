(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'app',
      templateUrl: 'app.html',
      styleUrls: ['styles.css']
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));