//	HYPE.documents["slide6"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide6_Resources";
	var documentName = "slide6";
	var documentLoaderFilename = "slide6_hype_generated_script.js";

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

var scenes = [{timelines:{"16_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"16"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"a",e:216,r:1,s:297,o:"16"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"d",e:79,r:1,s:23,o:"16"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"c",e:294,r:1,s:29,o:"16"},{f:"2",t:0,d:1,i:"b",e:223,r:1,s:242,o:"16"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">2. G\u00f3mez- Brice\u00f1o GA. Clinical experience in dyslipidemic patients treated either with rosuvastatin 10 mg/day or ezetimibe/simvastatin 10/20 mg/day in Mexico city. Value in Health 2007;10(3):A37.</div>",r:1,s:"<br>",o:"16"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"16"}],identifier:"16_hover",name:"16_hover",duration:1},"17_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"17"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"a",e:575,r:1,s:840,o:"17"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"d",e:79,r:1,s:23,o:"17"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"c",e:294,r:1,s:29,o:"17"},{f:"2",t:0,d:1,i:"b",e:542,r:1,s:587,o:"17"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">2. G\u00f3mez- Brice\u00f1o GA. Clinical experience in dyslipidemic patients treated either with rosuvastatin 10 mg/day or ezetimibe/simvastatin 10/20 mg/day in Mexico city. Value in Health 2007;10(3):A37.</div>",r:1,s:"<br>",o:"17"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"17"}],identifier:"17_hover",name:"17_hover",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"f",e:"0deg",r:1,s:"177deg",o:"5"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5"},{f:"2",t:1.0666667,d:0.79999995,i:"f",e:"0deg",r:1,s:"-90deg",o:"7"},{f:"2",t:1.0666667,d:0.79999995,i:"e",e:"1.000000",r:1,s:"0.000000",o:"7"},{f:"2",t:1.0666667,d:1.3666667,i:"f",e:"0deg",r:1,s:"290deg",o:"15"},{f:"2",t:1.0666667,d:1.3666667,i:"b",e:525,r:1,s:186,o:"15"},{f:"2",t:1.0666667,d:1.3666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"15"},{f:"2",t:2.5,d:0.5,i:"f",e:"0deg",r:1,s:"90deg",o:"8"},{f:"2",t:2.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"8"},{f:"2",t:3,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"9"},{f:"2",t:3.4666667,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"10"},{f:"2",t:3.9333334,d:1,i:"f",e:"0deg",r:1,s:"360deg",o:"12"},{f:"2",t:3.9333334,d:1,i:"b",e:261,r:1,s:120,o:"12"},{f:"2",t:3.9333334,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"12"},{f:"2",t:4.9333334,d:0.36666679,i:"b",e:226,s:261,o:"12"},{f:"2",t:5.3000002,d:0.63333321,i:"e",e:"1.000000",r:1,s:"0.000000",o:"13"},{f:"2",t:5.3000002,d:0.63333321,i:"b",e:267,r:1,s:422,o:"13"},{f:"2",t:5.3000002,d:0.63333321,i:"f",e:"0deg",r:1,s:"295deg",o:"13"},{f:"2",t:5.9333334,d:0.29999971,i:"b",e:289,s:267,o:"13"},{f:"2",t:6.2333331,d:0.63333368,i:"b",e:474,r:1,s:553,o:"14"},{f:"2",t:6.2333331,d:0.66666698,i:"e",e:"1.000000",r:1,s:"0.000000",o:"14"},{f:"2",t:6.8666668,d:0.36666632,i:"b",e:538,s:474,o:"14"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:7.2333331}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"10":{o:"content-box",h:"treinta.png",p:"no-repeat",x:"visible",a:840,q:"100% 100%",b:300,j:"absolute",r:"inline",c:76,k:"div",z:"7",d:20,e:"0.000000"},"15":{o:"content-box",h:"slogan-1.png",p:"no-repeat",x:"visible",a:108,q:"100% 100%",b:186,j:"absolute",r:"inline",c:296,k:"div",z:"11",d:72,aY:"2",e:"0.000000",f:"290deg"},"16":{b:252,z:"12",K:"Solid",c:29,L:"Solid",d:23,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"16_hover",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:307,y:"preserve",J:"Solid"},"4":{o:"content-box",h:"fondo.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"5":{o:"content-box",h:"logo_gde.png",x:"visible",a:3,q:"100% 100%",b:-1,j:"absolute",r:"inline",c:504,k:"div",z:"2",d:131,aY:"2",e:"0.000000",f:"177deg"},"12":{o:"content-box",h:"naranja.png",p:"no-repeat",x:"visible",a:544,q:"100% 100%",b:120,j:"absolute",r:"inline",c:122,k:"div",z:"8",d:194,aY:"1",e:"0.000000",f:"360deg"},"17":{b:597,z:"13",K:"Solid",c:29,L:"Solid",d:23,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"17_hover",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:850,y:"preserve",J:"Solid"},"13":{o:"content-box",h:"cuarenta.png",p:"no-repeat",x:"visible",a:521,q:"100% 100%",b:422,j:"absolute",r:"inline",c:153,k:"div",z:"9",d:55,aY:"1",e:"0.000000",f:"295deg"},"7":{o:"content-box",h:"texto1.png",p:"no-repeat",x:"visible",a:123,q:"100% 100%",b:167,j:"absolute",r:"inline",c:264,k:"div",z:"4",d:140,aY:"1",e:"0.000000",f:"-90deg"},"8":{o:"content-box",h:"grafica.png",p:"no-repeat",x:"visible",a:420,q:"100% 100%",b:123,j:"absolute",r:"inline",c:578,k:"div",z:"5",d:402,aY:"1",e:"0.000000",f:"90deg"},"14":{o:"content-box",h:"texto2.png",p:"no-repeat",x:"visible",a:466,q:"100% 100%",b:553,j:"absolute",r:"inline",c:485,k:"div",z:"10",d:96,e:"0.000000"},"9":{o:"content-box",h:"gris.png",p:"no-repeat",x:"visible",a:835,q:"100% 100%",b:237,j:"absolute",r:"inline",c:90,k:"div",z:"6",d:130,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide6_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

