HamTemplate
===========

Template for ham radio websites - allows for building pages in markdown


## What is it? ##

This is a drop in template that allows for quick setup of not-ugly pages.

## Do I need to know HTML? ##

You need to know **very** basic HTML to use this.

Almost all of the html you will need to know will fall into one of the below 
categories.

1. Adding Items to the sidebar.

 **Example:**

 ```
 <ul class="nav bs-sidenav" id="navbar">
   <li>
     <a href="#item1">Item 1</a>
       <ul class="nav">
         <li><a href="#sub1">Sub 1</a></li>
       </ul>
   </li>
 </ul>
 ```
 
2. Adding dynamic callsign lookup.

 ``
<span class="callsign">KD0WKW</span>
``

3. Linking to another page (.md file you created).

 ``
 <a href="#pagename">Page Name</a>
 ``
 Replace `pagename` with the name you gave the `.md` file and "Page Name" with
 the name to be displayed on the web site.

## How do I use it? ##

[Download](https://github.com/qbit/HamTemplate/archive/master.zip) the template
and unzip it in your `www root`

Make changes to the `index.html` file to reflect the sidebar items and sub-items
you want on your site.

Add .md files in the texts directory and link them in the `index.html` file with
`step 3` above.

