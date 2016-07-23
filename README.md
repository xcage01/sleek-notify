# Sleek-notify

A javascript library that makes notifications super simple. Install is as simple as

    bower install sleek-notify

You can simple call this using

    var notification = new sleekNotify(2);
    notification.alert('hello world');
    notification.alertTime('hello world',4);

Parameter in constructor is timeout for the alertbox. Using alertTime you can set
a custom value for timeout.
