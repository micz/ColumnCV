var miczColumnsWizardCustCols={
	//Cc
  CreateDbObserver_Cc: {
    // Components.interfaces.nsIObserver
    observe: function(aMsgFolder, aTopic, aData)
                {
                 miczColumnsWizardCustCols.addCustomColumnHandler_Cc();
                }
  },

  columnHandler_Cc: {
     getCellText:         function(row, col) {
        //get the message's header so that we can extract the cc to field
        let hdr = gDBView.getMsgHdrAt(row);
        return hdr.getStringProperty("ccList");
     },
     getSortStringForRow: function(hdr) {return hdr.getStringProperty("ccList");},
     isString:            function() {return true;},
     getCellProperties:   function(row, col, props){},
     getRowProperties:    function(row, props){},
     getImageSrc:         function(row, col) {return null;},
     getSortLongForRow:   function(hdr) {return 0;}
  },
  
  addCustomColumnHandler_Cc: function() {
     gDBView.addColumnHandler("ccCol_cw", this.columnHandler_Cc);
  },
  //Cc - END
  
  addCustomColumn: function(coltype){
    let strBundle = Components.classes["@mozilla.org/intl/stringbundle;1"].getService(Components.interfaces.nsIStringBundleService);
    let _bundle = strBundle.createBundle("chrome://ColumnsWizard/locale/overlay.properties");

    switch(coltype){
      case "cc":
          if(document.getElementById("ccCol_cw"))break;
          let labelString = _bundle.GetStringFromName('ColumnsWizardCc.label');
          let tooltipString = _bundle.GetStringFromName('ColumnsWizardCcDesc.label');
          let ccCol = document.createElement("treecol");
          ccCol.setAttribute("id","ccCol_cw");
          ccCol.setAttribute("persist","hidden ordinal width");
          ccCol.setAttribute("hidden","true");
          ccCol.setAttribute("flex","4");
          ccCol.setAttribute("label",labelString);
          ccCol.setAttribute("tooltiptext",tooltipString);
          let element = document.getElementById("dateCol");
          element.parentNode.appendChild(ccCol);
        break;
      default: break;
    }    
  },
  
    removeCustomColumn: function(coltype){
    switch(coltype){
      case "cc":
          let element = document.getElementById("ccCol_cw");
          if(element) element.parentNode.removeChild(element);
        break;
      default: break;
    }    
  }, 
};
