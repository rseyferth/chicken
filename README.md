[![Build Status](https://travis-ci.org/rseyferth/chicken.svg?branch=master)](https://travis-ci.org/rseyferth/chicken)

# Chicken Javascript MVC framework
(This package is still being development, and is not ready for use yet)

## What is Chicken?
Chicken is a Javascript framework you can use to quickly build webapps. It is intended as an alternative to bigger frameworks like Ember and Angular, but without the frustration when you're trying to do something that's not in the first couple of tutorials. 

Chicken allows you to do the following things easily, quickly, and well:
- Setup webapp with routes, controllers, and views (under construction)
- Connect to a JSONAPI compliant Api (under construction)
- Authentication using JWT (under construction)
- Two-way model binding (under construction)
- Make web-compontent-style directives (under construction)
- Use SemanticUI components (separate package, under construction)

## Dependencies

Chicken uses the following third-party libraries:
- [Babel](http://babeljs.com)
- [jQuery](http://jquery.com)
- [Underscore](http://underscorejs.org)
- [History](https://github.com/mjackson/history)
- [XRegExp](https://github.com/slevithan/xregexp)

## Installation
The easiest way to install Chicken is by using `bower`:

```
bower install --save chickenjs
```

Then add jQuery, Underscore and Chicken to your HTML page:

```html
<script src="/bower_components/jquery/dist/jquery.js"></script>
<script src="/bower_components/underscore/underscore.js"></script>
<script src="/bower_components/chickenjs/build/chicken.js"></script>
```

## Create application
The first step in creating in application is adding element and a view container to your HTML page:

```html
<div id="application">
  <view></view>
</div>
```

Then add a script that will initialize the application, thusly:

**app/js/app.js**
```javascript
Chicken.createApplication($('#application'), {
  baseUrl: '/'
}).routes(() => {
  
  this.route('/', () => {
    return '<h1>Hello, world!</h1>';
  });
  
}).start();

```

## View containers
A view container is an element in your page that can be used to render views in. Each view container needs to have a name.  Every application must have at least one view container, with the name **main**. Adding a `<view></view>` or `<div view></div>` tag to your HTML page will tell the application to use this as the **main** view container.

You can also add view containers in your views, to allow for nested views. For example:

**app/index.html**
```html
<div id="application">
  Application
  <view></view>
</div>
```

**app/views/page.hbs**
```html
<h1>Page</h1>
<view name="sub"></vieW>
```

**app/views/sub-page.hbs**
```html
<h2>Subpage</h2>
```

Now, if you were to have a route that rendered the `sub-page.hbs` template into the `sub` view container, the resulting HTML would look something like:

```html 
<div id="application">
  <view>
    <h1>Page</h1>
    <view name="sub">
      <h2>Subpage</h2>
    </view>
  </view>
``` 


## Routing
Routing works much like most frameworks out there, and is especially inspired by Rails and Laravel. In the `.routes()`  callback on your application, you can define routes by calling `this.route`:

```javascript
this.route(pattern, actions, options = {})
```

- **pattern** The pattern is the uri you want the route to be accessible through. _Parameters_ are prefixed by a `:` (or `*` for wildcard-parameters).
- **actions** You can define one action by passing a string (such as `App@home`) or callback, or multiple actions, by supplying a hash, keyed by the view container name that the action should target. By default the `main` view container will be targted. 
- **options** To be detailed later...

Some examples will clarify this:
```javascript
app.routes(() => {
  
  // Index route: will run the 'home' action in the 'App' controller, and render the results into the 
  // 'main' view container
  this.route('/', 'App@home');
  
  // Simple route: will run the 'page' action in the 'App' controller, and render the results into the 
  // 'main' view container
  this.route('/page', 'App@page')
    
    // Nesting will add sub-routes to the route. The options in the first argument are applied to all sub-routes.
    // In this example, all sub-routes will render their default action into the 'sub' container
    .nest({ viewContainer: 'sub' }, () => {
      
      // Will match /page/sub, and run the 'subPage' action in the 'App' controller, 
      // and render the results into the 'sub' view container, leaving /page in the main container
      this.route('/sub', 'App@subPage');
      
      // Will match /page/something-else, and run two actions, into separate view controllers
      this.route('/something-else', { nav: 'App@somethingElseMain', sub: 'App@somethingElseSub' });
      
    });
  
  // The /products uri will render Product@index into the 'main' view container, 
  // and Product@nav into the 'nav' view container, that is rendered by Product@index
  this.route('/products', { main: 'Product@index', nav: 'Product@nav' ).nest(() => {
    
    // Will match /products/1, /products/100, etc.
    this.route('/:id', { sub: 'Product@show' })
      .constrain('id', /\d+/);  // Allow only numbers in the :id parameter
      
  });
  
  // A wildcard parameter (*path) will match anything, including slashes, for example:
  //  /blog/this-is-an-interesting-article-name
  //  /blog/authors/charles-dickens/first-chapter-of-oliver-twist
  this.route('/blog/*path', 'Blog@show');
  
  
  
});
```

## Controllers
Controllers are where you define what will be rendered into the view containers. For example:

**app/controllers/ProductController.js**
```javascript
Chicken.controller('Product', {

  index: () => {
  
    return Chicken.view('product.index')
      .withModels('products', Chicken.api('/products'))
      .when('ready', (view) => { 
      
        // The view is rendered, and accessible through script
        view.$element.find('h1').style('color', 'red');
        
        // The data as well:
        console.log(view.data.products);  // Chicken.Data.Collection
      
      });
      
  },
  
  show: (id) => {
  
    return Chicken.view('product.show')
      .withModel('product', Chicken.api('/products/' + id))
      .when('ready', (view) => {
      
        // The view is rendered, and has access to the model that was loaded
        // from the API
        console.log(view.data.product);   // Chicken.Data.Model
      
      });
  
  }

});
```











