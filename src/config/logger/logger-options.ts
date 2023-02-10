export const loggerOptions = {
  pinoHttp: {
    transport:
      process.env.NODE_ENV !== 'production'
        ? {
            target: 'pino-pretty',
            options: {
              messageKey: 'message',
            },
          }
        : undefined,
    messageKey: 'message',
    autoLogging: false,
    serializers: {
      req({ method, url }) {
        return { method, url };
      },
      res() {
        return undefined;
      },
    },
  },
};
