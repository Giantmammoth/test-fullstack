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
    return `[${timestamp}] [${level}] [ai-service] ${message}${argsStr}`;
  }

  info(message: string, ...args: unknown[]): void {
    // eslint-disable-next-line no-console
    console.info(this.formatMessage(LogLevel.INFO, message, ...args));
  }

  warn(message: string, ...args: unknown[]): void {
    // eslint-disable-next-line no-console
    console.warn(this.formatMessage(LogLevel.WARN, message, ...args));
  }

  error(message: string, ...args: unknown[]): void {
    // eslint-disable-next-line no-console
    console.error(this.formatMessage(LogLevel.ERROR, message, ...args));
  }
}

export const logger = new Logger();

