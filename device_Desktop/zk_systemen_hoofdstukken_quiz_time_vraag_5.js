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
	innerHtml:	"<svg viewBox=\"0 0 125 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(62.5 29)\" style=\"\">\n	<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1988_1060_15979\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_1060_15979&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(62.5 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1066,10.000000000000071,125,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape109.png","imgDataOver":"images/desktop_shape109.png","imgDataDown":"images/desktop_shape109.png","imgDataDisabled":"images/desktop_shape109_disabled.png","svgDataNormal":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_1060_15979\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_1060_15979&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_1060_15981\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_1060_15981&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_1060_15983\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_1060_15983&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_1060_15985\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_1060_15985&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton81.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1988_1060_15987\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_1060_15987&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1202,10.000000000000089,150,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape72.png","imgDataOver":"images/desktop_shape72.png","imgDataDown":"images/desktop_shape72.png","imgDataDisabled":"images/desktop_shape72_disabled.png","svgDataNormal":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_1060_15987\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_1060_15987&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_1060_15989\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_1060_15989&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_1060_15991\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_1060_15991&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_1060_15993\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_1060_15993&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape80.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 78\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 39)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 78 L 0 78 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -39) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 39)\">\n		<text font-family=\"Verdana\" font-size=\"-19.9999995\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.3\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 8.52651e-13px; width: 1366px; height: 78px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,8.526512829121202e-13,1366,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":78},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape71.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape93.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -5.68434e-13px; top: 78px; width: 1366px; height: 690px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj93",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bg"
	},
	objData:	{"a":[0,32,0,[-5.684341886080801e-13,78.00000000000085,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape93.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text1175.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 80px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 396px; min-height: 80px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Quiz time</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 484px; top: 43px; width: 396px; height: 80px; z-index: 10;",
	cssClasses:	"header-module-subtitle",
	htmlId:		"tobj1175",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module subtitle"
	},
	objData:	{"a":[0,32,0,[484,43,396,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":484,"y":43,"width":396,"height":80},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og2127.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2127",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape2128.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 584px; top: 690px; width: 17px; height: 17px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2128",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[584,690,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":584,"y":690,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2083.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2129.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 630px; top: 690px; width: 17px; height: 17px; z-index: 12; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2129",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[630,690,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":630,"y":690,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2083.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2130.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 676px; top: 690px; width: 17px; height: 17px; z-index: 13; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2130",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[676,690,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":676,"y":690,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2083.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2131.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 722px; top: 690px; width: 17px; height: 17px; z-index: 14; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2131",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[722,690,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":722,"y":690,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2083.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2132.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 40, 87); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 768px; top: 690px; width: 17px; height: 17px; z-index: 15; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2132",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[768,690,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":768,"y":690,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2082.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1990.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 97 39\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(48.5 19.5)\" style=\"\">\n	<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1988_16123\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16123&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(48.5 19.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 636px; top: 534px; width: 97px; height: 39px; z-index: 39; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1990",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button check",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2048.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton2043.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarQuiz_progress.add('05_done'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[636,534,97,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":636,"y":534,"width":97,"height":39},"imgDataNormal":"images/desktop_shape1390.png","imgDataOver":"images/desktop_shape1390_over.png","imgDataDown":"images/desktop_shape1390.png","imgDataDisabled":"images/desktop_shape1390_disabled.png","svgDataNormal":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16123\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16123&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16125\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16125&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16127\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16127&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16129\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16129&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og1994.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og1994",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og2002.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2002",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text2007.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 450px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 450px; min-height: 54px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><span style=\"font-family: &quot;Titillium Web SemiBold&quot;, sans-serif; font-size: 37.3333px; color: rgb(0, 40, 87);\">Wat denk jij?</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 457px; top: 164px; width: 450px; height: 54px; z-index: 16;",
	cssClasses:	"page-title",
	htmlId:		"tobj2007",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,32,0,[457,164,450,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":457,"y":164,"width":450,"height":54},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2008.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 575px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 575px; min-height: 88px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;pt sans&quot;, sans-serif; font-size: 18.6667px; color: rgb(0, 40, 87);\">Vraag 5/5 </span></p>\n\n<p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif; font-size: 18.6667px; background-color: transparent;\">Waar kun je als <strong>klantenservice medewerker</strong> een betalingsregeling aanvragen voor de klant?</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 395px; top: 239px; width: 575px; height: 88px; z-index: 17;",
	cssClasses:	"page-body",
	htmlId:		"tobj2008",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[395,239,575,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":395,"y":239,"width":575,"height":88},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og2009.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2009",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape2010.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 736 3\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(368 1.5)\" style=\"\">\n	<path d=\"M 0 0 L 733 0\" style=\"stroke: rgb(126, 187, 194); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-366.5, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(368 8.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 315.5px; top: 382.5px; width: 736px; height: 3px; z-index: 18; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2010",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[315.5,382.5000000000001,736,3]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":317,"y":384,"width":736,"height":3},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1495.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2011.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 23 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(11.5 11.5)\" style=\"\">\n	<path d=\"M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(11.5 11.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 305.5px; top: 372.5px; width: 23px; height: 23px; z-index: 19; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2011",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Cirkel 1"
	},
	objData:	{"a":[0,32,0,[305.5,372.5,23,23]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":307,"y":374,"width":23,"height":23},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1207.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2012.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 20 A 20 20 0 1 1 40 20 A 20 20 0 1 1 0 20 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 297px; top: 364px; width: 40px; height: 40px; z-index: 20; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2012",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area 1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarQuestion_2074.set('1'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton1990.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og2002.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDot1',actItem:function(){ shape2017.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[297,364,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":297,"y":364,"width":40,"height":40},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1203.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2017.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 18 A 18 18 0 1 1 36 18 A 18 18 0 1 1 0 18 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 299px; top: 366px; width: 36px; height: 36px; z-index: 21; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj2017",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hidden cirkel 1"
	},
	objData:	{"a":[0,0,0,[299,366,36,36]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"1","depth":2,"color":"#16655D","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":299,"y":366,"width":36,"height":36},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1202.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2018.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 124px; min-height: 62px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 124px; min-height: 62px;\"><p leglh=\"1.296\" style=\"margin-left: 0px; text-indent: 0px; line-height: 1.296; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:14pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif;\">Brein</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 254px; top: 425px; width: 124px; height: 62px; z-index: 22;",
	cssClasses:	"slider-txt",
	htmlId:		"tobj2018",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Antwoord"
	},
	objData:	{"a":[0,32,0,[254,425,124,62]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":254,"y":425,"width":124,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape2019.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 23 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(11.5 11.5)\" style=\"\">\n	<path d=\"M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(11.5 11.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 551.5px; top: 372.5px; width: 23px; height: 23px; z-index: 23; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2019",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Cirkel 2"
	},
	objData:	{"a":[0,32,0,[551.5,372.5,23,23]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":553,"y":374,"width":23,"height":23},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1207.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2020.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 20 A 20 20 0 1 1 40 20 A 20 20 0 1 1 0 20 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 543px; top: 364px; width: 40px; height: 40px; z-index: 24; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2020",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area 2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarQuestion_2074.set('2'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton1990.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og2002.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDot2',actItem:function(){ shape2025.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[543,364,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":543,"y":364,"width":40,"height":40},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1203.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2025.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 18 A 18 18 0 1 1 36 18 A 18 18 0 1 1 0 18 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 545px; top: 366px; width: 36px; height: 36px; z-index: 25; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj2025",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hidden cirkel 2"
	},
	objData:	{"a":[0,0,0,[545,366,36,36]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"1","depth":2,"color":"#16655D","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":545,"y":366,"width":36,"height":36},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1202.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2026.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 124px; min-height: 62px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 124px; min-height: 62px;\"><p leglh=\"1.296\" style=\"margin-left: 0px; text-indent: 0px; line-height: 1.296; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:14pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif;\">Mikado</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 500px; top: 425px; width: 124px; height: 62px; z-index: 26;",
	cssClasses:	"slider-txt",
	htmlId:		"tobj2026",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Antwoord"
	},
	objData:	{"a":[0,32,0,[500,425,124,62]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":500,"y":425,"width":124,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape2027.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 23 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(11.5 11.5)\" style=\"\">\n	<path d=\"M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(11.5 11.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 797.5px; top: 372.5px; width: 23px; height: 23px; z-index: 27; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2027",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Cirkel 3"
	},
	objData:	{"a":[0,32,0,[797.5,372.5,23,23]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":799,"y":374,"width":23,"height":23},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1207.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2028.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 20 A 20 20 0 1 1 40 20 A 20 20 0 1 1 0 20 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 789px; top: 364px; width: 40px; height: 40px; z-index: 28; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2028",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area 3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarQuestion_2074.set('3'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton1990.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og2002.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDot3',actItem:function(){ shape2033.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[789,364,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":789,"y":364,"width":40,"height":40},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1203.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2033.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 18 A 18 18 0 1 1 36 18 A 18 18 0 1 1 0 18 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 791px; top: 366px; width: 36px; height: 36px; z-index: 29; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj2033",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hidden cirkel 3"
	},
	objData:	{"a":[0,0,0,[791,366,36,36]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"1","depth":2,"color":"#16655D","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":791,"y":366,"width":36,"height":36},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1202.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2034.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 74px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 74px;\"><p leglh=\"1.296\" style=\"margin-left: 0px; text-indent: 0px; line-height: 1.296; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:14pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif;\">Mijn Zilveren Kruis</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 732px; top: 425px; width: 155px; height: 74px; z-index: 30;",
	cssClasses:	"slider-txt",
	htmlId:		"tobj2034",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Antwoord"
	},
	objData:	{"a":[0,32,0,[732,425,155,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":732,"y":425,"width":155,"height":74},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape2035.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 23 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(11.5 11.5)\" style=\"\">\n	<path d=\"M 0 10 A 10 10 0 1 1 20 10 A 10 10 0 1 1 0 10 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(11.5 11.5)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1043.5px; top: 372.5px; width: 23px; height: 23px; z-index: 31; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2035",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Cirkel 4"
	},
	objData:	{"a":[0,32,0,[1043.5,372.5,23,23]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1045,"y":374,"width":23,"height":23},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1207.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2036.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 20 A 20 20 0 1 1 40 20 A 20 20 0 1 1 0 20 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1035px; top: 364px; width: 40px; height: 40px; z-index: 32; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2036",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area 4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarQuestion_2074.set('4'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton1990.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og2002.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDot4',actItem:function(){ shape2041.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[1035,364,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1035,"y":364,"width":40,"height":40},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1203.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2041.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 18 A 18 18 0 1 1 36 18 A 18 18 0 1 1 0 18 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1037px; top: 366px; width: 36px; height: 36px; z-index: 33; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj2041",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hidden cirkel 4"
	},
	objData:	{"a":[0,0,0,[1037,366,36,36]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"1","depth":2,"color":"#16655D","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1037,"y":366,"width":36,"height":36},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1202.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2042.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 170px; min-height: 62px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 170px; min-height: 62px;\"><p leglh=\"1.296\" style=\"margin-left: 0px; text-indent: 0px; line-height: 1.296; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:14pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif;\">Alle antwoorden </span></strong></p>\n\n<p leglh=\"1.296\" style=\"margin-left: 0px; text-indent: 0px; line-height: 1.296; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:14pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif;\">zijn goed</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 971px; top: 425px; width: 170px; height: 62px; z-index: 34;",
	cssClasses:	"slider-txt",
	htmlId:		"tobj2042",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Antwoord"
	},
	objData:	{"a":[0,32,0,[971,425,170,62]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":971,"y":425,"width":170,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton2043.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1988_16131\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16131&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1295px; top: 376px; width: 34px; height: 34px; z-index: 40; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2043",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_website_ambassadeur.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[1295,376,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":376,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1063.png","imgDataOver":"images/desktop_shape1063_over.png","imgDataDown":"images/desktop_shape1063.png","imgDataDisabled":"images/desktop_shape1063_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16131\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16131&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16133\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16133&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16135\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16135&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16137\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16137&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton2045.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1988_16139\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16139&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 375px; width: 34px; height: 34px; z-index: 41; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2045",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vorige",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_quiz_time_vraag_4.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[38,375,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":38,"y":375,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1803.png","imgDataOver":"images/desktop_shape1803_over.png","imgDataDown":"images/desktop_shape1803.png","imgDataDisabled":"images/desktop_shape1803_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16139\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16139&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16141\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16141&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16143\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16143&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16145\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16145&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2047.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1132 285\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(566 142.5)\" style=\"\">\n	<path d=\"M 0 0 L 1132 0 L 1132 285 L 0 285 L 0 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-566, -142.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(566 142.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 140px; top: 313px; width: 1132px; height: 285px; z-index: 35; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2047",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Disable"
	},
	objData:	{"a":[0,0,0,[140,313.0000000000001,1132,285]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":313,"width":1132,"height":285},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1457.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og2048.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2048",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2049.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.68;filter:alpha(opacity=68); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.68;filter:alpha(opacity=68);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 42; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2049",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1101.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.68;\">"}
};
shape2050.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 746 448\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(373 224)\" style=\"\">\n	<path d=\"M 4.51 0 L 741.49 0 A 4.51 4.51 0 0 1 746 4.51 L 746 443.49 A 4.51 4.51 0 0 1 741.49 448 L 4.51 448 A 4.51 4.51 0 0 1 0 443.49 L 0 4.51 A 4.51 4.51 0 0 1 4.51 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-373, -224) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(373 224)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 309px; top: 178px; width: 746px; height: 448px; z-index: 43; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2050",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Green bg"
	},
	objData:	{"a":[0,0,0,[308.99999999999994,178.00000000000009,746,448]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.14","depth":3,"color":"#000000","blurradius":6,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":309,"y":178,"width":746,"height":448},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1102.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image2051.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2051Img\" src=\"images/ic_desktop_windows_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 64px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 927px; top: 212px; width: 67px; height: 64px; z-index: 44;",
	cssClasses:	"",
	htmlId:		"tobj2051",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_desktop_windows_24px"
	},
	objData:	{"a":[0,256,0,[927,212,67,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":927,"y":212,"width":67,"height":64}}
};
image2052.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2052Img\" src=\"images/ic_desktop_windows_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 64px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 433px; top: 390px; width: 67px; height: 64px; z-index: 45;",
	cssClasses:	"",
	htmlId:		"tobj2052",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_desktop_windows_24px"
	},
	objData:	{"a":[0,256,0,[433,390,67,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":433,"y":390,"width":67,"height":64}}
};
image2053.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2053Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 361px; top: 221px; width: 69px; height: 56px; z-index: 46; transform: rotate(28deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(28deg) ; -webkit-transform:rotate(28deg) ; -o-transform:rotate(28deg) ; -ms-transform:rotate(28deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ",
	cssClasses:	"",
	htmlId:		"tobj2053",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,256,0,[361,221,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":28,"anchorX":50,"anchorY":50},"desktopRect":{"x":361,"y":221,"width":69,"height":56}}
};
image2054.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2054Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 565px; top: 534px; width: 69px; height: 56px; z-index: 47; transform: rotate(329deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(329deg) ; -webkit-transform:rotate(329deg) ; -o-transform:rotate(329deg) ; -ms-transform:rotate(329deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8571673007021121, M12=0.5150380749100545, M21=-0.5150380749100545, M22=0.8571673007021121) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8571673007021121, M12=0.5150380749100545, M21=-0.5150380749100545, M22=0.8571673007021121) ",
	cssClasses:	"",
	htmlId:		"tobj2054",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,256,0,[565,534,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":329,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":534,"width":69,"height":56}}
};
image2055.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2055Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 879px; top: 388px; width: 69px; height: 56px; z-index: 48;",
	cssClasses:	"",
	htmlId:		"tobj2055",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,256,0,[879,388,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":879,"y":388,"width":69,"height":56}}
};
image2056.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2056Img\" src=\"images/ic_smartphone_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 348px; top: 376px; width: 41px; height: 52px; z-index: 49;",
	cssClasses:	"",
	htmlId:		"tobj2056",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,256,0,[348,376,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":348,"y":376,"width":41,"height":52}}
};
image2057.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2057Img\" src=\"images/ic_smartphone_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 715px; top: 214px; width: 41px; height: 52px; z-index: 50; transform: rotate(312deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(312deg) ; -webkit-transform:rotate(312deg) ; -o-transform:rotate(312deg) ; -ms-transform:rotate(312deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6691306063588578, M12=0.7431448254773946, M21=-0.7431448254773946, M22=0.6691306063588578) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6691306063588578, M12=0.7431448254773946, M21=-0.7431448254773946, M22=0.6691306063588578) ",
	cssClasses:	"",
	htmlId:		"tobj2057",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,256,0,[715,214,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":312,"anchorX":50,"anchorY":50},"desktopRect":{"x":715,"y":214,"width":41,"height":52}}
};
image2058.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2058Img\" src=\"images/ic_smartphone_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 943px; top: 526px; width: 41px; height: 52px; z-index: 51; transform: rotate(334deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(334deg) ; -webkit-transform:rotate(334deg) ; -o-transform:rotate(334deg) ; -ms-transform:rotate(334deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8987940462991668, M12=0.4383711467890778, M21=-0.4383711467890778, M22=0.8987940462991668) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8987940462991668, M12=0.4383711467890778, M21=-0.4383711467890778, M22=0.8987940462991668) ",
	cssClasses:	"",
	htmlId:		"tobj2058",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,256,0,[943,526,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":334,"anchorX":50,"anchorY":50},"desktopRect":{"x":943,"y":526,"width":41,"height":52}}
};
image2059.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2059Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.7;filter:alpha(opacity=70); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 372px; top: 527px; width: 50px; height: 54px; z-index: 52;",
	cssClasses:	"",
	htmlId:		"tobj2059",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,256,0,[372,527,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":372,"y":527,"width":50,"height":54}}
};
image2060.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2060Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.7;filter:alpha(opacity=70); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 961px; top: 325px; width: 50px; height: 54px; z-index: 53; transform: rotate(346deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(346deg) ; -webkit-transform:rotate(346deg) ; -o-transform:rotate(346deg) ; -ms-transform:rotate(346deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ",
	cssClasses:	"",
	htmlId:		"tobj2060",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,256,0,[961,325,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":346,"anchorX":50,"anchorY":50},"desktopRect":{"x":961,"y":325,"width":50,"height":54}}
};
image2061.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2061Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.7;filter:alpha(opacity=70); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 589px; top: 378px; width: 50px; height: 54px; z-index: 54; transform: rotate(47deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(47deg) ; -webkit-transform:rotate(47deg) ; -o-transform:rotate(47deg) ; -ms-transform:rotate(47deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6819983600624985, M12=-0.7313537016191705, M21=0.7313537016191705, M22=0.6819983600624985) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6819983600624985, M12=-0.7313537016191705, M21=0.7313537016191705, M22=0.6819983600624985) ",
	cssClasses:	"",
	htmlId:		"tobj2061",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,256,0,[589,378,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":47,"anchorX":50,"anchorY":50},"desktopRect":{"x":589,"y":378,"width":50,"height":54}}
};
text2062.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 447px; top: 293px; width: 44px; height: 76px; z-index: 55;; behavior:url(-ms-transform.htc); -moz-transform:rotate(24deg) ; -webkit-transform:rotate(24deg) ; -o-transform:rotate(24deg) ; -ms-transform:rotate(24deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9135454576426009, M12=-0.4067366430758002, M21=0.4067366430758002, M22=0.9135454576426009) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9135454576426009, M12=-0.4067366430758002, M21=0.4067366430758002, M22=0.9135454576426009) ",
	cssClasses:	"",
	htmlId:		"tobj2062",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[447,293,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":24,"anchorX":50,"anchorY":50},"desktopRect":{"x":447,"y":293,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2063.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 786px; top: 316px; width: 44px; height: 76px; z-index: 56;; behavior:url(-ms-transform.htc); -moz-transform:rotate(346deg) ; -webkit-transform:rotate(346deg) ; -o-transform:rotate(346deg) ; -ms-transform:rotate(346deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ",
	cssClasses:	"",
	htmlId:		"tobj2063",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[786,316,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":346,"anchorX":50,"anchorY":50},"desktopRect":{"x":786,"y":316,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2064.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 359px; top: 444px; width: 44px; height: 76px; z-index: 57;; behavior:url(-ms-transform.htc); -moz-transform:rotate(327deg) ; -webkit-transform:rotate(327deg) ; -o-transform:rotate(327deg) ; -ms-transform:rotate(327deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.838670567945424, M12=0.544639035015027, M21=-0.544639035015027, M22=0.838670567945424) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.838670567945424, M12=0.544639035015027, M21=-0.544639035015027, M22=0.838670567945424) ",
	cssClasses:	"",
	htmlId:		"tobj2064",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[359,444,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":327,"anchorX":50,"anchorY":50},"desktopRect":{"x":359,"y":444,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2065.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 791px; top: 455px; width: 44px; height: 76px; z-index: 58;; behavior:url(-ms-transform.htc); -moz-transform:rotate(349deg) ; -webkit-transform:rotate(349deg) ; -o-transform:rotate(349deg) ; -ms-transform:rotate(349deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=0.19080899537654467, M21=-0.19080899537654467, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=0.19080899537654467, M21=-0.19080899537654467, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj2065",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[791,455,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":349,"anchorX":50,"anchorY":50},"desktopRect":{"x":791,"y":455,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2066.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 979px; top: 430px; width: 44px; height: 76px; z-index: 59;; behavior:url(-ms-transform.htc); -moz-transform:rotate(11deg) ; -webkit-transform:rotate(11deg) ; -o-transform:rotate(11deg) ; -ms-transform:rotate(11deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj2066",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[979,430,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":11,"anchorX":50,"anchorY":50},"desktopRect":{"x":979,"y":430,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2067.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 867px; top: 534px; width: 44px; height: 76px; z-index: 60;; behavior:url(-ms-transform.htc); -moz-transform:rotate(11deg) ; -webkit-transform:rotate(11deg) ; -o-transform:rotate(11deg) ; -ms-transform:rotate(11deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj2067",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[867,534,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":11,"anchorX":50,"anchorY":50},"desktopRect":{"x":867,"y":534,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2068.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 849px; top: 246px; width: 44px; height: 76px; z-index: 61;; behavior:url(-ms-transform.htc); -moz-transform:rotate(11deg) ; -webkit-transform:rotate(11deg) ; -o-transform:rotate(11deg) ; -ms-transform:rotate(11deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj2068",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[849,246,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":11,"anchorX":50,"anchorY":50},"desktopRect":{"x":849,"y":246,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2069.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 499px; top: 505px; width: 44px; height: 76px; z-index: 62;; behavior:url(-ms-transform.htc); -moz-transform:rotate(11deg) ; -webkit-transform:rotate(11deg) ; -o-transform:rotate(11deg) ; -ms-transform:rotate(11deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj2069",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[499,505,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":11,"anchorX":50,"anchorY":50},"desktopRect":{"x":499,"y":505,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2070.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 579px; top: 223px; width: 44px; height: 76px; z-index: 63;; behavior:url(-ms-transform.htc); -moz-transform:rotate(335deg) ; -webkit-transform:rotate(335deg) ; -o-transform:rotate(335deg) ; -ms-transform:rotate(335deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.90630778703665, M12=0.4226182617406992, M21=-0.4226182617406992, M22=0.90630778703665) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.90630778703665, M12=0.4226182617406992, M21=-0.4226182617406992, M22=0.90630778703665) ",
	cssClasses:	"",
	htmlId:		"tobj2070",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[579,223,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":335,"anchorX":50,"anchorY":50},"desktopRect":{"x":579,"y":223,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2071.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 411px; min-height: 90px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 411px; min-height: 90px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; font-size: 17.3333px; color: rgb(0, 40, 87);\">Net als klanten, regel jij een betalingsregeling voor de klant op Mijn Zilveren Kruis.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 478px; top: 353px; width: 411px; height: 90px; z-index: 64;",
	cssClasses:	"popup-body-blue",
	htmlId:		"tobj2071",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[478,353,411,90]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":478,"y":353,"width":411,"height":90},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton2072.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 163 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(81.5 20)\" style=\"\">\n	<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1988_16147\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"163\" height=\"40\" xlink:href=\"images/Button_verder_wit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16147&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(81.5 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 603px; top: 474px; width: 163px; height: 40px; z-index: 65; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2072",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button verder",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2048.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2136.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[603,474,163,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":603,"y":474,"width":163,"height":40},"imgDataNormal":"images/desktop_shape1425.png","imgDataOver":"images/desktop_shape1425_over.png","imgDataDown":"images/desktop_shape1425.png","imgDataDisabled":"images/desktop_shape1425_disabled.png","svgDataNormal":"<g transform=\"translate(81.5 20)\" style=\"\">\n\t<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16147\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"163\" height=\"40\" xlink:href=\"images/Button_verder_wit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16147&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(81.5 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(81.5 20)\" style=\"\">\n\t<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16149\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"163\" height=\"40\" xlink:href=\"images/Button_verder_wit_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16149&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(81.5 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(81.5 20)\" style=\"\">\n\t<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16151\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"163\" height=\"40\" xlink:href=\"images/Button_verder_wit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16151&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(81.5 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(81.5 20)\" style=\"\">\n\t<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16153\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"163\" height=\"40\" xlink:href=\"images/Button_verder_wit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16153&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(81.5 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og2136.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2136",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2137.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.68;filter:alpha(opacity=68); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.68;filter:alpha(opacity=68);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 66; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2137",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1101.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.68;\">"}
};
shape2138.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 746 448\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(373 224)\" style=\"\">\n	<path d=\"M 4.51 0 L 741.49 0 A 4.51 4.51 0 0 1 746 4.51 L 746 443.49 A 4.51 4.51 0 0 1 741.49 448 L 4.51 448 A 4.51 4.51 0 0 1 0 443.49 L 0 4.51 A 4.51 4.51 0 0 1 4.51 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-373, -224) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(373 224)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 309px; top: 178px; width: 746px; height: 448px; z-index: 67; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2138",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Green bg"
	},
	objData:	{"a":[0,0,0,[308.99999999999994,178.00000000000009,746,448]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.14","depth":3,"color":"#000000","blurradius":6,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":309,"y":178,"width":746,"height":448},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1102.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image2139.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2139Img\" src=\"images/ic_desktop_windows_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 64px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 927px; top: 212px; width: 67px; height: 64px; z-index: 68;",
	cssClasses:	"",
	htmlId:		"tobj2139",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_desktop_windows_24px"
	},
	objData:	{"a":[0,256,0,[927,212,67,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":927,"y":212,"width":67,"height":64}}
};
image2140.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2140Img\" src=\"images/ic_desktop_windows_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 64px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 433px; top: 390px; width: 67px; height: 64px; z-index: 69;",
	cssClasses:	"",
	htmlId:		"tobj2140",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_desktop_windows_24px"
	},
	objData:	{"a":[0,256,0,[433,390,67,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":433,"y":390,"width":67,"height":64}}
};
image2141.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2141Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 361px; top: 221px; width: 69px; height: 56px; z-index: 70; transform: rotate(28deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(28deg) ; -webkit-transform:rotate(28deg) ; -o-transform:rotate(28deg) ; -ms-transform:rotate(28deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ",
	cssClasses:	"",
	htmlId:		"tobj2141",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,256,0,[361,221,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":28,"anchorX":50,"anchorY":50},"desktopRect":{"x":361,"y":221,"width":69,"height":56}}
};
image2142.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2142Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 565px; top: 534px; width: 69px; height: 56px; z-index: 71; transform: rotate(329deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(329deg) ; -webkit-transform:rotate(329deg) ; -o-transform:rotate(329deg) ; -ms-transform:rotate(329deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8571673007021121, M12=0.5150380749100545, M21=-0.5150380749100545, M22=0.8571673007021121) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8571673007021121, M12=0.5150380749100545, M21=-0.5150380749100545, M22=0.8571673007021121) ",
	cssClasses:	"",
	htmlId:		"tobj2142",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,256,0,[565,534,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":329,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":534,"width":69,"height":56}}
};
image2143.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2143Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 879px; top: 388px; width: 69px; height: 56px; z-index: 72;",
	cssClasses:	"",
	htmlId:		"tobj2143",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,256,0,[879,388,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":879,"y":388,"width":69,"height":56}}
};
image2144.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2144Img\" src=\"images/ic_smartphone_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 348px; top: 376px; width: 41px; height: 52px; z-index: 73;",
	cssClasses:	"",
	htmlId:		"tobj2144",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,256,0,[348,376,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":348,"y":376,"width":41,"height":52}}
};
image2145.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2145Img\" src=\"images/ic_smartphone_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 715px; top: 214px; width: 41px; height: 52px; z-index: 74; transform: rotate(312deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(312deg) ; -webkit-transform:rotate(312deg) ; -o-transform:rotate(312deg) ; -ms-transform:rotate(312deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6691306063588578, M12=0.7431448254773946, M21=-0.7431448254773946, M22=0.6691306063588578) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6691306063588578, M12=0.7431448254773946, M21=-0.7431448254773946, M22=0.6691306063588578) ",
	cssClasses:	"",
	htmlId:		"tobj2145",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,256,0,[715,214,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":312,"anchorX":50,"anchorY":50},"desktopRect":{"x":715,"y":214,"width":41,"height":52}}
};
image2146.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2146Img\" src=\"images/ic_smartphone_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 943px; top: 526px; width: 41px; height: 52px; z-index: 75; transform: rotate(334deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(334deg) ; -webkit-transform:rotate(334deg) ; -o-transform:rotate(334deg) ; -ms-transform:rotate(334deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8987940462991668, M12=0.4383711467890778, M21=-0.4383711467890778, M22=0.8987940462991668) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8987940462991668, M12=0.4383711467890778, M21=-0.4383711467890778, M22=0.8987940462991668) ",
	cssClasses:	"",
	htmlId:		"tobj2146",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,256,0,[943,526,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":334,"anchorX":50,"anchorY":50},"desktopRect":{"x":943,"y":526,"width":41,"height":52}}
};
image2147.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2147Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.7;filter:alpha(opacity=70); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 372px; top: 527px; width: 50px; height: 54px; z-index: 76;",
	cssClasses:	"",
	htmlId:		"tobj2147",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,256,0,[372,527,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":372,"y":527,"width":50,"height":54}}
};
image2148.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2148Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.7;filter:alpha(opacity=70); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 961px; top: 325px; width: 50px; height: 54px; z-index: 77; transform: rotate(346deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(346deg) ; -webkit-transform:rotate(346deg) ; -o-transform:rotate(346deg) ; -ms-transform:rotate(346deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ",
	cssClasses:	"",
	htmlId:		"tobj2148",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,256,0,[961,325,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":346,"anchorX":50,"anchorY":50},"desktopRect":{"x":961,"y":325,"width":50,"height":54}}
};
image2149.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2149Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.7;filter:alpha(opacity=70); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 589px; top: 378px; width: 50px; height: 54px; z-index: 78; transform: rotate(47deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(47deg) ; -webkit-transform:rotate(47deg) ; -o-transform:rotate(47deg) ; -ms-transform:rotate(47deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6819983600624985, M12=-0.7313537016191705, M21=0.7313537016191705, M22=0.6819983600624985) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6819983600624985, M12=-0.7313537016191705, M21=0.7313537016191705, M22=0.6819983600624985) ",
	cssClasses:	"",
	htmlId:		"tobj2149",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,256,0,[589,378,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":47,"anchorX":50,"anchorY":50},"desktopRect":{"x":589,"y":378,"width":50,"height":54}}
};
text2150.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 447px; top: 293px; width: 44px; height: 76px; z-index: 79;; behavior:url(-ms-transform.htc); -moz-transform:rotate(24deg) ; -webkit-transform:rotate(24deg) ; -o-transform:rotate(24deg) ; -ms-transform:rotate(24deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9135454576426009, M12=-0.4067366430758002, M21=0.4067366430758002, M22=0.9135454576426009) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9135454576426009, M12=-0.4067366430758002, M21=0.4067366430758002, M22=0.9135454576426009) ",
	cssClasses:	"",
	htmlId:		"tobj2150",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[447,293,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":24,"anchorX":50,"anchorY":50},"desktopRect":{"x":447,"y":293,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2151.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 786px; top: 316px; width: 44px; height: 76px; z-index: 80;; behavior:url(-ms-transform.htc); -moz-transform:rotate(346deg) ; -webkit-transform:rotate(346deg) ; -o-transform:rotate(346deg) ; -ms-transform:rotate(346deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ",
	cssClasses:	"",
	htmlId:		"tobj2151",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[786,316,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":346,"anchorX":50,"anchorY":50},"desktopRect":{"x":786,"y":316,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2152.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 359px; top: 444px; width: 44px; height: 76px; z-index: 81;; behavior:url(-ms-transform.htc); -moz-transform:rotate(327deg) ; -webkit-transform:rotate(327deg) ; -o-transform:rotate(327deg) ; -ms-transform:rotate(327deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.838670567945424, M12=0.544639035015027, M21=-0.544639035015027, M22=0.838670567945424) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.838670567945424, M12=0.544639035015027, M21=-0.544639035015027, M22=0.838670567945424) ",
	cssClasses:	"",
	htmlId:		"tobj2152",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[359,444,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":327,"anchorX":50,"anchorY":50},"desktopRect":{"x":359,"y":444,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2153.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 791px; top: 455px; width: 44px; height: 76px; z-index: 82;; behavior:url(-ms-transform.htc); -moz-transform:rotate(349deg) ; -webkit-transform:rotate(349deg) ; -o-transform:rotate(349deg) ; -ms-transform:rotate(349deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=0.19080899537654467, M21=-0.19080899537654467, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=0.19080899537654467, M21=-0.19080899537654467, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj2153",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[791,455,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":349,"anchorX":50,"anchorY":50},"desktopRect":{"x":791,"y":455,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2154.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 979px; top: 430px; width: 44px; height: 76px; z-index: 83;; behavior:url(-ms-transform.htc); -moz-transform:rotate(11deg) ; -webkit-transform:rotate(11deg) ; -o-transform:rotate(11deg) ; -ms-transform:rotate(11deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj2154",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[979,430,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":11,"anchorX":50,"anchorY":50},"desktopRect":{"x":979,"y":430,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2155.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 867px; top: 534px; width: 44px; height: 76px; z-index: 84;; behavior:url(-ms-transform.htc); -moz-transform:rotate(11deg) ; -webkit-transform:rotate(11deg) ; -o-transform:rotate(11deg) ; -ms-transform:rotate(11deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj2155",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[867,534,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":11,"anchorX":50,"anchorY":50},"desktopRect":{"x":867,"y":534,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2156.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 849px; top: 246px; width: 44px; height: 76px; z-index: 85;; behavior:url(-ms-transform.htc); -moz-transform:rotate(11deg) ; -webkit-transform:rotate(11deg) ; -o-transform:rotate(11deg) ; -ms-transform:rotate(11deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj2156",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[849,246,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":11,"anchorX":50,"anchorY":50},"desktopRect":{"x":849,"y":246,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2157.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 499px; top: 505px; width: 44px; height: 76px; z-index: 86;; behavior:url(-ms-transform.htc); -moz-transform:rotate(11deg) ; -webkit-transform:rotate(11deg) ; -o-transform:rotate(11deg) ; -ms-transform:rotate(11deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj2157",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[499,505,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":11,"anchorX":50,"anchorY":50},"desktopRect":{"x":499,"y":505,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2158.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 579px; top: 223px; width: 44px; height: 76px; z-index: 87;; behavior:url(-ms-transform.htc); -moz-transform:rotate(335deg) ; -webkit-transform:rotate(335deg) ; -o-transform:rotate(335deg) ; -ms-transform:rotate(335deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.90630778703665, M12=0.4226182617406992, M21=-0.4226182617406992, M22=0.90630778703665) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.90630778703665, M12=0.4226182617406992, M21=-0.4226182617406992, M22=0.90630778703665) ",
	cssClasses:	"",
	htmlId:		"tobj2158",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[579,223,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":335,"anchorX":50,"anchorY":50},"desktopRect":{"x":579,"y":223,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text2166.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 450px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 450px; min-height: 54px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><span style=\"font-family: &quot;Titillium Web SemiBold&quot;, sans-serif; font-size: 37.3333px; color: rgb(0, 40, 87);\">Eind quiz</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 457px; top: 268px; width: 450px; height: 54px; z-index: 88;",
	cssClasses:	"popup-title-blue",
	htmlId:		"tobj2166",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[457,268,450,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":457,"y":268,"width":450,"height":54},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2159.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 449px; min-height: 104px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 449px; min-height: 104px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt;\"><span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Viel het mee of viel het tegen?&nbsp;</span><br>\n<span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Klik hierna op de verschillende onderdelen&nbsp;</span><span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">om meer te weten te komen over&nbsp;</span><span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">de openbare systemen.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 459px; top: 353px; width: 449px; height: 104px; z-index: 89;",
	cssClasses:	"popup-body-blue",
	htmlId:		"tobj2159",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[459,353,449,104]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":459,"y":353,"width":449,"height":104},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton2170.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 238 57\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(119 28.5)\" style=\"\">\n	<path d=\"M 0 0 L 238 0 L 238 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-119, -28.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1988_16155\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"238\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 238 0 L 238 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16155&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-119, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(119 28.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 564px; top: 484px; width: 238px; height: 57px; z-index: 90; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2170",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button sluit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdmenu_hoofdmenu.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[564,484,238,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":564,"y":484,"width":238,"height":57},"imgDataNormal":"images/desktop_shape2170.png","imgDataOver":"images/desktop_shape2170_over.png","imgDataDown":"images/desktop_shape2170.png","imgDataDisabled":"images/desktop_shape2170_disabled.png","svgDataNormal":"<g transform=\"translate(119 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 238 0 L 238 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-119, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16155\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"238\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 238 0 L 238 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16155&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-119, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(119 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(119 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 238 0 L 238 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-119, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16157\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"238\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 238 0 L 238 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16157&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-119, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(119 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(119 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 238 0 L 238 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-119, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16159\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"238\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 238 0 L 238 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16159&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-119, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(119 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(119 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 238 0 L 238 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-119, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1988_16161\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"238\" height=\"57\" xlink:href=\"images/Button_sluit%20quiz.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 238 0 L 238 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1988_16161&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-119, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(119 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
qu2074.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu2074",
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
				"varQuest":	VarQuestion_2074
	},
	objData:	{"a":[0,32,0,[]]}
};
text2075.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -303px; top: 143px; width: 113px; height: 20px; z-index: 36;",
	cssClasses:	"",
	htmlId:		"tobj2075",
	bInsAnc:	0,
	fieldsetId:	'fset2074',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[-303,143,113,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-303,"y":143,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2076.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -274px; top: 173px; width: 99px; height: 20px; z-index: 37;",
	cssClasses:	"",
	htmlId:		"tobj2076",
	bInsAnc:	0,
	fieldsetId:	'fset2074',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[-274,173,99,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-274,"y":173,"width":99,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio2077.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -303px; top: 173px; width: 19px; height: 19px; z-index: 38;",
	cssClasses:	"",
	htmlId:		"tobj2077",
	bInsAnc:	0,
	fieldsetId:	'fset2074',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[-303,173,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":-303,"y":173,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	8
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_verder_wit.png","images/Button_verder_wit_hover.png","images/Button_sluit_groot.png","images/Logo-ZK.jpg","images/Button_menu_groot.png","images/Button_volgende.png","images/Button_volgende_hover.png","images/Button_vorige.png","images/Button_vorige_hover.png","images/ic_desktop_windows_24px.png","images/ic_laptop_mac_24px.png","images/ic_smartphone_24px.png","images/ic_tablet_mac_24px.png","images/Button_check_groot_hover.png","images/Button_check_groot.png","images/Button_sluit%20quiz.png","images/Button_sluit%20quiz_hover.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];