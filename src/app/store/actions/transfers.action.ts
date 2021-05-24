import {Action} from '@ngrx/store';
import {ITransfer} from '../../ITransfer';
import {HttpErrorResponse} from '@angular/common/http';
// import {IHttpError} from "../../IHttpError";

export enum TransfersActionTypes {
    LOAD_TRANSFERS = '[Transfers List] Load Transfers',
    LOAD_TRANSFERS_SUCCESS = '[Transfers List] Load Transfers Success',
    LOAD_TRANSFERS_FAILURE = '[Transfers List] Load Transfers Failure',
    CREATE_NEW_TRANSFER = '[Transfer Add Component] Create New Transfer',
    UPDATE_TRANSFER = '[Transfer Edit Component] Update Transfer',
    DELETE_TRANSFER = '[Transfer Delete] Delete Transfer'
}

export class LoadTransfers implements Action {
  readonly type = TransfersActionTypes.LOAD_TRANSFERS;
}

export class LoadTransfersSuccess implements Action {
    readonly type = TransfersActionTypes.LOAD_TRANSFERS_SUCCESS;

    constructor(public payload: ITransfer[]) {}
}

export class LoadTransfersFailure implements Action {
  readonly type = TransfersActionTypes.LOAD_TRANSFERS_FAILURE;

  constructor(public payload: HttpErrorResponse) {}
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
    LoadTransfersSuccess |
    LoadTransfersFailure |
    CreateNewTransfer |
    UpdateTransfer |
    DeleteTransfer;
