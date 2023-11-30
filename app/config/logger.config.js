import log4js from 'log4js';
import jsonLayout from 'log4js-json-layout';

log4js.addLayout('json', jsonLayout);
log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'file', filename: './app/log/app.log', layout: { type: 'json' } },
  },
  categories: {
    default: { appenders: ['out'], level: 'info' },
    app: { appenders: ['app'], level: 'debug' },
  },
});

const logger = log4js.getLogger();

export default logger;