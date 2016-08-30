var GROUPS = [
  {
    name: 'cli',
    packages: [
      {
        name: 'sphere-node-cli',
        description: 'A fast, performant, easy-to-use and stream-based CLI for commercetools platform',
        published: true
      },
      {
        name: 'sphere-node-product-csv-sync',
        description: 'Component to import, export and update your commercetools platform products via CSV.',
        published: true
      },
      {
        name: 'sphere-category-sync',
        description: 'Manage your commercetools platform category tree',
        published: true
      },
      {
        name: 'sphere-stock-import',
        description: "Import your stock information into commercetools platform's inventory from CSV or XML, with SFTP support!",
        published: true
      },
      {
        name: 'sphere-order-export',
        description: 'Quick and easy way to export your orders from commercetools platform into files, with SFTP support!',
        published: true
      },
      {
        name: 'sphere-customer-import',
        description: 'A library that helps with importing customers into the commercetools platform',
        published: true
      },
      {
        name: 'sphere-product-import',
        description: 'A library that helps with importing product data into the commercetools platform',
        published: true
      },
      {
        name: 'sphere-product-type-json-generator',
        description: "A command line tool for generating ProductTypes JSON representations from CSV templates.",
        published: true
      },
      {
        name: 'sphere-product-type-import',
        description: "A library that helps with importing product-types into the commercetools platform.",
        published: true
      },
      {
        name: 'sphere-product-type-export',
        description: "A library that helps with exporting product-types from the commercetools platform.",
        published: true
      },
      {
        name: 'sphere-products-availability-sync',
        description: 'A script to update, for each product variant, the availability flag to a custom attribute (to allow searching by availability)',
        published: true
      },
      {
        name: 'node-s3-utils',
        description: 'A Command Line Interface providing some utilities for managing AWS S3 resources',
        published: true
      },
      {
        name: 'sphere-stock-sync',
        description: 'Component to automatically sync InventoryEntries between commercetools platform projects',
        published: false
      },
      {
        name: 'sphere-price-sync',
        description: 'Using this component you can sync product prices from one commercetools platform project into another.',
        published: false
      },
      {
        name: 'sphere-order-distribution',
        description: 'This component will distribute (sync) orders between master <-> retailer',
        published: false
      },
    ]
  },
  {
    name: 'modules',
    packages: [
      {
        name: 'sphere-node-sdk',
        description: 'Officially supported Node.js SDK library for working with the commercetools platform HTTP API, with OAuth2 support.',
        published: true
      },
      {
        name: 'sphere-node-utils',
        description: 'Officially supported Node.js SDK library for working with the commercetools platform HTTP API, with OAuth2 support.',
        published: true
      },
      {
        name: 'sphere-customer-import',
        description: 'A library that helps with importing customers into the commercetools platform.',
        published: true
      },
      {
        name: 'sphere-product-type-import',
        description: 'A library that helps with importing product-types into the commercetools platform.',
        published: true
      }
    ]
  },
  {
    name: 'applications',
    packages: [
      {
        name: 'sphere-express-impex',
        description: 'Node.js GUI application for commercetools platform import and export tools (IMPEX), running on express.js and socket.io',
        published: false,
        url: 'https://impex.commercetools.com/'
      },
      {
        name: 'sphere-express-pdf',
        description: 'HTML to PDF Restlet webserver, using expressjs and phantomjs',
        published: false,
        url: 'https://pdf.sphere.io/'
      }
    ]
  }
]

var template = "<ul>" +
"<% _.each(GROUPS, function(group) { %>" +
"  <li class=\"pull-left\">" +
"    <h3 class=\"package-title\"><%= group.name.charAt(0).toUpperCase() + group.name.substring(1) %></h3>" +
"    <ul class=\"package-list\">" +
"    <% _.each(group.packages, function(pkg) { %>" +
"      <li>" +
"        <div class=\"package-badges\">" +
"          <a href=\"https://github.com/sphereio/<%= pkg.name %>\" target=\"_blank\" title=\"Fork me\">" +
"            <span class=\"forkme\"></span>" +
"          </a>" +
"          <span><code><%= pkg.name %></code></span>" +
"          <a href=\"http://travis-ci.org/sphereio/<%= pkg.name %>\">" +
"            <img src=\"http://img.shields.io/travis/sphereio/<%= pkg.name %>.svg?style=flat\" alt=\"Build Status\" style=\"max-width:100%;\">" +
"          </a>" +
"          <% if (pkg.published) { %>"+
"          <a href=\"https://www.npmjs.org/package/<%= pkg.name %>\">" +
"            <img src=\"http://img.shields.io/npm/v/<%= pkg.name %>.svg?style=flat\">" +
"          </a>" +
"          <% } %>" +
"          <% if (pkg.url) { %>"+
"          <a href=\"<%= pkg.url %>\" target=\"_blank\"><%= pkg.url %></a>" +
"          <% } %>" +
"        </div>" +
"        <div class=\"package-description\">" +
"          <small><%= pkg.description %></small>" +
"        </div>" +
"        <% if (pkg.published) { %>"+
"        <div class=\"highlight\"><pre><code>$ npm install -g <%= pkg.name %></code></pre></div>" +
"        <% } %>" +
"      </li>" +
"    <% }) %>" +
"    </ul>" +
"  </li>" +
"  <% }) %>" +
"</ul>"

var container = document.getElementById('package-groups')
container.innerHTML = _.template(template)(GROUPS)
