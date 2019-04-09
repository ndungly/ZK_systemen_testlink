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
	innerHtml:	"<svg viewBox=\"0 0 125 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(62.5 29)\" style=\"\">\n	<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3265_1060_15979\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_1060_15979&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(62.5 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1066,10.000000000000213,125,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape109.png","imgDataOver":"images/desktop_shape109.png","imgDataDown":"images/desktop_shape109.png","imgDataDisabled":"images/desktop_shape109_disabled.png","svgDataNormal":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_1060_15979\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_1060_15979&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_1060_15981\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_1060_15981&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_1060_15983\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_1060_15983&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_1060_15985\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_1060_15985&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton81.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3265_1060_15987\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_1060_15987&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1202,10.000000000000266,150,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape72.png","imgDataOver":"images/desktop_shape72.png","imgDataDown":"images/desktop_shape72.png","imgDataDisabled":"images/desktop_shape72_disabled.png","svgDataNormal":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_1060_15987\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_1060_15987&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_1060_15989\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_1060_15989&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_1060_15991\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_1060_15991&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_1060_15993\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_1060_15993&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape80.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 78\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 39)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 78 L 0 78 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -39) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 39)\">\n		<text font-family=\"Verdana\" font-size=\"-19.9999995\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.3\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 2.55795e-12px; width: 1366px; height: 78px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,2.5579538487363607e-12,1366,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":78},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape71.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape93.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -1.7053e-12px; top: 78px; width: 1366px; height: 690px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj93",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bg"
	},
	objData:	{"a":[0,32,0,[-1.7053025658242404e-12,78.00000000000256,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape93.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text105.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 80px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 396px; min-height: 80px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Mijn ZIlveren Kruis</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 484px; top: 43px; width: 396px; height: 80px; z-index: 10;",
	cssClasses:	"header-module-subtitle",
	htmlId:		"tobj105",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module subtitle"
	},
	objData:	{"a":[0,32,0,[484,43,396,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":484,"y":43,"width":396,"height":80},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape3266.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1181 563\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(590.5 281.5)\" style=\"\">\n	<path d=\"M 6.14 0 L 1174.86 0 A 6.14 6.14 0 0 1 1181 6.14 L 1181 556.86 A 6.14 6.14 0 0 1 1174.86 563 L 6.14 563 A 6.14 6.14 0 0 1 0 556.86 L 0 6.14 A 6.14 6.14 0 0 1 6.14 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-590.5, -281.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(590.5 281.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 91px; top: 140px; width: 1181px; height: 563px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3266",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[90.99999999999989,140.00000000000017,1181,563]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":91,"y":140,"width":1181,"height":563},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2235.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text3267.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 319px; min-height: 91px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 319px; min-height: 91px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:20pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">[naam], ambassadeur van de website, vertelt...</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 140px; top: 187px; width: 319px; height: 91px; z-index: 12;",
	cssClasses:	"page-title",
	htmlId:		"tobj3267",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,32,0,[140,187,319,91]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":187,"width":319,"height":91},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text3268.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 378px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 378px; min-height: 88px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif;\">Klik op de playknoppen en bekijk de video\'s.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 140px; top: 272px; width: 378px; height: 88px; z-index: 13;",
	cssClasses:	"page-body",
	htmlId:		"tobj3268",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[140,272,378,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":272,"width":378,"height":88},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image3269.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3269Img\" src=\"images/Tekstwolk1.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 389px; height: 85px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 817px; top: 396px; width: 389px; height: 85px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj3269",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tekstwolk1"
	},
	objData:	{"a":[0,288,0,[817,396,389,85]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":817,"y":396,"width":389,"height":85}}
};
text3270.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 378px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 378px; min-height: 88px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif;\">\"Hoe vinden onze klanten</span></p>\n\n<p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif;\">informatie?</span><span style=\"background-color: transparent; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif; font-size:13pt;\">\"</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 862px; top: 411px; width: 378px; height: 88px; z-index: 15;",
	cssClasses:	"page-body",
	htmlId:		"tobj3270",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[862,411,378,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":862,"y":411,"width":378,"height":88},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton3271.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26 27)\" style=\"\">\n	<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3265_16723\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16723&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1138px; top: 411px; width: 52px; height: 54px; z-index: 16; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3271",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button play 1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og3295.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ shape3266.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkPlay',actItem:function(){ video3296.play();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[1138,411,52,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1138,"y":411,"width":52,"height":54},"imgDataNormal":"images/desktop_shape2251.png","imgDataOver":"images/desktop_shape2251_over.png","imgDataDown":"images/desktop_shape2251.png","imgDataDisabled":"images/desktop_shape2251_disabled.png","svgDataNormal":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_16723\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16723&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_16725\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16725&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_16727\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16727&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_16729\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16729&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image3281.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3281Img\" src=\"images/Tekstwolk3.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 359px; height: 85px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 203px; top: 529px; width: 359px; height: 85px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj3281",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tekstwolk3"
	},
	objData:	{"a":[0,288,0,[203,529,359,85]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":203,"y":529,"width":359,"height":85}}
};
text3282.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 378px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 378px; min-height: 88px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif;\">\"Wat is het doel van de</span></p>\n\n<p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif;\">website?</span><span style=\"color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif; font-size:13pt; background-color: transparent;\">\"</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 227px; top: 546px; width: 378px; height: 88px; z-index: 18;",
	cssClasses:	"page-body",
	htmlId:		"tobj3282",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[227,546,378,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":227,"y":546,"width":378,"height":88},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton3283.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26 27)\" style=\"\">\n	<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3265_16731\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16731&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 476px; top: 544px; width: 52px; height: 54px; z-index: 19; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3283",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button play 3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og3288.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ shape3266.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkPlay',actItem:function(){ video3289.play();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[476,544,52,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":476,"y":544,"width":52,"height":54},"imgDataNormal":"images/desktop_shape2251.png","imgDataOver":"images/desktop_shape2251_over.png","imgDataDown":"images/desktop_shape2251.png","imgDataDisabled":"images/desktop_shape2251_disabled.png","svgDataNormal":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_16731\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16731&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_16733\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16733&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_16735\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16735&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_16737\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16737&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image3287.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3287Img\" src=\"images/MijnZKportret%20ambassadeur.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 259px; height: 259px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 529px; top: 264px; width: 259px; height: 259px; z-index: 20;",
	cssClasses:	"",
	htmlId:		"tobj3287",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MijnZKportret ambassadeur"
	},
	objData:	{"a":[0,288,0,[529,264,259,259]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":529,"y":264,"width":259,"height":259}}
};
og3288.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3288",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
video3289.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"vid\" style=\"left: 0px; top: 0px; width: 1174px; height: 661px; background-color: rgb(0, 0, 0); position: absolute;\"></div>",
	cssText:	"position: absolute; left: 0px; top: 0px; width: 1px; height: 1px; z-index: 21; visibility: hidden; opacity: 0.01;",
	cssClasses:	"",
	htmlId:		"tobj3289",
	bInsAnc:	0,
	stdHtml:	'<video id="swftobj3289" name="swftobj3289" width="1" height="1" controls="controls" preload="none" playsinline><source type="video/mp4" src="media/Amb_MZK_5276.mp4" /></video>',
	iosHtml:	'undefined',
	resource:	'media/Amb_MZK_5276.mp4',
	cwObj:		{
		"name":	"Amb_MZK_5276"
	},
	objData:	{"a":[0,262144,0,[94,93,1174,661,-24]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":94,"y":93,"width":1174,"height":661},"hasEvents":0,"supportsEvents":true,"initHidden":true,"useNoSkin":false,"cssSkin":"trivantis-player.css","includeShim":"","flashStreamer":"","bRollOver":true,"skinHeight":24}
};
image3290.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3290Img\" src=\"images/Kruisje.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1222px; top: 113px; width: 22px; height: 22px; z-index: 22;",
	cssClasses:	"",
	htmlId:		"tobj3290",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[1222,113,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1222,"y":113,"width":22,"height":22}}
};
shape3291.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 66 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(33 29)\" style=\"\">\n	<path d=\"M 0 0 L 66 0 L 66 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(33 29)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1202px; top: 94px; width: 66px; height: 58px; z-index: 23; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3291",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkStop',actItem:function(){ video3289.stop();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ shape3266.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og3288.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1202,94,66,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":94,"width":66,"height":58},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2292.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og3295.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3295",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
video3296.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"vid\" style=\"left: 0px; top: 0px; width: 1174px; height: 661px; background-color: rgb(0, 0, 0); position: absolute;\"></div>",
	cssText:	"position: absolute; left: 0px; top: 0px; width: 1px; height: 1px; z-index: 24; visibility: hidden; opacity: 0.01;",
	cssClasses:	"",
	htmlId:		"tobj3296",
	bInsAnc:	0,
	stdHtml:	'<video id="swftobj3296" name="swftobj3296" width="1" height="1" controls="controls" preload="none" playsinline><source type="video/mp4" src="media/Amb_MZK_5277.mp4" /></video>',
	iosHtml:	'undefined',
	resource:	'media/Amb_MZK_5277.mp4',
	cwObj:		{
		"name":	"Amb_MZK_5277"
	},
	objData:	{"a":[0,262144,0,[94,93,1174,661,-24]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":94,"y":93,"width":1174,"height":661},"hasEvents":0,"supportsEvents":true,"initHidden":true,"useNoSkin":false,"cssSkin":"trivantis-player.css","includeShim":"","flashStreamer":"","bRollOver":true,"skinHeight":24}
};
image3297.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3297Img\" src=\"images/Kruisje.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1222px; top: 113px; width: 22px; height: 22px; z-index: 25;",
	cssClasses:	"",
	htmlId:		"tobj3297",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[1222,113,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1222,"y":113,"width":22,"height":22}}
};
shape3298.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 66 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(33 29)\" style=\"\">\n	<path d=\"M 0 0 L 66 0 L 66 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(33 29)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1202px; top: 94px; width: 66px; height: 58px; z-index: 26; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3298",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkStop',actItem:function(){ video3296.stop();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ shape3266.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og3295.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1202,94,66,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":94,"width":66,"height":58},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2292.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton3309.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3265_16739\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16739&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1295px; top: 376px; width: 34px; height: 34px; z-index: 27; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3309",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarH3.contains('_01'))VarH3.add('_01'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_mijn_zk_hotspot.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[1295,376,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":376,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1063.png","imgDataOver":"images/desktop_shape1063_over.png","imgDataDown":"images/desktop_shape1063.png","imgDataDisabled":"images/desktop_shape1063_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_16739\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16739&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_16741\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16741&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_16743\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16743&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3265_16745\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3265_16745&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	18
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_sluit_groot.png","images/Logo-ZK.jpg","images/Button_menu_groot.png","images/Button_volgende.png","images/Button_volgende_hover.png","images/Tekstwolk1.png","images/Tekstwolk3.png","images/MijnZKportret%20ambassadeur.png","images/Button_play.png","images/Button_play_hover.png","images/Kruisje.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
