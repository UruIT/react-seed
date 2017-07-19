# Segment set up

## Create a segment account
1. Create a segment account (https://segment.com/signup) and copy the write key.
2. Add the following script into the head of your html, replacing "YOUR_WRITE_KEY".
```
<script type="text/javascript">
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
  analytics.load("YOUR_WRITE_KEY");
  analytics.page();
  }}();
</script>
```
### Help: When using ejs: 
- Put the script in a separate file
- Use copy-webpack-plugin to build it
- Add it in the webpack.config.common with the tag 'scripts' in the HtmlWebpackPlugin section.

## Install redux-segment
3. yarn add redux-segment in the client project
4. It can be necessary to add babel-preset-stage-0 in the client project too
5. Create a tracker in the createStore section, usign createTracker() from 'redux-segment'
6. Add the tracker as the last argument in the applyMiddleware function.
7. Enjoy! Track the needed actions to send your data to segment analytics.

