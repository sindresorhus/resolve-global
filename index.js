'use strict';
const path = require('path');
const globalDirs = require('global-dirs');

const resolveGlobal = moduleId => {
	try {
		return require.resolve(path.join(globalDirs.yarn.packages, moduleId));
	} catch (error) {
		return require.resolve(path.join(globalDirs.npm.packages, moduleId));
	}
};

module.exports = resolveGlobal;
module.exports.silent = moduleId => {
	try {
		return resolveGlobal(moduleId);
	} catch (error) {
		return undefined;
	}
};
