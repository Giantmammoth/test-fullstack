export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

class Logger {
  private formatMessage(level: LogLevel, message: string, ...args: unknown[]): string {
    const timestamp = new Date().toISOString();
    const argsStr = args.length > 0 ? ` ${JSON.stringify(args)}` : '';
    return `[${timestamp}] [${level}] ${message}${argsStr}`;
  }

  debug(message: string, ...args: unknown[]): void {
    if (process.env.LOG_LEVEL === 'DEBUG' || !process.env.LOG_LEVEL) {
      console.debug(this.formatMessage(LogLevel.DEBUG, message, ...args));
    }
  }

  info(message: string, ...args: unknown[]): void {
    console.info(this.formatMessage(LogLevel.INFO, message, ...args));
  }

  warn(message: string, ...args: unknown[]): void {
    console.warn(this.formatMessage(LogLevel.WARN, message, ...args));
  }

  error(message: string, ...args: unknown[]): void {
    console.error(this.formatMessage(LogLevel.ERROR, message, ...args));
  }
}

export const logger = new Logger();
