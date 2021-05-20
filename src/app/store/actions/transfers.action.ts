import {Action} from '@ngrx/store';
import {ITransfer} from '../../ITransfer';

export enum TransfersActionTypes {
    LOAD_TRANSFERS = '[Transfers List] Load Transfers',
    CREATE_NEW_TRANSFER = '[Transfer Add Component] Create New Transfer',
    UPDATE_TRANSFER = '[Transfer Edit Component] Update Transfer',
    DELETE_TRANSFER = '[Transfer Delete] Delete Transfer'
}

export class LoadTransfers implements Action {
    readonly type = TransfersActionTypes.LOAD_TRANSFERS;

    constructor(public payload: ITransfer[]) {}
}

export class CreateNewTransfer implements Action {
    readonly type = TransfersActionTypes.CREATE_NEW_TRANSFER;

  constructor(public payload: ITransfer) {}
}

export class UpdateTransfer implements Action {
  readonly type = TransfersActionTypes.UPDATE_TRANSFER;

  constructor(public payload: ITransfer) {}
}

export class DeleteTransfer implements Action {
  readonly type = TransfersActionTypes.DELETE_TRANSFER;

  constructor(public payload: string) {}
}

export type TransfersAction =
    LoadTransfers |
    CreateNewTransfer |
    UpdateTransfer |
    DeleteTransfer;
