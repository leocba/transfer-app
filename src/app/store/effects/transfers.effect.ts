// import {HttpErrorResponse} from '@angular/common/http';
// import {Injectable} from '@angular/core';
// import {Actions, Effect, ofType} from '@ngrx/effects';
// import {Action, Store} from '@ngrx/store';
// import {Observable, of, forkJoin, defer, Subject} from 'rxjs';
// import {catchError, exhaustMap, map, mergeMap, withLatestFrom, switchMap, finalize, tap} from 'rxjs/operators';
// // import {UserImportResultModel} from '../../../api/models/userImportResult.model';
// import {TransferService} from '../../services/transfer.service';
// // import {ProxyService} from '../../../api/services/proxy.service';
// // import {AuthResponseModel} from '../../../auth/models';
// // import {AssignEmployeeToCourseFailure} from '../../../courses/store/actions/courses.action';
// // import {CoursesState} from '../../../courses/store/reducers/courses.reducer';
// // import {XmlParserService} from '../../../parser/services/xml-parser.service';
// // import {EmployeeModel} from '../../models';
// // import {EmployeeUpdateModel} from '../../models/employee-update.model';
// import {
//     TransfersActionTypes,
//     LoadTransfers
//     } from '../actions';
// import {TransfersState} from '../reducers';
// // import { CourseSelectionModel } from 'src/app/courses/models/course-selection.model';
// // import { CourseAssignmentModel } from 'src/app/courses/models/course-assignment.model';
//
// @Injectable()
// export class EmployeeListEffects {
//
//     constructor(
//         private actions$: Actions,
//         private service: TransferService,
//         // private proxy: ProxyService,
//         // private transferStore: Store<TransfersState>
//         // private coursesStore: Store<CoursesState>
//     ) {}
//
//
//     // @Effect()
//     // loadEmployees$ = this.actions$.pipe(
//     //     ofType(TransfersActionTypes.LOAD_TRANSFERS),
//     //     exhaustMap(() => {
//     //         return of(new LoadTransfers(this.service.getAll()));
//     //         }),
//     //     catchError(error => {
//     //         console.error(error);
//     //         return error;
//     //     })
//     // );
//
//     // @Effect()
//     // createNewEmployee$ = this.actions$.pipe(
//     //     ofType(EmployeeListActionTypes.CREATE_NEW_EMPLOYEE),
//     //     exhaustMap((data: { payload: { employee: EmployeeModel, courseAssignmentIds?: string[] } }) => {
//     //         return this.api
//     //             .createNewEmployee(data.payload.employee).pipe(
//     //                 exhaustMap((xml: string) => {
//     //                     let userImportResult: UserImportResultModel = XmlParserService.getUserImportResult(xml);
//     //
//     //                     // check if ihe the api request was successful or not
//     //                     if (userImportResult.successful) {
//     //
//     //                         // check if global warnings exist or not
//     //                         if (userImportResult.globalWarnings && userImportResult.globalWarnings.length > 0) {
//     //                             // when there is a warning "wrong usergroup" an employee with the same username already exists in another client
//     //                             console.error('This email is already exist in another client!');
//     //                             return of(new CreateNewEmployeeFailure('wrong usergroup'));
//     //                         }
//     //
//     //                         // check if a new user was created by the api backend
//     //                         else if (userImportResult.newUsers && userImportResult.newUsers > 0 || userImportResult.restoredUsers) {
//     //                             return this.api.getUserIdByUsername(data.payload.employee.login).pipe(
//     //                                 exhaustMap((res: AuthResponseModel) => {
//     //                                         return of(new CreateNewEmployeeSuccess({
//     //                                             employee: {
//     //                                                 ...data.payload.employee,
//     //                                                 id: res.id[0].id
//     //                                             },
//     //                                             importResult: userImportResult
//     //                                         }));
//     //
//     //                                 })
//     //                             )
//     //                         }
//     //                         // otherwise exit with a failure
//     //                         else {
//     //                             return of(new CreateNewEmployeeFailure('unknown error'));
//     //                         }
//     //                     }
//     //                 }),
//     //                 catchError((error) => {
//     //                     console.error(error);
//     //                     return of(new CreateNewEmployeeFailure(error));
//     //                 })
//     //             )
//     //     })
//     // );
//
//     // @Effect()
//     // updateEmployee$ = this.actions$.pipe(
//     //     ofType(EmployeeListActionTypes.UPDATE_EMPLOYEE),
//     //     exhaustMap((data: EmployeeUpdateModel) => {
//     //         return this.api.updateEmployee(data.payload.employee).pipe(
//     //             exhaustMap(() => {
//     //                 return EmployeeListEffects.composeUpdateEmployeeSuccessAction(data);
//     //             }),
//     //             catchError((error: HttpErrorResponse) => {
//     //                 console.error(error);
//     //                 if (error.error.includes('E0007')) return of(new UpdateEmployeeFailure('E0007'));
//     //                 else return of(new UpdateEmployeeFailure(error));
//     //             })
//     //         );
//     //     })
//     // )
//     //
//     // @Effect()
//     // deactivateEmployee$ = this.actions$.pipe(
//     //     ofType(EmployeeListActionTypes.DEACTIVATE_EMPLOYEE),
//     //     exhaustMap((data: EmployeeUpdateModel) => {
//     //         return this.api.updateEmployee(data.payload.employee).pipe(
//     //             exhaustMap(() => {
//     //                 return of(new UpdateEmployeeSuccess({
//     //                     employee: data.payload.employee,
//     //                     deactivated: true
//     //                 }))
//     //             }),
//     //             catchError((error: HttpErrorResponse) => {
//     //                 console.log(error);
//     //                 return of(new UpdateEmployeeFailure(error))
//     //             })
//     //         )
//     //     })
//     // )
//     //
//     // @Effect()
//     // activateEmployee$ = this.actions$.pipe(
//     //     ofType(EmployeeListActionTypes.ACTIVATE_EMPLOYEE),
//     //     exhaustMap((data: EmployeeUpdateModel) => {
//     //         return this.api.getUserInformation(data.payload.employee.id).pipe(
//     //             exhaustMap((xml: string) => {
//     //                 let employee = XmlParserService.getEmployeesFullInformation(xml);
//     //                 employee.activated = true;
//     //                 return this.api.updateEmployee(employee).pipe(
//     //                     exhaustMap(() => {
//     //                         return of(new UpdateEmployeeSuccess({
//     //                             employee: employee,
//     //                             activated: true
//     //                         }))
//     //                     })
//     //                 )
//     //             }),
//     //             catchError((error: HttpErrorResponse) => {
//     //                 console.error(error);
//     //                 return error.error.includes('E0007') ? of(new UpdateEmployeeFailure('E0007')) : of(new UpdateEmployeeFailure(error));
//     //             })
//     //         )
//     //     })
//     // )
//     //
//     // @Effect()
//     // importEmployees$ = this.actions$.pipe(
//     //     ofType(EmployeeListActionTypes.IMPORT_EMPLOYEES),
//     //     withLatestFrom(this.employeesStore.select(getAllRecordsForImport)),
//     //     switchMap(([data, allRecords]) => {
//     //         let action: { payload: Object } = data;
//     //         let validEmployees = allRecords.validRecords;
//     //         let pendingEmployees = allRecords.pendingRecords;
//     //         let existingRecords = allRecords.existingRecords;
//     //         let employeesArray;
//     //         if (action.payload) {
//     //             let employeesToReactivate = pendingEmployees.filter(e => !e.activated || e.deleted);
//     //             employeesArray = [...employeesToReactivate];
//     //         } else {
//     //             employeesArray = [...validEmployees, ...pendingEmployees];
//     //         }
//     //         employeesArray.map(rec => {
//     //         rec.deleted = false;
//     //             rec.activated = true;
//     //             return rec;
//     //         });
//     //         return this.api.importEmployees(employeesArray)
//     //         .pipe(
//     //             exhaustMap((xml: string) => {
//     //                 let userImportResult: UserImportResultModel = XmlParserService.getUserImportResult(xml);
//     //
//     //                 if (userImportResult.successful) {
//     //
//     //                     if (
//     //                         userImportResult.globalWarnings &&
//     //                         userImportResult.globalWarnings.length > 0 &&
//     //                         userImportResult.globalWarnings.indexOf('wrong usergroup') > -1
//     //                     ) {
//     //                         // get emails that could not be created during the import because they already exist in another client
//     //                         let employeesAfterImport: string[] = [];
//     //                         return this.api.getAllEmployees().pipe(
//     //                             exhaustMap((xml: string) => {
//     //                                 employeesAfterImport = XmlParserService.getUsernamesOfEmployees(xml);
//     //
//     //                                 validEmployees.forEach(employee => {
//     //                                     if (!employeesAfterImport.includes(employee.email)) userImportResult.notUniqueEmails.push(employee.email);
//     //                                 });
//     //
//     //                                 return of(this.composeImportEmployeesSuccess({validEmployees, pendingEmployees, userImportResult, existingRecords}));
//     //                             }),
//     //                             catchError(error => {
//     //                                 console.error(error);
//     //                                 return of(new LoadEmployeesFailure(error));
//     //                             })
//     //                         );
//     //                     } else if (userImportResult.newUsers > 0 || userImportResult.updatedUsers > 0 || userImportResult.restoredUsers > 0) {
//     //                         if (action.payload) return of(new ImportDeactivatedEmployeesSuccess({ reactivatedEmployees: employeesArray}));
//     //                         return of(this.composeImportEmployeesSuccess({validEmployees, pendingEmployees, userImportResult, existingRecords}));
//     //
//     //                     } else if (action.payload) return of(new ImportDeactivatedEmployeesSuccess({ reactivatedEmployees: employeesArray}));
//     //                     else {
//     //                         return of(new ImportEmployeesFailure({
//     //                             importResult: userImportResult
//     //                         }));
//     //                     }
//     //                 } else {
//     //                     return of(new ImportEmployeesFailure({
//     //                         importResult: {
//     //                             ...userImportResult,
//     //                         existedUsers: existingRecords.length
//     //                         }
//     //                     }));
//     //                 }
//     //             }),
//     //             catchError((error: HttpErrorResponse) => {
//     //                 console.error(error);
//     //                 return of(new ImportEmployeesFailure({
//     //                     importResult: null,
//     //                     httpError: error
//     //                 }));
//     //             })
//     //         )
//     //     })
//     // );
//     //
//     // /**
//     //  * Composes the action that is dispatched after an employee was successfully
//     //  * updated.
//     //  *
//     //  * @param {EmployeeUpdateModel} data
//     //  * @return {Observable<Action>}
//     //  */
//     // private static composeUpdateEmployeeSuccessAction(data: EmployeeUpdateModel): Observable<Action> {
//     //     return of(new UpdateEmployeeSuccess({
//     //         employee: data.payload.employee
//     //     }))
//     // }
//     //
//     // /**
//     //  *  Composes the action, that is dispatched after number of employees were successfully imported.
//     //  * @param results
//     //  */
//     // private composeImportEmployeesSuccess(results) {
//     //     return new ImportEmployeesSuccess({
//     //                 employees: [...results.validEmployees, ...results.pendingEmployees],
//     //                 importResult: results.userImportResult,
//     //                 existedUsers: results.existingRecords.length
//     //             });
//     // }
//     //
//     // /**
//     //  * Composes the action that is dispatched after an employee could not be
//     //  * assigned to a course during the employee update procedure.
//     //  *
//     //  * If we get an error code 'E0304', which means that the employee was
//     //  * already assigned to the course, we consider it as a success and just pass
//     //  * it through.
//     //  *
//     //  * @param {EmployeeUpdateModel} data
//     //  * @param {HttpErrorResponse} error
//     //  * @return {Observable<Action>}
//     //  */
//     // private static composeUpdateEmployeeCourseAssignmentFailureAction(data: EmployeeUpdateModel, error: HttpErrorResponse): Observable<Action> {
//     //     if (error.status !== 200 && XmlParserService.getCourseAssignmentErrorCode(error.error) === 'E0304') {
//     //         return EmployeeListEffects.composeUpdateEmployeeSuccessAction(data);
//     //     } else if (error.status !== 200) {
//     //         return of(new AssignEmployeeToCourseFailure(error));
//     //     }
//     // }
//     //
//     // /**
//     //  * Checks whether the update of user information was successful and only a
//     //  * single user was updated.
//     //  *
//     //  * @param {UserImportResultModel} userImportResult
//     //  * @return {boolean}
//     //  */
//     // private static updateSuccessful(userImportResult: UserImportResultModel): boolean {
//     //     return userImportResult.successful && userImportResult.updatedUsers === 1
//     // }
//     //
//     // /**
//     //  * Filters out the courses that an employee is already assigned to.
//     //  *
//     //  * @param {EmployeeUpdateModel} data
//     //  * @param {string[]} initialCourseAssignmentIds
//     //  * @return {string[]}
//     //  */
//     // private getNewCourseAssignments(data: EmployeeUpdateModel, initialCourseAssignmentIds: string[]): string[] {
//     //     return data.payload.courseAssignmentIds.filter((courseAssignmentId: string) => {
//     //         for (let i = 0; i < initialCourseAssignmentIds.length; i++) {
//     //             if (initialCourseAssignmentIds[i] === courseAssignmentId) return false;
//     //         }
//     //         return true;
//     //     });
//     // }
//     //
//     // /**
//     //  * Makes a list of course assignment (course booking) requests
//     //  *That is used to make a forkJoin of these requests of new and existing users
//     //  *
//     //  * @param {CourseSelectionModel[]} coursesAndUsers - list of courses and users to be booked
//     //  * @param {string[]} newUsersIds - id's of new users
//     //  */
//     // private makeRequestsList(coursesAndUsers: CourseSelectionModel[], newUsersIds?: string[]): Observable<Object>[] {
//     //     let requests: Observable<Object>[] = [];
//     //
//     //     coursesAndUsers.forEach(course => {
//     //         course.existingUsersIds.forEach(userId => {
//     //             requests.push(this.proxy.assignUserToCourse(course.courseId, userId));
//     //         });
//     //         if (newUsersIds && newUsersIds.length > 0) newUsersIds.forEach(userId => {
//     //             requests.push(this.proxy.assignUserToCourse(course.courseId, userId));
//     //         });
//     //     });
//     //
//     //     return requests;
//     // };
//     //
//     // /**
//     //  * Counts a number of errors while course booking process
//     //  * After course booking we make new request to the backend to get all info about all courses
//     //  * Then this method compares courses participants and users, that should be assigned
//     //  * If there are dissimilarities among users, error counter increments
//     //  *
//     //  * @param {CourseSelectionModel[]} coursesAndUsers - list of courses and users to be booked
//     //  * @param {CourseAssignmentModel[]} courseAssignments - all info about courses (comes from backend)
//     //  * @param {string[]} newUsersIds - id's of new users
//     //  * @param {stringp[]} notUniqueEmails - array of emails, that exist in another admin user
//     //  */
//     // private errorCounter(coursesAndUsers: CourseSelectionModel[], courseAssignments: CourseAssignmentModel[], newUsersIds?: string[], notUniqueEmails?: string[]): void {
//     //     coursesAndUsers.forEach( course => {
//     //         let errorCounter = 0;
//     //         let selectedCourse = courseAssignments.find( courseFromApi => course.courseId == courseFromApi.id);
//     //         if (newUsersIds)  {
//     //             newUsersIds.forEach(id => {
//     //                 let participantsIds = selectedCourse.participants.map(e => e.userId);
//     //                 if (!participantsIds.includes(id)) errorCounter++;
//     //             });
//     //         }
//     //         if (notUniqueEmails) {
//     //             errorCounter += notUniqueEmails.length;
//     //         }
//     //         course.existingUsersIds.forEach(id => {
//     //             let participantsIds = selectedCourse.participants.map(e => e.userId);
//     //             if (!participantsIds.includes(id)) errorCounter++;
//     //         })
//     //         course.errors = errorCounter;
//     //     });
//     // }
//     //
//     // /**
//     //  * Function returns forkJoin with course assignments after import.
//     //  * It is used in a few places in importEmployeesWithCourseAssignments effect
//     //  *
//     //  * @param {Observable[]} requests - Observables with HTTP requests for courses booking
//     //  * @param {CourseSelectionModel[]} coursesAndUsers - selected courses with info (id, participants, etc.)
//     //  * @param {EmployeeModel[]} validEmployees - new employees for import
//     //  * @param {EmployeeModel[]} pendingEmployees - updated employees for import
//     //  * @param {ImportRecordModel[]} existingRecords - existing employees
//     //  * @param {string[]} newUsersIds - id's of new users
//     //  */
//     // // refactor later
//     // // private returnValue(requests, props) {
//     // //     let { coursesAndUsers, userImportResult, newUsersIds } = props;
//     // //     return this.forkJoinWithProgress(requests).pipe(
//     // //         take(requests.length), // Taking only first "requests.length" results, to leave observable after that
//     // //         mergeMap(([finalResult, progress]) => merge(
//     // //             progress.pipe(
//     // //                 // Saving the level of courses assignment progress in order to show it in preview (for progress bar)
//     // //                 tap((value: number) => this.coursesStore.dispatch(new SetRequestsProgress({val: value, len: requests.length}))),
//     // //                 ignoreElements()
//     // //             ),
//     // //             finalResult
//     // //         )),
//     // //         switchMap(() => this.proxy.getAllCourseAssignments()),
//     // //         switchMap((courseAssignments) => {
//     // //             // Calculating the number of errors while course assignment
//     // //             this.errorCounter(coursesAndUsers, courseAssignments, newUsersIds, userImportResult.notUniqueEmails);
//     // //             this.coursesStore.dispatch(new ResetRequestsProgress());
//     // //             return of(new CoursesAssignmentSuccess());
//     // //         }),
//     // //         catchError(error => {
//     // //             console.error(error);
//     // //             // We make another getAllCoursesAssignments request to calculate the number
//     // //             // of assigned courses and number of errors (that is needed for user report)
//     // //             return this.proxy.getAllCourseAssignments().pipe(
//     // //                 exhaustMap((courseAssignments) => {
//     // //                     this.errorCounter(coursesAndUsers, courseAssignments, newUsersIds);
//     // //                     return of(new AssignEmployeeToCourseFailure(error));
//     // //                 }),
//     // //                 // This catchError is needed if in process of calculating the number of errors
//     // //                 // api is not responding
//     // //                 catchError(error => {
//     // //                     console.error(error);
//     // //                     return of(new LoadCourseAssignmentsFailure(error));
//     // //                 })
//     // //             );
//     // //         }));
//     // // }
//     //
//     // /**
//     //  *  Calculates the progress of http requests and returns the percentage
//     //  *
//     //  * @param arrayObs array of http requests
//     //  */
//     // private forkJoinWithProgress(arrayObs){
//     //     return defer(() => {
//     //         let counter = 0;
//     //         const progress$ = new Subject();
//     //
//     //         const modifiedArrayObs = arrayObs.map(
//     //             (item) => item.pipe(
//     //                 finalize(() => {
//     //                     const value = ++counter;
//     //                     // const percentValue = ++counter * 100 / arrayObs.length;
//     //                     progress$.next(value);
//     //                 })
//     //             )
//     //         );
//     //
//     //         const finalResult$ = forkJoin(modifiedArrayObs).pipe(
//     //             tap(() => {
//     //                 progress$.next(arrayObs.length);
//     //                 progress$.complete();
//     //             })
//     //         );
//     //
//     //         return of([finalResult$, progress$.asObservable()])
//     //     });
//     //
//     // }
//
// }
