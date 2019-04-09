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
image13.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj13Img\" src=\"images/Titelpagina2.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1365px; height: 766px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1365px; height: 766px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj13",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Titelpagina2"
	},
	objData:	{"a":[0,288,0,[0,0,1365,766]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1365,"height":766}}
};
shape14.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 768\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 384)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 768 L 0 768 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.7;filter:alpha(opacity=70); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -384) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 384)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0.7;filter:alpha(opacity=70);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -2.27374e-13px; top: 3.41061e-13px; width: 1366px; height: 768px; z-index: 5; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[-2.2737367544323206e-13,3.410605131648481e-13,1366,768]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape14.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.7;\">"}
};
textbutton24.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 18)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_23_15899\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"36\" xlink:href=\"images/Button_verder_wit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_23_15899&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 18)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 438px; top: 529px; width: 150px; height: 36px; z-index: 10; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj24",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button verder",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_systemen_hoofdmenu_hoofdmenu.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[438,529,150,36]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":438,"y":529,"width":150,"height":36},"imgDataNormal":"images/desktop_shape24.png","imgDataOver":"images/desktop_shape24_over.png","imgDataDown":"images/desktop_shape24.png","imgDataDisabled":"images/desktop_shape24_disabled.png","svgDataNormal":"<g transform=\"translate(75 18)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_23_15899\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"36\" xlink:href=\"images/Button_verder_wit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_23_15899&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 18)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 18)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_23_15901\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"36\" xlink:href=\"images/Button_verder_wit_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_23_15901&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 18)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 18)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_23_15903\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"36\" xlink:href=\"images/Button_verder_wit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_23_15903&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 18)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 18)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_23_15905\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"36\" xlink:href=\"images/Button_verder_wit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_23_15905&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 18)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image26.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj26Img\" src=\"images/Groene%20achtergrond.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1153px; height: 647px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 214px; top: -1px; width: 1153px; height: 647px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj26",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Groene achtergrond"
	},
	objData:	{"a":[0,288,0,[214,-1,1153,647]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":214,"y":-1,"width":1153,"height":647}}
};
text28.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 650px; min-height: 181px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 650px; min-height: 181px;\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:55pt; font-family: &quot;Titillium Web SemiBold&quot;, sans-serif; color: rgb(255, 255, 255);\">Openbare systemen</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 437px; top: 126px; width: 650px; height: 181px; z-index: 7;",
	cssClasses:	"intro-title",
	htmlId:		"tobj28",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,32,0,[437,126,650,181]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":437,"y":126,"width":650,"height":181},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image42.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj42Img\" src=\"images/Group%201235.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 214px; height: 216px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 1153px; top: 0px; width: 214px; height: 216px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj42",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Group 1235"
	},
	objData:	{"a":[0,288,0,[1153,0,214,216]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1153,"y":0,"width":214,"height":216}}
};
text29.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 630px; min-height: 264px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 630px; min-height: 264px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:14pt; font-family:pt sans; color:rgb(255, 255, 255)\">Als klantadviseur werk je met openbare systemen zoals de <strong>website</strong>,&nbsp;</span><br>\n<span style=\"font-size:14pt; font-family:pt sans; color:rgb(255, 255, 255)\"><strong>Mijn Zilveren Kruis</strong> en de <strong>Zilveren Kruis app</strong>. Deze systemen zijn gemaakt voor onze klanten. Je zult merken dat sommige klanten jou om hulp vragen. Wat kan de klant zelf inzien en regelen? </span></p>\n\n<p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:14pt; font-family:pt sans; color:rgb(255, 255, 255)\">​</span></p>\n\n<p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"font-size:14pt; font-family:pt sans; color:rgb(255, 255, 255)\">Je maakt kennis met de openbare systemen. Aan het einde van deze module toets je jouw kennis. Deze module duurt ongeveer 30 minuten.</span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 439px; top: 262px; width: 630px; height: 264px; z-index: 9;",
	cssClasses:	"intro-body",
	htmlId:		"tobj29",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[439,262,630,264]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":439,"y":262,"width":630,"height":264},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	2
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Button_verder_wit.png","images/Button_verder_wit_hover.png","images/Group%201235.png","images/Groene%20achtergrond.png","images/Titelpagina2.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
