if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
og4.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image84.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj84Img\" src=\"images/Logo-ZK.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 134px; height: 41px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 21px; top: 19px; width: 134px; height: 41px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj84",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Logo-ZK"
	},
	objData:	{"a":[0,288,0,[21,19,134,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":21,"y":19,"width":134,"height":41}}
};
text83.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 403px; min-height: 77px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 393px; min-height: 67px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:16pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Openbare systemen</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 482px; top: 7px; width: 403px; height: 77px; z-index: 5;",
	cssClasses:	"header-module-title",
	htmlId:		"tobj83",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module title"
	},
	objData:	{"a":[0,32,0,[482,7,403,77]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":482,"y":7,"width":403,"height":77},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
textbutton109.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 125 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(62.5 29)\" style=\"\">\n	<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_4542_1060_9685\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_1060_9685&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(62.5 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1066px; top: 10px; width: 125px; height: 58px; z-index: 6; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj109",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button menu",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdmenu_hoofdmenu.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[1065.9999999999998,10.000000000000341,125,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape109.png","imgDataOver":"images/desktop_shape109.png","imgDataDown":"images/desktop_shape109.png","imgDataDisabled":"images/desktop_shape109_disabled.png","svgDataNormal":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_1060_9685\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_1060_9685&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_1060_9687\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_1060_9687&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_1060_9689\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_1060_9689&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_1060_9691\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_1060_9691&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton81.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_4542_1060_9693\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_1060_9693&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1202px; top: 10px; width: 150px; height: 58px; z-index: 7; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj81",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button sluit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkExitClose',actItem:function(){ {cleanupTitle('zk_systemen.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[1202,10.000000000000426,150,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape72.png","imgDataOver":"images/desktop_shape72.png","imgDataDown":"images/desktop_shape72.png","imgDataDisabled":"images/desktop_shape72_disabled.png","svgDataNormal":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_1060_9693\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_1060_9693&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_1060_9695\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_1060_9695&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_1060_9697\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_1060_9697&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_1060_9699\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_1060_9699&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape80.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 78\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 39)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 78 L 0 78 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -39) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 39)\">\n		<text font-family=\"Verdana\" font-size=\"-19.9999995\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.3\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 4.09273e-12px; width: 1366px; height: 78px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,4.092726157978177e-12,1366,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":78},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape71.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape93.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -2.72848e-12px; top: 78px; width: 1366px; height: 690px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj93",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bg"
	},
	objData:	{"a":[0,32,0,[-2.7284841053187847e-12,78.00000000000409,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape93.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
qu3778.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu3778",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	0,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0043\\u0068\\u006F\\u0069\\u0063\\u0065\\u0020\\u004F\\u006E\\u0065"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_62679
	},
	objData:	{"a":[0,32,0,[]]}
};
text3779.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 113px; min-height: 20px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 113px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">Question Text</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: -250px; width: 113px; height: 20px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj3779",
	bInsAnc:	0,
	fieldsetId:	'fset3778',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[50,-250,113,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":50,"y":-250,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text3780.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 100px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 100px; min-height: 20px;\"><label for=\"rad3781\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">Choice One</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: -220px; width: 100px; height: 20px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj3780",
	bInsAnc:	0,
	fieldsetId:	'fset3778',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[79,-220,100,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":79,"y":-220,"width":100,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio3781.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad3781\" name=\"rad3778\" value=\"Choice One\" onclick=\"VarQuestion_62679.set(this.value);qu3778.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: -219px; width: 19px; height: 19px; z-index: 12;",
	cssClasses:	"",
	htmlId:		"tobj3781",
	bInsAnc:	0,
	fieldsetId:	'fset3778',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[50,-219,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":50,"y":-219,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
shape3782.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1001 590\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(500.5 295)\" style=\"\">\n	<path d=\"M 5.9 0 L 995.1 0 A 5.9 5.9 0 0 1 1001 5.9 L 1001 584.1 A 5.9 5.9 0 0 1 995.1 590 L 5.9 590 A 5.9 5.9 0 0 1 0 584.1 L 0 5.9 A 5.9 5.9 0 0 1 5.9 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-500.5, -295) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(500.5 295)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 182px; top: 115px; width: 1001px; height: 590px; z-index: 13; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3782",
	bInsAnc:	0,
	cwObj:		{
		"name":	"BG"
	},
	objData:	{"a":[0,160,0,[181.99999999999966,115.00000000000068,1001,590]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":182,"y":115,"width":1001,"height":590},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape3782.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton3783.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(25 25)\" style=\"\">\n	<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_4542_3809_10685\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"50\" height=\"50\" xlink:href=\"images/Button_vorige50.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_3809_10685&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 30px; top: 399px; width: 50px; height: 50px; z-index: 39; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3783",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button previous",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowShowIfPageInSection=Not 1',actItem:function(){ if(!VarPageInSection.equals('1'))textbutton3783.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoToPrevOrMenu',actItem:function(){ if(!VarPageInSection.equals('1'))trivExitPage('zk_systemen_hoofdstukken_toets_vragen_vraag_4.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[36,33216,[34,0,7,0,200,0],[29.999999999999957,399.00000000000006,50,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":30,"y":399,"width":50,"height":50},"imgDataNormal":"images/desktop_shape3783.png","imgDataOver":"images/desktop_shape3783_over.png","imgDataDown":"images/desktop_shape3783.png","imgDataDisabled":"images/desktop_shape3783_disabled.png","svgDataNormal":"<g transform=\"translate(25 25)\" style=\"\">\n\t<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_3809_10685\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"50\" height=\"50\" xlink:href=\"images/Button_vorige50.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_3809_10685&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(25 25)\" style=\"\">\n\t<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_3809_10687\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"50\" height=\"50\" xlink:href=\"images/Button_vorige_hover50.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_3809_10687&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(25 25)\" style=\"\">\n\t<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_3809_10689\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"50\" height=\"50\" xlink:href=\"images/Button_vorige50.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_3809_10689&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(25 25)\" style=\"\">\n\t<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_3809_10691\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"50\" height=\"50\" xlink:href=\"images/Button_vorige50.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_3809_10691&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton3786.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(25 25)\" style=\"\">\n	<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_4542_3809_10693\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"50\" height=\"50\" xlink:href=\"images/Button_volgende50.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_3809_10693&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1286px; top: 399px; width: 50px; height: 50px; z-index: 40; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3786",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoToNextOrMenu',actItem:function(){ if(!VarPageInSection.equals('' +  VarPagesInSection.getValueForDisplay() + ''))trivExitPage('zk_systemen_hoofdstukken_toets_vragen_vraag_6.html',true,false);else trivExitPage('zk_systemen_hoofdmenu_hoofdmenu.html',true,false);
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33216,0,[1286,399.00000000000006,50,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1286,"y":399,"width":50,"height":50},"imgDataNormal":"images/desktop_shape3786.png","imgDataOver":"images/desktop_shape3786_over.png","imgDataDown":"images/desktop_shape3786.png","imgDataDisabled":"images/desktop_shape3786_disabled.png","svgDataNormal":"<g transform=\"translate(25 25)\" style=\"\">\n\t<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_3809_10693\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"50\" height=\"50\" xlink:href=\"images/Button_volgende50.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_3809_10693&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(25 25)\" style=\"\">\n\t<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_3809_10695\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"50\" height=\"50\" xlink:href=\"images/Button_volgende_hover50.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_3809_10695&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(25 25)\" style=\"\">\n\t<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_3809_10697\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"50\" height=\"50\" xlink:href=\"images/Button_volgende50.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_3809_10697&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(25 25)\" style=\"\">\n\t<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.3; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4542_3809_10699\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"50\" height=\"50\" xlink:href=\"images/Button_volgende50.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 50 L 0 50 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4542_3809_10699&quot;); fill-rule: nonzero; opacity: 0.3; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -25) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.3;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text3788.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: 1383px; top: 157px; width: 196px; height: 509px; z-index: 14; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj3788",
	bInsAnc:	1,
	cwObj:		{
		"name":	"VARS",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkChange',actItem:function(){ if( text3788.eatOnUp==true ){
        text3788.eatOnUp=false;
        return;
    }
    text3788.changeContents( "ToetsVraag01 = " +  VarToetsVraag01.getValueForDisplay() + "\nToetsVraag02 = " +  VarToetsVraag02.getValueForDisplay() + "\nToetsVraag03 = " +  VarToetsVraag03.getValueForDisplay() + "\nToetsVraag04 = " +  VarToetsVraag04.getValueForDisplay() + "\n\nToetsGoTo = " +  VarToetsGoTo.getValueForDisplay() + "\n\nprogress = " +  VarQuestion_62679.getValueForDisplay() + "\n\nToetsScore = " +  VarToetsScore.getValueForDisplay() + "\n\nAICC_Lesson_Status = " +  AICC_Lesson_Status.getValueForDisplay() + "" ); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:5,delay:0,name:'OnShowChange',actItem:function(){ text3788.changeContents( "ToetsVraag01 = " +  VarToetsVraag01.getValueForDisplay() + "\nToetsVraag02 = " +  VarToetsVraag02.getValueForDisplay() + "\nToetsVraag03 = " +  VarToetsVraag03.getValueForDisplay() + "\nToetsVraag04 = " +  VarToetsVraag04.getValueForDisplay() + "\n\nToetsGoTo = " +  VarToetsGoTo.getValueForDisplay() + "\n\nprogress = " +  VarQuestion_62679.getValueForDisplay() + "\n\nToetsScore = " +  VarToetsScore.getValueForDisplay() + "\n\nAICC_Lesson_Status = " +  AICC_Lesson_Status.getValueForDisplay() + "" ); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[36,160,0,[1383,157,196,509]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1383,"y":157,"width":196,"height":509},"dwTextFlags":0,"marginSize":20,"textPublishLang":"Inherit"}
};
og3791.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3791",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og3830.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3830",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og3835.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3835",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og3848.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3848",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image3849.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3849Img\" src=\"images/progress_cirkel_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 34px; height: 34px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 540px; top: 719px; width: 34px; height: 34px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj3849",
	bInsAnc:	0,
	cwObj:		{
		"name":	"cirkel1",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowChange',actItem:function(){ if(VarPageInSection.equals('1'))image3849.changeContents( "images/progress_cirkel.png" ); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,288,0,[540,719,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":540,"y":719,"width":34,"height":34}}
};
image3851.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3851Img\" src=\"images/progress_cirkel_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 34px; height: 34px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 590px; top: 719px; width: 34px; height: 34px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj3851",
	bInsAnc:	0,
	cwObj:		{
		"name":	"cirkel2",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowChange',actItem:function(){ if(VarPageInSection.equals('2'))image3851.changeContents( "images/progress_cirkel.png" ); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,288,0,[590,719,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":590,"y":719,"width":34,"height":34}}
};
image3853.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3853Img\" src=\"images/progress_cirkel_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 34px; height: 34px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 640px; top: 719px; width: 34px; height: 34px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj3853",
	bInsAnc:	0,
	cwObj:		{
		"name":	"cirkel3",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowChange',actItem:function(){ if(VarPageInSection.equals('3'))image3853.changeContents( "images/progress_cirkel.png" ); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,288,0,[640,719,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":640,"y":719,"width":34,"height":34}}
};
image3855.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3855Img\" src=\"images/progress_cirkel_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 34px; height: 34px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 690px; top: 719px; width: 34px; height: 34px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj3855",
	bInsAnc:	0,
	cwObj:		{
		"name":	"cirkel4",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowChange',actItem:function(){ if(VarPageInSection.equals('4'))image3855.changeContents( "images/progress_cirkel.png" ); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,288,0,[690,719,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":690,"y":719,"width":34,"height":34}}
};
image4391.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4391Img\" src=\"images/progress_cirkel_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 34px; height: 34px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 740px; top: 719px; width: 34px; height: 34px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj4391",
	bInsAnc:	0,
	cwObj:		{
		"name":	"cirkel5",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowChange',actItem:function(){ if(VarPageInSection.equals('5'))image4391.changeContents( "images/progress_cirkel.png" ); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,288,0,[740,719,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":740,"y":719,"width":34,"height":34}}
};
image4396.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4396Img\" src=\"images/progress_cirkel_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 34px; height: 34px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 790px; top: 719px; width: 34px; height: 34px; z-index: 20;",
	cssClasses:	"",
	htmlId:		"tobj4396",
	bInsAnc:	0,
	cwObj:		{
		"name":	"cirkel6",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowChange',actItem:function(){ if(VarPageInSection.equals('6'))image4396.changeContents( "images/progress_cirkel.png" ); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,288,0,[790,719,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":790,"y":719,"width":34,"height":34}}
};
image3857.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3857Img\" src=\"images/progress_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 546px; top: 725px; width: 22px; height: 22px; z-index: 21;",
	cssClasses:	"",
	htmlId:		"tobj3857",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bolletje1"
	},
	objData:	{"a":[0,288,0,[546,725,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":546,"y":725,"width":22,"height":22}}
};
image3858.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3858Img\" src=\"images/progress_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 596px; top: 725px; width: 22px; height: 22px; z-index: 22;",
	cssClasses:	"",
	htmlId:		"tobj3858",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bolletje2"
	},
	objData:	{"a":[0,288,0,[596,725,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":596,"y":725,"width":22,"height":22}}
};
image3859.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3859Img\" src=\"images/progress_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 646px; top: 725px; width: 22px; height: 22px; z-index: 23;",
	cssClasses:	"",
	htmlId:		"tobj3859",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bolletje3"
	},
	objData:	{"a":[0,288,0,[646,725,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":646,"y":725,"width":22,"height":22}}
};
image3860.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3860Img\" src=\"images/progress_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 696px; top: 725px; width: 22px; height: 22px; z-index: 24;",
	cssClasses:	"",
	htmlId:		"tobj3860",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bolletje4"
	},
	objData:	{"a":[0,288,0,[696,725,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":696,"y":725,"width":22,"height":22}}
};
image4401.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4401Img\" src=\"images/progress_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 746px; top: 725px; width: 22px; height: 22px; z-index: 25;",
	cssClasses:	"",
	htmlId:		"tobj4401",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bolletje5"
	},
	objData:	{"a":[0,288,0,[746,725,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":746,"y":725,"width":22,"height":22}}
};
image4405.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4405Img\" src=\"images/progress_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 796px; top: 725px; width: 22px; height: 22px; z-index: 26;",
	cssClasses:	"",
	htmlId:		"tobj4405",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bolletje6"
	},
	objData:	{"a":[0,288,0,[796,725,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":796,"y":725,"width":22,"height":22}}
};
og4545.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4545",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text4557.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 343px; min-height: 62px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 343px; min-height: 62px;\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:22pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Vraag 5</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 288px; top: 156px; width: 343px; height: 62px; z-index: 27;",
	cssClasses:	"page-title",
	htmlId:		"tobj4557",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Titel"
	},
	objData:	{"a":[0,32,0,[288,156,343,62]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":288,"y":156,"width":343,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text4558.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 787px; min-height: 140px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 787px; min-height: 140px;\"><p align=\"left\" leglh=\"1.661\" style=\"margin-left:0px;text-indent:0px;line-height:1.660;margin-top:0px;margin-bottom:0px;\"><span style=\"color: rgb(0, 40, 87); font-size:13pt; font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\">Hadjar belt. Zij is ingelogd in de Zilveren Kruis app. </span></p>\n\n<p align=\"left\" leglh=\"1.661\" style=\"margin-left:0px;text-indent:0px;line-height:1.660;margin-top:0px;margin-bottom:0px;\"><span style=\"color: rgb(0, 40, 87); font-size:13pt; font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\">​</span></p>\n\n<p align=\"left\" leglh=\"1.661\" style=\"margin-left:0px;text-indent:0px;line-height:1.660;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"color: rgb(0, 40, 87); font-size:13pt; font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\">Wat kan Hadjar met de Zilveren Kruis app regelen?</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 288px; top: 220px; width: 787px; height: 140px; z-index: 28;",
	cssClasses:	"body-txt",
	htmlId:		"tobj4558",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Vraag"
	},
	objData:	{"a":[0,32,0,[288,220,787,140]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":288,"y":220,"width":787,"height":140},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og4559.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4559",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text4560.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 785px; height: 90px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 785px; height: 90px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px 4px; width: 660px; vertical-align: middle; height: 90px; border-width: 0px; border-style: solid;\">\n			<p><span style=\"color: rgb(0, 104, 189); font-family: &quot;PT Sans&quot;, sans-serif; font-size:13pt;\">Een declaratie indienen</span></p>\n			</td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 286px; top: 367px; width: 785px; height: 90px; z-index: 29; cursor: pointer;",
	cssClasses:	"Antwoord_A answerToetsVraag-notselected",
	htmlId:		"tobj4560",
	bInsAnc:	1,
	cwObj:		{
		"name":	">>>Antwoord_A",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVarSaveAnswer',actItem:function(){ if( text4560.eatOnUp==true ){
        text4560.eatOnUp=false;
        return;
    }
    VarQuestion_4579.set('A'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_A',actItem:function(){ if( text4560.eatOnUp==true ){
        text4560.eatOnUp=false;
        return;
    }
    if(VarCorrectAnswer.equals('A'))runJS4562();else runJSElse4562();
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_VX_A',actItem:function(){ if( text4560.eatOnUp==true ){
        text4560.eatOnUp=false;
        return;
    }
    if(VarCorrectAnswer.equals('A'))image4576.changeContents( "images/check_v.png" ); else image4576.changeContents( "images/check_x.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrpAfrondingVraag',actItem:function(){ if( text4560.eatOnUp==true ){
        text4560.eatOnUp=false;
        return;
    }
    {og4545.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[286,367,785,90]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":286,"y":367,"width":785,"height":90},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text4565.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 785px; height: 90px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 785px; height: 90px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px 4px; width: 785px; vertical-align: middle; height: 90px; border-width: 0px; border-style: solid;\">\n			<p><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; font-size:13pt; color: rgb(0, 104, 189);\">Een betalingsregeling aanvragen</span></p>\n			</td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 286px; top: 472px; width: 785px; height: 90px; z-index: 30; cursor: pointer;",
	cssClasses:	"Antwoord_B answerToetsVraag-notselected",
	htmlId:		"tobj4565",
	bInsAnc:	1,
	cwObj:		{
		"name":	">>>Antwoord_B",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVarSaveAnswer',actItem:function(){ if( text4565.eatOnUp==true ){
        text4565.eatOnUp=false;
        return;
    }
    VarQuestion_4579.set('B'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_B',actItem:function(){ if( text4565.eatOnUp==true ){
        text4565.eatOnUp=false;
        return;
    }
    if(VarCorrectAnswer.equals('B'))runJS4567();else runJSElse4567();
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_VX_B',actItem:function(){ if( text4565.eatOnUp==true ){
        text4565.eatOnUp=false;
        return;
    }
    if(VarCorrectAnswer.equals('B'))image4577.changeContents( "images/check_v.png" ); else image4577.changeContents( "images/check_x.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrpAfrondingVraag',actItem:function(){ if( text4565.eatOnUp==true ){
        text4565.eatOnUp=false;
        return;
    }
    {og4545.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[286,472,785,90]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":286,"y":472,"width":785,"height":90},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text4570.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 785px; height: 90px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 785px; height: 90px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px 4px; width: 785px; vertical-align: middle; height: 90px; border-width: 0px; border-style: solid;\">\n			<p><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; font-size:13pt; color: rgb(0, 104, 189);\">Haar pakket wijzigen</span></p>\n			</td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 286px; top: 577px; width: 785px; height: 90px; z-index: 31; cursor: pointer;",
	cssClasses:	"Antwoord_C answerToetsVraag-notselected",
	htmlId:		"tobj4570",
	bInsAnc:	1,
	cwObj:		{
		"name":	">>>Antwoord_C",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVarSaveAnswer',actItem:function(){ if( text4570.eatOnUp==true ){
        text4570.eatOnUp=false;
        return;
    }
    VarQuestion_4579.set('C'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_C',actItem:function(){ if( text4570.eatOnUp==true ){
        text4570.eatOnUp=false;
        return;
    }
    if(VarCorrectAnswer.equals('C'))runJS4572();else runJSElse4572();
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_VX_C',actItem:function(){ if( text4570.eatOnUp==true ){
        text4570.eatOnUp=false;
        return;
    }
    if(VarCorrectAnswer.equals('C'))image4578.changeContents( "images/check_v.png" ); else image4578.changeContents( "images/check_x.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrpAfrondingVraag',actItem:function(){ if( text4570.eatOnUp==true ){
        text4570.eatOnUp=false;
        return;
    }
    {og4545.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[286,577,785,90]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":286,"y":577,"width":785,"height":90},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og4575.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4575",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image4576.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4576Img\" src=\"images/check_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 54px; height: 90px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 221px; top: 367px; width: 54px; height: 90px; z-index: 32;",
	cssClasses:	"",
	htmlId:		"tobj4576",
	bInsAnc:	0,
	cwObj:		{
		"name":	"VX_A"
	},
	objData:	{"a":[0,288,0,[221,367,54,90]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":221,"y":367,"width":54,"height":90}}
};
image4577.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4577Img\" src=\"images/check_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 54px; height: 90px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 221px; top: 472px; width: 54px; height: 90px; z-index: 33;",
	cssClasses:	"",
	htmlId:		"tobj4577",
	bInsAnc:	0,
	cwObj:		{
		"name":	"VX_B"
	},
	objData:	{"a":[0,288,0,[221,472,54,90]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":221,"y":472,"width":54,"height":90}}
};
image4578.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4578Img\" src=\"images/check_trans.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 54px; height: 90px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 221px; top: 577px; width: 54px; height: 90px; z-index: 34;",
	cssClasses:	"",
	htmlId:		"tobj4578",
	bInsAnc:	0,
	cwObj:		{
		"name":	"VX_C"
	},
	objData:	{"a":[0,288,0,[221,577,54,90]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":221,"y":577,"width":54,"height":90}}
};
qu4579.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu4579",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	8,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0043\\u0068\\u006F\\u0069\\u0063\\u0065\\u0020\\u004F\\u006E\\u0065"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_4579
	},
	objData:	{"a":[0,32,0,[]]}
};
text4580.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 113px; min-height: 20px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 113px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Question Text</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: -370px; width: 113px; height: 20px; z-index: 35;",
	cssClasses:	"",
	htmlId:		"tobj4580",
	bInsAnc:	0,
	fieldsetId:	'fset4579',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[50,-370,113,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":50,"y":-370,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text4581.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 100px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 100px; min-height: 20px;\"><label for=\"rad4582\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Choice One</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: -340px; width: 100px; height: 20px; z-index: 36;",
	cssClasses:	"",
	htmlId:		"tobj4581",
	bInsAnc:	0,
	fieldsetId:	'fset4579',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[79,-340,100,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":79,"y":-340,"width":100,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio4582.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad4582\" name=\"rad4579\" value=\"Choice One\" onclick=\"VarQuestion_4579.set(this.value);qu4579.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: -339px; width: 19px; height: 19px; z-index: 37;",
	cssClasses:	"",
	htmlId:		"tobj4582",
	bInsAnc:	0,
	fieldsetId:	'fset4579',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[50,-339,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":50,"y":-339,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
shape4583.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 809 319\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(404.5 159.5)\" style=\"\">\n	<path d=\"M 0 0 L 809 0 L 809 319 L 0 319 L 0 0 Z\" style=\"stroke: rgb(214, 239, 240); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-404.5, -159.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(404.5 159.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 274px; top: 355px; width: 809px; height: 319px; z-index: 38; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4583",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Disable pane"
	},
	objData:	{"a":[0,128,0,[273.99999999999994,355.0000000000001,809,319]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":274,"y":355,"width":809,"height":319},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape3902.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	27
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_sluit_groot.png","images/Logo-ZK.jpg","images/Button_menu_groot.png","images/Button_vorige50.png","images/Button_vorige_hover50.png","images/Button_volgende50.png","images/Button_volgende_hover50.png","images/progress_0.png","images/progress_-1.png","images/progress_1.png","images/progress_cirkel_trans.png","images/progress_cirkel.png","images/progress_trans.png","images/check_v.png","images/check_x.png","images/check_trans.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
