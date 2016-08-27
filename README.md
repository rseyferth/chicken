[![Build Status](https://travis-ci.org/rseyferth/chicken.svg?branch=master)](https://travis-ci.org/rseyferth/chicken)

# Chicken Javascript MVC framework
(This package is still being developed, and is not ready for use yet)

## What is Chicken?
Chicken is a Javascript framework you can use to quickly build webapps. It is intended as an alternative to bigger frameworks like Ember and Angular, but without the frustration when you're trying to do something that's not in the first couple of tutorials. 

Chicken allows you to do the following things easily, quickly, and well:
- Setup webapp with routes, controllers, and views (mostly working)
- Connect to a JSONAPI compliant Api (under construction)
- Authentication using JWT (under construction)
- Two-way model binding (mostly working)
- Simple creation or reusable components (under constructor)
- Use SemanticUI components (separate package, under construction)

## Dependencies

Chicken uses the following third-party libraries:
- [Babel](http://babeljs.com)
- [jQuery](http://jquery.com)
- [Underscore](http://underscorejs.org)
- [History](https://github.com/mjackson/history)
- [XRegExp](https://github.com/slevithan/xregexp)
- [HTMLBars](https://github.com/rseyferth/htmlbars)

## Installation
The easiest way to install Chicken is by using `bower`:

```
bower install --save chickenjs
```

Then add the dependencies and Chicken to your HTML page:

```html
<script src="/bower_components/jquery/dist/jquery.js"></script>
<script src="/bower_components/underscore/underscore.js"></script>
<script src="/bower_components/xregexp/xregexp-all.js"></script>
<script src="/bower_components/htmlbars-standalone/build/htmlbars.js"></script>
<script src="/bower_components/chickenjs/build/chicken.js"></script>
```

## Create application
The first step in creating an application is adding an element and a view container to your HTML page:

```html
<div id="application">
  <view-container></view-container>
</div>
```

Then add a script that will initialize the application, thusly:

**app/js/app.js**
```javascript
Chicken.application($('#application'), {
  baseUrl: '/'
}).routes(() => {
  
  this.route('/', () => {
    return '<h1>Hello, world!</h1>';
  });
  
}).start();

```

## View containers
A view container is an element in your page that can be used to render views in. Each view container needs to have a name.  Every application must have at least a view container with the name **main**. Adding a `<view-container></view-container>` or `<div view-container="main"></div>` tag to your HTML page will tell the application to use this as the **main** view container.

You can also add view containers in your views, to allow for nested views. For example:

**app/index.html**
```html
<div id="application">
  <h1>Application</h1>
  <view-container></view-container>
</div>
```

**app/views/page.hbs**
```html
<h2>Page</h2>
<view-container name="sub"></view-container>
```

**app/views/sub-page.hbs**
```html
<h3>Subpage</h3>
```

Now, if you were to have a route that rendered the `sub-page.hbs` template into the `sub` view container, the resulting HTML would look something like:

```html 
<div id="application">
  <h1>Application</h1>
  <view-container>
    <h2>Page</h2>
    <view-container name="sub">
      <h3>Subpage</h3>
    </view-container>
  </view-container>
</div>
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

**Note:** Nested routes will always wait for their parent route to complete before executing. This allows you
to render nested routes into a view container that is created by the parent route.


## Controllers
Controllers are where you define what will be rendered into the view containers. For example:

**app/js/controllers/ProductController.js**
```javascript
Chicken.controller('Product', {

  index: function() {
  
    return Chicken.view('product.index')
      .with('products', Chicken.api('/products'))
      .when('added', (view) => { 
      
        // The view is rendered, and accessible through script
        view.$element.find('h1').style('color', 'red');
        
        // The data as well:
        console.log(view.data.products);  // Chicken.Data.Collection
      
      });
      
  },
  
  show: function(id) {
  
    return Chicken.view('product.show')
      .with('product', Chicken.api('/products/' + id))
      .when('added', (view) => {
      
        // The view is rendered, and has access to the model that was loaded
        // from the API
        console.log(view.data.product);   // Chicken.Data.Model
      
      });
  
  }

});
```

## Views
A view takes care of rendering the data to proper HTML, and keeping both the data and the interface up 
to date. For templating we use HTMLBars, which uses [Handlebars syntax](https://handlebarsjs.com).

### Example
A small example to illustrate one-way and two-way binding and actions. This all works in much the same way
as [Ember templates](https://guides.emberjs.com/v2.7.0/templates/handlebars-basics/) do.

**app/js/controllers/HomeController.js**
```javascript
[...]
index() {
  return Chicken.view('home.index', function() {
    
    this.with({
      person: {
        firstName: 'John',
        lastName: 'Wayne',
        fullName: Chicken.computed(['firstName', 'lastName'], (firstName, lastName) => {
          return firstName + ' ' + lastName;
        })
      },
      reversedName: Chicken.computed(['person.fullName'], (fullName) => {
        return _.map(fullName, (c) => c).reverse().join('');
      }),
      secretFound: Chicken.computed(['reversedName'], (reversedName) => {
        return reversedName === 'revooH ragdE .J';
      }),
    })
    .action('log', (name, actionBinding, view) => {

      // These are all the same
      console.log(name, this.get('person.fullName'), view.get('person.fullName'));

      // This is the $element that caused the action to be called
      actionBinding.$element.text('I was ' + actionBinding.eventName + 'ed!');

    });

  });
}
```

**app/views/home/index.hbs**
```handlebars
<h1>Hello {{person.fullName}}!</h1>
<p>To kill you, I say <strong>{{reversedName}}</strong></p>

<input type="text" value={{person.firstName}} placeholder="Enter your first name here...">
<input type="text" value={{person.lastName}} placeholder="And your last name here...">
<button {{action "log" person.fullName}}>Log it.</button>

{{#if secretFound}}
  <h2>You found the secret!</h2>
{{/if}}
```

## Components
A component is basically a view that is set up to be reused within your  templates. The following example should explain:

**app/js/components/Avatar.js**
```javascript
Chicken.component('avatar', 'components.avatar');
```

**app/views/components/avatar.hbs**
```handlebars
<div class="avatar">
  <img src={{contact.imageUrl}}>
  <h1>{{title}}</h1>
  <h2>{{contact.fullName }}</h2>
  <div class="bio">
    {{yield}}
  </div>
</div>
```

**app/js/controllers/ContactController.js**
```javascript```
show: (id) => {

  return Chicken.view('contacts.show')
    .with('contact', Chicken.api('/contacts/' + id));

}
```

**app/views/contacts/show.hbs**
```handlebars
<section>
  {{#avatar contact=contact title="Contact details"}}
    <p>This person is really good. All people are really good.</p>
  {{/avatar}}
</section>
```

The rendered result will be something like:
```html
<section>
  <div class="avatar">
    <img src="/images/contacts/john.jpg">
    <h1>Contact details</h1>
    <h2>John Wayne</h2>
    <div class="bio">
      <p>This person is really good. All people are really good.</p>
    </div>
  </div>
</section>
```

### Inline templates
For really simple components it might be easiest to define the template inline:

```javascript
Chicken.component('eu-currency', '<span>{{{currency}}}</span>', function() {
  
  this.computed('currency', ['value'], (value) => {
    return '&euro; ' + value.toFixed(2);
  });

});
```

```handlebars
{{eu-currency value=10.3}}
```


### Component definitions
When you define a component this way, note that you are not actually creating a `Chicken.Dom.Component` instance, but a `Chicken.Dom.ComponentDefinition` instance instead. The component itself will not be instantiated until it is used. 