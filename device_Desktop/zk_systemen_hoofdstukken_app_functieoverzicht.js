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
	innerHtml:	"<svg viewBox=\"0 0 125 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(62.5 29)\" style=\"\">\n	<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3124_1060_7618\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_1060_7618&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(62.5 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1066,10.000000000000199,125,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape109.png","imgDataOver":"images/desktop_shape109.png","imgDataDown":"images/desktop_shape109.png","imgDataDisabled":"images/desktop_shape109_disabled.png","svgDataNormal":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_1060_7618\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_1060_7618&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_1060_7620\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_1060_7620&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_1060_7622\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_1060_7622&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_1060_7624\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_1060_7624&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton81.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3124_1060_7626\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_1060_7626&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1202,10.000000000000249,150,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape72.png","imgDataOver":"images/desktop_shape72.png","imgDataDown":"images/desktop_shape72.png","imgDataDisabled":"images/desktop_shape72_disabled.png","svgDataNormal":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_1060_7626\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_1060_7626&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_1060_7628\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_1060_7628&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_1060_7630\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_1060_7630&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_1060_7632\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_1060_7632&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape80.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 78\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 39)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 78 L 0 78 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -39) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 39)\">\n		<text font-family=\"Verdana\" font-size=\"-19.9999995\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.3\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 2.38742e-12px; width: 1366px; height: 78px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,2.3874235921539366e-12,1366,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":78},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape71.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape93.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -1.59162e-12px; top: 78px; width: 1366px; height: 690px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj93",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bg"
	},
	objData:	{"a":[0,32,0,[-1.5916157281026244e-12,78.00000000000239,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape93.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text101.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 80px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 396px; min-height: 80px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Zilveren Kruis app</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 484px; top: 43px; width: 396px; height: 80px; z-index: 10;",
	cssClasses:	"header-module-subtitle",
	htmlId:		"tobj101",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module subtitle"
	},
	objData:	{"a":[0,32,0,[484,43,396,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":484,"y":43,"width":396,"height":80},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton3126.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3124_8338\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8338&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 399px; width: 34px; height: 34px; z-index: 45; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3126",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vorige",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_app_opdracht.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[38,399,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":38,"y":399,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1803.png","imgDataOver":"images/desktop_shape1803_over.png","imgDataDown":"images/desktop_shape1803.png","imgDataDisabled":"images/desktop_shape1803_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_8338\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8338&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_8340\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8340&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_8342\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8342&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_8344\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8344&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton3128.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3124_8346\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8346&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1295px; top: 399px; width: 34px; height: 34px; z-index: 46; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3128",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdmenu_hoofdmenu.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[1295,399,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":399,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1063.png","imgDataOver":"images/desktop_shape1063_over.png","imgDataDown":"images/desktop_shape1063.png","imgDataDisabled":"images/desktop_shape1063_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_8346\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8346&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_8348\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8348&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_8350\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8350&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_8352\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8352&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3130.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1181 600\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(590.5 300)\" style=\"\">\n	<path d=\"M 6.55 0 L 1174.45 0 A 6.55 6.55 0 0 1 1181 6.55 L 1181 593.45 A 6.55 6.55 0 0 1 1174.45 600 L 6.55 600 A 6.55 6.55 0 0 1 0 593.45 L 0 6.55 A 6.55 6.55 0 0 1 6.55 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-590.5, -300) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(590.5 300)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 91px; top: 124px; width: 1181px; height: 600px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3130",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,160,0,[90.99999999999989,124.00000000000017,1181,600]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":91,"y":124,"width":1181,"height":600},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2462.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text3131.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 321px; min-height: 535px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 321px; min-height: 535px;\"><p style=\"text-align: left; line-height: 2.7; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt;\"><strong><span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Berichten ontvangen</span><br>\n<span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Betalen via iDeal</span></strong><br>\n<span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Betalingsregeling aanvragen</span><br>\n<strong><span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Declaratie indienen</span></strong><br>\n<strong><span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Gegevens wijzigen</span></strong><br>\n<span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Gespreid betalen eigen risico aanvragen</span><br>\n<span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Premie berekenen - bestaande klant</span><br>\n<span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Premie berekenen - nieuwe klant</span><br>\n<span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Vergoeding zoeken</span><br>\n<strong><span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Zorgkosten bekijken</span></strong><br>\n<span style=\"font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Zorgverlener vinden</span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 136px; top: 187px; width: 321px; height: 535px; z-index: 12;",
	cssClasses:	"functieoverzicht",
	htmlId:		"tobj3131",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[136,187,321,535]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":136,"y":187,"width":321,"height":535},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og3222.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3222",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image3132.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3132Img\" src=\"images/Checklist_uitroepteken.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 27px; height: 28px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 883px; top: 200px; width: 27px; height: 28px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj3132",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Checklist_uitroepteken"
	},
	objData:	{"a":[0,288,0,[883,200,27,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":883,"y":200,"width":27,"height":28}}
};
text3133.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 307px; min-height: 24px;\"><p style=\"text-align:left\"><span style=\"font-size:11pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">Dit kan de klant ook in Mijn Zilveren kruis</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 917px; top: 200px; width: 317px; height: 34px; z-index: 14;",
	cssClasses:	"page-body",
	htmlId:		"tobj3133",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 5"
	},
	objData:	{"a":[0,32,0,[917,200,317,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":917,"y":200,"width":317,"height":34},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image3199.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3199Img\" src=\"images/Checklist_uitroepteken.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 27px; height: 28px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 883px; top: 246px; width: 27px; height: 28px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj3199",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Checklist_uitroepteken"
	},
	objData:	{"a":[0,288,0,[883,246,27,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":883,"y":246,"width":27,"height":28}}
};
text3198.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 301px; min-height: 39px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 291px; min-height: 29px;\"><p style=\"text-align:left\"><span style=\"font-size:11pt; color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif;\">Dit kan de klant momenteel alleen via de app</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 917px; top: 246px; width: 301px; height: 39px; z-index: 16;",
	cssClasses:	"page-body",
	htmlId:		"tobj3198",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 5"
	},
	objData:	{"a":[0,32,0,[917,246,301,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":917,"y":246,"width":301,"height":39},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image3204.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3204Img\" src=\"images/Checklist_uitroepteken.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 27px; height: 28px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 883px; top: 338px; width: 27px; height: 28px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj3204",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Checklist_uitroepteken"
	},
	objData:	{"a":[0,288,0,[883,338,27,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":883,"y":338,"width":27,"height":28}}
};
text3203.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 332px; min-height: 53px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 322px; min-height: 43px;\"><p style=\"text-align:left\"><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87); font-size:11pt;\">Dit kan de klant ook in Mijn Zilveren kruis</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 917px; top: 338px; width: 332px; height: 53px; z-index: 18;",
	cssClasses:	"page-body",
	htmlId:		"tobj3203",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 5"
	},
	objData:	{"a":[0,32,0,[917,338,332,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":917,"y":338,"width":332,"height":53},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image3209.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3209Img\" src=\"images/Checklist_uitroepteken.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 27px; height: 28px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 883px; top: 384px; width: 27px; height: 28px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj3209",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Checklist_uitroepteken"
	},
	objData:	{"a":[0,288,0,[883,384,27,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":883,"y":384,"width":27,"height":28}}
};
text3208.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 302px; min-height: 53px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 292px; min-height: 43px;\"><p style=\"text-align: left; line-height: 1.25; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87); font-size:11pt;\">Dit kan de klant ook in Mijn Zilveren kruis</span></p>\n\n<p style=\"text-align: left; line-height: 1.25; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87); font-size:11pt;\">Dit kun jij ook in Mikado</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 917px; top: 374px; width: 302px; height: 53px; z-index: 20;",
	cssClasses:	"page-body",
	htmlId:		"tobj3208",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 5"
	},
	objData:	{"a":[0,32,0,[917,374,302,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":917,"y":374,"width":302,"height":53},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image3214.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3214Img\" src=\"images/Checklist_uitroepteken.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 27px; height: 28px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 883px; top: 614px; width: 27px; height: 28px; z-index: 21;",
	cssClasses:	"",
	htmlId:		"tobj3214",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Checklist_uitroepteken"
	},
	objData:	{"a":[0,288,0,[883,614,27,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":883,"y":614,"width":27,"height":28}}
};
text3218.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 302px; min-height: 53px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 292px; min-height: 43px;\"><p style=\"text-align: left; line-height: 1.25; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87); font-size:11pt;\">Dit kan de klant ook in Mijn Zilveren kruis</span></p>\n\n<p style=\"text-align: left; line-height: 1.25; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; color: rgb(0, 40, 87); font-size:11pt;\">Dit kun jij ook in Mikado</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 917px; top: 605px; width: 302px; height: 53px; z-index: 22;",
	cssClasses:	"page-body",
	htmlId:		"tobj3218",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 5"
	},
	objData:	{"a":[0,32,0,[917,605,302,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":917,"y":605,"width":302,"height":53},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
og3134.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3134",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape3135.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 2 546\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(1 273)\" style=\"\">\n	<path d=\"M 0 0 L 1 545\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 1, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-0.5, -272.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7.5 273)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 473.5px; top: 144.5px; width: 2px; height: 546px; z-index: 23; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3135",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,32,0,[473.49999999999994,144.5,2,546]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":474,"y":145,"width":2,"height":546},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2536.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3136.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 2 546\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(1 273)\" style=\"\">\n	<path d=\"M 0 0 L 1 545\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 1, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-0.5, -272.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7.5 273)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 589.5px; top: 144.5px; width: 2px; height: 546px; z-index: 24; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3136",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,32,0,[589.4999999999999,144.5,2,546]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":590,"y":145,"width":2,"height":546},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2536.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3137.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 2 546\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(1 273)\" style=\"\">\n	<path d=\"M 0 0 L 1 545\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 1, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-0.5, -272.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7.5 273)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 864.5px; top: 144.5px; width: 2px; height: 546px; z-index: 25; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3137",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,32,0,[864.4999999999999,144.5,2,546]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":865,"y":145,"width":2,"height":546},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2536.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og3138.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3138",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape3139.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1091 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(545.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 1090 1\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-545, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(545.5 7.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 136.5px; top: 234.5px; width: 1091px; height: 2px; z-index: 26; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3139",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[136.5,234.50000000000014,1091,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":137,"y":235,"width":1091,"height":2},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2441.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3140.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1091 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(545.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 1090 1\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-545, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(545.5 7.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 136.5px; top: 280.5px; width: 1091px; height: 2px; z-index: 27; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3140",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[136.5,280.5000000000001,1091,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":137,"y":281,"width":1091,"height":2},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2441.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3141.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1091 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(545.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 1090 1\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-545, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(545.5 7.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 136.5px; top: 326.5px; width: 1091px; height: 2px; z-index: 28; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3141",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[136.5,326.5000000000001,1091,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":137,"y":327,"width":1091,"height":2},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2441.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3142.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1091 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(545.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 1090 1\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-545, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(545.5 7.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 136.5px; top: 464.5px; width: 1091px; height: 2px; z-index: 29; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3142",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[136.5,464.5000000000001,1091,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":137,"y":465,"width":1091,"height":2},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2441.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3143.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1091 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(545.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 1090 1\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-545, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(545.5 7.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 136.5px; top: 372.5px; width: 1091px; height: 2px; z-index: 30; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3143",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[136.5,372.5000000000001,1091,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":137,"y":373,"width":1091,"height":2},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2441.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3144.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1091 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(545.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 1090 1\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-545, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(545.5 7.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 136.5px; top: 418.5px; width: 1091px; height: 2px; z-index: 31; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3144",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[136.5,418.5000000000001,1091,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":137,"y":419,"width":1091,"height":2},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2441.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3145.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1091 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(545.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 1090 1\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-545, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(545.5 7.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 136.5px; top: 510.5px; width: 1091px; height: 2px; z-index: 32; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3145",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[136.5,510.5000000000001,1091,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":137,"y":511,"width":1091,"height":2},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2441.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3146.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1091 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(545.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 1090 1\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-545, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(545.5 7.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 136.5px; top: 556.5px; width: 1091px; height: 2px; z-index: 33; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3146",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[136.5,556.5000000000001,1091,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":137,"y":557,"width":1091,"height":2},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2441.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3147.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1091 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(545.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 1090 1\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-545, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(545.5 7.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 136.5px; top: 648.5px; width: 1091px; height: 2px; z-index: 34; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3147",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[136.5,648.5000000000001,1091,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":137,"y":649,"width":1091,"height":2},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2441.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3148.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1091 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(545.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 1090 1\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-545, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(545.5 7.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 136.5px; top: 188.5px; width: 1091px; height: 2px; z-index: 35; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3148",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[136.5,188.50000000000014,1091,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":137,"y":189,"width":1091,"height":2},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2441.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape3149.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1091 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(545.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 1090 1\" style=\"stroke: rgb(217, 242, 239); stroke-width: 1; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(217, 242, 239); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-545, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(545.5 7.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 136.5px; top: 602.5px; width: 1091px; height: 2px; z-index: 36; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3149",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[136.5,602.5000000000001,1091,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":137,"y":603,"width":1091,"height":2},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2441.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text3150.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 96px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 96px; min-height: 52px;\"><p style=\"text-align: left; line-height: 2.7; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif; font-size:13pt;\">Klant</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 497px; top: 143px; width: 96px; height: 52px; z-index: 37;",
	cssClasses:	"page-body",
	htmlId:		"tobj3150",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[497,143,96,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":497,"y":143,"width":96,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text3151.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 232px; min-height: 53px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 232px; min-height: 53px;\"><p style=\"text-align: left; line-height: 2.7; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif; font-size:13pt;\">Klantenservice medewerker</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 612px; top: 143px; width: 232px; height: 53px; z-index: 38;",
	cssClasses:	"page-body",
	htmlId:		"tobj3151",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[612,143,232,53]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":612,"y":143,"width":232,"height":53},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text3152.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 189px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 189px; min-height: 52px;\"><p style=\"text-align: left; line-height: 2.7; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif; font-size:13pt;\">Opmerking</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 887px; top: 143px; width: 189px; height: 52px; z-index: 39;",
	cssClasses:	"page-body",
	htmlId:		"tobj3152",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[887,143,189,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":887,"y":143,"width":189,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og3153.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3153",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image3154.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3154Img\" src=\"images/Checklist_vinkje.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 15px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 523px; top: 251px; width: 20px; height: 15px; z-index: 40;",
	cssClasses:	"",
	htmlId:		"tobj3154",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Checklist_vinkje"
	},
	objData:	{"a":[0,288,0,[523,251,20,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":523,"y":251,"width":20,"height":15}}
};
image3190.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3190Img\" src=\"images/Checklist_vinkje.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 15px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 523px; top: 205px; width: 20px; height: 15px; z-index: 41;",
	cssClasses:	"",
	htmlId:		"tobj3190",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Checklist_vinkje"
	},
	objData:	{"a":[0,288,0,[523,205,20,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":523,"y":205,"width":20,"height":15}}
};
image3157.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3157Img\" src=\"images/Checklist_vinkje.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 15px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 523px; top: 343px; width: 20px; height: 15px; z-index: 42;",
	cssClasses:	"",
	htmlId:		"tobj3157",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Checklist_vinkje"
	},
	objData:	{"a":[0,288,0,[523,343,20,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":523,"y":343,"width":20,"height":15}}
};
image3158.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3158Img\" src=\"images/Checklist_vinkje.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 15px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 523px; top: 619px; width: 20px; height: 15px; z-index: 43;",
	cssClasses:	"",
	htmlId:		"tobj3158",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Checklist_vinkje"
	},
	objData:	{"a":[0,288,0,[523,619,20,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":523,"y":619,"width":20,"height":15}}
};
image3194.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3194Img\" src=\"images/Checklist_vinkje.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 15px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 523px; top: 388px; width: 20px; height: 15px; z-index: 44;",
	cssClasses:	"",
	htmlId:		"tobj3194",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Checklist_vinkje"
	},
	objData:	{"a":[0,288,0,[523,388,20,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":523,"y":388,"width":20,"height":15}}
};
og3160.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og3160",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
shape3161.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 47; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3161",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,32,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape485.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
shape3162.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 746 448\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(373 224)\" style=\"\">\n	<path d=\"M 4.51 0 L 741.49 0 A 4.51 4.51 0 0 1 746 4.51 L 746 443.49 A 4.51 4.51 0 0 1 741.49 448 L 4.51 448 A 4.51 4.51 0 0 1 0 443.49 L 0 4.51 A 4.51 4.51 0 0 1 4.51 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-373, -224) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(373 224)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 309px; top: 178px; width: 746px; height: 448px; z-index: 48; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3162",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Green bg"
	},
	objData:	{"a":[0,32,0,[308.99999999999994,178.00000000000009,746,448]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":309,"y":178,"width":746,"height":448},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape486.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text3163.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 448px; min-height: 139px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 448px; min-height: 139px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size:13pt; font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\">De functies die zijn aangevinkt kun je op de <strong>app</strong> vinden. In dit geval maakt alleen de klant gebruik van de app. Jij hebt de functies van de app (nog) niet nodig om klantvragen te beantwoorden.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 457px; top: 335px; width: 448px; height: 139px; z-index: 49;",
	cssClasses:	"popup-body",
	htmlId:		"tobj3163",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[457,335,448,139]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":457,"y":335,"width":448,"height":139},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image3164.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3164Img\" src=\"images/ic_desktop_windows_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 64px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 927px; top: 212px; width: 67px; height: 64px; z-index: 50;",
	cssClasses:	"",
	htmlId:		"tobj3164",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_desktop_windows_24px"
	},
	objData:	{"a":[0,288,0,[927,212,67,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":927,"y":212,"width":67,"height":64}}
};
image3165.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3165Img\" src=\"images/ic_desktop_windows_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 64px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 433px; top: 390px; width: 67px; height: 64px; z-index: 51;",
	cssClasses:	"",
	htmlId:		"tobj3165",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_desktop_windows_24px"
	},
	objData:	{"a":[0,288,0,[433,390,67,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":433,"y":390,"width":67,"height":64}}
};
image3166.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3166Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 361px; top: 221px; width: 69px; height: 56px; z-index: 52; transform: rotate(28deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(28deg) ; -webkit-transform:rotate(28deg) ; -o-transform:rotate(28deg) ; -ms-transform:rotate(28deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ",
	cssClasses:	"",
	htmlId:		"tobj3166",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,288,0,[361,221,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":28,"anchorX":50,"anchorY":50},"desktopRect":{"x":361,"y":221,"width":69,"height":56}}
};
image3167.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3167Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 565px; top: 534px; width: 69px; height: 56px; z-index: 53; transform: rotate(329deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(329deg) ; -webkit-transform:rotate(329deg) ; -o-transform:rotate(329deg) ; -ms-transform:rotate(329deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8571673007021121, M12=0.5150380749100545, M21=-0.5150380749100545, M22=0.8571673007021121) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8571673007021121, M12=0.5150380749100545, M21=-0.5150380749100545, M22=0.8571673007021121) ",
	cssClasses:	"",
	htmlId:		"tobj3167",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,288,0,[565,534,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":329,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":534,"width":69,"height":56}}
};
image3168.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3168Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 879px; top: 388px; width: 69px; height: 56px; z-index: 54;",
	cssClasses:	"",
	htmlId:		"tobj3168",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,288,0,[879,388,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":879,"y":388,"width":69,"height":56}}
};
image3169.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3169Img\" src=\"images/ic_smartphone_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 348px; top: 376px; width: 41px; height: 52px; z-index: 55;",
	cssClasses:	"",
	htmlId:		"tobj3169",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,288,0,[348,376,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":348,"y":376,"width":41,"height":52}}
};
image3170.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3170Img\" src=\"images/ic_smartphone_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 715px; top: 214px; width: 41px; height: 52px; z-index: 56; transform: rotate(312deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(312deg) ; -webkit-transform:rotate(312deg) ; -o-transform:rotate(312deg) ; -ms-transform:rotate(312deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6691306063588578, M12=0.7431448254773946, M21=-0.7431448254773946, M22=0.6691306063588578) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6691306063588578, M12=0.7431448254773946, M21=-0.7431448254773946, M22=0.6691306063588578) ",
	cssClasses:	"",
	htmlId:		"tobj3170",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,288,0,[715,214,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":312,"anchorX":50,"anchorY":50},"desktopRect":{"x":715,"y":214,"width":41,"height":52}}
};
image3171.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3171Img\" src=\"images/ic_smartphone_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 943px; top: 526px; width: 41px; height: 52px; z-index: 57; transform: rotate(334deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(334deg) ; -webkit-transform:rotate(334deg) ; -o-transform:rotate(334deg) ; -ms-transform:rotate(334deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8987940462991668, M12=0.4383711467890778, M21=-0.4383711467890778, M22=0.8987940462991668) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8987940462991668, M12=0.4383711467890778, M21=-0.4383711467890778, M22=0.8987940462991668) ",
	cssClasses:	"",
	htmlId:		"tobj3171",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,288,0,[943,526,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":334,"anchorX":50,"anchorY":50},"desktopRect":{"x":943,"y":526,"width":41,"height":52}}
};
image3172.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3172Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 372px; top: 527px; width: 50px; height: 54px; z-index: 58;",
	cssClasses:	"",
	htmlId:		"tobj3172",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,288,0,[372,527,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":372,"y":527,"width":50,"height":54}}
};
image3173.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3173Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 961px; top: 325px; width: 50px; height: 54px; z-index: 59; transform: rotate(346deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(346deg) ; -webkit-transform:rotate(346deg) ; -o-transform:rotate(346deg) ; -ms-transform:rotate(346deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ",
	cssClasses:	"",
	htmlId:		"tobj3173",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,288,0,[961,325,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":346,"anchorX":50,"anchorY":50},"desktopRect":{"x":961,"y":325,"width":50,"height":54}}
};
image3174.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3174Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 589px; top: 378px; width: 50px; height: 54px; z-index: 60; transform: rotate(47deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(47deg) ; -webkit-transform:rotate(47deg) ; -o-transform:rotate(47deg) ; -ms-transform:rotate(47deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6819983600624985, M12=-0.7313537016191705, M21=0.7313537016191705, M22=0.6819983600624985) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6819983600624985, M12=-0.7313537016191705, M21=0.7313537016191705, M22=0.6819983600624985) ",
	cssClasses:	"",
	htmlId:		"tobj3174",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,288,0,[589,378,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":47,"anchorX":50,"anchorY":50},"desktopRect":{"x":589,"y":378,"width":50,"height":54}}
};
image3175.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3175Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 372px; top: 309px; width: 25px; height: 25px; z-index: 61;",
	cssClasses:	"",
	htmlId:		"tobj3175",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[372,309,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":372,"y":309,"width":25,"height":25}}
};
image3176.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3176Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 497px; top: 513px; width: 25px; height: 25px; z-index: 62;",
	cssClasses:	"",
	htmlId:		"tobj3176",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[497,513,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":497,"y":513,"width":25,"height":25}}
};
image3177.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3177Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 371px; top: 475px; width: 25px; height: 25px; z-index: 63;",
	cssClasses:	"",
	htmlId:		"tobj3177",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[371,475,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":371,"y":475,"width":25,"height":25}}
};
image3178.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3178Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 831px; top: 544px; width: 25px; height: 25px; z-index: 64;",
	cssClasses:	"",
	htmlId:		"tobj3178",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[831,544,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":831,"y":544,"width":25,"height":25}}
};
image3179.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3179Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 565px; top: 211px; width: 25px; height: 25px; z-index: 65;",
	cssClasses:	"",
	htmlId:		"tobj3179",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[565,211,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":211,"width":25,"height":25}}
};
image3180.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3180Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 893px; top: 286px; width: 25px; height: 25px; z-index: 66;",
	cssClasses:	"",
	htmlId:		"tobj3180",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[893,286,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":893,"y":286,"width":25,"height":25}}
};
image3181.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3181Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 984px; top: 447px; width: 25px; height: 25px; z-index: 67;",
	cssClasses:	"",
	htmlId:		"tobj3181",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[984,447,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":984,"y":447,"width":25,"height":25}}
};
image3182.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj3182Img\" src=\"images/Path%20107.png\" style=\"opacity:0.23;filter:alpha(opacity=23); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 737px; top: 337px; width: 25px; height: 25px; z-index: 68;",
	cssClasses:	"",
	htmlId:		"tobj3182",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 107"
	},
	objData:	{"a":[0,288,0,[737,337,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":737,"y":337,"width":25,"height":25}}
};
textbutton3183.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 155 57\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(77.5 28.5)\" style=\"\">\n	<path d=\"M 0 0 L 155 0 L 155 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -28.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_3124_8354\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"155\" height=\"57\" xlink:href=\"images/Button_bekijk.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 155 0 L 155 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8354&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(77.5 28.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 606px; top: 491px; width: 155px; height: 57px; z-index: 69; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj3183",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button 1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og3160.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[606,491,155,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":606,"y":491,"width":155,"height":57},"imgDataNormal":"images/desktop_shape2572.png","imgDataOver":"images/desktop_shape2572_over.png","imgDataDown":"images/desktop_shape2572.png","imgDataDisabled":"images/desktop_shape2572_disabled.png","svgDataNormal":"<g transform=\"translate(77.5 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 155 0 L 155 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_8354\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"155\" height=\"57\" xlink:href=\"images/Button_bekijk.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 155 0 L 155 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8354&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(77.5 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(77.5 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 155 0 L 155 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_8356\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"155\" height=\"57\" xlink:href=\"images/Button_bekijk_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 155 0 L 155 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8356&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(77.5 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(77.5 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 155 0 L 155 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_8358\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"155\" height=\"57\" xlink:href=\"images/Button_bekijk.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 155 0 L 155 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8358&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(77.5 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(77.5 28.5)\" style=\"\">\n\t<path d=\"M 0 0 L 155 0 L 155 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -28.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_3124_8360\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"155\" height=\"57\" xlink:href=\"images/Button_bekijk.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 155 0 L 155 57 L 0 57 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_3124_8360&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(77.5 28.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text3185.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 450px; min-height: 113px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 450px; min-height: 113px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><span style=\"font-size:28pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Wat kun je met de app?</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 457px; top: 261px; width: 450px; height: 113px; z-index: 70;",
	cssClasses:	"popup-title",
	htmlId:		"tobj3185",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,32,0,[457,261,450,113]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":457,"y":261,"width":450,"height":113},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	17
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_sluit_groot.png","images/Logo-ZK.jpg","images/Button_menu_groot.png","images/Button_volgende.png","images/Button_volgende_hover.png","images/Button_vorige.png","images/Button_vorige_hover.png","images/ic_desktop_windows_24px.png","images/ic_laptop_mac_24px.png","images/ic_smartphone_24px.png","images/ic_tablet_mac_24px.png","images/Path%20107.png","images/Checklist_vinkje.png","images/Checklist_uitroepteken.png","images/Button_bekijk.png","images/Button_bekijk_hover.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
