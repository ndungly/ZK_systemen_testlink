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
	innerHtml:	"<svg viewBox=\"0 0 125 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(62.5 29)\" style=\"\">\n	<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_1060_15979\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_1060_15979&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(62.5 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1066,10.000000000000114,125,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape109.png","imgDataOver":"images/desktop_shape109.png","imgDataDown":"images/desktop_shape109.png","imgDataDisabled":"images/desktop_shape109_disabled.png","svgDataNormal":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_1060_15979\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_1060_15979&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_1060_15981\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_1060_15981&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_1060_15983\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_1060_15983&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_1060_15985\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_1060_15985&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton81.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_1060_15987\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_1060_15987&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1202,10.000000000000142,150,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape72.png","imgDataOver":"images/desktop_shape72.png","imgDataDown":"images/desktop_shape72.png","imgDataDisabled":"images/desktop_shape72_disabled.png","svgDataNormal":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_1060_15987\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_1060_15987&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_1060_15989\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_1060_15989&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_1060_15991\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_1060_15991&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_1060_15993\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_1060_15993&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape80.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 78\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 39)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 78 L 0 78 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -39) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 39)\">\n		<text font-family=\"Verdana\" font-size=\"-19.9999995\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.3\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 1.36424e-12px; width: 1366px; height: 78px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,1.3642420526593924e-12,1366,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":78},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape71.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape93.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -9.09495e-13px; top: 78px; width: 1366px; height: 690px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj93",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bg"
	},
	objData:	{"a":[0,32,0,[-9.094947017729282e-13,78.00000000000136,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape93.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text97.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 80px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 396px; min-height: 80px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Zilveren Kruis website</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 484px; top: 43px; width: 396px; height: 80px; z-index: 10;",
	cssClasses:	"header-module-subtitle",
	htmlId:		"tobj97",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module subtitle"
	},
	objData:	{"a":[0,32,0,[484,43,396,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":484,"y":43,"width":396,"height":80},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og648.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og648",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og4438.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4438",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og833.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og833",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og658.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og658",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og970.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og970",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image601.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj601Img\" src=\"images/Screenshot_website.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 605px; height: 580px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 380px; top: 125px; width: 605px; height: 580px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj601",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Screenshot_website"
	},
	objData:	{"a":[0,288,0,[380,125,605,580]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.16000000000000003","depth":3,"color":"#000000","blurradius":6,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":380,"y":125,"width":605,"height":580}}
};
textbutton605.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 53 55\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26.5 27.5)\" style=\"\">\n	<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_16331\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16331&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26.5 27.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 816px; top: 182px; width: 53px; height: 55px; z-index: 12; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj605",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og648.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og617.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(Var01_03.contains('_h1'))image666.hide(); else image666.show(); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[816,182,53,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":816,"y":182,"width":53,"height":55},"imgDataNormal":"images/desktop_shape605.png","imgDataOver":"images/desktop_shape605_over.png","imgDataDown":"images/desktop_shape605.png","imgDataDisabled":"images/desktop_shape605_disabled.png","svgDataNormal":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16331\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16331&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16333\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot1_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16333&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16335\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16335&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16337\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16337&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image819.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj819Img\" src=\"images/Hotspot_done.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 852px; top: 215px; width: 21px; height: 22px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj819",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hotspot_done1"
	},
	objData:	{"a":[0,256,0,[852,215,21,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":852,"y":215,"width":21,"height":22}}
};
textbutton609.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 53 55\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26.5 27.5)\" style=\"\">\n	<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_16339\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot%202.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16339&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26.5 27.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 641px; top: 257px; width: 53px; height: 55px; z-index: 14; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj609",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og648.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og687.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(Var01_03.contains('_h2'))image700.hide(); else image700.show(); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[641,257,53,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":641,"y":257,"width":53,"height":55},"imgDataNormal":"images/desktop_shape609.png","imgDataOver":"images/desktop_shape609_over.png","imgDataDown":"images/desktop_shape609.png","imgDataDisabled":"images/desktop_shape609_disabled.png","svgDataNormal":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16339\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot%202.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16339&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16341\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot2_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16341&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16343\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot%202.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16343&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16345\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot%202.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16345&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image821.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj821Img\" src=\"images/Hotspot_done.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 679px; top: 290px; width: 21px; height: 22px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj821",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hotspot_done2"
	},
	objData:	{"a":[0,256,0,[679,290,21,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":679,"y":290,"width":21,"height":22}}
};
textbutton613.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 53 55\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26.5 27.5)\" style=\"\">\n	<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_16347\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot3.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16347&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26.5 27.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 712px; top: 454px; width: 53px; height: 55px; z-index: 16; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj613",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og648.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og722.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(Var01_03.contains('_h3'))image736.hide(); else image736.show(); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[712,454,53,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":712,"y":454,"width":53,"height":55},"imgDataNormal":"images/desktop_shape613.png","imgDataOver":"images/desktop_shape613_over.png","imgDataDown":"images/desktop_shape613.png","imgDataDisabled":"images/desktop_shape613_disabled.png","svgDataNormal":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16347\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot3.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16347&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16349\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot3_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16349&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16351\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot3.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16351&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16353\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot3.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16353&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image825.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj825Img\" src=\"images/Hotspot_done.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 748px; top: 487px; width: 21px; height: 22px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj825",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hotspot_done3"
	},
	objData:	{"a":[0,256,0,[748,487,21,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":748,"y":487,"width":21,"height":22}}
};
textbutton654.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 53 55\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26.5 27.5)\" style=\"\">\n	<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_16355\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot4.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16355&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26.5 27.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 557px; top: 565px; width: 53px; height: 55px; z-index: 18; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj654",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og648.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og753.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(Var01_03.contains('_h4'))image767.hide(); else image767.show(); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[557,565,53,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":557,"y":565,"width":53,"height":55},"imgDataNormal":"images/desktop_shape654.png","imgDataOver":"images/desktop_shape654_over.png","imgDataDown":"images/desktop_shape654.png","imgDataDisabled":"images/desktop_shape654_disabled.png","svgDataNormal":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16355\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot4.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16355&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16357\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot4_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16357&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16359\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot4.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16359&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16361\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot4.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16361&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image829.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj829Img\" src=\"images/Hotspot_done.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 592px; top: 600px; width: 21px; height: 22px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj829",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hotspot_done4"
	},
	objData:	{"a":[0,256,0,[592,600,21,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":592,"y":600,"width":21,"height":22}}
};
og617.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og617",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape618.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 605 72\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(302.5 36)\" style=\"\">\n	<path d=\"M 0 0 L 605 0 L 605 72 L 0 72 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(85, 93, 91); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-302.5, -36) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(302.5 36)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 380px; top: 124px; width: 605px; height: 72px; z-index: 20; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj618",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[380,124.00000000000007,605,72]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":380,"y":124,"width":605,"height":72},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape618.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.75;\">"}
};
shape619.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 605 482\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(302.5 241)\" style=\"\">\n	<path d=\"M 0 0 L 605 0 L 605 482 L 0 482 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(85, 93, 91); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-302.5, -241) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(302.5 241)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 380px; top: 223px; width: 605px; height: 482px; z-index: 21; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj619",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[379.99999999999994,223.00000000000009,605,482]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":380,"y":223,"width":605,"height":482},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape325.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.75;\">"}
};
shape620.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 432 331\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(216 165.5)\" style=\"\">\n	<path d=\"M 0 0 L 432 0 L 432 331 L 0 331 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-216, -165.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(216 165.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 843px; top: 100px; width: 432px; height: 331px; z-index: 22; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj620",
	bInsAnc:	0,
	cwObj:		{
		"name":	"hotspot bg"
	},
	objData:	{"a":[0,0,0,[843,100.00000000000006,432,331]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":843,"y":100,"width":432,"height":331},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape620.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text624.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 353px; min-height: 57px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 353px; min-height: 57px;\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:20pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Opdracht 1: Snel zoeken</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 897px; top: 151px; width: 353px; height: 57px; z-index: 23;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj624",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[897,151,353,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":897,"y":151,"width":353,"height":57},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton640.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 53 55\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26.5 27.5)\" style=\"\">\n	<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_16363\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16363&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26.5 27.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 816px; top: 182px; width: 53px; height: 55px; z-index: 55; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj640",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot1--",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og658.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og833.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(!VarH1.contains('_03')&&Var01_03.contains('_h1')&&Var01_03.contains('_h2')&&Var01_03.contains('_h3')&&Var01_03.contains('_h4'))og893.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og617.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[816,182,53,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":816,"y":182,"width":53,"height":55},"imgDataNormal":"images/desktop_shape605.png","imgDataOver":"images/desktop_shape605_over.png","imgDataDown":"images/desktop_shape605.png","imgDataDisabled":"images/desktop_shape605_disabled.png","svgDataNormal":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16363\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16363&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16365\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot1_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16365&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16367\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16367&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16369\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16369&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image632.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj632Img\" src=\"images/png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 20px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1235px; top: 119px; width: 20px; height: 20px; z-index: 24;",
	cssClasses:	"",
	htmlId:		"tobj632",
	bInsAnc:	0,
	cwObj:		{
		"name":	"sluit hotspot"
	},
	objData:	{"a":[0,0,0,[1235,119,20,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1235,"y":119,"width":20,"height":20}}
};
shape634.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 43 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(21.5 21.5)\" style=\"\">\n	<path d=\"M 0 0 L 43 0 L 43 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-21.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(21.5 21.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1225px; top: 107px; width: 43px; height: 43px; z-index: 25; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj634",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og658.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og833.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(!VarH1.contains('_03')&&Var01_03.contains('_h1')&&Var01_03.contains('_h2')&&Var01_03.contains('_h3')&&Var01_03.contains('_h4'))og893.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og617.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1225,107,43,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1225,"y":107,"width":43,"height":43},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape634.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text625.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 329px; min-height: 108px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 329px; min-height: 108px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;pt sans&quot;, sans-serif; font-size: 17.3333px; color: rgb(0, 40, 87);\">Open het tabblad Service &amp; Contact. Bekijk op welke manieren de klant contact met ons op kan nemen.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 898px; top: 227px; width: 329px; height: 108px; z-index: 26;",
	cssClasses:	"hotspot-txt",
	htmlId:		"tobj625",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[898,227,329,108]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":898,"y":227,"width":329,"height":108},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image671.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj671Img\" src=\"images/Hotspot_checked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 53px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1032px; top: 334px; width: 53px; height: 53px; z-index: 27;",
	cssClasses:	"",
	htmlId:		"tobj671",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hotspot1_checked"
	},
	objData:	{"a":[0,256,0,[1032,334,53,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1032,"y":334,"width":53,"height":53}}
};
image666.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj666Img\" src=\"images/Hotspot_check.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 53px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1032px; top: 334px; width: 53px; height: 53px; z-index: 28; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj666",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot1_check",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Var01_03.add('_h1'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(Var01_03.contains('_h1')&&Var01_03.contains('_h2')&&Var01_03.contains('_h3')&&Var01_03.contains('_h4'))Var01_03.add('_done'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image666.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[1032,334,53,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1032,"y":334,"width":53,"height":53}}
};
og687.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og687",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape689.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 605 99\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(302.5 49.5)\" style=\"\">\n	<path d=\"M 0 0 L 605 0 L 605 99 L 0 99 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(85, 93, 91); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-302.5, -49.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(302.5 49.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 380px; top: 124px; width: 605px; height: 99px; z-index: 29; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj689",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[380,124.00000000000007,605,99]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":380,"y":124,"width":605,"height":99},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape689.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.75;\">"}
};
shape690.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 605 273\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(302.5 136.5)\" style=\"\">\n	<path d=\"M 0 0 L 605 0 L 605 273 L 0 273 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(85, 93, 91); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-302.5, -136.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(302.5 136.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 380px; top: 432px; width: 605px; height: 273px; z-index: 30; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj690",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[379.99999999999994,432.0000000000001,605,273]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":380,"y":432,"width":605,"height":273},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape690.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.75;\">"}
};
shape691.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 432 331\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(216 165.5)\" style=\"\">\n	<path d=\"M 0 0 L 432 0 L 432 331 L 0 331 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-216, -165.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(216 165.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 667px; top: 187px; width: 432px; height: 331px; z-index: 31; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj691",
	bInsAnc:	0,
	cwObj:		{
		"name":	"hotspot bg"
	},
	objData:	{"a":[0,0,0,[667,187.00000000000006,432,331]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":667,"y":187,"width":432,"height":331},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape620.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text692.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 353px; min-height: 57px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 353px; min-height: 57px;\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:20pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Opdracht 2: Campagne</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 721px; top: 238px; width: 353px; height: 57px; z-index: 32;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj692",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[721,238,353,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":721,"y":238,"width":353,"height":57},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image695.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj695Img\" src=\"images/png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 20px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1059px; top: 206px; width: 20px; height: 20px; z-index: 33;",
	cssClasses:	"",
	htmlId:		"tobj695",
	bInsAnc:	0,
	cwObj:		{
		"name":	"sluit hotspot"
	},
	objData:	{"a":[0,0,0,[1059,206,20,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1059,"y":206,"width":20,"height":20}}
};
shape696.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 43 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(21.5 21.5)\" style=\"\">\n	<path d=\"M 0 0 L 43 0 L 43 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-21.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(21.5 21.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1049px; top: 194px; width: 43px; height: 43px; z-index: 34; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj696",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og658.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og833.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(!VarH1.contains('_03')&&Var01_03.contains('_h1')&&Var01_03.contains('_h2')&&Var01_03.contains('_h3')&&Var01_03.contains('_h4'))og893.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og687.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1049,194,43,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1049,"y":194,"width":43,"height":43},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape634.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton707.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 53 55\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26.5 27.5)\" style=\"\">\n	<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_16371\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot%202.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16371&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26.5 27.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 641px; top: 257px; width: 53px; height: 55px; z-index: 56; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj707",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot2--",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og658.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og833.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(!VarH1.contains('_03')&&Var01_03.contains('_h1')&&Var01_03.contains('_h2')&&Var01_03.contains('_h3')&&Var01_03.contains('_h4'))og893.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og687.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[641,257,53,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":641,"y":257,"width":53,"height":55},"imgDataNormal":"images/desktop_shape609.png","imgDataOver":"images/desktop_shape609_over.png","imgDataDown":"images/desktop_shape609.png","imgDataDisabled":"images/desktop_shape609_disabled.png","svgDataNormal":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16371\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot%202.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16371&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16373\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot2_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16373&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16375\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot%202.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16375&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16377\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot%202.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16377&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text699.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 329px; min-height: 108px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 329px; min-height: 108px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;pt sans&quot;, sans-serif; font-size: 17.3333px; color: rgb(0, 40, 87);\">Open onze lopende campagne. Bekijk waar de campagne over gaat en welke informatie de klant krijgt.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 722px; top: 314px; width: 329px; height: 108px; z-index: 35;",
	cssClasses:	"hotspot-txt",
	htmlId:		"tobj699",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[722,314,329,108]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":722,"y":314,"width":329,"height":108},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image703.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj703Img\" src=\"images/Hotspot_checked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 53px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 856px; top: 421px; width: 53px; height: 53px; z-index: 36;",
	cssClasses:	"",
	htmlId:		"tobj703",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hotspot2_checked"
	},
	objData:	{"a":[0,256,0,[856,421,53,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":856,"y":421,"width":53,"height":53}}
};
image700.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj700Img\" src=\"images/Hotspot_check.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 53px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 856px; top: 421px; width: 53px; height: 53px; z-index: 37; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj700",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot2_check",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Var01_03.add('_h2'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(Var01_03.contains('_h1')&&Var01_03.contains('_h2')&&Var01_03.contains('_h3')&&Var01_03.contains('_h4'))Var01_03.add('_done'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image700.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[856,421,53,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":856,"y":421,"width":53,"height":53}}
};
og722.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og722",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape724.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 605 309\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(302.5 154.5)\" style=\"\">\n	<path d=\"M 0 0 L 605 0 L 605 309 L 0 309 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(85, 93, 91); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-302.5, -154.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(302.5 154.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 380px; top: 124px; width: 605px; height: 309px; z-index: 38; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj724",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[379.99999999999994,124.00000000000009,605,309]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":380,"y":124,"width":605,"height":309},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape724.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.75;\">"}
};
shape725.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 605 175\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(302.5 87.5)\" style=\"\">\n	<path d=\"M 0 0 L 605 0 L 605 175 L 0 175 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(85, 93, 91); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-302.5, -87.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(302.5 87.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 380px; top: 530px; width: 605px; height: 175px; z-index: 39; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj725",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[380,530.0000000000001,605,175]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":380,"y":530,"width":605,"height":175},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape368.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.75;\">"}
};
shape726.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 432 369\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(216 184.5)\" style=\"\">\n	<path d=\"M 0 0 L 432 0 L 432 369 L 0 369 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-216, -184.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(216 184.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 741px; top: 315px; width: 432px; height: 369px; z-index: 40; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj726",
	bInsAnc:	0,
	cwObj:		{
		"name":	"hotspot bg"
	},
	objData:	{"a":[0,0,0,[741,315.00000000000006,432,369]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":741,"y":315,"width":432,"height":369},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape726.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text727.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 353px; min-height: 64px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 353px; min-height: 64px;\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:20pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Opdracht 3: Belangrijke functies</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 795px; top: 366px; width: 353px; height: 64px; z-index: 41;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj727",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[795,366,353,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":795,"y":366,"width":353,"height":64},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image728.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj728Img\" src=\"images/png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 20px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1133px; top: 334px; width: 20px; height: 20px; z-index: 42;",
	cssClasses:	"",
	htmlId:		"tobj728",
	bInsAnc:	0,
	cwObj:		{
		"name":	"sluit hotspot"
	},
	objData:	{"a":[0,0,0,[1133,334,20,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1133,"y":334,"width":20,"height":20}}
};
shape729.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 43 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(21.5 21.5)\" style=\"\">\n	<path d=\"M 0 0 L 43 0 L 43 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-21.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(21.5 21.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1123px; top: 322px; width: 43px; height: 43px; z-index: 43; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj729",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og658.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og833.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(!VarH1.contains('_03')&&Var01_03.contains('_h1')&&Var01_03.contains('_h2')&&Var01_03.contains('_h3')&&Var01_03.contains('_h4'))og893.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og722.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1123,322,43,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1123,"y":322,"width":43,"height":43},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape634.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton743.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 53 55\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26.5 27.5)\" style=\"\">\n	<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_16379\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot3.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16379&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26.5 27.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 712px; top: 454px; width: 53px; height: 55px; z-index: 57; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj743",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot3--",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og658.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og833.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(!VarH1.contains('_03')&&Var01_03.contains('_h1')&&Var01_03.contains('_h2')&&Var01_03.contains('_h3')&&Var01_03.contains('_h4'))og893.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og722.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[712,454,53,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":712,"y":454,"width":53,"height":55},"imgDataNormal":"images/desktop_shape613.png","imgDataOver":"images/desktop_shape613_over.png","imgDataDown":"images/desktop_shape613.png","imgDataDisabled":"images/desktop_shape613_disabled.png","svgDataNormal":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16379\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot3.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16379&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16381\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot3_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16381&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16383\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot3.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16383&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16385\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot3.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16385&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text735.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 329px; min-height: 108px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 329px; min-height: 108px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;pt sans&quot;, sans-serif; font-size: 17.3333px; color: rgb(0, 40, 87);\">Open de functie <strong>Zorgverlener vinden</strong>. Zoek een gecontracteerde fysiotherapeut bij jou in de buurt.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 796px; top: 458px; width: 329px; height: 108px; z-index: 44;",
	cssClasses:	"hotspot-txt",
	htmlId:		"tobj735",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[796,458,329,108]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":796,"y":458,"width":329,"height":108},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image739.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj739Img\" src=\"images/Hotspot_checked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 53px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 930px; top: 575px; width: 53px; height: 53px; z-index: 45;",
	cssClasses:	"",
	htmlId:		"tobj739",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hotspot3_checked"
	},
	objData:	{"a":[0,256,0,[930,575,53,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":930,"y":575,"width":53,"height":53}}
};
image736.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj736Img\" src=\"images/Hotspot_check.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 53px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 930px; top: 575px; width: 53px; height: 53px; z-index: 46; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj736",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot3_check",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Var01_03.add('_h3'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(Var01_03.contains('_h1')&&Var01_03.contains('_h2')&&Var01_03.contains('_h3')&&Var01_03.contains('_h4'))Var01_03.add('_done'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image736.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[930,575,53,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":930,"y":575,"width":53,"height":53}}
};
og753.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og753",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape755.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 605 406\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(302.5 203)\" style=\"\">\n	<path d=\"M 0 0 L 605 0 L 605 406 L 0 406 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(85, 93, 91); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-302.5, -203) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(302.5 203)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 380px; top: 124px; width: 605px; height: 406px; z-index: 47; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj755",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[379.99999999999994,124.00000000000009,605,406]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":380,"y":124,"width":605,"height":406},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape385.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.75;\">"}
};
shape757.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 466 317\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(233 158.5)\" style=\"\">\n	<path d=\"M 0 0 L 466 0 L 466 317 L 0 317 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-233, -158.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(233 158.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 117px; top: 416px; width: 466px; height: 317px; z-index: 48; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj757",
	bInsAnc:	0,
	cwObj:		{
		"name":	"hotspot bg"
	},
	objData:	{"a":[0,0,0,[116.99999999999997,416.00000000000006,466,317]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":117,"y":416,"width":466,"height":317},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape757.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text758.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 353px; min-height: 64px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 353px; min-height: 64px;\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:20pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Opdracht 4: Populaire thema\'s</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 172px; top: 478px; width: 353px; height: 64px; z-index: 49;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj758",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[172,478,353,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":172,"y":478,"width":353,"height":64},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image759.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj759Img\" src=\"images/png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 20px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 543px; top: 435px; width: 20px; height: 20px; z-index: 50;",
	cssClasses:	"",
	htmlId:		"tobj759",
	bInsAnc:	0,
	cwObj:		{
		"name":	"sluit hotspot"
	},
	objData:	{"a":[0,0,0,[543,435,20,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":543,"y":435,"width":20,"height":20}}
};
shape760.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 43 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(21.5 21.5)\" style=\"\">\n	<path d=\"M 0 0 L 43 0 L 43 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-21.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(21.5 21.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 533px; top: 423px; width: 43px; height: 43px; z-index: 51; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj760",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og658.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og833.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(!VarH1.contains('_03')&&Var01_03.contains('_h1')&&Var01_03.contains('_h2')&&Var01_03.contains('_h3')&&Var01_03.contains('_h4'))og893.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og753.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[533,423,43,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":533,"y":423,"width":43,"height":43},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape634.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton774.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 53 55\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26.5 27.5)\" style=\"\">\n	<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_16387\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot4.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16387&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26.5 27.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 557px; top: 565px; width: 53px; height: 55px; z-index: 58; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj774",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og658.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og833.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(!VarH1.contains('_03')&&Var01_03.contains('_h1')&&Var01_03.contains('_h2')&&Var01_03.contains('_h3')&&Var01_03.contains('_h4'))og893.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og753.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[557,565,53,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":557,"y":565,"width":53,"height":55},"imgDataNormal":"images/desktop_shape654.png","imgDataOver":"images/desktop_shape654_over.png","imgDataDown":"images/desktop_shape654.png","imgDataDisabled":"images/desktop_shape654_disabled.png","svgDataNormal":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16387\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot4.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16387&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16389\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot4_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16389&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16391\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot4.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16391&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26.5 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16393\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"55\" xlink:href=\"images/Hotspot4.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16393&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text766.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 329px; min-height: 108px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 329px; min-height: 108px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;pt sans&quot;, sans-serif; font-size: 17.3333px; color: rgb(0, 40, 87);\">Open het thema <strong>Zwangerschap</strong>. Kan je vinden wat er in een kraampakket zit?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 173px; top: 548px; width: 329px; height: 108px; z-index: 52;",
	cssClasses:	"hotspot-txt",
	htmlId:		"tobj766",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[173,548,329,108]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":173,"y":548,"width":329,"height":108},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image770.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj770Img\" src=\"images/Hotspot_checked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 53px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 332px; top: 640px; width: 53px; height: 53px; z-index: 53;",
	cssClasses:	"",
	htmlId:		"tobj770",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Hotspot4_checked"
	},
	objData:	{"a":[0,256,0,[332,640,53,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":332,"y":640,"width":53,"height":53}}
};
image767.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj767Img\" src=\"images/Hotspot_check.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 53px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 332px; top: 640px; width: 53px; height: 53px; z-index: 54; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj767",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot4_check",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Var01_03.add('_h4'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(Var01_03.contains('_h1')&&Var01_03.contains('_h2')&&Var01_03.contains('_h3')&&Var01_03.contains('_h4'))Var01_03.add('_done'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image767.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[332,640,53,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":332,"y":640,"width":53,"height":53}}
};
textbutton269.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_16395\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16395&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 375px; width: 34px; height: 34px; z-index: 59; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj269",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vorige",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_website_hotspot.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[38,375,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":38,"y":375,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1803.png","imgDataOver":"images/desktop_shape1803_over.png","imgDataDown":"images/desktop_shape1803.png","imgDataDisabled":"images/desktop_shape1803_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16395\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16395&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16397\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16397&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16399\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16399&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16401\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16401&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton267.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_16403\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16403&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1295px; top: 376px; width: 34px; height: 34px; z-index: 60; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj267",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_website_opdracht.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[1295,376,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":376,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1063.png","imgDataOver":"images/desktop_shape1063_over.png","imgDataDown":"images/desktop_shape1063.png","imgDataDisabled":"images/desktop_shape1063_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16403\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16403&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16405\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16405&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16407\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16407&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16409\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16409&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og568.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og568",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
shape569.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 61; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj569",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,32,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape485.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
shape570.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 746 448\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(373 224)\" style=\"\">\n	<path d=\"M 4.51 0 L 741.49 0 A 4.51 4.51 0 0 1 746 4.51 L 746 443.49 A 4.51 4.51 0 0 1 741.49 448 L 4.51 448 A 4.51 4.51 0 0 1 0 443.49 L 0 4.51 A 4.51 4.51 0 0 1 4.51 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-373, -224) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(373 224)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 309px; top: 178px; width: 746px; height: 448px; z-index: 62; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj570",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Green bg"
	},
	objData:	{"a":[0,32,0,[308.99999999999994,178.00000000000009,746,448]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":309,"y":178,"width":746,"height":448},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape486.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text571.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 485px; min-height: 120px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 485px; min-height: 120px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:14pt; font-family:pt sans; color:rgb(255, 255, 255)\">Je gaat aan de slag met de opbouw en functies van de Zilveren Kruis website. &nbsp;Open de website alvast in je browser, dan kun je direct aan de slag met de opdrachten.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 445px; top: 371px; width: 485px; height: 120px; z-index: 63;",
	cssClasses:	"popup-body-white",
	htmlId:		"tobj571",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[445,371,485,120]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":445,"y":371,"width":485,"height":120},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image572.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj572Img\" src=\"images/ic_desktop_windows_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 64px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 927px; top: 212px; width: 67px; height: 64px; z-index: 64;",
	cssClasses:	"",
	htmlId:		"tobj572",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_desktop_windows_24px"
	},
	objData:	{"a":[0,288,0,[927,212,67,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":927,"y":212,"width":67,"height":64}}
};
image573.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj573Img\" src=\"images/ic_desktop_windows_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 64px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 433px; top: 390px; width: 67px; height: 64px; z-index: 65;",
	cssClasses:	"",
	htmlId:		"tobj573",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_desktop_windows_24px"
	},
	objData:	{"a":[0,288,0,[433,390,67,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":433,"y":390,"width":67,"height":64}}
};
image574.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj574Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 361px; top: 221px; width: 69px; height: 56px; z-index: 66; transform: rotate(28deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(28deg) ; -webkit-transform:rotate(28deg) ; -o-transform:rotate(28deg) ; -ms-transform:rotate(28deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ",
	cssClasses:	"",
	htmlId:		"tobj574",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,288,0,[361,221,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":28,"anchorX":50,"anchorY":50},"desktopRect":{"x":361,"y":221,"width":69,"height":56}}
};
image575.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj575Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 565px; top: 534px; width: 69px; height: 56px; z-index: 67; transform: rotate(329deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(329deg) ; -webkit-transform:rotate(329deg) ; -o-transform:rotate(329deg) ; -ms-transform:rotate(329deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8571673007021121, M12=0.5150380749100545, M21=-0.5150380749100545, M22=0.8571673007021121) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8571673007021121, M12=0.5150380749100545, M21=-0.5150380749100545, M22=0.8571673007021121) ",
	cssClasses:	"",
	htmlId:		"tobj575",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,288,0,[565,534,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":329,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":534,"width":69,"height":56}}
};
image576.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj576Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 879px; top: 388px; width: 69px; height: 56px; z-index: 68;",
	cssClasses:	"",
	htmlId:		"tobj576",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,288,0,[879,388,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":879,"y":388,"width":69,"height":56}}
};
image577.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj577Img\" src=\"images/ic_smartphone_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 348px; top: 376px; width: 41px; height: 52px; z-index: 69;",
	cssClasses:	"",
	htmlId:		"tobj577",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,288,0,[348,376,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":348,"y":376,"width":41,"height":52}}
};
image578.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj578Img\" src=\"images/ic_smartphone_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 715px; top: 214px; width: 41px; height: 52px; z-index: 70; transform: rotate(312deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(312deg) ; -webkit-transform:rotate(312deg) ; -o-transform:rotate(312deg) ; -ms-transform:rotate(312deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6691306063588578, M12=0.7431448254773946, M21=-0.7431448254773946, M22=0.6691306063588578) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6691306063588578, M12=0.7431448254773946, M21=-0.7431448254773946, M22=0.6691306063588578) ",
	cssClasses:	"",
	htmlId:		"tobj578",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,288,0,[715,214,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":312,"anchorX":50,"anchorY":50},"desktopRect":{"x":715,"y":214,"width":41,"height":52}}
};
image579.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj579Img\" src=\"images/ic_smartphone_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 943px; top: 526px; width: 41px; height: 52px; z-index: 71; transform: rotate(334deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(334deg) ; -webkit-transform:rotate(334deg) ; -o-transform:rotate(334deg) ; -ms-transform:rotate(334deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8987940462991668, M12=0.4383711467890778, M21=-0.4383711467890778, M22=0.8987940462991668) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8987940462991668, M12=0.4383711467890778, M21=-0.4383711467890778, M22=0.8987940462991668) ",
	cssClasses:	"",
	htmlId:		"tobj579",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,288,0,[943,526,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":334,"anchorX":50,"anchorY":50},"desktopRect":{"x":943,"y":526,"width":41,"height":52}}
};
image580.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj580Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 372px; top: 527px; width: 50px; height: 54px; z-index: 72;",
	cssClasses:	"",
	htmlId:		"tobj580",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,288,0,[372,527,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":372,"y":527,"width":50,"height":54}}
};
image581.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj581Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 961px; top: 325px; width: 50px; height: 54px; z-index: 73; transform: rotate(346deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(346deg) ; -webkit-transform:rotate(346deg) ; -o-transform:rotate(346deg) ; -ms-transform:rotate(346deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ",
	cssClasses:	"",
	htmlId:		"tobj581",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,288,0,[961,325,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":346,"anchorX":50,"anchorY":50},"desktopRect":{"x":961,"y":325,"width":50,"height":54}}
};
image582.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj582Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 589px; top: 378px; width: 50px; height: 54px; z-index: 74; transform: rotate(47deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(47deg) ; -webkit-transform:rotate(47deg) ; -o-transform:rotate(47deg) ; -ms-transform:rotate(47deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6819983600624985, M12=-0.7313537016191705, M21=0.7313537016191705, M22=0.6819983600624985) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6819983600624985, M12=-0.7313537016191705, M21=0.7313537016191705, M22=0.6819983600624985) ",
	cssClasses:	"",
	htmlId:		"tobj582",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,288,0,[589,378,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":47,"anchorX":50,"anchorY":50},"desktopRect":{"x":589,"y":378,"width":50,"height":54}}
};
image583.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj583Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 372px; top: 309px; width: 25px; height: 25px; z-index: 75;",
	cssClasses:	"",
	htmlId:		"tobj583",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[372,309,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":372,"y":309,"width":25,"height":25}}
};
image584.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj584Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 497px; top: 513px; width: 25px; height: 25px; z-index: 76;",
	cssClasses:	"",
	htmlId:		"tobj584",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[497,513,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":497,"y":513,"width":25,"height":25}}
};
image585.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj585Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 371px; top: 475px; width: 25px; height: 25px; z-index: 77;",
	cssClasses:	"",
	htmlId:		"tobj585",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[371,475,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":371,"y":475,"width":25,"height":25}}
};
image586.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj586Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 831px; top: 544px; width: 25px; height: 25px; z-index: 78;",
	cssClasses:	"",
	htmlId:		"tobj586",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[831,544,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":831,"y":544,"width":25,"height":25}}
};
image587.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj587Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 565px; top: 211px; width: 25px; height: 25px; z-index: 79;",
	cssClasses:	"",
	htmlId:		"tobj587",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[565,211,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":211,"width":25,"height":25}}
};
image588.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj588Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 893px; top: 286px; width: 25px; height: 25px; z-index: 80;",
	cssClasses:	"",
	htmlId:		"tobj588",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[893,286,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":893,"y":286,"width":25,"height":25}}
};
image589.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj589Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 984px; top: 447px; width: 25px; height: 25px; z-index: 81;",
	cssClasses:	"",
	htmlId:		"tobj589",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[984,447,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":984,"y":447,"width":25,"height":25}}
};
image590.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj590Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 737px; top: 337px; width: 25px; height: 25px; z-index: 82;",
	cssClasses:	"",
	htmlId:		"tobj590",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[737,337,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":737,"y":337,"width":25,"height":25}}
};
textbutton675.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 201 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(100.5 27)\" style=\"\">\n	<path d=\"M 0 0 L 201 0 L 201 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-100.5, -27) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_16411\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"201\" height=\"54\" xlink:href=\"images/Button_open%20website.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 201 0 L 201 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16411&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-100.5, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(100.5 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 582px; top: 506px; width: 201px; height: 54px; z-index: 83; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj675",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_open website",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og568.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[582,506,201,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":582,"y":506,"width":201,"height":54},"imgDataNormal":"images/desktop_shape675.png","imgDataOver":"images/desktop_shape675_over.png","imgDataDown":"images/desktop_shape675.png","imgDataDisabled":"images/desktop_shape675_disabled.png","svgDataNormal":"<g transform=\"translate(100.5 27)\" style=\"\">\n\t<path d=\"M 0 0 L 201 0 L 201 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-100.5, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16411\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"201\" height=\"54\" xlink:href=\"images/Button_open%20website.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 201 0 L 201 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16411&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-100.5, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(100.5 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(100.5 27)\" style=\"\">\n\t<path d=\"M 0 0 L 201 0 L 201 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-100.5, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16413\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"201\" height=\"54\" xlink:href=\"images/Button_open%20website_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 201 0 L 201 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16413&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-100.5, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(100.5 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(100.5 27)\" style=\"\">\n\t<path d=\"M 0 0 L 201 0 L 201 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-100.5, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16415\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"201\" height=\"54\" xlink:href=\"images/Button_open%20website.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 201 0 L 201 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16415&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-100.5, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(100.5 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(100.5 27)\" style=\"\">\n\t<path d=\"M 0 0 L 201 0 L 201 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-100.5, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16417\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"201\" height=\"54\" xlink:href=\"images/Button_open%20website.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 201 0 L 201 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16417&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-100.5, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(100.5 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text593.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 450px; min-height: 113px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 450px; min-height: 113px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><span style=\"font-size:28pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Al nieuwsgierig?</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 457px; top: 287px; width: 450px; height: 113px; z-index: 84;",
	cssClasses:	"popup-title-white",
	htmlId:		"tobj593",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,32,0,[457,287,450,113]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":457,"y":287,"width":450,"height":113},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og893.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og893",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape894.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 85; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj894",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape485.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
shape895.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 746 526\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(373 263)\" style=\"\">\n	<path d=\"M 5.3 0 L 740.7 0 A 5.3 5.3 0 0 1 746 5.3 L 746 520.7 A 5.3 5.3 0 0 1 740.7 526 L 5.3 526 A 5.3 5.3 0 0 1 0 520.7 L 0 5.3 A 5.3 5.3 0 0 1 5.3 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-373, -263) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(373 263)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 309px; top: 159px; width: 746px; height: 526px; z-index: 86; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj895",
	bInsAnc:	0,
	cwObj:		{
		"name":	"White bg"
	},
	objData:	{"a":[0,0,0,[308.99999999999994,159.0000000000001,746,526]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":309,"y":159,"width":746,"height":526},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape895.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image951.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj951Img\" src=\"images/Smileys_1.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 76px; height: 73px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 466px; top: 325px; width: 76px; height: 73px; z-index: 87; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj951",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Smileys_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1012.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og970.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image951.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[466,325,76,73]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":466,"y":325,"width":76,"height":73}}
};
image953.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj953Img\" src=\"images/Smileys_2.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 76px; height: 73px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 558px; top: 325px; width: 76px; height: 73px; z-index: 88; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj953",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Smileys_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1012.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og970.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image953.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[558,325,76,73]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":558,"y":325,"width":76,"height":73}}
};
image955.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj955Img\" src=\"images/Smileys_3.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 76px; height: 73px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 650px; top: 325px; width: 76px; height: 73px; z-index: 89; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj955",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Smileys_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1012.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og970.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image955.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[650,325,76,73]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":650,"y":325,"width":76,"height":73}}
};
image957.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj957Img\" src=\"images/Smileys_4.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 75px; height: 73px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 742px; top: 325px; width: 75px; height: 73px; z-index: 90; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj957",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Smileys_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1012.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og970.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image957.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[742,325,75,73]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":742,"y":325,"width":75,"height":73}}
};
image959.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj959Img\" src=\"images/Smileys_5.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 76px; height: 73px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 833px; top: 325px; width: 76px; height: 73px; z-index: 91; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj959",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Smileys_5",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1012.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og970.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image959.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[833,325,76,73]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":833,"y":325,"width":76,"height":73}}
};
text896.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 522px; min-height: 45px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 522px; min-height: 45px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;pt sans&quot;, sans-serif; font-size: 18.6667px; color: rgb(0, 40, 87);\">Laat weten wat je vindt door op een van de smileys te klikken.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 426px; top: 261px; width: 522px; height: 45px; z-index: 92;",
	cssClasses:	"popup-body-blue",
	htmlId:		"tobj896",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[426,261,522,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":426,"y":261,"width":522,"height":45},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text918.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 507px; min-height: 56px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 507px; min-height: 56px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><span style=\"font-size:28pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Wat vind je van onze website?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 432px; top: 208px; width: 507px; height: 56px; z-index: 93;",
	cssClasses:	"popup-title-blue",
	htmlId:		"tobj918",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[432,208,507,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":432,"y":208,"width":507,"height":56},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og1012.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og1012",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape969.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 713 230\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(356.5 115)\" style=\"\">\n	<path d=\"M 4.5 0 L 708.5 0 A 4.5 4.5 0 0 1 713 4.5 L 713 225.5 A 4.5 4.5 0 0 1 708.5 230 L 4.5 230 A 4.5 4.5 0 0 1 0 225.5 L 0 4.5 A 4.5 4.5 0 0 1 4.5 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-356.5, -115) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(356.5 115)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 326px; top: 437px; width: 713px; height: 230px; z-index: 94; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj969",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[326,437.0000000000001,713,230]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":326,"y":437,"width":713,"height":230},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape969.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text961.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 522px; min-height: 83px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 522px; min-height: 83px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;pt sans&quot;, sans-serif; font-size: 18.6667px; color: rgb(0, 40, 87);\">Op de site vragen we op dezelfde manier naar de mening van bezoekers. De reacties komen binnen bij de webredactie. Zij zijn verantwoordelijk voor het continu verbeteren van onze website.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 426px; top: 466px; width: 522px; height: 83px; z-index: 95;",
	cssClasses:	"popup-body-blue",
	htmlId:		"tobj961",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst2"
	},
	objData:	{"a":[0,0,0,[426,466,522,83]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":426,"y":466,"width":522,"height":83},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton965.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 216 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(108 29)\" style=\"\">\n	<path d=\"M 0 0 L 216 0 L 216 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_233_16419\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"216\" height=\"58\" xlink:href=\"images/Button_ga%20verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 216 0 L 216 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16419&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(108 29)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 581px; top: 576px; width: 216px; height: 58px; z-index: 96; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj965",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button ga verder",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarH1.contains('_03'))VarH1.add('_03'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_website_opdracht.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33024,0,[581,576,216,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":581,"y":576,"width":216,"height":58},"imgDataNormal":"images/desktop_shape965.png","imgDataOver":"images/desktop_shape965_over.png","imgDataDown":"images/desktop_shape965.png","imgDataDisabled":"images/desktop_shape965_disabled.png","svgDataNormal":"<g transform=\"translate(108 29)\" style=\"\">\n\t<path d=\"M 0 0 L 216 0 L 216 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16419\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"216\" height=\"58\" xlink:href=\"images/Button_ga%20verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 216 0 L 216 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16419&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(108 29)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(108 29)\" style=\"\">\n\t<path d=\"M 0 0 L 216 0 L 216 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16421\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"216\" height=\"58\" xlink:href=\"images/Button_ga%20verder_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 216 0 L 216 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16421&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(108 29)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(108 29)\" style=\"\">\n\t<path d=\"M 0 0 L 216 0 L 216 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16423\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"216\" height=\"58\" xlink:href=\"images/Button_ga%20verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 216 0 L 216 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16423&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(108 29)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(108 29)\" style=\"\">\n\t<path d=\"M 0 0 L 216 0 L 216 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_233_16425\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"216\" height=\"58\" xlink:href=\"images/Button_ga%20verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 216 0 L 216 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_233_16425&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(108 29)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	11
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_sluit_groot.png","images/Logo-ZK.jpg","images/Button_menu_groot.png","images/Button_volgende.png","images/Button_volgende_hover.png","images/Screenshot_website.jpg","images/Button_vorige.png","images/Button_vorige_hover.png","images/ic_desktop_windows_24px.png","images/ic_laptop_mac_24px.png","images/ic_smartphone_24px.png","images/ic_tablet_mac_24px.png","images/Path%20107.png","images/Button_open%20website.png","images/Button_open%20website_hover.png","images/Hotspot1.png","images/Hotspot1_hover.png","images/Hotspot%202.png","images/Hotspot2_hover.png","images/Hotspot3.png","images/Hotspot3_hover.png","images/png","images/Hotspot4.png","images/Hotspot_checked.png","images/Hotspot_check.png","images/Hotspot4_hover.png","images/Hotspot_done.png","images/Smileys_1.png","images/Smileys_2.png","images/Smileys_3.png","images/Smileys_4.png","images/Smileys_5.png","images/Button_ga%20verder.png","images/Button_ga%20verder_hover.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
