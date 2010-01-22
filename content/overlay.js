/* 
        #################################################################
        #   ReloadChrome                                                #
        #################################################################
        #   Author:     Domenico Martella                               #
        #   E-mail:     domenico.martella@alcacoop.it                   #
        #   Date:       2010-01-04                                      #
        #################################################################
        #                                                               #
        #       Copyright (C) 2010  - Alca Soc. Coop. (Lecce, IT)       #
        #       http://www.alcacoop.it                                  #
        #                                                               #
        # This program is free software; you can redistribute           #
        # it and/or modify it under the terms of the GNU General        #
        # Public License as published by the Free Software              #
        # Foundation; either version 3 of the License, or (at your      #
        # option) any later version.                                    #
        #                                                               #
        # This program is distributed in the hope that it will be       #
        # useful, but WITHOUT ANY WARRANTY; without even the            #
        # implied warranty of MERCHANTABILITY or FITNESS FOR A          #
        # PARTICULAR PURPOSE.  See the GNU General Public License       #
        # for more details.                                             #
        #                                                               #
        # You should have received a copy of the GNU General            #
        # Public License along with this program; if not, write to      #
        # the Free Software Foundation, Inc., 59 Temple Place -         #
        # Suite 330, Boston, MA  02111-1307, USA.                       #
        #################################################################
*/ 
      
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
