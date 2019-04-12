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
	innerHtml:	"<svg viewBox=\"0 0 125 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(62.5 29)\" style=\"\">\n	<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_234_1060_7618\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_1060_7618&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(62.5 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1066,10.000000000000128,125,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape109.png","imgDataOver":"images/desktop_shape109.png","imgDataDown":"images/desktop_shape109.png","imgDataDisabled":"images/desktop_shape109_disabled.png","svgDataNormal":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_1060_7618\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_1060_7618&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_1060_7620\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_1060_7620&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_1060_7622\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_1060_7622&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_1060_7624\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_1060_7624&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton81.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_234_1060_7626\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_1060_7626&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1202,10.00000000000016,150,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape72.png","imgDataOver":"images/desktop_shape72.png","imgDataDown":"images/desktop_shape72.png","imgDataDisabled":"images/desktop_shape72_disabled.png","svgDataNormal":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_1060_7626\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_1060_7626&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_1060_7628\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_1060_7628&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_1060_7630\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_1060_7630&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_1060_7632\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_1060_7632&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape80.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 78\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 39)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 78 L 0 78 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -39) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 39)\">\n		<text font-family=\"Verdana\" font-size=\"-19.9999995\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.3\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 1.53477e-12px; width: 1366px; height: 78px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,1.5347723092418164e-12,1366,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":78},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape71.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape93.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -1.02318e-12px; top: 78px; width: 1366px; height: 690px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj93",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bg"
	},
	objData:	{"a":[0,32,0,[-1.0231815394945443e-12,78.00000000000153,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape93.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
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
og4102.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4102",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape2351.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1181 563\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(590.5 281.5)\" style=\"\">\n	<path d=\"M 6.14 0 L 1174.86 0 A 6.14 6.14 0 0 1 1181 6.14 L 1181 556.86 A 6.14 6.14 0 0 1 1174.86 563 L 6.14 563 A 6.14 6.14 0 0 1 0 556.86 L 0 6.14 A 6.14 6.14 0 0 1 6.14 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-590.5, -281.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(590.5 281.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 91px; top: 140px; width: 1181px; height: 563px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2351",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[90.99999999999989,140.00000000000017,1181,563]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":91,"y":140,"width":1181,"height":563},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2235.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2364.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 386 176\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(193 88)\" style=\"\">\n	<path d=\"M 5.14 0 L 380.86 0 A 5.14 5.14 0 0 1 386 5.14 L 386 170.86 A 5.14 5.14 0 0 1 380.86 176 L 5.14 176 A 5.14 5.14 0 0 1 0 170.86 L 0 5.14 A 5.14 5.14 0 0 1 5.14 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-193, -88) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(193 88)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 141px; top: 426px; width: 386px; height: 176px; z-index: 12; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2364",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[140.99999999999997,426.00000000000006,386,176]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":141,"y":426,"width":386,"height":176},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2364.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape4954.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 180 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(90 22)\" style=\"\">\n	<path d=\"M 0 0 L 180 0 L 180 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: 1, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-90, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(90 22)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 205px; top: 531px; width: 180px; height: 44px; z-index: 13; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4954",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[205,531,180,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":205,"y":531,"width":180,"height":44},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape4954.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape2380.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 487 374\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(243.5 187)\" style=\"\">\n	<path d=\"M 6.64 0 L 478.36 0 A 6.64 6.64 0 0 1 485 6.64 L 485 365.36 A 6.64 6.64 0 0 1 478.36 372 L 6.64 372 A 6.64 6.64 0 0 1 0 365.36 L 0 6.64 A 6.64 6.64 0 0 1 6.64 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 2; stroke-dasharray: 4, 4; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-242.5, -186) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(243.5 187)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 698px; top: 268px; width: 487px; height: 374px; z-index: 14; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2380",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,32,0,[698,268.00000000000006,487,374]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":699,"y":269,"width":487,"height":374},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2380.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image3263.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3263Img\" src=\"images/Stefan.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 159px; height: 159px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 860px; top: 188px; width: 159px; height: 159px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj3263",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Stefan"
	},
	objData:	{"a":[0,288,0,[860,188,159,159]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":860,"y":188,"width":159,"height":159}}
};
textbutton2368.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 97 39\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(48.5 19.5)\" style=\"\">\n	<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_234_8066\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8066&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(48.5 19.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 398px; top: 533px; width: 97px; height: 39px; z-index: 24; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2368",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button check",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og3119.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton4105.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarH1.add('_04'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton2368.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[398,533,97,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":398,"y":533,"width":97,"height":39},"imgDataNormal":"images/desktop_shape1390.png","imgDataOver":"images/desktop_shape1390_over.png","imgDataDown":"images/desktop_shape1390.png","imgDataDisabled":"images/desktop_shape1390_disabled.png","svgDataNormal":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8066\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8066&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8068\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8068&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8070\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8070&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8072\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8072&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
entry2374.rcdData.att_Desktop = 
{
	innerHtml:	"<input type=\"text\" maxlength=\"40\" name=\"Entry_2374\" id=\"frmobj2374\" title=\"Entry_2374\" onpropertychange=\"if( !VarEntry_2374.equals(this.value) ) {VarEntry_2374.set(this.value);entry2374.issueActions(12);}\" onchange=\"if( !VarEntry_2374.equals(this.value) ) {VarEntry_2374.set(this.value);entry2374.issueActions(12);}\" onkeyup=\"if( !VarEntry_2374.equals(this.value) ) {VarEntry_2374.set(this.value);entry2374.issueActions(12);}\" onblur=\"\" style=\"font-size: 12pt; font-family: Arial, sans-serif; margin: 0px; padding: 0px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); position: absolute; left: 0px; top: 0px; width: 150px; height: 23px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 204px; top: 531px; width: 154px; height: 27px; z-index: 16;",
	cssClasses:	"entry-field",
	htmlId:		"tobj2374",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Entry_2374",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeShow',actItem:function(){ if(!VarEntry_2374.equals('~~~null~~~'))textbutton2368.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[204,531,150,23]],"rcdOvr":{"res":0},"desktopRect":{"x":204,"y":531,"width":150,"height":23},"formType":2,"dwFormFlags":1024,"iNumChars":40}
};
text2356.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 319px; min-height: 46px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 319px; min-height: 46px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:20pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Premie berekenen</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 145px; top: 181px; width: 319px; height: 46px; z-index: 17;",
	cssClasses:	"page-title",
	htmlId:		"tobj2356",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,32,0,[145,181,319,46]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":145,"y":181,"width":319,"height":46},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2355.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 378px; min-height: 171px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 378px; min-height: 171px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span>​</span><span style=\"font-size:13pt; font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Bekijk de gegevens van Stefan en gebruik de website om te berekenen hoeveel Stefan voor zijn premie betaalt.&nbsp;</span></p>\n\n<p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">​</span></p>\n\n<p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Vul je antwoord in en klik op de knop om te kijken of je het goed hebt.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 145px; top: 242px; width: 378px; height: 171px; z-index: 18;",
	cssClasses:	"page-body",
	htmlId:		"tobj2355",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[145,242,378,171]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":145,"y":242,"width":378,"height":171},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2381.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 167px; min-height: 214px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 167px; min-height: 214px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;; color: rgb(0, 40, 87);\">21-04-1959</span></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;; color: rgb(0, 40, 87);\">Amersfoort</span></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;; color: rgb(0, 40, 87);\">Verus</span></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;; color: rgb(0, 40, 87);\">Basis Budget</span></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\">€ 585,-</span></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\">2 sterren</span></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\">1 ster</span></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\">per maand</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 1011px; top: 384px; width: 167px; height: 214px; z-index: 19;",
	cssClasses:	"page-body",
	htmlId:		"tobj2381",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[1011,384,167,214]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1011,"y":384,"width":167,"height":214},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2385.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 191px; min-height: 214px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 191px; min-height: 214px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:13pt; font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Geboortedatum</span></strong></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:13pt; font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Woonplaats</span></strong></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:13pt; font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Collectiviteit</span></strong></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:13pt; font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Pakket</span></strong></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:13pt; font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Eigen risico</span></strong></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:13pt; font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Aanvullende verzekering</span></strong></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:13pt; font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Tandartsverzekering</span></strong></p>\n\n<p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:13pt; font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Betaaltermijn</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 763px; top: 384px; width: 191px; height: 214px; z-index: 20;",
	cssClasses:	"page-body",
	htmlId:		"tobj2385",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[763,384,191,214]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":763,"y":384,"width":191,"height":214},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2360.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 220px; min-height: 58px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 220px; min-height: 58px;\"><p style=\"text-align:left\"><span style=\"font-size:15pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\">Wat betaalt Stefan voor zijn premie?</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 180px; top: 456px; width: 220px; height: 58px; z-index: 21;",
	cssClasses:	"page-body",
	htmlId:		"tobj2360",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[180,456,220,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":180,"y":456,"width":220,"height":58},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2376.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 33px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 33px; min-height: 32px;\"><p style=\"text-align:left\"><span style=\"font-size:18pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;;\">€</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 178px; top: 536px; width: 33px; height: 32px; z-index: 22;",
	cssClasses:	"page-body",
	htmlId:		"tobj2376",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[178,536,33,32]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":178,"y":536,"width":33,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og3119.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3119",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
text3120.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 378px; min-height: 63px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 378px; min-height: 63px;\"><p style=\"text-align: left; line-height: 1.25; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\">€ 125,04 is het juiste antwoord.</span></strong></p>\n\n<p style=\"text-align: left; line-height: 1.25; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\">Dat is inclusief € 16,71 korting via Verus.</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 145px; top: 617px; width: 378px; height: 63px; z-index: 23;",
	cssClasses:	"page-body",
	htmlId:		"tobj3120",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[145,617,378,63]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":145,"y":617,"width":378,"height":63},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton276.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_234_8074\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8074&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 399px; width: 34px; height: 34px; z-index: 25; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj276",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vorige",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_website_check_website.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[38,399,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":38,"y":399,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1803.png","imgDataOver":"images/desktop_shape1803_over.png","imgDataDown":"images/desktop_shape1803.png","imgDataDisabled":"images/desktop_shape1803_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8074\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8074&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8076\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8076&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8078\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8078&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8080\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8080&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton4105.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_234_8082\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8082&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1295px; top: 399px; width: 34px; height: 34px; z-index: 26; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4105",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_website_functieoverzicht.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[1295,399,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":399,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1063.png","imgDataOver":"images/desktop_shape1063_over.png","imgDataDown":"images/desktop_shape1063.png","imgDataDisabled":"images/desktop_shape1063_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8082\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8082&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8084\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8084&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8086\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8086&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8088\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8088&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og2389.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2389",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
shape2390.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 27; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2390",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,32,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape485.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
shape2391.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 746 448\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(373 224)\" style=\"\">\n	<path d=\"M 4.51 0 L 741.49 0 A 4.51 4.51 0 0 1 746 4.51 L 746 443.49 A 4.51 4.51 0 0 1 741.49 448 L 4.51 448 A 4.51 4.51 0 0 1 0 443.49 L 0 4.51 A 4.51 4.51 0 0 1 4.51 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-373, -224) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(373 224)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 309px; top: 178px; width: 746px; height: 448px; z-index: 28; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2391",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Green bg"
	},
	objData:	{"a":[0,32,0,[308.99999999999994,178.00000000000009,746,448]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":309,"y":178,"width":746,"height":448},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape486.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2392.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 448px; min-height: 139px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 448px; min-height: 139px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;pt sans&quot;, sans-serif; font-size: 18.6667px; color: rgb(255, 255, 255);\">Weet je al wat meer de weg op de website? En ben je toe aan een nieuwe uitdaging? Klik op de startknop voor de laatste opdracht over de website.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 463px; top: 371px; width: 448px; height: 139px; z-index: 29;",
	cssClasses:	"popup-body",
	htmlId:		"tobj2392",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[463,371,448,139]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":463,"y":371,"width":448,"height":139},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image2393.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2393Img\" src=\"images/ic_desktop_windows_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 64px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 927px; top: 212px; width: 67px; height: 64px; z-index: 30;",
	cssClasses:	"",
	htmlId:		"tobj2393",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_desktop_windows_24px"
	},
	objData:	{"a":[0,288,0,[927,212,67,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":927,"y":212,"width":67,"height":64}}
};
image2394.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2394Img\" src=\"images/ic_desktop_windows_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 64px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 433px; top: 390px; width: 67px; height: 64px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj2394",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_desktop_windows_24px"
	},
	objData:	{"a":[0,288,0,[433,390,67,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":433,"y":390,"width":67,"height":64}}
};
image2395.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2395Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 361px; top: 221px; width: 69px; height: 56px; z-index: 32; transform: rotate(28deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(28deg) ; -webkit-transform:rotate(28deg) ; -o-transform:rotate(28deg) ; -ms-transform:rotate(28deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ",
	cssClasses:	"",
	htmlId:		"tobj2395",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,288,0,[361,221,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":28,"anchorX":50,"anchorY":50},"desktopRect":{"x":361,"y":221,"width":69,"height":56}}
};
image2396.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2396Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 565px; top: 534px; width: 69px; height: 56px; z-index: 33; transform: rotate(329deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(329deg) ; -webkit-transform:rotate(329deg) ; -o-transform:rotate(329deg) ; -ms-transform:rotate(329deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8571673007021121, M12=0.5150380749100545, M21=-0.5150380749100545, M22=0.8571673007021121) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8571673007021121, M12=0.5150380749100545, M21=-0.5150380749100545, M22=0.8571673007021121) ",
	cssClasses:	"",
	htmlId:		"tobj2396",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,288,0,[565,534,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":329,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":534,"width":69,"height":56}}
};
image2397.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2397Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 879px; top: 388px; width: 69px; height: 56px; z-index: 34;",
	cssClasses:	"",
	htmlId:		"tobj2397",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,288,0,[879,388,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":879,"y":388,"width":69,"height":56}}
};
image2398.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2398Img\" src=\"images/ic_smartphone_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 348px; top: 376px; width: 41px; height: 52px; z-index: 35;",
	cssClasses:	"",
	htmlId:		"tobj2398",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,288,0,[348,376,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":348,"y":376,"width":41,"height":52}}
};
image2399.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2399Img\" src=\"images/ic_smartphone_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 715px; top: 214px; width: 41px; height: 52px; z-index: 36; transform: rotate(312deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(312deg) ; -webkit-transform:rotate(312deg) ; -o-transform:rotate(312deg) ; -ms-transform:rotate(312deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6691306063588578, M12=0.7431448254773946, M21=-0.7431448254773946, M22=0.6691306063588578) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6691306063588578, M12=0.7431448254773946, M21=-0.7431448254773946, M22=0.6691306063588578) ",
	cssClasses:	"",
	htmlId:		"tobj2399",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,288,0,[715,214,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":312,"anchorX":50,"anchorY":50},"desktopRect":{"x":715,"y":214,"width":41,"height":52}}
};
image2400.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2400Img\" src=\"images/ic_smartphone_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 943px; top: 526px; width: 41px; height: 52px; z-index: 37; transform: rotate(334deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(334deg) ; -webkit-transform:rotate(334deg) ; -o-transform:rotate(334deg) ; -ms-transform:rotate(334deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8987940462991668, M12=0.4383711467890778, M21=-0.4383711467890778, M22=0.8987940462991668) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8987940462991668, M12=0.4383711467890778, M21=-0.4383711467890778, M22=0.8987940462991668) ",
	cssClasses:	"",
	htmlId:		"tobj2400",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,288,0,[943,526,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":334,"anchorX":50,"anchorY":50},"desktopRect":{"x":943,"y":526,"width":41,"height":52}}
};
image2401.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2401Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 372px; top: 527px; width: 50px; height: 54px; z-index: 38;",
	cssClasses:	"",
	htmlId:		"tobj2401",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,288,0,[372,527,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":372,"y":527,"width":50,"height":54}}
};
image2402.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2402Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 961px; top: 325px; width: 50px; height: 54px; z-index: 39; transform: rotate(346deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(346deg) ; -webkit-transform:rotate(346deg) ; -o-transform:rotate(346deg) ; -ms-transform:rotate(346deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ",
	cssClasses:	"",
	htmlId:		"tobj2402",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,288,0,[961,325,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":346,"anchorX":50,"anchorY":50},"desktopRect":{"x":961,"y":325,"width":50,"height":54}}
};
image2403.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2403Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 589px; top: 378px; width: 50px; height: 54px; z-index: 40; transform: rotate(47deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(47deg) ; -webkit-transform:rotate(47deg) ; -o-transform:rotate(47deg) ; -ms-transform:rotate(47deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6819983600624985, M12=-0.7313537016191705, M21=0.7313537016191705, M22=0.6819983600624985) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6819983600624985, M12=-0.7313537016191705, M21=0.7313537016191705, M22=0.6819983600624985) ",
	cssClasses:	"",
	htmlId:		"tobj2403",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,288,0,[589,378,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":47,"anchorX":50,"anchorY":50},"desktopRect":{"x":589,"y":378,"width":50,"height":54}}
};
image2404.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2404Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 372px; top: 309px; width: 25px; height: 25px; z-index: 41;",
	cssClasses:	"",
	htmlId:		"tobj2404",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[372,309,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":372,"y":309,"width":25,"height":25}}
};
image2405.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2405Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 497px; top: 513px; width: 25px; height: 25px; z-index: 42;",
	cssClasses:	"",
	htmlId:		"tobj2405",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[497,513,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":497,"y":513,"width":25,"height":25}}
};
image2406.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2406Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 371px; top: 475px; width: 25px; height: 25px; z-index: 43;",
	cssClasses:	"",
	htmlId:		"tobj2406",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[371,475,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":371,"y":475,"width":25,"height":25}}
};
image2407.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2407Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 831px; top: 544px; width: 25px; height: 25px; z-index: 44;",
	cssClasses:	"",
	htmlId:		"tobj2407",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[831,544,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":831,"y":544,"width":25,"height":25}}
};
image2408.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2408Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 565px; top: 211px; width: 25px; height: 25px; z-index: 45;",
	cssClasses:	"",
	htmlId:		"tobj2408",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[565,211,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":211,"width":25,"height":25}}
};
image2409.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2409Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 893px; top: 286px; width: 25px; height: 25px; z-index: 46;",
	cssClasses:	"",
	htmlId:		"tobj2409",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[893,286,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":893,"y":286,"width":25,"height":25}}
};
image2410.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2410Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 984px; top: 447px; width: 25px; height: 25px; z-index: 47;",
	cssClasses:	"",
	htmlId:		"tobj2410",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[984,447,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":984,"y":447,"width":25,"height":25}}
};
image2411.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2411Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 737px; top: 337px; width: 25px; height: 25px; z-index: 48;",
	cssClasses:	"",
	htmlId:		"tobj2411",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[737,337,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":737,"y":337,"width":25,"height":25}}
};
textbutton2412.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 160 55\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(80 27.5)\" style=\"\">\n	<path d=\"M 0 0 L 160 0 L 160 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-80, -27.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_234_8090\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"160\" height=\"55\" xlink:href=\"images/Button_start_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 160 0 L 160 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8090&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-80, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(80 27.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 608px; top: 494px; width: 160px; height: 55px; z-index: 49; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2412",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button start",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2389.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[608,494,160,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":608,"y":494,"width":160,"height":55},"imgDataNormal":"images/desktop_shape499.png","imgDataOver":"images/desktop_shape499_over.png","imgDataDown":"images/desktop_shape499.png","imgDataDisabled":"images/desktop_shape499_disabled.png","svgDataNormal":"<g transform=\"translate(80 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 160 0 L 160 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-80, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8090\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"160\" height=\"55\" xlink:href=\"images/Button_start_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 160 0 L 160 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8090&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-80, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(80 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(80 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 160 0 L 160 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-80, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8092\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"160\" height=\"55\" xlink:href=\"images/Button_start_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 160 0 L 160 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8092&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-80, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(80 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(80 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 160 0 L 160 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-80, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8094\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"160\" height=\"55\" xlink:href=\"images/Button_start_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 160 0 L 160 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8094&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-80, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(80 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(80 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 160 0 L 160 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-80, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_234_8096\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"160\" height=\"55\" xlink:href=\"images/Button_start_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 160 0 L 160 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_234_8096&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-80, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(80 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2414.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 450px; min-height: 113px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 450px; min-height: 113px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><span style=\"font-size:28pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Afsluitende opdracht</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 457px; top: 297px; width: 450px; height: 113px; z-index: 50;",
	cssClasses:	"popup-title",
	htmlId:		"tobj2414",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,32,0,[457,297,450,113]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":457,"y":297,"width":450,"height":113},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	12
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_start_groot.png","images/Button_sluit_groot.png","images/Logo-ZK.jpg","images/Button_menu_groot.png","images/Button_volgende.png","images/Button_volgende_hover.png","images/Button_vorige.png","images/Button_vorige_hover.png","images/Button_start_groot_hover.png","images/ic_desktop_windows_24px.png","images/ic_laptop_mac_24px.png","images/ic_smartphone_24px.png","images/ic_tablet_mac_24px.png","images/Path%20107.png","images/Button_check_groot_hover.png","images/Button_check_groot.png","images/Stefan.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
