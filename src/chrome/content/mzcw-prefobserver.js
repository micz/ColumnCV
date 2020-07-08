"use strict";

// const { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

// cleidigh
// Services appears to be defined globally in TB64+ ?
// if (!miczColumnsWizard) {
// 	const { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");
// 	ChromeUtils.import("chrome://columnswizard/content/mzcw-overlay.jsm");
// 	Services.logStringMessage('import overlay');
// }


/**
 * @constructor
 *
 * @param {string} branch_name
 * @param {Function} callback must have the following arguments:
 *   branch, pref_leaf_name
 */
miczColumnsWizard.PrefListener = function (branch_name, callback) {
	// Keeping a reference to the observed preference branch or it will get
	// garbage collected.
	var prefService = Cc["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefService);
	this._branch = prefService.getBranch(branch_name);
	this._branch.QueryInterface(Ci.nsIPrefBranch);
	this._callback = callback;
};

miczColumnsWizard.PrefListener.prototype.observe = function (subject, topic, data) {
	if (topic === 'nsPref:changed')
		this._callback(this._branch, data);
};

/**
 * @param {boolean=} trigger if true triggers the registered function
 *   on registration, that is, when this method is called.
 */
miczColumnsWizard.PrefListener.prototype.register = function (trigger) {
	this._branch.addObserver('', this, false);
	if (trigger) {
		let that = this;
		this._branch.getChildList('', {}).
			forEach(function (pref_leaf_name) { that._callback(that._branch, pref_leaf_name); });
	}
};

miczColumnsWizard.PrefListener.prototype.unregister = function () {
	if (this._branch)
		this._branch.removeObserver('', this);
};

// Adding preferences listener
miczColumnsWizard.CWListener = new miczColumnsWizard.PrefListener(
	"extensions.ColumnsWizard.CustCols.def.",
	function (branch, name) { // dump("PrefListener call: "+name+"\n\r");
		var ObserverService = Cc["@mozilla.org/observer-service;1"].getService(Ci.nsIObserverService);
		// -- comment deprecated -- with the pref name AddCOLNAME, get the COLNAME all lowercase!!
		let cwColName = name;// .substr(3).toLowerCase();
		let cwCustColPref = miczColumnsWizard_CustCols.loadCustCols();
		// dump(">>>>>>>>>>>>> miczColumnsWizard.PrefListener: [PrefName|cwColName] "+name+"|"+cwColName+"\r\n");
		if (cwCustColPref[cwColName].enabled) {
			// checbox checked
			miczColumnsWizard_CustCols.addCustomColumn(cwCustColPref[cwColName], ObserverService);
			if (cwCustColPref[cwColName].isCustom !== false) {
				miczColumnsWizard.activateCustomDBHeader(cwCustColPref[cwColName].dbHeader);
			}
		} else {
			// checbox not checked
			miczColumnsWizard.removeCustomColumn(cwColName, ObserverService);
			// Don't do this, the customDBHeader could have been set by another extension
			/* if(cwCustColPref[cwColName].iscustom!=false){
			  miczColumnsWizard.deactivateCustomDBHeader(cwCustColPref[cwColName].DBHeader);
			}*/
		}
	}
);
miczColumnsWizard.CWListener.register(false);

miczColumnsWizard.CWListenerModActive = new miczColumnsWizard.PrefListener(
	"extensions.ColumnsWizard.CustCols.mod_active",
	function (branch, name) {
		miczColumnsWizard.initHeadersEditingMenu();
	}
);
miczColumnsWizard.CWListenerModActive.register(false);
