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
	innerHtml:	"<svg viewBox=\"0 0 125 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(62.5 29)\" style=\"\">\n	<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2576_1060_15979\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_1060_15979&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(62.5 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1066,10.000000000000156,125,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape109.png","imgDataOver":"images/desktop_shape109.png","imgDataDown":"images/desktop_shape109.png","imgDataDisabled":"images/desktop_shape109_disabled.png","svgDataNormal":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_1060_15979\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_1060_15979&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_1060_15981\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_1060_15981&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_1060_15983\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_1060_15983&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_1060_15985\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_1060_15985&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton81.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2576_1060_15987\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_1060_15987&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1202,10.000000000000195,150,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape72.png","imgDataOver":"images/desktop_shape72.png","imgDataDown":"images/desktop_shape72.png","imgDataDisabled":"images/desktop_shape72_disabled.png","svgDataNormal":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_1060_15987\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_1060_15987&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_1060_15989\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_1060_15989&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_1060_15991\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_1060_15991&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_1060_15993\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_1060_15993&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape80.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 78\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 39)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 78 L 0 78 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -39) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 39)\">\n		<text font-family=\"Verdana\" font-size=\"-19.9999995\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.3\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 1.87583e-12px; width: 1366px; height: 78px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,1.8758328224066645e-12,1366,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":78},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape71.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape93.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -1.25056e-12px; top: 78px; width: 1366px; height: 690px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj93",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bg"
	},
	objData:	{"a":[0,32,0,[-1.2505552149377763e-12,78.00000000000188,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape93.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
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
shape2577.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1181 563\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(590.5 281.5)\" style=\"\">\n	<path d=\"M 6.14 0 L 1174.86 0 A 6.14 6.14 0 0 1 1181 6.14 L 1181 556.86 A 6.14 6.14 0 0 1 1174.86 563 L 6.14 563 A 6.14 6.14 0 0 1 0 556.86 L 0 6.14 A 6.14 6.14 0 0 1 6.14 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-590.5, -281.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(590.5 281.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 91px; top: 140px; width: 1181px; height: 563px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2577",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[90.99999999999989,140.00000000000017,1181,563]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":91,"y":140,"width":1181,"height":563},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2235.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2578.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 319px; min-height: 91px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 319px; min-height: 91px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:20pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Max, ambassadeur van de website, vertelt...</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 140px; top: 187px; width: 319px; height: 91px; z-index: 12;",
	cssClasses:	"page-title",
	htmlId:		"tobj2578",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,32,0,[140,187,319,91]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":187,"width":319,"height":91},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2579.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 378px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 378px; min-height: 88px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif;\">Klik op de playknoppen en bekijk de video\'s.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 140px; top: 272px; width: 378px; height: 88px; z-index: 13;",
	cssClasses:	"page-body",
	htmlId:		"tobj2579",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[140,272,378,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":272,"width":378,"height":88},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image2580.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2580Img\" src=\"images/Tekstwolk1.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 389px; height: 85px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 823px; top: 343px; width: 389px; height: 85px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj2580",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tekstwolk1"
	},
	objData:	{"a":[0,288,0,[823,343,389,85]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":823,"y":343,"width":389,"height":85}}
};
text2581.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 378px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 378px; min-height: 88px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif;\">\"Hoe vinden onze klanten</span></p>\n\n<p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif;\">informatie?</span><span style=\"background-color: transparent; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif; font-size:13pt;\">\"</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 868px; top: 358px; width: 378px; height: 88px; z-index: 15;",
	cssClasses:	"page-body",
	htmlId:		"tobj2581",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[868,358,378,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":868,"y":358,"width":378,"height":88},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton2582.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26 27)\" style=\"\">\n	<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2576_16483\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16483&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1144px; top: 358px; width: 52px; height: 54px; z-index: 16; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2582",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button play 1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2599.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ shape2577.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkPlay',actItem:function(){ video2600.play();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[1144,358,52,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1144,"y":358,"width":52,"height":54},"imgDataNormal":"images/desktop_shape2251.png","imgDataOver":"images/desktop_shape2251_over.png","imgDataDown":"images/desktop_shape2251.png","imgDataDisabled":"images/desktop_shape2251_disabled.png","svgDataNormal":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16483\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16483&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16485\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16485&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16487\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16487&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16489\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16489&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image2586.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2586Img\" src=\"images/Tekstwolk2.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 332px; height: 99px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 738px; top: 523px; width: 332px; height: 99px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj2586",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tekstwolk2"
	},
	objData:	{"a":[0,288,0,[738,523,332,99]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":738,"y":523,"width":332,"height":99}}
};
text2587.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 378px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 378px; min-height: 88px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif;\">\"Wat maakt onze website </span></p>\n\n<p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif;\">zo bijzonder?</span><span style=\"background-color: transparent; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif; font-size:13pt;\">\"</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 768px; top: 554px; width: 378px; height: 88px; z-index: 18;",
	cssClasses:	"page-body",
	htmlId:		"tobj2587",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[768,554,378,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":768,"y":554,"width":378,"height":88},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton2588.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26 27)\" style=\"\">\n	<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2576_16491\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16491&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1003px; top: 553px; width: 52px; height: 54px; z-index: 19; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2588",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button play 2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2606.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ shape2577.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkPlay',actItem:function(){ video2607.play();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[1003,553,52,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1003,"y":553,"width":52,"height":54},"imgDataNormal":"images/desktop_shape2251.png","imgDataOver":"images/desktop_shape2251_over.png","imgDataDown":"images/desktop_shape2251.png","imgDataDisabled":"images/desktop_shape2251_disabled.png","svgDataNormal":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16491\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16491&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16493\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16493&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16495\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16495&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16497\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16497&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image2592.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2592Img\" src=\"images/Tekstwolk3.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 359px; height: 85px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 155px; top: 467px; width: 359px; height: 85px; z-index: 20;",
	cssClasses:	"",
	htmlId:		"tobj2592",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tekstwolk3"
	},
	objData:	{"a":[0,288,0,[155,467,359,85]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":155,"y":467,"width":359,"height":85}}
};
text2593.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 378px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 378px; min-height: 88px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif;\">\"Wat is het doel van de</span></p>\n\n<p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:13pt; color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif;\">website?</span><span style=\"color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif; font-size:13pt; background-color: transparent;\">\"</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 179px; top: 484px; width: 378px; height: 88px; z-index: 21;",
	cssClasses:	"page-body",
	htmlId:		"tobj2593",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[179,484,378,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":179,"y":484,"width":378,"height":88},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton2594.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26 27)\" style=\"\">\n	<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2576_16499\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16499&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 428px; top: 482px; width: 52px; height: 54px; z-index: 22; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2594",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button play 3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2613.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ shape2577.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkPlay',actItem:function(){ video2614.play();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[428,482,52,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":428,"y":482,"width":52,"height":54},"imgDataNormal":"images/desktop_shape2251.png","imgDataOver":"images/desktop_shape2251_over.png","imgDataDown":"images/desktop_shape2251.png","imgDataDisabled":"images/desktop_shape2251_disabled.png","svgDataNormal":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16499\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16499&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16501\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16501&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16503\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16503&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26 27)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16505\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"54\" xlink:href=\"images/Button_play.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16505&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image2598.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2598Img\" src=\"images/Website%20portret%20ambassadeur.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 260px; height: 260px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 529px; top: 245px; width: 260px; height: 260px; z-index: 23;",
	cssClasses:	"",
	htmlId:		"tobj2598",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Website portret ambassadeur"
	},
	objData:	{"a":[0,288,0,[529,245,260,260]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":529,"y":245,"width":260,"height":260}}
};
og2599.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2599",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
video2600.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"vid\" style=\"left: 0px; top: 0px; width: 1175px; height: 661px; background-color: rgb(0, 0, 0); position: absolute;\"></div>",
	cssText:	"position: absolute; left: 0px; top: 0px; width: 1px; height: 1px; z-index: 24; visibility: hidden; opacity: 0.01;",
	cssClasses:	"",
	htmlId:		"tobj2600",
	bInsAnc:	0,
	stdHtml:	'<video id="swftobj2600" name="swftobj2600" width="1" height="1" controls="controls" preload="none" playsinline><source type="video/mp4" src="media/Amb_Website_5392.mp4" /></video>',
	iosHtml:	'undefined',
	resource:	'media/Amb_Website_5392.mp4',
	cwObj:		{
		"name":	"Amb_Website_5392"
	},
	objData:	{"a":[0,262144,0,[94,93,1175,661,-24]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":94,"y":93,"width":1175,"height":661},"hasEvents":0,"supportsEvents":true,"initHidden":true,"useNoSkin":false,"cssSkin":"trivantis-player.css","includeShim":"","flashStreamer":"","bRollOver":true,"skinHeight":24}
};
image2601.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2601Img\" src=\"images/Kruisje.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1222px; top: 113px; width: 22px; height: 22px; z-index: 25;",
	cssClasses:	"",
	htmlId:		"tobj2601",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[1222,113,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1222,"y":113,"width":22,"height":22}}
};
shape2602.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 66 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(33 29)\" style=\"\">\n	<path d=\"M 0 0 L 66 0 L 66 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(33 29)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1202px; top: 94px; width: 66px; height: 58px; z-index: 26; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2602",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkStop',actItem:function(){ video2600.stop();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ shape2577.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2599.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1202,94,66,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":94,"width":66,"height":58},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2292.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og2606.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2606",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
video2607.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"vid\" style=\"left: 0px; top: 0px; width: 1174px; height: 661px; background-color: rgb(0, 0, 0); position: absolute;\"></div>",
	cssText:	"position: absolute; left: 0px; top: 0px; width: 1px; height: 1px; z-index: 27; visibility: hidden; opacity: 0.01;",
	cssClasses:	"",
	htmlId:		"tobj2607",
	bInsAnc:	0,
	stdHtml:	'<video id="swftobj2607" name="swftobj2607" width="1" height="1" controls="controls" preload="none" playsinline><source type="video/mp4" src="media/Amb_Website_5393.mp4" /></video>',
	iosHtml:	'undefined',
	resource:	'media/Amb_Website_5393.mp4',
	cwObj:		{
		"name":	"Amb_Website_5393"
	},
	objData:	{"a":[0,262144,0,[94,93,1174,661,-24]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":94,"y":93,"width":1174,"height":661},"hasEvents":0,"supportsEvents":true,"initHidden":true,"useNoSkin":false,"cssSkin":"trivantis-player.css","includeShim":"","flashStreamer":"","bRollOver":true,"skinHeight":24}
};
image2608.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2608Img\" src=\"images/Kruisje.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1222px; top: 113px; width: 22px; height: 22px; z-index: 28;",
	cssClasses:	"",
	htmlId:		"tobj2608",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[1222,113,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1222,"y":113,"width":22,"height":22}}
};
shape2609.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 66 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(33 29)\" style=\"\">\n	<path d=\"M 0 0 L 66 0 L 66 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(33 29)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1202px; top: 94px; width: 66px; height: 58px; z-index: 29; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2609",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkStop',actItem:function(){ video2607.stop();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ shape2577.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2606.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1202,94,66,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":94,"width":66,"height":58},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2292.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og2613.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2613",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
video2614.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"vid\" style=\"left: 0px; top: 0px; width: 1174px; height: 661px; background-color: rgb(0, 0, 0); position: absolute;\"></div>",
	cssText:	"position: absolute; left: 0px; top: 0px; width: 1px; height: 1px; z-index: 30; visibility: hidden; opacity: 0.01;",
	cssClasses:	"",
	htmlId:		"tobj2614",
	bInsAnc:	0,
	stdHtml:	'<video id="swftobj2614" name="swftobj2614" width="1" height="1" controls="controls" preload="none" playsinline><source type="video/mp4" src="media/Amb_Website_5389.mp4" /></video>',
	iosHtml:	'undefined',
	resource:	'media/Amb_Website_5389.mp4',
	cwObj:		{
		"name":	"Amb_Website_5389"
	},
	objData:	{"a":[0,262144,0,[94,93,1174,661,-24]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":94,"y":93,"width":1174,"height":661},"hasEvents":0,"supportsEvents":true,"initHidden":true,"useNoSkin":false,"cssSkin":"trivantis-player.css","includeShim":"","flashStreamer":"","bRollOver":true,"skinHeight":24}
};
image2615.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2615Img\" src=\"images/Kruisje.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1222px; top: 113px; width: 22px; height: 22px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj2615",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[1222,113,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1222,"y":113,"width":22,"height":22}}
};
shape2616.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 66 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(33 29)\" style=\"\">\n	<path d=\"M 0 0 L 66 0 L 66 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(33 29)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1202px; top: 94px; width: 66px; height: 58px; z-index: 32; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2616",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkStop',actItem:function(){ video2614.stop();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ shape2577.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2613.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[1202,94,66,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":94,"width":66,"height":58},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2292.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton2620.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2576_16507\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16507&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1295px; top: 376px; width: 34px; height: 34px; z-index: 33; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2620",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarH2.contains('_01'))VarH2.add('_01'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_app_hotspot.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[1295,376,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":376,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1063.png","imgDataOver":"images/desktop_shape1063_over.png","imgDataDown":"images/desktop_shape1063.png","imgDataDisabled":"images/desktop_shape1063_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16507\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16507&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16509\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16509&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16511\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16511&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2576_16513\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2576_16513&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	14
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_sluit_groot.png","images/Logo-ZK.jpg","images/Button_menu_groot.png","images/Button_volgende.png","images/Button_volgende_hover.png","images/Website%20portret%20ambassadeur.png","images/Tekstwolk1.png","images/Tekstwolk2.png","images/Tekstwolk3.png","images/Button_play.png","images/Button_play_hover.png","images/Kruisje.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
