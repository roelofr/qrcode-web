# QRCode website

A simple (by design) interface to locally create a QR code. Usages include, but
are not limited to:

 - Creating WiFi password sheets
 - Storing GnuPG revokation certificates on paper
 - Quickly testing something

I sort of made this as a simple *proof-of-concept* for myself. If you have any
additions, feel free to open an issue or create a pull request.

This project should be able to run offline.

If you don't have Bower, you can check out the 'independent' branch, which has
all the dependancies baked in.

## License
Since this is a continuation on a template by Google, which was licensed under
Apache 2.0, this project is licensed under the [Apachce license](LICENSE).

## How to run locally

After checking this out, cd into this directory (using cmd, terminal or what have
you) and run either one of these options.

### Python

To start a simple webserver for this project on
[localhost:8080](http://localhost:8080/), use:
```
    python -m http.server 8080
```

### PHP

The same can be done with PHP:

```
    php -S localhost:8080
```



