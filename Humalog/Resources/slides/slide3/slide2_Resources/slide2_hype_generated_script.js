//	HYPE.documents["slide2"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide2_Resources";
	var documentName = "slide2";
	var documentLoaderFilename = "slide2_hype_generated_script.js";

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

var scenes = [{timelines:{"25_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"25"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"25"},{f:"2",t:0,d:1,i:"a",e:782,r:1,s:952,o:"25"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"25"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"25"},{f:"2",t:0,d:1,i:"d",e:118,r:1,s:15,o:"25"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"25"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"25"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"25"},{f:"2",t:0,d:1,i:"c",e:193,r:1,s:19,o:"25"},{f:"2",t:0,d:1,i:"b",e:497,r:1,s:591,o:"25"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"25"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">1. McKenney JM, Jones PH, Adamczyk MA et al. Comparison of the efficacy ofrosuvastatin versus atorvastatin, simvastatin, and pravastatin in achieving lipid goals: results from the STELLAR trial. Curr Med Res Opin. 2003;19(8):689-698.</div>",r:1,s:"<br>",o:"25"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"25"},{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"26"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"26"},{f:"2",t:0,d:1,i:"a",e:782,r:1,s:952,o:"26"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"26"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"26"},{f:"2",t:0,d:1,i:"d",e:118,r:1,s:15,o:"26"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"26"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"26"},{f:"2",t:0,d:1,i:"b",e:497,r:1,s:591,o:"26"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"26"},{f:"2",t:0,d:1,i:"c",e:193,r:1,s:19,o:"26"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"26"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">1. McKenney JM, Jones PH, Adamczyk MA et al. Comparison of the efficacy ofrosuvastatin versus atorvastatin, simvastatin, and pravastatin in achieving lipid goals: results from the STELLAR trial. Curr Med Res Opin. 2003;19(8):689-698.</div>",r:1,s:"<br>",o:"26"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"26"}],identifier:"25_hover",name:"25_hover",duration:1},"26_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"26"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"26"},{f:"2",t:0,d:1,i:"a",e:782,r:1,s:952,o:"26"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"26"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"26"},{f:"2",t:0,d:1,i:"d",e:118,r:1,s:15,o:"26"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"26"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"26"},{f:"2",t:0,d:1,i:"b",e:497,r:1,s:591,o:"26"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"26"},{f:"2",t:0,d:1,i:"c",e:193,r:1,s:19,o:"26"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"26"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">1. McKenney JM, Jones PH, Adamczyk MA et al. Comparison of the efficacy ofrosuvastatin versus atorvastatin, simvastatin, and pravastatin in achieving lipid goals: results from the STELLAR trial. Curr Med Res Opin. 2003;19(8):689-698.</div>",r:1,s:"<br>",o:"26"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"26"}],identifier:"26_hover",name:"26_hover",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"f",e:"0deg",r:1,s:"177deg",o:"5"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5"},{f:"2",t:1,d:0.4333334,i:"e",e:"1.000000",r:1,s:"0.000000",o:"15"},{f:"2",t:1,d:0.4333334,i:"f",e:"0deg",r:1,s:"-90deg",o:"15"},{f:"2",t:1.4333334,d:0.36666656,i:"e",e:"1.000000",r:1,s:"0.000000",o:"16"},{f:"2",t:1.4333334,d:0.36666656,i:"f",e:"0deg",r:1,s:"90deg",o:"16"},{f:"2",t:1.8,d:0.4333334,i:"e",e:"1.000000",r:1,s:"0.000000",o:"17"},{f:"2",t:1.8,d:0.4333334,i:"f",e:"0deg",r:1,s:"-90deg",o:"17"},{f:"2",t:2.2333333,d:0.36666656,i:"e",e:"1.000000",r:1,s:"0.000000",o:"20"},{f:"2",t:2.2333333,d:0.36666656,i:"f",e:"0deg",r:1,s:"-90deg",o:"20"},{f:"2",t:2.5999999,d:0.4000001,i:"e",e:"1.000000",r:1,s:"0.000000",o:"21"},{f:"2",t:2.5999999,d:0.4000001,i:"f",e:"0deg",r:1,s:"90deg",o:"21"},{f:"2",t:3,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"22"},{f:"2",t:3,d:1,i:"f",e:"0deg",r:1,s:"-180deg",o:"22"},{f:"2",t:3,d:1,i:"d",e:74,r:1,s:188,o:"22"},{f:"2",t:3,d:1,i:"c",e:201,r:1,s:511,o:"22"},{f:"2",t:4,d:0.36666679,i:"e",e:"1.000000",r:1,s:"0.000000",o:"23"},{f:"2",t:4,d:0.36666679,i:"f",e:"0deg",r:1,s:"180deg",o:"23"},{f:"2",t:4.3666668,d:0.099999905,i:"f",e:"-20deg",s:"0deg",o:"23"},{f:"2",t:4.4666667,d:0.33333349,i:"f",e:"0deg",s:"-20deg",o:"23"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:4.8000002},"24_hover":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"24"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"24"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"24"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"24"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"24"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"24"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"24"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"24"},{f:"2",t:0,d:1,i:"a",e:282,r:1,s:290,o:"24"},{f:"2",t:0,d:1,i:"c",e:193,r:1,s:19,o:"24"},{f:"2",t:0,d:1,i:"d",e:118,r:1,s:15,o:"24"},{f:"2",t:0,d:1,i:"b",e:247,r:1,s:247,o:"24"},{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"24"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">1. McKenney JM, Jones PH, Adamczyk MA et al. Comparison of the efficacy ofrosuvastatin versus atorvastatin, simvastatin, and pravastatin in achieving lipid goals: results from the STELLAR trial. Curr Med Res Opin. 2003;19(8):689-698.</div>",r:1,s:"<br>",o:"24"},{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"25"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"25"},{f:"2",t:0,d:1,i:"a",e:982,r:1,s:952,o:"25"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"25"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"25"},{f:"2",t:0,d:1,i:"d",e:118,r:1,s:15,o:"25"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"25"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"25"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"25"},{f:"2",t:0,d:1,i:"c",e:193,r:1,s:19,o:"25"},{f:"2",t:0,d:1,i:"b",e:591,r:1,s:591,o:"25"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"25"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">1. McKenney JM, Jones PH, Adamczyk MA et al. Comparison of the efficacy ofrosuvastatin versus atorvastatin, simvastatin, and pravastatin in achieving lipid goals: results from the STELLAR trial. Curr Med Res Opin. 2003;19(8):689-698.</div>",r:1,s:"<br>",o:"25"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"25"},{f:"2",t:0,d:1,i:"g",e:"#FFFFFF",r:1,s:"",o:"26"},{f:"2",t:0,d:1,i:"P",e:2,r:1,s:0,o:"26"},{f:"2",t:0,d:1,i:"a",e:982,r:1,s:952,o:"26"},{f:"2",t:0,d:1,i:"O",e:2,r:1,s:0,o:"26"},{f:"2",t:0,d:1,i:"N",e:2,r:1,s:0,o:"26"},{f:"2",t:0,d:1,i:"d",e:118,r:1,s:15,o:"26"},{f:"2",t:0,d:1,i:"D",e:"#FC9229",r:1,s:"#A0A0A0",o:"26"},{f:"2",t:0,d:1,i:"A",e:"#FC9229",r:1,s:"#A0A0A0",o:"26"},{f:"2",t:0,d:1,i:"b",e:591,r:1,s:591,o:"26"},{f:"2",t:0,d:1,i:"C",e:"#FC9229",r:1,s:"#A0A0A0",o:"26"},{f:"2",t:0,d:1,i:"c",e:193,r:1,s:19,o:"26"},{f:"2",t:0,d:1,i:"B",e:"#FC9229",r:1,s:"#A0A0A0",o:"26"},{f:"2",t:0,d:1,i:"w",e:"<div style=\"text-align: left;\">1. McKenney JM, Jones PH, Adamczyk MA et al. Comparison of the efficacy ofrosuvastatin versus atorvastatin, simvastatin, and pravastatin in achieving lipid goals: results from the STELLAR trial. Curr Med Res Opin. 2003;19(8):689-698.</div>",r:1,s:"<br>",o:"26"},{f:"2",t:0,d:1,i:"M",e:2,r:1,s:0,o:"26"}],identifier:"24_hover",name:"24_hover",duration:1}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"21":{o:"content-box",h:"barra3.png",x:"visible",a:578,q:"100% 100%",b:349,j:"absolute",r:"inline",c:351,k:"div",z:"7",d:76,aY:"2",e:"0.000000",f:"90deg"},"15":{o:"content-box",h:"texto1.png",x:"visible",a:90,q:"100% 100%",b:157,j:"absolute",r:"inline",c:264,k:"div",z:"3",d:140,aY:"1",e:"0.000000",f:"-90deg"},"26":{b:0,z:"12",K:"Solid",c:0,L:"Solid",d:0,aS:0,M:0,bD:"none",N:0,aT:0,O:0,g:"",aU:0,P:0,aV:0,j:"absolute",k:"div",A:"#000000",B:"#000000",Z:"break-word",r:"inline",C:"#000000",aM:"26_hover",D:"#000000",t:0,F:"left",G:"",aP:"pointer",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"16":{o:"content-box",h:"grafica.png",x:"visible",a:425,q:"100% 100%",b:139,j:"absolute",r:"inline",c:520,k:"div",z:"4",d:390,aY:"1",e:"0.000000",f:"90deg"},"4":{o:"content-box",h:"fondo.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"22":{o:"content-box",h:"barra4.png",x:"visible",a:576,q:"100% 100%",b:381,j:"absolute",r:"inline",c:511,k:"div",z:"8",d:188,aY:"1",e:"0.000000",f:"-180deg"},"5":{o:"content-box",h:"logo_gde.png",x:"visible",a:3,q:"100% 100%",b:-1,j:"absolute",r:"inline",c:504,k:"div",z:"2",d:131,aY:"2",e:"0.000000",f:"177deg"},"17":{o:"content-box",h:"barra1.png",x:"visible",a:572,q:"100% 100%",b:285,j:"absolute",r:"inline",c:268,k:"div",z:"5",d:44,aY:"1",e:"0.000000",f:"-90deg"},"23":{o:"content-box",h:"texto2.png",x:"visible",a:334,q:"100% 100%",b:556,j:"absolute",r:"inline",c:664,k:"div",z:"9",d:69,aY:"2",e:"0.000000",f:"180deg"},"24":{b:247,z:"10",K:"Solid",c:19,L:"Solid",d:15,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"24_hover",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:290,y:"preserve",J:"Solid"},"20":{o:"content-box",h:"barra2.png",x:"visible",a:574,q:"100% 100%",b:316,j:"absolute",r:"inline",c:348,k:"div",z:"6",d:75,aY:"2",e:"0.000000",f:"-90deg"},"25":{b:591,z:"11",K:"Solid",c:19,L:"Solid",d:15,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"",aU:6,P:0,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"25_hover",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"Solid",a:952,y:"preserve",J:"Solid"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide2_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

