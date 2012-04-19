//	HYPE.documents["slide7"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide7_Resources";
	var documentName = "slide7";
	var documentLoaderFilename = "slide7_hype_generated_script.js";

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

var scenes = [{timelines:{"17_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"17"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"a",e:269,r:1,s:346,o:"17"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"d",e:54,r:1,s:23,o:"17"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"c",e:294,r:1,s:29,o:"17"},{f:"2",t:0,d:1,i:"b",e:212,r:1,s:230,o:"17"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"17"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">4. Crestor (Rosuvastatina) IPP.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">5. Vytorin (ezetimiba/simvastatina) IPP.</div>",r:1,s:"<br>",o:"17"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"17"},{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"19"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"19"},{f:"2",t:0,d:1,i:"a",e:880,r:1,s:957,o:"19"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"19"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"19"},{f:"2",t:0,d:1,i:"d",e:54,r:1,s:23,o:"19"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"19"},{f:"2",t:0,d:1,i:"c",e:294,r:1,s:29,o:"19"},{f:"2",t:0,d:1,i:"b",e:548,r:1,s:566,o:"19"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"19"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"19"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"19"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">4. Crestor (Rosuvastatina) IPP.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">5. Vytorin (ezetimiba/simvastatina) IPP.</div>",r:1,s:"<br>",o:"19"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"19"}],identifier:"17_hover",name:"17_hover",duration:1},"19_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"19"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"19"},{f:"2",t:0,d:1,i:"a",e:704,r:1,s:957,o:"19"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"19"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"19"},{f:"2",t:0,d:1,i:"d",e:54,r:1,s:23,o:"19"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"19"},{f:"2",t:0,d:1,i:"c",e:294,r:1,s:29,o:"19"},{f:"2",t:0,d:1,i:"b",e:541,r:1,s:566,o:"19"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"19"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"19"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"19"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">4. Crestor (Rosuvastatina) IPP.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">5. Vytorin (ezetimiba/simvastatina) IPP.</div>",r:1,s:"<br>",o:"19"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"19"}],identifier:"19_hover",name:"19_hover",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"f",e:"0deg",r:1,s:"177deg",o:"5"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5"},{f:"2",t:1.0666667,d:0.79999995,i:"f",e:"0deg",r:1,s:"-90deg",o:"7"},{f:"2",t:1.0666667,d:0.79999995,i:"e",e:"1.000000",r:1,s:"0.000000",o:"7"},{f:"2",t:1.0666667,d:1.3666667,i:"f",e:"0deg",r:1,s:"290deg",o:"15"},{f:"2",t:1.0666667,d:1.3666667,i:"b",e:525,r:1,s:186,o:"15"},{f:"2",t:1.0666667,d:1.3666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"15"},{f:"2",t:2.5,d:0.5,i:"f",e:"0deg",r:1,s:"90deg",o:"8"},{f:"2",t:2.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"8"},{f:"2",t:3,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"16"},{f:"2",t:3.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"9"},{f:"2",t:3.9666667,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"10"},{f:"2",t:4.5,d:1,i:"f",e:"0deg",r:1,s:"360deg",o:"12"},{f:"2",t:4.5,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"12"},{f:"2",t:4.5,d:1,i:"b",e:169,r:1,s:28,o:"12"},{f:"2",t:5.5,d:0.36666679,i:"b",e:134,s:169,o:"12"},{f:"2",t:5.8333335,d:0.63333321,i:"e",e:"1.000000",r:1,s:"0.000000",o:"13"},{f:"2",t:5.8333335,d:0.63333321,i:"b",e:364,r:1,s:519,o:"13"},{f:"2",t:5.8333335,d:0.63333321,i:"f",e:"0deg",r:1,s:"295deg",o:"13"},{f:"2",t:6.4666667,d:0.29999971,i:"b",e:390,s:364,o:"13"},{f:"2",t:6.7666664,d:0.66666698,i:"e",e:"1.000000",r:1,s:"0.000000",o:"14"},{f:"2",t:6.7666664,d:0.63333368,i:"b",e:485,r:1,s:564,o:"14"},{f:"2",t:7.4000001,d:0.36666632,i:"b",e:549,s:485,o:"14"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:7.7666664}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"10":{o:"content-box",h:"31.png",p:"no-repeat",x:"visible",a:864,q:"100% 100%",b:199,j:"absolute",r:"inline",c:72,k:"div",z:"8",d:19,e:"0.000000"},"9":{o:"content-box",h:"gris-1.png",p:"no-repeat",x:"visible",a:861,q:"100% 100%",b:151,j:"absolute",r:"inline",c:80,k:"div",z:"7",d:107,e:"0.000000"},"15":{o:"content-box",h:"slogan.png",p:"no-repeat",x:"visible",a:55,q:"100% 100%",b:186,j:"absolute",r:"inline",c:359,k:"div",z:"12",d:76,aY:"2",e:"0.000000",f:"290deg"},"16":{o:"content-box",h:"grafica2.png",x:"visible",a:742,q:"100% 100%",b:73,j:"absolute",r:"inline",c:272,k:"div",z:"6",d:446,e:"0.000000"},"4":{o:"content-box",h:"fondo.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"5":{o:"content-box",h:"logo_gde.png",x:"visible",a:3,q:"100% 100%",b:-1,j:"absolute",r:"inline",c:504,k:"div",z:"2",d:131,aY:"2",e:"0.000000",f:"177deg"},"12":{o:"content-box",h:"naranja-1.png",p:"no-repeat",x:"visible",a:567,q:"100% 100%",b:28,j:"absolute",r:"inline",c:110,k:"div",z:"9",d:363,aY:"1",e:"0.000000",f:"360deg"},"17":{b:240,z:"13",K:"Solid",c:29,L:"Solid",d:23,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"17_hover",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:356,y:"preserve",J:"Solid"},"13":{o:"content-box",h:"37.png",p:"no-repeat",x:"visible",a:556,q:"100% 100%",b:519,j:"absolute",r:"inline",c:137,k:"div",z:"10",d:51,aY:"1",e:"0.000000",f:"295deg"},"7":{o:"content-box",h:"texto1-1.png",p:"no-repeat",x:"visible",a:55,q:"100% 100%",b:156,j:"absolute",r:"inline",c:349,k:"div",z:"4",d:140,aY:"1",e:"0.000000",f:"-90deg"},"8":{o:"content-box",h:"grafica1.png",p:"no-repeat",x:"visible",a:467,q:"100% 100%",b:73,j:"absolute",r:"inline",c:272,k:"div",z:"5",d:446,aY:"1",e:"0.000000",f:"90deg"},"14":{o:"content-box",h:"texto2-1.png",p:"no-repeat",x:"visible",a:442,q:"100% 100%",b:564,j:"absolute",r:"inline",c:560,k:"div",z:"11",d:62,e:"0.000000"},"19":{b:576,z:"14",K:"Solid",c:29,L:"Solid",d:23,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"19_hover",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:967,y:"preserve",J:"Solid"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide7_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

