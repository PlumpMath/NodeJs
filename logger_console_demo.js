var log4js = require('log4js');
var lg = log4js.getLogger('myapplication');

lg.info('Application is running');
lg.warn('Module cannot be loaded');
lg.error('Saved data was error');
lg.fatal('Server could not process');
lg.debug('Some debug messages');
