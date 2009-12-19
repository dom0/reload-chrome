function reloadChrome() {
    try {
      Components.classes["@mozilla.org/chrome/chrome-registry;1"].
        getService(Components.interfaces.nsIXULChromeRegistry).reloadChrome();
    } catch(e) { alert(e); }
}
 
reloadChrome.doc = "Reload all chrome packages";
 
function debugPrefs(enabled) {
    try {
      var dbgPrefs = ["nglayout.debug.disable_xul_cache",
       "javascript.options.showInConsole",
                      "browser.dom.window.dump.enabled"];
 
      var prefs = Components.classes["@mozilla.org/preferences-service;1"]
          .getService(Components.interfaces.nsIPrefBranch);
 
      for each (let pname in dbgPrefs) {
prefs.setBoolPref(pname, enabled);
      }
    } catch(e) { alert(e); }
}
 
debugPrefs.doc = "Enable/Disable common debugging preferences";
