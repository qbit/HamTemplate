Callsign.js
===========

A js library for getting FCC callsign info.

All requests are proxied (currently to http://callsign-qbit.rhcloud.com/) due to the lack of JSONp support on fcc.gov.
If you want to run yoru own proxy, there is a server written in node available at https://github.com/qbit/callsign


### Usage ###

``` javascript
var callmgr = new Callsign(opts);

callmgr.get('<callsign>', function(info) {
	console.log(info);
});
```

### Options ###

Options that can be passed in:

* **url**: must contain two "variables", %S and %C. %S being the callsign to
be looked up and %C being the callback to call.
* **map**: list of field mappings from the raw JSON to "pretty" names.
* **callback**: callback to use for the JSONP request.

