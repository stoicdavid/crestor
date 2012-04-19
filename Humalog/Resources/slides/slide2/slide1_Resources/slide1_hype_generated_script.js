//	HYPE.documents["slide1"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide1_Resources";
	var documentName = "slide1";
	var documentLoaderFilename = "slide1_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_100 == "undefined") {
		if(typeof window.HYPE_100_DocumentsToLoad == "undefined") {
			window.HYPE_100_DocumentsToLoad = new Array();
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=100';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var hypeDoc = new HYPE_100();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{timelines:{"15_pressed":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"N",e:0,r:1,s:0,o:"15"},{f:"2",t:0,d:1,i:"O",e:0,r:1,s:0,o:"15"},{f:"2",t:0,d:1,i:"P",e:0,r:1,s:0,o:"15"},{f:"2",t:0,d:1,i:"M",e:0,r:1,s:0,o:"15"},{f:"2",t:0,d:1,i:"a",e:422,r:1,s:420,o:"15"},{f:"2",t:0,d:1,i:"b",e:243,r:1,s:241,o:"15"}],identifier:"15_pressed",name:"15_pressed",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"f",e:"0deg",r:1,s:"177deg",o:"5"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5"},{f:"2",t:1,d:0.63333333,i:"a",e:0,r:1,s:-262,o:"6"},{f:"2",t:1.6333333,d:0.36666667,i:"a",e:-16,s:0,o:"6"},{f:"2",t:2.2,d:0.79999995,i:"f",e:"0deg",r:1,s:"-90deg",o:"7"},{f:"2",t:2.2,d:0.79999995,i:"e",e:"1.000000",r:1,s:"0.000000",o:"7"},{f:"2",t:3,d:0.5,i:"f",e:"0deg",r:1,s:"90deg",o:"8"},{f:"2",t:3,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"8"},{f:"2",t:3.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"9"},{f:"2",t:4,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"10"},{f:"2",t:4,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"12"},{f:"2",t:4,d:1,i:"f",e:"0deg",r:1,s:"360deg",o:"12"},{f:"2",t:4,d:1,i:"b",e:97,r:1,s:305,o:"12"},{f:"2",t:5,d:0.36666679,i:"b",e:112,s:97,o:"12"},{f:"2",t:5.3666668,d:0.63333321,i:"e",e:"1.000000",r:1,s:"0.000000",o:"13"},{f:"2",t:5.3666668,d:0.63333321,i:"b",e:267,r:1,s:422,o:"13"},{f:"2",t:5.3666668,d:0.63333321,i:"f",e:"0deg",r:1,s:"295deg",o:"13"},{f:"2",t:6,d:0.30000019,i:"b",e:289,s:267,o:"13"},{f:"2",t:6.3000002,d:0.66666651,i:"e",e:"1.000000",r:1,s:"0.000000",o:"14"},{f:"2",t:6.3000002,d:0.63333321,i:"b",e:474,r:1,s:553,o:"14"},{f:"2",t:6.9333334,d:0.36666679,i:"b",e:506,s:474,o:"14"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:7.3000002},"15_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"15"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"15"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"15"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"15"},{f:"2",t:0,d:1,i:"c",e:222,r:1,s:19,o:"15"},{f:"2",t:0,d:1,i:"a",e:416,r:1,s:937,o:"15"},{f:"2",t:0,d:1,i:"b",e:240,r:1,s:532,o:"15"},{f:"2",t:0,d:1,i:"d",e:103,r:1,s:15,o:"15"},{f:"2",t:0,d:1,i:"w",e:"\"3. Schuster H, Barter PJ, Stender S et al. Effects of switching statins on achievement of lipid goals: measuring effective reductions in cholesterol using rosuvastatin therapy (MERCURY I) study. Am Heart J. 2004 Apr;147(4):705-13.<br>",r:1,s:"<br>",o:"15"},{f:"2",t:0,d:1,i:"F",e:"left",r:1,s:"center",o:"15"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"15"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"15"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"15"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"15"},{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"15"},{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"16"},{f:"2",t:0,d:1,i:"P",e:1,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"a",e:963,r:1,s:935,o:"16"},{f:"2",t:0,d:1,i:"O",e:1,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"N",e:1,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"d",e:103,r:1,s:15,o:"16"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"c",e:222,r:1,s:19,o:"16"},{f:"2",t:0,d:1,i:"b",e:529,r:1,s:530,o:"16"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"w",e:"\"3. Schuster H, Barter PJ, Stender S et al. Effects of switching statins on achievement of lipid goals: measuring effective reductions in cholesterol using rosuvastatin therapy (MERCURY I) study. Am Heart J. 2004 Apr;147(4):705-13.<br>",r:1,s:"<br>",o:"16"},{f:"2",t:0,d:1,i:"M",e:1,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"F",e:"left",r:1,s:"center",o:"16"}],identifier:"15_hover",name:"15_hover",duration:1},"16_pressed":{framesPerSecond:30,animations:[],identifier:"16_pressed",name:"16_pressed",duration:0},"16_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"16"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"a",e:744,r:1,s:935,o:"16"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"d",e:103,r:1,s:15,o:"16"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"c",e:222,r:1,s:19,o:"16"},{f:"2",t:0,d:1,i:"b",e:472,r:1,s:530,o:"16"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"w",e:"\"3. Schuster H, Barter PJ, Stender S et al. Effects of switching statins on achievement of lipid goals: measuring effective reductions in cholesterol using rosuvastatin therapy (MERCURY I) study. Am Heart J. 2004 Apr;147(4):705-13.<br>",r:1,s:"<br>",o:"16"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"F",e:"left",r:1,s:"center",o:"16"}],identifier:"16_hover",name:"16_hover",duration:1}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"10":{o:"content-box",h:"77.png",x:"visible",a:843,q:"100% 100%",b:305,j:"absolute",r:"inline",c:52,k:"div",z:"7",d:16,e:"0.000000"},"15":{b:241,z:"11",K:"Solid",c:19,L:"Solid",d:15,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"15_hover",D:"#A0A0A0",aN:"15_pressed",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:420,y:"preserve",J:"Solid"},"16":{b:530,z:"12",K:"Solid",c:19,L:"Solid",d:15,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"16_hover",D:"#A0A0A0",aN:"16_pressed",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:935,y:"preserve",J:"Solid"},"4":{o:"content-box",h:"fondo_plano.jpg",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"5":{o:"content-box",h:"logo_gde.png",x:"visible",a:3,q:"100% 100%",b:-1,j:"absolute",r:"inline",c:504,k:"div",z:"2",d:131,aY:"2",e:"0.000000",f:"177deg"},"12":{o:"content-box",h:"naranja.png",x:"visible",a:691,q:"100% 100%",b:305,j:"absolute",r:"inline",c:89,k:"div",z:"8",d:311,aY:"1",e:"0.000000",f:"360deg"},"6":{o:"content-box",h:"guante.png",x:"visible",a:-262,q:"100% 100%",b:334,j:"absolute",r:"inline",c:396,k:"div",z:"3",d:332},"13":{o:"content-box",h:"83.png",x:"visible",a:683,q:"100% 100%",b:422,j:"absolute",r:"inline",c:120,k:"div",z:"9",d:46,aY:"1",e:"0.000000",f:"295deg"},"7":{o:"content-box",h:"texto1.png",x:"visible",a:84,q:"100% 100%",b:190,j:"absolute",r:"inline",c:410,k:"div",z:"4",d:144,aY:"1",e:"0.000000",f:"-90deg"},"8":{o:"content-box",h:"grafica.png",x:"visible",a:556,q:"100% 100%",b:27,j:"absolute",r:"inline",c:421,k:"div",z:"5",d:407,aY:"1",e:"0.000000",f:"90deg"},"14":{o:"content-box",h:"texto2.png",x:"visible",a:577,q:"100% 100%",b:553,j:"absolute",r:"inline",c:380,k:"div",z:"10",d:62,e:"0.000000"},"9":{o:"content-box",h:"gris.png",x:"visible",a:836,q:"100% 100%",b:163,j:"absolute",r:"inline",c:65,k:"div",z:"6",d:236,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("slide1_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

