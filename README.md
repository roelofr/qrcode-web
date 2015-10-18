# QRCode website

A simple (by design) interface to locally create a QR code. Usages include, but
are not limited to:

 - Creating WiFi password sheets
 - Storing GnuPG revokation certificates on paper
 - Quickly testing something

I sort of made this as a simple *proof-of-concept* for myself. If you have any
additions, feel free to open an issue or create a pull request.

You can [see it in operation here](http://roelofr.github.io/qrcode-web/).

## independent branch
If you don't have Bower, you can check out the 'independent' branch, which has
all the dependancies baked in.

## License
Since this is a continuation on a template by Google, which was licensed under
Apache 2.0, this project is licensed under the [Apachce license](LICENSE).

## How to run locally

In theory you should be able to just double-click the `index.html` file. This,
however, might collide with some permission restrictions when saving a High-Definition
version of the QR code. Should the local version not work, you can try and run
it locally using either one of these techniques:

### Python

To start a simple webserver for this project on
[localhost:8080](http://localhost:8080/), run the following command in the
working directory:
```
    python -m http.server 8080
```

### PHP

The same can be done with PHP:

```
    php -S localhost:8080
```



