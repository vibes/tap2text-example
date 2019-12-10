## Tap to Join
“Tap to Join” is a low cost, low friction method of acquiring new subscribers to your SMS list. This solution consists of simple HTML and Javascript you can can put on your own website to create a one-touch method for customers to subscribe to your marketing message lists. The call to action can be styled to match your mobile website, email template, or other digital channels you may support. Your customers simply tap a link and touch SEND to start the process of joining your marketing lists with no forms to complete and no data to enter.

The javascript below constructs and inserts into the DOM an SMS uri that will pre-populate a short code and keyword in the device’s SMS client. Because iOS does not fully implement [RFC 5724](https://tools.ietf.org/html/rfc5724), the js is necessary to adjust the uri to work on iOS devices.

_"Tap to Join" is provided as-is, with no warranty._


## Setup
In the javascript files, replace the values assigned to `shortCode` and `keyword` with your short code and the keyword associated with your Acquisition Campaign.

```
var shortCode = "12345";
var keyword = "KEYWORD";
```

#### For Mobile Web
In your web page, first add the HTML that will render the call to action, updating the default short code and keyword to match your own. This example includes optional fallback messages for desktop browsers or unsupported devices (see `/index.html`):

```
<!-- Android or iOS call to action-->
<div id="vibes_tap2join_box" style="display: none">
    <h3>Tap to Join</h3>
    <p>Press the link to send KEYWORD to 12345.</p>
    <p><a href="#" onclick='openMsg()'>Tap to text</a></p>
</div>

<!-- OPTIONAL: Fallback content for desktop-->
<div id="desktop_fallback" style="display: none">
    <h3>Desktop fallback</h3>
    <p>Please open the link on your mobile device.</p>
</div>

<!-- OPTIONAL: Device not supported content-->
<div id="not_supported" style="display: none">
    <h3>Device not supported</h3>
    <p>Your device does not support this feature.</p>
</div>
```


After replacing the default short code and keyword to match your own, include the web specific javascript file at the bottom of the page:

```
<script src="js/vibes_tap_main.js"></script>
```

For an example, visit https://www.vibes.com/tap2join on your mobile phone.

#### For Email
To bypass javascript restrictions in email clients, you will need to host a single, static web page to enable the tap to join functionality via email. Your email call to action will be a link to this static page.

In your web page, you can optionally add fallback messages for desktop browsers or unsupported devices. See `/email/index.html`.
```
<div>
    <!-- OPTIONAL: Fallback content for desktop-->
    <div id="desktop_fallback" style="display: none">
        <h3>Desktop fallback</h3>
        <p>Please open the link on your mobile device.</p>
    </div>

    <!-- OPTIONAL: Device not supported content-->
    <div id="not_supported" style="display: none">
        <h3>Device not supported</h3>
        <p>Your device does not support this feature.</p>
    </div>
</div>
```

Include the email specific javascript file at the bottom of the page:

```
<script src="/email/js/vibes_tap_email.js"></script>
```

### OS Support
* iOS 8+
* Android 4+



