# E-Shop-React-LARAVEL
![laravel-plus-react-tw](https://user-images.githubusercontent.com/91610919/217950347-c9b2ef41-257e-444d-9659-9b0f4a743f96.png)
<h1 align="center">+</h1>
<img src="https://user-images.githubusercontent.com/91610919/218211754-8c9a12e3-3fbe-4c70-b8d7-d328cd909e78.png" alt="redux"/>

<hr>
<h3>Using both React JS and Laravel can be a great option if you want to build a modern, feature-rich e-commerce website. React can be used to build the front-end user interface of your e-commerce website, while Laravel can be used to build the back-end server-side logic and manage the database.

By combining the strengths of both technologies, you can build an e-commerce website that is fast, scalable, and highly interactive. With React, you can build dynamic and responsive UIs that can efficiently update in real-time, while with Laravel, you can build robust and secure back-end logic and manage complex database operations.
</h3>
<br>
<h3>
However, it's important to note that using both React and Laravel requires a good understanding of both technologies, as well as experience in building web applications. Additionally, integrating the two technologies can be challenging and requires a good understanding of how to connect the front-end and back-end of an application.

In conclusion, using both React and Laravel can be a great choice for building a modern e-commerce website, but it requires a good understanding of both technologies and the ability to integrate them effectively.
</h3>
<br>
<p>
In other words, you have two apps, the one with laravel that exposes an api which could be used by any other service in the infrastructure, and the reactjs app which is a nodejs app that consumes that api, and handles the magic of react + redux.

The way your site is actually accessed from the outside world is thru the express/nodejs app, which calls the laravel api for data persistence and other business logic.

The laravel app handles sessions, oauth, the database, file access to the hardrive and so on, while the nodejs app handles the actual website routing, the templates, the css and javascript part.
</p>
