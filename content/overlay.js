Components.utils.import("resource://reloadchrome/modules/repl.jsm");

function reloadChrome() {
    if (window.repl)
      window.repl.home();
    replStore.set(window.repl);
    try {
      Components.classes["@mozilla.org/chrome/chrome-registry;1"].
        getService(Components.interfaces.nsIXULChromeRegistry).reloadChrome();
    } catch(e) { alert(e); }
}
 
reloadChrome.doc = "Reload all chrome packages";
 

window.addEventListener("load", function(ev){
  var old_repl = replStore.get();
  if ((typeof window.repl == "undefined")&&(old_repl)) {
    window.repl = old_repl;
  }
}, false)
