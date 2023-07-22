export enum ETemplateType {
  DATABASE = 'database',
  CONTROLLER = 'controller',
}

export type TTemplate = {
  start: Record<string, unknown>;
  activity: Record<string, unknown>;
  end: Record<string, unknown>;
};

export type TLoggerTemplate = Record<ETemplateType, TTemplate>;

export const loggerTemplate: Record<ETemplateType, TTemplate> = {
  [ETemplateType.DATABASE]: {
    start: {
      connect: '[success] Connecting to database',
    },
    activity: {
      read: {
        success: '[success] Read data',
        error: '[error] Read data',
      },
      write: {
        success: '[success] Write data',
        error: '[error] Write data',
      },
      delete: {
        success: '[success] Delete data',
        error: '[error] Delete data',
      },
      update: {
        success: '[success] Update data',
        error: '[error] Error data',
      },
    },
    end: {
      disconnect: 'disconnected to database',
    },
  },
  [ETemplateType.CONTROLLER]: {
    start: {
      connect: '[success] Connecting to database',
    },
    activity: {
      read: {
        success: '[success] Read data',
        error: '[error] Read data',
      },
      write: {
        success: '[success] Write data',
        error: '[error] Write data',
      },
      delete: {
        success: '[success] Delete data',
        error: '[error] Delete data',
      },
      update: {
        success: '[success] Update data',
        error: '[error] Error data',
      },
    },
    end: {
      disconnect: 'disconnected to database',
    },
  },
};
