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
	innerHtml:	"<svg viewBox=\"0 0 125 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(62.5 29)\" style=\"\">\n	<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_4737_1060_7618\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_1060_7618&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(62.5 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1066,10.000000000000057,125,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape109.png","imgDataOver":"images/desktop_shape109.png","imgDataDown":"images/desktop_shape109.png","imgDataDisabled":"images/desktop_shape109_disabled.png","svgDataNormal":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_1060_7618\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_1060_7618&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_1060_7620\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_1060_7620&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_1060_7622\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_1060_7622&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(62.5 29)\" style=\"\">\n\t<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_1060_7624\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"125\" height=\"58\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 125 0 L 125 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_1060_7624&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-62.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(62.5 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton81.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_4737_1060_7626\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_1060_7626&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
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
	objData:	{"a":[4,33056,0,[1202,10.000000000000071,150,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape72.png","imgDataOver":"images/desktop_shape72.png","imgDataDown":"images/desktop_shape72.png","imgDataDisabled":"images/desktop_shape72_disabled.png","svgDataNormal":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_1060_7626\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_1060_7626&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_1060_7628\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_1060_7628&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_1060_7630\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_1060_7630&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_1060_7632\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_1060_7632&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape80.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 78\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 39)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 78 L 0 78 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -39) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 39)\">\n		<text font-family=\"Verdana\" font-size=\"-19.9999995\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.3\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 6.82121e-13px; width: 1366px; height: 78px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,6.821210263296962e-13,1366,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":78},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape71.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape93.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -4.54747e-13px; top: 78px; width: 1366px; height: 690px; z-index: 9; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj93",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Bg"
	},
	objData:	{"a":[0,32,0,[-4.547473508864641e-13,78.00000000000068,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape93.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
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
og4739.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4739",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og4744.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4744",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton4752.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 553 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(276.5 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(276.5 35.5)\">\n		<text font-family=\"\'PT Sans\', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;App</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 403px; top: 267px; width: 553px; height: 71px; z-index: 21; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4752",
	bInsAnc:	1,
	cwObj:		{
		"name":	"MPC1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarQuestion_4819.set('A'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og4739.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton4757.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton4782.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[403,267.00000000000006,553,71]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":403,"y":267,"width":553,"height":71},"imgDataNormal":"images/desktop_shape4752.png","imgDataOver":"images/desktop_shape4752_over.png","imgDataDown":"images/desktop_shape4752_over.png","imgDataDisabled":"images/desktop_shape4752_disabled.png","svgDataNormal":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;App</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;App</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;App</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;App</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton4757.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 553 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(276.5 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(276.5 35.5)\">\n		<text font-family=\"\'PT Sans\', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;App</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 403px; top: 267px; width: 553px; height: 71px; z-index: 22; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4757",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MPC1 selected"
	},
	objData:	{"a":[0,32832,0,[403,267.00000000000006,553,71]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":403,"y":267,"width":553,"height":71},"imgDataNormal":"images/desktop_shape4757.png","imgDataOver":"images/desktop_shape4757.png","imgDataDown":"images/desktop_shape4757.png","imgDataDisabled":"images/desktop_shape4757_disabled.png","svgDataNormal":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;App</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;App</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;App</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;App</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton4758.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 553 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(276.5 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(276.5 35.5)\">\n		<text font-family=\"\'PT Sans\', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Website</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 403px; top: 350px; width: 553px; height: 71px; z-index: 23; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4758",
	bInsAnc:	1,
	cwObj:		{
		"name":	"MPC2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarQuestion_4819.set('B'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og4739.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton4763.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton4782.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[403,350.00000000000006,553,71]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":403,"y":350,"width":553,"height":71},"imgDataNormal":"images/desktop_shape4758.png","imgDataOver":"images/desktop_shape4758_over.png","imgDataDown":"images/desktop_shape4758_over.png","imgDataDisabled":"images/desktop_shape4758_disabled.png","svgDataNormal":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Website</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Website</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Website</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Website</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton4763.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 553 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(276.5 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(276.5 35.5)\">\n		<text font-family=\"\'PT Sans\', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Website</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 403px; top: 350px; width: 553px; height: 71px; z-index: 24; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4763",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MPC2 selected"
	},
	objData:	{"a":[0,32832,0,[403,350.00000000000006,553,71]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":403,"y":350,"width":553,"height":71},"imgDataNormal":"images/desktop_shape4763.png","imgDataOver":"images/desktop_shape4763.png","imgDataDown":"images/desktop_shape4763.png","imgDataDisabled":"images/desktop_shape4763_disabled.png","svgDataNormal":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Website</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Website</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Website</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Website</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton4764.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 553 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(276.5 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(276.5 35.5)\">\n		<text font-family=\"\'PT Sans\', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Mijn Zilveren Kruis</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 403px; top: 434px; width: 553px; height: 71px; z-index: 25; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4764",
	bInsAnc:	1,
	cwObj:		{
		"name":	"MPC3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarQuestion_4819.set('C'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og4739.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton4769.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton4782.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[403,434.00000000000006,553,71]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":403,"y":434,"width":553,"height":71},"imgDataNormal":"images/desktop_shape4764.png","imgDataOver":"images/desktop_shape4764_over.png","imgDataDown":"images/desktop_shape4764_over.png","imgDataDisabled":"images/desktop_shape4764_disabled.png","svgDataNormal":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Mijn Zilveren Kruis</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Mijn Zilveren Kruis</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Mijn Zilveren Kruis</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Mijn Zilveren Kruis</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton4769.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 553 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(276.5 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(276.5 35.5)\">\n		<text font-family=\"\'PT Sans\', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Mijn Zilveren Kruis</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 403px; top: 434px; width: 553px; height: 71px; z-index: 26; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4769",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MPC3 selected"
	},
	objData:	{"a":[0,32832,0,[403,434.00000000000006,553,71]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":403,"y":434,"width":553,"height":71},"imgDataNormal":"images/desktop_shape4769.png","imgDataOver":"images/desktop_shape4769.png","imgDataDown":"images/desktop_shape4769.png","imgDataDisabled":"images/desktop_shape4769_disabled.png","svgDataNormal":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Mijn Zilveren Kruis</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Mijn Zilveren Kruis</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Mijn Zilveren Kruis</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Mijn Zilveren Kruis</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton4770.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 553 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(276.5 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(276.5 35.5)\">\n		<text font-family=\"\'PT Sans\', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Alle antwoorden zijn goed</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 403px; top: 517px; width: 553px; height: 71px; z-index: 27; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4770",
	bInsAnc:	1,
	cwObj:		{
		"name":	"MPC4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarQuestion_4819.set('D'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og4739.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton4775.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton4782.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[403,517.0000000000001,553,71]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":403,"y":517,"width":553,"height":71},"imgDataNormal":"images/desktop_shape4770.png","imgDataOver":"images/desktop_shape4770_over.png","imgDataDown":"images/desktop_shape4770_over.png","imgDataDisabled":"images/desktop_shape4770_disabled.png","svgDataNormal":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Alle antwoorden zijn goed</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Alle antwoorden zijn goed</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(177, 224, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Alle antwoorden zijn goed</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#0068BD\">&nbsp;&nbsp;&nbsp;&nbsp;Alle antwoorden zijn goed</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton4775.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 553 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(276.5 35.5)\" style=\"\">\n	<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(276.5 35.5)\">\n		<text font-family=\"\'PT Sans\', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Alle antwoorden zijn goed</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 403px; top: 517px; width: 553px; height: 71px; z-index: 28; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4775",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MPC4 selected"
	},
	objData:	{"a":[0,32832,0,[403,517.0000000000001,553,71]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"1.000000","depth":2,"color":"#B1E0E2","blurradius":0,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":403,"y":517,"width":553,"height":71},"imgDataNormal":"images/desktop_shape4775.png","imgDataOver":"images/desktop_shape4775.png","imgDataDown":"images/desktop_shape4775.png","imgDataDisabled":"images/desktop_shape4775_disabled.png","svgDataNormal":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Alle antwoorden zijn goed</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Alle antwoorden zijn goed</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Alle antwoorden zijn goed</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(276.5 35.5)\" style=\"\">\n\t<path d=\"M 4.97 0 L 548.03 0 A 4.97 4.97 0 0 1 553 4.97 L 553 66.03 A 4.97 4.97 0 0 1 548.03 71 L 4.97 71 A 4.97 4.97 0 0 1 0 66.03 L 0 4.97 A 4.97 4.97 0 0 1 4.97 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 182, 166); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-276.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(276.5 35.5)\">\n\t\t<text font-family=\"'PT Sans', PT Sans\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-273.26\" y=\"5.88\" fill=\"#ffffff\">&nbsp;&nbsp;&nbsp;&nbsp;Alle antwoorden zijn goed</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og4776.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4776",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape4777.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 584px; top: 690px; width: 17px; height: 17px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4777",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[584,690,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":584,"y":690,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2083.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape4778.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 630px; top: 690px; width: 17px; height: 17px; z-index: 12; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4778",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[630,690,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":630,"y":690,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2083.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape4779.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 676px; top: 690px; width: 17px; height: 17px; z-index: 13; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4779",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[676,690,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":676,"y":690,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2083.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape4780.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 40, 87); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 722px; top: 690px; width: 17px; height: 17px; z-index: 14; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4780",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[722,690,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":722,"y":690,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2082.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape4781.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 8.5)\" style=\"\">\n	<path d=\"M 0 8.5 A 8.5 8.5 0 1 1 17 8.5 A 8.5 8.5 0 1 1 0 8.5 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(126, 187, 194); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-8.5, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8.5 8.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 768px; top: 690px; width: 17px; height: 17px; z-index: 15; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4781",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[768,690,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":768,"y":690,"width":17,"height":17},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2083.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton4782.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 97 39\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(48.5 19.5)\" style=\"\">\n	<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_4737_7730\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7730&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(48.5 19.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 636px; top: 619px; width: 97px; height: 39px; z-index: 29; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4782",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button check",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og4793.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ textbutton4788.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarQuiz_progress.add('04_done'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[636,619,97,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":636,"y":619,"width":97,"height":39},"imgDataNormal":"images/desktop_shape1390.png","imgDataOver":"images/desktop_shape1390_over.png","imgDataDown":"images/desktop_shape1390.png","imgDataDisabled":"images/desktop_shape1390_disabled.png","svgDataNormal":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7730\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7730&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7732\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7732&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7734\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7734&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(48.5 19.5)\" style=\"\">\n\t<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7736\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"97\" height=\"39\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 97 0 L 97 39 L 0 39 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7736&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-48.5, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(48.5 19.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text4786.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 450px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 450px; min-height: 54px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><span style=\"font-family: &quot;Titillium Web SemiBold&quot;, sans-serif; font-size: 37.3333px; color: rgb(0, 40, 87);\">Wat denk jij?</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 457px; top: 116px; width: 450px; height: 54px; z-index: 16;",
	cssClasses:	"page-title",
	htmlId:		"tobj4786",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,32,0,[457,116,450,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":457,"y":116,"width":450,"height":54},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text4787.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 575px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 575px; min-height: 88px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;pt sans&quot;, sans-serif; font-size: 18.6667px; color: rgb(0, 40, 87);\">Vraag 4/5 </span></p>\n\n<p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;pt sans&quot;, sans-serif; font-size: 18.6667px; background-color: transparent;\">Waar kun je <strong>als klant</strong> een betalingsregeling aanvragen?​</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 395px; top: 180px; width: 575px; height: 88px; z-index: 17;",
	cssClasses:	"page-body",
	htmlId:		"tobj4787",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[395,180,575,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":395,"y":180,"width":575,"height":88},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton4788.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_4737_7738\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7738&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1295px; top: 399px; width: 34px; height: 34px; z-index: 30; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4788",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_quiz_time_vraag_5.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[1295,399,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":399,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1063.png","imgDataOver":"images/desktop_shape1063_over.png","imgDataDown":"images/desktop_shape1063.png","imgDataDisabled":"images/desktop_shape1063_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7738\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7738&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7740\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7740&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7742\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7742&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7744\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7744&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton4790.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_4737_7746\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7746&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 399px; width: 34px; height: 34px; z-index: 31; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4790",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vorige",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_quiz_time_vraag_3.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[38,399,34,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":38,"y":399,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1803.png","imgDataOver":"images/desktop_shape1803_over.png","imgDataDown":"images/desktop_shape1803.png","imgDataDisabled":"images/desktop_shape1803_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7746\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7746&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7748\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7748&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7750\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7750&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7752\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7752&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape4792.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1132 425\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(566 212.5)\" style=\"\">\n	<path d=\"M 0 0 L 1132 0 L 1132 425 L 0 425 L 0 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-566, -212.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(566 212.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 140px; top: 239px; width: 1132px; height: 425px; z-index: 32; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4792",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Disable"
	},
	objData:	{"a":[0,64,0,[140,239.00000000000014,1132,425]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":239,"width":1132,"height":425},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1568.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og4793.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4793",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape4794.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.68;filter:alpha(opacity=68); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.68;filter:alpha(opacity=68);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 33; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4794",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1101.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.68;\">"}
};
shape4795.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 746 448\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(373 224)\" style=\"\">\n	<path d=\"M 4.51 0 L 741.49 0 A 4.51 4.51 0 0 1 746 4.51 L 746 443.49 A 4.51 4.51 0 0 1 741.49 448 L 4.51 448 A 4.51 4.51 0 0 1 0 443.49 L 0 4.51 A 4.51 4.51 0 0 1 4.51 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-373, -224) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(373 224)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 309px; top: 178px; width: 746px; height: 448px; z-index: 34; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4795",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Green bg"
	},
	objData:	{"a":[0,0,0,[308.99999999999994,178.00000000000009,746,448]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.14","depth":3,"color":"#000000","blurradius":6,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":309,"y":178,"width":746,"height":448},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1102.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image4796.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4796Img\" src=\"images/ic_desktop_windows_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 64px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 927px; top: 212px; width: 67px; height: 64px; z-index: 35;",
	cssClasses:	"",
	htmlId:		"tobj4796",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_desktop_windows_24px"
	},
	objData:	{"a":[0,256,0,[927,212,67,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":927,"y":212,"width":67,"height":64}}
};
image4797.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4797Img\" src=\"images/ic_desktop_windows_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 64px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 433px; top: 390px; width: 67px; height: 64px; z-index: 36;",
	cssClasses:	"",
	htmlId:		"tobj4797",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_desktop_windows_24px"
	},
	objData:	{"a":[0,256,0,[433,390,67,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":433,"y":390,"width":67,"height":64}}
};
image4798.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4798Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 361px; top: 221px; width: 69px; height: 56px; z-index: 37; transform: rotate(28deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(28deg) ; -webkit-transform:rotate(28deg) ; -o-transform:rotate(28deg) ; -ms-transform:rotate(28deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.882947592858927, M12=-0.4694715627858908, M21=0.4694715627858908, M22=0.882947592858927) ",
	cssClasses:	"",
	htmlId:		"tobj4798",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,256,0,[361,221,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":28,"anchorX":50,"anchorY":50},"desktopRect":{"x":361,"y":221,"width":69,"height":56}}
};
image4799.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4799Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 565px; top: 534px; width: 69px; height: 56px; z-index: 38; transform: rotate(329deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(329deg) ; -webkit-transform:rotate(329deg) ; -o-transform:rotate(329deg) ; -ms-transform:rotate(329deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8571673007021121, M12=0.5150380749100545, M21=-0.5150380749100545, M22=0.8571673007021121) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8571673007021121, M12=0.5150380749100545, M21=-0.5150380749100545, M22=0.8571673007021121) ",
	cssClasses:	"",
	htmlId:		"tobj4799",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,256,0,[565,534,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":329,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":534,"width":69,"height":56}}
};
image4800.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4800Img\" src=\"images/ic_laptop_mac_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 56px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 879px; top: 388px; width: 69px; height: 56px; z-index: 39;",
	cssClasses:	"",
	htmlId:		"tobj4800",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_laptop_mac_24px"
	},
	objData:	{"a":[0,256,0,[879,388,69,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":879,"y":388,"width":69,"height":56}}
};
image4801.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4801Img\" src=\"images/ic_smartphone_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 348px; top: 376px; width: 41px; height: 52px; z-index: 40;",
	cssClasses:	"",
	htmlId:		"tobj4801",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,256,0,[348,376,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":348,"y":376,"width":41,"height":52}}
};
image4802.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4802Img\" src=\"images/ic_smartphone_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 715px; top: 214px; width: 41px; height: 52px; z-index: 41; transform: rotate(312deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(312deg) ; -webkit-transform:rotate(312deg) ; -o-transform:rotate(312deg) ; -ms-transform:rotate(312deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6691306063588578, M12=0.7431448254773946, M21=-0.7431448254773946, M22=0.6691306063588578) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6691306063588578, M12=0.7431448254773946, M21=-0.7431448254773946, M22=0.6691306063588578) ",
	cssClasses:	"",
	htmlId:		"tobj4802",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,256,0,[715,214,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":312,"anchorX":50,"anchorY":50},"desktopRect":{"x":715,"y":214,"width":41,"height":52}}
};
image4803.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4803Img\" src=\"images/ic_smartphone_24px.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 52px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 943px; top: 526px; width: 41px; height: 52px; z-index: 42; transform: rotate(334deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(334deg) ; -webkit-transform:rotate(334deg) ; -o-transform:rotate(334deg) ; -ms-transform:rotate(334deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8987940462991668, M12=0.4383711467890778, M21=-0.4383711467890778, M22=0.8987940462991668) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.8987940462991668, M12=0.4383711467890778, M21=-0.4383711467890778, M22=0.8987940462991668) ",
	cssClasses:	"",
	htmlId:		"tobj4803",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_smartphone_24px"
	},
	objData:	{"a":[0,256,0,[943,526,41,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":334,"anchorX":50,"anchorY":50},"desktopRect":{"x":943,"y":526,"width":41,"height":52}}
};
image4804.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4804Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.7;filter:alpha(opacity=70); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 372px; top: 527px; width: 50px; height: 54px; z-index: 43;",
	cssClasses:	"",
	htmlId:		"tobj4804",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,256,0,[372,527,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":372,"y":527,"width":50,"height":54}}
};
image4805.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4805Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.7;filter:alpha(opacity=70); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 961px; top: 325px; width: 50px; height: 54px; z-index: 44; transform: rotate(346deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(346deg) ; -webkit-transform:rotate(346deg) ; -o-transform:rotate(346deg) ; -ms-transform:rotate(346deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ",
	cssClasses:	"",
	htmlId:		"tobj4805",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,256,0,[961,325,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":346,"anchorX":50,"anchorY":50},"desktopRect":{"x":961,"y":325,"width":50,"height":54}}
};
image4806.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj4806Img\" src=\"images/ic_tablet_mac_24px.png\" style=\"opacity:0.7;filter:alpha(opacity=70); position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 54px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 589px; top: 378px; width: 50px; height: 54px; z-index: 45; transform: rotate(47deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(47deg) ; -webkit-transform:rotate(47deg) ; -o-transform:rotate(47deg) ; -ms-transform:rotate(47deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6819983600624985, M12=-0.7313537016191705, M21=0.7313537016191705, M22=0.6819983600624985) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.6819983600624985, M12=-0.7313537016191705, M21=0.7313537016191705, M22=0.6819983600624985) ",
	cssClasses:	"",
	htmlId:		"tobj4806",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ic_tablet_mac_24px"
	},
	objData:	{"a":[0,256,0,[589,378,50,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":47,"anchorX":50,"anchorY":50},"desktopRect":{"x":589,"y":378,"width":50,"height":54}}
};
text4807.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 447px; top: 293px; width: 44px; height: 76px; z-index: 46;; behavior:url(-ms-transform.htc); -moz-transform:rotate(24deg) ; -webkit-transform:rotate(24deg) ; -o-transform:rotate(24deg) ; -ms-transform:rotate(24deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9135454576426009, M12=-0.4067366430758002, M21=0.4067366430758002, M22=0.9135454576426009) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9135454576426009, M12=-0.4067366430758002, M21=0.4067366430758002, M22=0.9135454576426009) ",
	cssClasses:	"",
	htmlId:		"tobj4807",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[447,293,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":24,"anchorX":50,"anchorY":50},"desktopRect":{"x":447,"y":293,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text4808.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 786px; top: 316px; width: 44px; height: 76px; z-index: 47;; behavior:url(-ms-transform.htc); -moz-transform:rotate(346deg) ; -webkit-transform:rotate(346deg) ; -o-transform:rotate(346deg) ; -ms-transform:rotate(346deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9702957262759965, M12=0.24192189559966787, M21=-0.24192189559966787, M22=0.9702957262759965) ",
	cssClasses:	"",
	htmlId:		"tobj4808",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[786,316,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":346,"anchorX":50,"anchorY":50},"desktopRect":{"x":786,"y":316,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text4809.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 359px; top: 444px; width: 44px; height: 76px; z-index: 48;; behavior:url(-ms-transform.htc); -moz-transform:rotate(327deg) ; -webkit-transform:rotate(327deg) ; -o-transform:rotate(327deg) ; -ms-transform:rotate(327deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.838670567945424, M12=0.544639035015027, M21=-0.544639035015027, M22=0.838670567945424) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.838670567945424, M12=0.544639035015027, M21=-0.544639035015027, M22=0.838670567945424) ",
	cssClasses:	"",
	htmlId:		"tobj4809",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[359,444,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":327,"anchorX":50,"anchorY":50},"desktopRect":{"x":359,"y":444,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text4810.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 791px; top: 455px; width: 44px; height: 76px; z-index: 49;; behavior:url(-ms-transform.htc); -moz-transform:rotate(349deg) ; -webkit-transform:rotate(349deg) ; -o-transform:rotate(349deg) ; -ms-transform:rotate(349deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=0.19080899537654467, M21=-0.19080899537654467, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=0.19080899537654467, M21=-0.19080899537654467, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj4810",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[791,455,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":349,"anchorX":50,"anchorY":50},"desktopRect":{"x":791,"y":455,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text4811.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 979px; top: 430px; width: 44px; height: 76px; z-index: 50;; behavior:url(-ms-transform.htc); -moz-transform:rotate(11deg) ; -webkit-transform:rotate(11deg) ; -o-transform:rotate(11deg) ; -ms-transform:rotate(11deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj4811",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[979,430,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":11,"anchorX":50,"anchorY":50},"desktopRect":{"x":979,"y":430,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text4812.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 867px; top: 534px; width: 44px; height: 76px; z-index: 51;; behavior:url(-ms-transform.htc); -moz-transform:rotate(11deg) ; -webkit-transform:rotate(11deg) ; -o-transform:rotate(11deg) ; -ms-transform:rotate(11deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj4812",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[867,534,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":11,"anchorX":50,"anchorY":50},"desktopRect":{"x":867,"y":534,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text4813.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 849px; top: 246px; width: 44px; height: 76px; z-index: 52;; behavior:url(-ms-transform.htc); -moz-transform:rotate(11deg) ; -webkit-transform:rotate(11deg) ; -o-transform:rotate(11deg) ; -ms-transform:rotate(11deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj4813",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[849,246,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":11,"anchorX":50,"anchorY":50},"desktopRect":{"x":849,"y":246,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text4814.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 499px; top: 505px; width: 44px; height: 76px; z-index: 53;; behavior:url(-ms-transform.htc); -moz-transform:rotate(11deg) ; -webkit-transform:rotate(11deg) ; -o-transform:rotate(11deg) ; -ms-transform:rotate(11deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.981627183447664, M12=-0.1908089953765448, M21=0.1908089953765448, M22=0.981627183447664) ",
	cssClasses:	"",
	htmlId:		"tobj4814",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[499,505,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":11,"anchorX":50,"anchorY":50},"desktopRect":{"x":499,"y":505,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text4815.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0.75;filter:alpha(opacity=75); position: absolute; left: 0px; top: 0px; width: 44px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 34px; min-height: 66px;\"><p style=\"text-align:left\"><span style=\"font-size:36pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">?</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 579px; top: 223px; width: 44px; height: 76px; z-index: 54;; behavior:url(-ms-transform.htc); -moz-transform:rotate(335deg) ; -webkit-transform:rotate(335deg) ; -o-transform:rotate(335deg) ; -ms-transform:rotate(335deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.90630778703665, M12=0.4226182617406992, M21=-0.4226182617406992, M22=0.90630778703665) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.90630778703665, M12=0.4226182617406992, M21=-0.4226182617406992, M22=0.90630778703665) ",
	cssClasses:	"",
	htmlId:		"tobj4815",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Question mark"
	},
	objData:	{"a":[0,0,0,[579,223,44,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":335,"anchorX":50,"anchorY":50},"desktopRect":{"x":579,"y":223,"width":44,"height":76},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text4816.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 411px; min-height: 109px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 411px; min-height: 109px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"color: rgb(0, 40, 87); font-size:13pt; font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\">Klanten kunnen zelf een betalingsregeling aanvragen. Dat doen ze op Mijn Zilveren Kruis. </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 478px; top: 334px; width: 411px; height: 109px; z-index: 55;",
	cssClasses:	"popup-body-blue",
	htmlId:		"tobj4816",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[478,334,411,109]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":478,"y":334,"width":411,"height":109},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton4817.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 163 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(81.5 20)\" style=\"\">\n	<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_4737_7754\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"163\" height=\"40\" xlink:href=\"images/Button_verder_wit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7754&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(81.5 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 603px; top: 451px; width: 163px; height: 40px; z-index: 56; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj4817",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button verder",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdstukken_quiz_time_vraag_5.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[603,451,163,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":603,"y":451,"width":163,"height":40},"imgDataNormal":"images/desktop_shape1425.png","imgDataOver":"images/desktop_shape1425_over.png","imgDataDown":"images/desktop_shape1425.png","imgDataDisabled":"images/desktop_shape1425_disabled.png","svgDataNormal":"<g transform=\"translate(81.5 20)\" style=\"\">\n\t<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7754\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"163\" height=\"40\" xlink:href=\"images/Button_verder_wit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7754&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(81.5 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(81.5 20)\" style=\"\">\n\t<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7756\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"163\" height=\"40\" xlink:href=\"images/Button_verder_wit_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7756&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(81.5 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(81.5 20)\" style=\"\">\n\t<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7758\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"163\" height=\"40\" xlink:href=\"images/Button_verder_wit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7758&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(81.5 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(81.5 20)\" style=\"\">\n\t<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4737_7760\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"163\" height=\"40\" xlink:href=\"images/Button_verder_wit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 163 0 L 163 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4737_7760&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-81.5, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(81.5 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
qu4819.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu4819",
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
				"varQuest":	VarQuestion_4819
	},
	objData:	{"a":[0,32,0,[]]}
};
text4820.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -303px; top: 143px; width: 113px; height: 20px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj4820",
	bInsAnc:	0,
	fieldsetId:	'fset4819',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[-303,143,113,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-303,"y":143,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text4821.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -274px; top: 173px; width: 99px; height: 20px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj4821",
	bInsAnc:	0,
	fieldsetId:	'fset4819',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[-274,173,99,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-274,"y":173,"width":99,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio4822.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: inherit; position: absolute; left: -303px; top: 173px; width: 19px; height: 19px; z-index: 20;",
	cssClasses:	"",
	htmlId:		"tobj4822",
	bInsAnc:	0,
	fieldsetId:	'fset4819',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[-303,173,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":-303,"y":173,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	7
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_verder_wit.png","images/Button_verder_wit_hover.png","images/Button_sluit_groot.png","images/Logo-ZK.jpg","images/Button_menu_groot.png","images/Button_volgende.png","images/Button_volgende_hover.png","images/Button_vorige.png","images/Button_vorige_hover.png","images/ic_desktop_windows_24px.png","images/ic_laptop_mac_24px.png","images/ic_smartphone_24px.png","images/ic_tablet_mac_24px.png","images/Button_check_groot_hover.png","images/Button_check_groot.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
