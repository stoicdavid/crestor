//	HYPE.documents["slide3"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide3_Resources";
	var documentName = "slide3";
	var documentLoaderFilename = "slide3_hype_generated_script.js";

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

var scenes = [{timelines:{"30_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"30"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"30"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"30"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"30"},{f:"2",t:0,d:1,i:"d",e:88,r:1,s:16,o:"30"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"30"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"30"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"30"},{f:"2",t:0,d:1,i:"c",e:263,r:1,s:22,o:"30"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"30"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">6. Jones PH, Davidson MH, Stein EA et al. Comparison of efficacy and safety of rosuvastatin versus atorvastatin, simvastatine and pravastatin across doses (STELLAR trial). Am J Cardiol 2003;92(2):152-60.</div>",r:1,s:"<br>",o:"30"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"30"},{f:"2",t:0,d:1,i:"a",e:695,r:1,s:922,o:"30"},{f:"2",t:0,d:1,i:"b",e:512,r:1,s:570,o:"30"}],identifier:"30_hover",name:"30_hover",duration:1},"29_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"30"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"30"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"30"},{f:"2",t:0,d:1,i:"d",e:88,r:1,s:16,o:"30"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"30"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"30"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"30"},{f:"2",t:0,d:1,i:"c",e:263,r:1,s:22,o:"30"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"30"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">6. Jones PH, Davidson MH, Stein EA et al. Comparison of efficacy and safety of rosuvastatin versus atorvastatin, simvastatine and pravastatin across doses (STELLAR trial). Am J Cardiol 2003;92(2):152-60.</div>",r:1,s:"<br>",o:"30"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"30"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:-2,o:"29"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:-2,o:"29"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:-2,o:"29"},{f:"2",t:0,d:1,i:"d",e:88,r:1,s:-54,o:"29"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"29"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"29"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"29"},{f:"2",t:0,d:1,i:"c",e:258,r:1,s:-207,o:"29"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"29"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">6. Jones PH, Davidson MH, Stein EA et al. Comparison of efficacy and safety of rosuvastatin versus atorvastatin, simvastatine and pravastatin across doses (STELLAR trial). Am J Cardiol 2003;92(2):152-60.</div>",r:1,s:"<div style=\"text-align: left;\"><br></div>",o:"29"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:-2,o:"29"},{f:"2",t:0,d:1,i:"b",e:254,r:1,s:257,o:"29"},{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"29"}],identifier:"29_hover",name:"29_hover",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"f",e:"0deg",r:1,s:"177deg",o:"5"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5"},{f:"2",t:1,d:0.4333334,i:"e",e:"1.000000",r:1,s:"0.000000",o:"15"},{f:"2",t:1,d:0.4333334,i:"f",e:"0deg",r:1,s:"-90deg",o:"15"},{f:"2",t:1.4333334,d:0.36666656,i:"e",e:"1.000000",r:1,s:"0.000000",o:"16"},{f:"2",t:1.4333334,d:0.36666656,i:"f",e:"0deg",r:1,s:"90deg",o:"16"},{f:"2",t:1.8,d:0.33333349,i:"e",e:"1.000000",r:1,s:"0.000000",o:"25"},{f:"2",t:1.8,d:0.33333349,i:"e",e:"1.000000",r:1,s:"0.000000",o:"26"},{f:"2",t:2.2,d:0.33333325,i:"c",e:255,r:1,s:125,o:"24"},{f:"2",t:2.2,d:0.33333325,i:"d",e:86,r:1,s:42,o:"24"},{f:"2",t:2.2,d:0.33333325,i:"e",e:"1.000000",r:1,s:"0.000000",o:"24"},{f:"2",t:2.5333333,d:1.0666666,i:"e",e:"1.000000",r:1,s:"0.000000",o:"27"},{f:"2",t:2.5333333,d:1.0666666,i:"b",e:180,r:1,s:40,o:"27"},{f:"2",t:2.5333333,d:1.0666666,i:"f",e:"0deg",r:1,s:"360deg",o:"27"},{f:"2",t:3.5999999,d:0.36666679,i:"e",e:"1.000000",r:1,s:"0.000000",o:"23"},{f:"2",t:3.5999999,d:0.36666679,i:"f",e:"0deg",r:1,s:"180deg",o:"23"},{f:"2",t:3.9666667,d:0.099999905,i:"f",e:"-20deg",s:"0deg",o:"23"},{f:"2",t:4.0666666,d:0.33333349,i:"f",e:"0deg",s:"-20deg",o:"23"},{f:"2",t:4.4000001,d:0.33333349,i:"e",e:"1.000000",r:1,s:"0.045072",o:"28"},{f:"2",t:4.4000001,d:0.33333349,i:"f",e:"0deg",r:1,s:"290deg",o:"28"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:4.7333336}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"15":{o:"content-box",h:"texto1-1.png",p:"no-repeat",x:"visible",a:90,q:"100% 100%",b:157,j:"absolute",r:"inline",c:264,k:"div",z:"3",d:140,aY:"1",e:"0.000000",f:"-90deg"},"26":{o:"content-box",h:"atv.png",x:"visible",a:814,q:"100% 100%",b:213,j:"absolute",r:"inline",c:79,k:"div",z:"12",d:14,e:"0.000000"},"16":{o:"content-box",h:"grafica-1.png",p:"no-repeat",x:"visible",a:425,q:"100% 100%",b:130,j:"absolute",r:"inline",c:520,k:"div",z:"4",d:390,aY:"1",e:"0.000000",f:"90deg"},"4":{o:"content-box",h:"fondo.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"27":{o:"content-box",h:"crestor.png",x:"visible",a:814,q:"100% 100%",b:40,j:"absolute",r:"inline",c:81,k:"div",z:"13",d:17,aY:"0",e:"0.000000",f:"360deg"},"5":{o:"content-box",h:"logo_gde.png",x:"visible",a:3,q:"100% 100%",b:-1,j:"absolute",r:"inline",c:504,k:"div",z:"2",d:131,aY:"2",e:"0.000000",f:"177deg"},"23":{o:"content-box",h:"texto2-1.png",p:"no-repeat",x:"visible",a:417,q:"100% 100%",b:545,j:"absolute",r:"inline",c:528,k:"div",z:"9",d:62,aY:"2",e:"0.000000",f:"180deg"},"28":{o:"content-box",h:"sello.png",x:"visible",a:222,q:"100% 100%",b:489,j:"absolute",r:"inline",c:514,k:"div",z:"14",d:134,aY:"2",e:"0.045072",f:"290deg"},"24":{o:"content-box",h:"barra1.png",x:"visible",a:547,q:"100% 100%",b:201,j:"absolute",r:"inline",c:125,k:"div",z:"10",d:42,e:"0.000000"},"30":{b:570,z:"16",K:"Solid",c:22,L:"Solid",d:16,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"30_hover",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:922,y:"preserve",J:"Solid"},"29":{b:257,z:"15",K:"Solid",c:34,L:"Solid",d:18,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#FC9229",B:"#FC9229",Z:"break-word",r:"inline",C:"#FC9229",aM:"29_hover",D:"#FC9229",t:13,F:"center",G:"#000000",aP:"pointer",w:"<div style=\"text-align: left;\"><br></div>",x:"visible",I:"Solid",a:285,y:"preserve",J:"Solid"},"25":{o:"content-box",h:"barra2.png",x:"visible",a:546,q:"100% 100%",b:287,j:"absolute",r:"inline",c:359,k:"div",z:"11",d:99,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide3_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

