const htmlStyleLog = [];

const addLog = (name: string, method: string) => {
	htmlStyleLog.push({ name, method });
};

export const addHtmlClass = (classname: string) => {
	addLog(classname, 'addClass');
	document.documentElement.classList.add(classname);
};

export const removeHtmlClass = (classname: string) => {
	addLog(classname, 'removeClass');
	document.documentElement.classList.remove(classname);
};
