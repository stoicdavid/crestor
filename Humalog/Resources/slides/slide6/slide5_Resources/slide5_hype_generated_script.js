//	HYPE.documents["slide5"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide5_Resources";
	var documentName = "slide5";
	var documentLoaderFilename = "slide5_hype_generated_script.js";

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

var scenes = [{timelines:{"16_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"d",e:79,r:1,s:23,o:"16"},{f:"2",t:0,d:1,i:"c",e:294,r:1,s:29,o:"16"},{f:"2",t:0,d:1,i:"a",e:306,r:1,s:387,o:"16"},{f:"2",t:0,d:1,i:"b",e:219,r:1,s:238,o:"16"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"16"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"16"},{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"16"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">2. G\u00f3mez- Brice\u00f1o GA. Clinical experience in dyslipidemic patients treated either with rosuvastatin 10 mg/day or ezetimibe/simvastatin 10/20 mg/day in Mexico city. Value in Health 2007;10(3):A37.</div>",r:1,s:"<br>",o:"16"},{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"17"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"a",e:861,r:1,s:942,o:"17"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"d",e:79,r:1,s:23,o:"17"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"c",e:294,r:1,s:29,o:"17"},{f:"2",t:0,d:1,i:"b",e:552,r:1,s:571,o:"17"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">2. G\u00f3mez- Brice\u00f1o GA. Clinical experience in dyslipidemic patients treated either with rosuvastatin 10 mg/day or ezetimibe/simvastatin 10/20 mg/day in Mexico city. Value in Health 2007;10(3):A37.</div>",r:1,s:"<br>",o:"17"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"17"}],identifier:"16_hover",name:"16_hover",duration:1},"17_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"17"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"a",e:677,r:1,s:942,o:"17"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"d",e:79,r:1,s:23,o:"17"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"c",e:294,r:1,s:29,o:"17"},{f:"2",t:0,d:1,i:"b",e:526,r:1,s:571,o:"17"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">2. G\u00f3mez- Brice\u00f1o GA. Clinical experience in dyslipidemic patients treated either with rosuvastatin 10 mg/day or ezetimibe/simvastatin 10/20 mg/day in Mexico city. Value in Health 2007;10(3):A37.</div>",r:1,s:"<br>",o:"17"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"17"}],identifier:"17_hover",name:"17_hover",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"f",e:"0deg",r:1,s:"177deg",o:"5"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5"},{f:"2",t:1.0666667,d:0.79999995,i:"f",e:"0deg",r:1,s:"-90deg",o:"7"},{f:"2",t:1.0666667,d:0.79999995,i:"e",e:"1.000000",r:1,s:"0.000000",o:"7"},{f:"2",t:1.0666667,d:1.3666667,i:"f",e:"0deg",r:1,s:"290deg",o:"15"},{f:"2",t:1.0666667,d:1.3666667,i:"b",e:517,r:1,s:178,o:"15"},{f:"2",t:1.0666667,d:1.3666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"15"},{f:"2",t:2.5,d:0.5,i:"f",e:"0deg",r:1,s:"90deg",o:"8"},{f:"2",t:2.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"8"},{f:"2",t:3,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"9"},{f:"2",t:3.4666667,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"10"},{f:"2",t:3.9333334,d:1,i:"f",e:"0deg",r:1,s:"360deg",o:"12"},{f:"2",t:3.9333334,d:1,i:"b",e:142,r:1,s:350,o:"12"},{f:"2",t:3.9333334,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"12"},{f:"2",t:4.9333334,d:0.36666679,i:"b",e:157,s:142,o:"12"},{f:"2",t:5.3000002,d:0.63333321,i:"e",e:"1.000000",r:1,s:"0.000000",o:"13"},{f:"2",t:5.3000002,d:0.63333321,i:"b",e:344,r:1,s:499,o:"13"},{f:"2",t:5.3000002,d:0.63333321,i:"f",e:"0deg",r:1,s:"295deg",o:"13"},{f:"2",t:5.9333334,d:0.29999971,i:"b",e:366,s:344,o:"13"},{f:"2",t:6.2333331,d:0.63333368,i:"b",e:474,r:1,s:553,o:"14"},{f:"2",t:6.2333331,d:0.66666698,i:"e",e:"1.000000",r:1,s:"0.000000",o:"14"},{f:"2",t:6.8666668,d:0.36666632,i:"b",e:541,s:474,o:"14"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:7.2333331}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"10":{o:"content-box",h:"cincuenta.png",p:"no-repeat",x:"visible",a:808,q:"100% 100%",b:397,j:"absolute",r:"inline",c:74,k:"div",z:"7",d:24,e:"0.000000"},"15":{o:"content-box",h:"slogan.png",x:"visible",a:34,q:"100% 100%",b:178,j:"absolute",r:"inline",c:432,k:"div",z:"11",d:72,aY:"2",e:"0.000000",f:"290deg"},"16":{b:238,z:"12",K:"Solid",c:29,L:"Solid",d:23,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"16_hover",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:387,y:"preserve",J:"Solid"},"4":{o:"content-box",h:"fondo.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"5":{o:"content-box",h:"logo_gde.png",x:"visible",a:3,q:"100% 100%",b:-1,j:"absolute",r:"inline",c:504,k:"div",z:"2",d:131,aY:"2",e:"0.000000",f:"177deg"},"12":{o:"content-box",h:"naranja-1.png",p:"no-repeat",x:"visible",a:632,q:"100% 100%",b:350,j:"absolute",r:"inline",c:103,k:"div",z:"8",d:351,aY:"1",e:"0.000000",f:"360deg"},"17":{b:571,z:"13",K:"Solid",c:29,L:"Solid",d:23,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"17_hover",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:942,y:"preserve",J:"Solid"},"13":{o:"content-box",h:"ochenta.png",p:"no-repeat",x:"visible",a:627,q:"100% 100%",b:499,j:"absolute",r:"inline",c:122,k:"div",z:"9",d:49,aY:"1",e:"0.000000",f:"295deg"},"7":{o:"content-box",h:"texto1-1.png",p:"no-repeat",x:"visible",a:84,q:"100% 100%",b:190,j:"absolute",r:"inline",c:344,k:"div",z:"4",d:95,aY:"1",e:"0.000000",f:"-90deg"},"8":{o:"content-box",h:"grafica-1.png",p:"no-repeat",x:"visible",a:475,q:"100% 100%",b:42,j:"absolute",r:"inline",c:494,k:"div",z:"5",d:462,aY:"1",e:"0.000000",f:"90deg"},"14":{o:"content-box",h:"texto2-1.png",p:"no-repeat",x:"visible",a:512,q:"100% 100%",b:553,j:"absolute",r:"inline",c:451,k:"div",z:"10",d:64,e:"0.000000"},"9":{o:"content-box",h:"gris.jpg",p:"no-repeat",x:"visible",a:807,q:"100% 100%",b:269,j:"absolute",r:"inline",c:77,k:"div",z:"6",d:209,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide5_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

