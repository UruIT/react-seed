module.exports = `<style type="text/css">
      /*resets from YUI*/
      body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td {margin:0; padding:0;}
      table {border-collapse:collapse; border-spacing:0;}
      fieldset,img {border:0;}
      address,caption,cite,code,dfn,em,strong,th,var {font-style:normal; font-weight:normal;}
      ol,ul {list-style:none;}
      caption,th {text-align:left;}
      h1,h2,h3,h4,h5,h6 {font-size:100%; font-weight:normal;}
      q:before,q:after {content:;}
      abbr,acronym { border:0;}

      /* setup the page */
      @page { margin: 30px; background: #ffffff; }
      /* setup the footer */
      @page { @bottom { content: flow(foot); } }
      #footer { flow: static(foot); }

      /* some useful defaults */
      th, td, caption { padding: 4px 10px 4px 5px; }

      /* useful utility */
      .clear { clear:both; }

      /* layout */
      #container { font-family: Omnes Light, Trebuchet MS, Calibri, Futura, Geneva, Tahoma; font-size: 14pt; color: #a7a7a7; position: relative; }

      /* footer shenanigans! */
      #footer { text-align: center; display: block; }

      /* hack around the way prince handles the footer */
      #footer #contain { display: inline-block; width: 700px; height: 60px; }
      /* end hack */

      /* colors */
      .black { color: black }

      /* stylin */
      #header_img { align:left; position: absolute; top: 30px; left: 30px; z-index: -2; width: 200px;}

      #main { margin: 0 30px; }

      #header { font-size: 0.5em; text-align: right; margin-top: 6em; }

      #header span.black { font-size: 1em; margin: 0 0.75em; }

      #quote_name { margin-top: 3.5em; text-align: right; font-weight: bold; font-size: 1.5em }

      #client { font-size: 0.75em; margin-top: 3em; margin-left: 0.5em;}

      #client_header { font-size: 0.5em; }

      #phase_details {
        margin-top: 2em;
        font-size: 0.6em;
        border-width: 1px;
        border-spacing: 0px;
        border-style: solid;
        border-color: gray;
        width: 100%;
      }

      #phase_details th { font-size: 0.8em; padding: 10px !important; border-style: solid !important; }

      #phase_details th, td {
        border-width: 1px;
        padding: 3px 5px;
        border-top-style: none;
        border-bottom-style: none;
        border-left-style: solid;
        border-right-style: solid;
        border-color: gray;
        background-color: white;
      }

      #phase_details tr.first td { padding-top: 10px; padding-bottom: 10px; }

      #phase_details td.price { text-align: left; }
      #phase_details .price_container { float: left; min-width: 30%; }

      #phase_details thead .title { width: 20%; }
      #phase_details thead .description { width: 60%; }
      #phase_details thead .price { width: 20%; }
      #phase_details tr.last { border-bottom: 1px solid gray; }
      #footer #contain { text-align: right; font-size: 0.8em; }
      #total_price { text-align: right; margin-right: 6.75em; margin-top: 0.5em; }
      #total_price h2 { color: black; font-size: 0.6em; font-weight: bold; }
      #total_price .price { margin-left: 0.75em; }
</style>`;
