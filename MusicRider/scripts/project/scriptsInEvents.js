


const scriptsInEvents = {

	async E_loader_Event9_Act1(runtime, localVars)
	{
		function getFromStorage(name) {
		    try {
		        let val = localStorage.getItem(name);
		        return val;
		    } catch (e) {}
		}
		
		runtime.globalVars.Saved = getFromStorage("GameSave");
	},

	async E_sys_Event24_Act1(runtime, localVars)
	{
		function setToStorage(name, val) {
		    try {
		        localStorage.setItem(name, val);
		    } catch (e) {}
		}
		setToStorage("GameSave", runtime.globalVars.Saved);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

