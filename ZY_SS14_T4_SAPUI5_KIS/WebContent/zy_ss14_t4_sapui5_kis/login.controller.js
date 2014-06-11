sap.ui.controller("zy_ss14_t4_sapui5_kis.login", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zy_ss14_t4_sapui5_kis.login
*/
	onInit: function() {
		var oModel = new sap.ui.model.odata.ODataModel( "/proxy/http/i67lp1.informatik.tu-muenchen.de:8000/sap/opu/odata/sap/ZY_SS14_T4_SEGW_KIS_SRV/USER(Mandt='001',UserID=1)",false);
		sap.ui.getCore().setModel(oModel);
		
	},
	
	validateLogin: function(userid, password){
		
		var oModel = new sap.ui.model.odata.ODataModel( "proxy/http/i67lp1.informatik.tu-muenchen.de:8000/sap/opu/odata/sap/ZY_SS14_T4_SEGW_KIS_SRV",false);
		oModel.refreshSecurityToken(null, null);

		
		oModel.read("USER(Mandt='001',UserID="+userid+")",undefined, undefined, true, 
			// Funktion f�r erfolgreichen Request	
			function(response){
				if(password == response.Password){
					alert("Erfolgreich eingeloggt.")
					shell.setContent(sap.ui.getCore().byId("index")); 
				}
				else{
					alert("Es wurde ein falsches Passwort eingegeben.")
				}
			// Funktion falls Request fehlgeschlagen - Annahme: Request ist wegen falschem
			// Usernamen fehlgeschlagen
			},function(response){
				alert("Username nicht gefunden.")
			}
				 );
		
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zy_ss14_t4_sapui5_kis.login
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zy_ss14_t4_sapui5_kis.login
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zy_ss14_t4_sapui5_kis.login
*/
//	onExit: function() {
//
//	}

});