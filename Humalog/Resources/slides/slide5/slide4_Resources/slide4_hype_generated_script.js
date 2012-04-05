//	HYPE.documents["slide4"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide4_Resources";
	var documentName = "slide4";
	var documentLoaderFilename = "slide4_hype_generated_script.js";

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

var scenes = [{timelines:{"21_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"21"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"21"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"21"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"21"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"21"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"21"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"21"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"21"},{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"21"},{f:"2",t:0,d:1,i:"c",e:310,r:1,s:61,o:"21"},{f:"2",t:0,d:1,i:"d",e:149,r:1,s:15,o:"21"},{f:"2",t:0,d:1,i:"a",e:299,r:1,s:380,o:"21"},{f:"2",t:0,d:1,i:"b",e:249,r:1,s:252,o:"21"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">8. Nissen SE, Nicholls SJ, Sipahi I et al. Effect of Very High-Intensity Statin Therapy on Regression of Coronary Atherosclerosis. The ASTEROID Trial. JAMA. 2006;295(13):1556-1565.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">10. Crouse JR 3rd, Raichlen JS, Riley WA et al. Effect of rosuvastatin on progression of carotid intima-media thickness in low-risk individuals with subclinical atherosclerosis: the METEOR Trial JAMA. 2007 Mar 28;297(12):1344-53.<br></div>",r:1,s:"<br>",o:"21"},{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"22"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"22"},{f:"2",t:0,d:1,i:"a",e:406,r:1,s:487,o:"22"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"22"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"22"},{f:"2",t:0,d:1,i:"d",e:149,r:1,s:15,o:"22"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"22"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"22"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"22"},{f:"2",t:0,d:1,i:"c",e:310,r:1,s:61,o:"22"},{f:"2",t:0,d:1,i:"b",e:566,r:1,s:569,o:"22"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"22"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">8. Nissen SE, Nicholls SJ, Sipahi I et al. Effect of Very High-Intensity Statin Therapy on Regression of Coronary Atherosclerosis. The ASTEROID Trial. JAMA. 2006;295(13):1556-1565.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">10. Crouse JR 3rd, Raichlen JS, Riley WA et al. Effect of rosuvastatin on progression of carotid intima-media thickness in low-risk individuals with subclinical atherosclerosis: the METEOR Trial JAMA. 2007 Mar 28;297(12):1344-53.<br></div>",r:1,s:"<br>",o:"22"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"22"}],identifier:"21_hover",name:"21_hover",duration:1},"22_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"22"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"22"},{f:"2",t:0,d:1,i:"a",e:362,r:1,s:487,o:"22"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"22"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"22"},{f:"2",t:0,d:1,i:"d",e:149,r:1,s:15,o:"22"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"22"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"22"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"22"},{f:"2",t:0,d:1,i:"c",e:310,r:1,s:61,o:"22"},{f:"2",t:0,d:1,i:"b",e:455,r:1,s:569,o:"22"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"22"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">8. Nissen SE, Nicholls SJ, Sipahi I et al. Effect of Very High-Intensity Statin Therapy on Regression of Coronary Atherosclerosis. The ASTEROID Trial. JAMA. 2006;295(13):1556-1565.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">10. Crouse JR 3rd, Raichlen JS, Riley WA et al. Effect of rosuvastatin on progression of carotid intima-media thickness in low-risk individuals with subclinical atherosclerosis: the METEOR Trial JAMA. 2007 Mar 28;297(12):1344-53.<br></div>",r:1,s:"<br>",o:"22"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"22"}],identifier:"22_hover",name:"22_hover",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"f",e:"0deg",r:1,s:"177deg",o:"5"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5"},{f:"2",t:1,d:0.60000002,i:"a",e:-1,r:1,s:-262,o:"6"},{f:"2",t:1.6,d:0.43333328,i:"a",e:-16,s:-1,o:"6"},{f:"2",t:2.0333333,d:0.79999995,i:"e",e:"1.000000",r:1,s:"0.000000",o:"7"},{f:"2",t:2.0333333,d:0.79999995,i:"f",e:"0deg",r:1,s:"-90deg",o:"7"},{f:"2",t:2.8,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"8"},{f:"2",t:2.8,d:0.5,i:"f",e:"0deg",r:1,s:"180deg",o:"8"},{f:"2",t:3.3333333,d:0.4333334,i:"e",e:"1.000000",r:1,s:"0.000000",o:"16"},{f:"2",t:3.3333333,d:0.4333334,i:"d",e:52,r:1,s:15,o:"16"},{f:"2",t:3.3333333,d:0.4333334,i:"c",e:75,r:1,s:21,o:"16"},{f:"2",t:3.7666667,d:0.43333316,i:"e",e:"1.000000",r:1,s:"0.000000",o:"17"},{f:"2",t:3.7666667,d:0.43333316,i:"d",e:29,r:1,s:17,o:"17"},{f:"2",t:3.7666667,d:0.43333316,i:"c",e:78,r:1,s:46,o:"17"},{f:"2",t:4.1999998,d:0.83333349,i:"e",e:"1.000000",r:1,s:"0.000000",o:"18"},{f:"2",t:4.1999998,d:0.83333349,i:"b",e:253,r:1,s:433,o:"18"},{f:"2",t:4.1999998,d:0.83333349,i:"f",e:"0deg",r:1,s:"-290deg",o:"18"},{f:"2",t:5.0333333,d:0.86666679,i:"e",e:"1.000000",r:1,s:"0.000000",o:"19"},{f:"2",t:5.0333333,d:0.86666679,i:"b",e:319,r:1,s:152,o:"19"},{f:"2",t:5.0333333,d:0.86666679,i:"f",e:"0deg",r:1,s:"290deg",o:"19"},{f:"2",t:6.3000002,d:0.66666651,i:"e",e:"1.000000",r:1,s:"0.000000",o:"14"},{f:"2",t:6.3000002,d:0.63333321,i:"b",e:506,r:1,s:585,o:"14"},{f:"2",t:6.9333334,d:0.36666679,i:"b",e:538,s:506,o:"14"},{f:"2",t:7.3000002,d:1.166666,i:"e",e:"1.000000",r:1,s:"0.000000",o:"15"},{f:"2",t:7.3000002,d:1.166666,i:"b",e:579,r:1,s:307,o:"15"},{f:"2",t:7.3000002,d:1.166666,i:"f",e:"0deg",r:1,s:"360deg",o:"15"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:8.4666662}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"21":{b:252,z:"16",K:"Solid",c:61,L:"Solid",d:15,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"21_hover",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:380,y:"preserve",J:"Solid"},"15":{o:"content-box",h:"sellos.png",x:"visible",a:560,q:"100% 100%",b:307,j:"absolute",r:"inline",c:147,k:"div",z:"11",d:39,aY:"0",e:"0.000000",f:"360deg"},"16":{o:"content-box",h:"dato4.png",x:"visible",a:827,q:"100% 100%",b:93,j:"absolute",r:"inline",c:21,k:"div",z:"12",d:15,e:"0.000000"},"4":{o:"content-box",h:"fondo_plano-1.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"22":{b:569,z:"17",K:"Solid",c:61,L:"Solid",d:15,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"22_hover",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:487,y:"preserve",J:"Solid"},"5":{o:"content-box",h:"logo_gde.png",x:"visible",a:3,q:"100% 100%",b:-1,j:"absolute",r:"inline",c:504,k:"div",z:"2",d:131,aY:"2",e:"0.000000",f:"177deg"},"17":{o:"content-box",h:"dato3.png",x:"visible",a:719,q:"100% 100%",b:223,j:"absolute",r:"inline",c:46,k:"div",z:"13",d:17,e:"0.000000"},"6":{o:"content-box",h:"guante.png",x:"visible",a:-262,q:"100% 100%",b:334,j:"absolute",r:"inline",c:396,k:"div",z:"3",d:332},"7":{o:"content-box",h:"texto1-1.png",p:"no-repeat",x:"visible",a:27,q:"100% 100%",b:152,j:"absolute",r:"inline",c:410,k:"div",z:"4",d:144,aY:"1",e:"0.000000",f:"-90deg"},"18":{o:"content-box",h:"dato2.png",x:"visible",a:688,q:"100% 100%",b:433,j:"absolute",r:"inline",c:84,k:"div",z:"14",d:54,aY:"0",e:"0.000000",f:"-290deg"},"8":{o:"content-box",h:"grafica-1.png",p:"no-repeat",x:"visible",a:461,q:"100% 100%",b:30,j:"absolute",r:"inline",c:547,k:"div",z:"5",d:478,aY:"1",e:"0.000000",f:"180deg"},"14":{o:"content-box",h:"texto2-1.png",p:"no-repeat",x:"visible",a:292,q:"100% 100%",b:585,j:"absolute",r:"inline",c:561,k:"div",z:"10",d:61,e:"0.000000"},"19":{o:"content-box",h:"dato1.png",x:"visible",a:634,q:"100% 100%",b:152,j:"absolute",r:"inline",c:93,k:"div",z:"15",d:46,aY:"0",e:"0.000000",f:"290deg"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide4_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

