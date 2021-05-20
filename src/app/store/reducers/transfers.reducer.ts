import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ITransfer} from '../../ITransfer';

// import {AuthActions, AuthActionTypes} from '../../../auth/store/actions';
// import {ImportRecordModel} from '../../../import/models/import-record.model';
// import {ImportRecordsModel} from '../../../import/models/import-records.model';
// import {EmployeeModel} from '../../models';
import {TransfersActionTypes, TransfersAction} from '../actions';

// import { HttpErrorResponse } from '@angular/common/http';

export interface TransfersState {
  transfers: ITransfer[];
}

export const initialState: TransfersState = {
  transfers: [],
};

export function reducer(state = initialState, action: TransfersAction): TransfersState {

  switch (action.type) {

    case TransfersActionTypes.LOAD_TRANSFERS:
      return loadTransfers(state, action.payload);
    case TransfersActionTypes.CREATE_NEW_TRANSFER:
      return createNewTransfer(state, action.payload);
    case TransfersActionTypes.UPDATE_TRANSFER:
      return updateTransfer(state, action.payload);
    case TransfersActionTypes.DELETE_TRANSFER:
      return deleteTransfer(state, action.payload);

    default:
      return state;
  }
}

function loadTransfers(state: TransfersState, payload: ITransfer[]): TransfersState {
  return {
    ...state,
    transfers: [...payload]
  };
}

function createNewTransfer(state: TransfersState, payload: ITransfer): TransfersState {
  return {
    ...state,
    transfers: [...state.transfers, payload]
  };
}

function updateTransfer(state: TransfersState, payload: ITransfer): TransfersState {
  debugger
  const transfers = [...state.transfers];
  const  foundIndex = transfers.findIndex(x => x.id === payload.id);
  transfers[foundIndex] = payload;
  return {
    ...state,
    transfers
  };
}

function deleteTransfer(state: TransfersState, payload: number): TransfersState {
  const transfers = [...state.transfers];
  const newState = transfers.filter(x => x.id !== payload);
  return {
    ...state,
    transfers: newState
  };
}

export const getTransfersState = createFeatureSelector('transfers');

export const getAllTransfers = createSelector(getTransfersState, (state: TransfersState) => state.transfers);

// export const getTransferByAccountHolder = createSelector(getTransfersState, (state: TransfersState, accountHolder: string) => {
//   return state.transfers.find((transfer: ITransfer) => {
//     return transfer.accountHolder === accountHolder;
//   });
// });
