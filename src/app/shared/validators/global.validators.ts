import { FormControl, FormGroup, AbstractControl, ValidatorFn } from "@angular/forms";
import "../models/tsTool";
import * as _ from "lodash";
import * as moment from "moment";
import * as $ from "jquery";


interface ValidationResult {
    [key: string]: boolean;
}

export class GlobalValidator {

    static EmailValidator(control: FormControl): ValidationResult {
        var emailRegexp =
            /^(([^<>()\[\]\.,;:\s@\"ąćęłńóśźż]+(\.[^<>()\[\]\.,;:\s@\"ąćęłńóśźż]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"ąćęłńóśźż]+\.)+[^<>()[\]\.,;:\s@\"ąćęłńóśźż]{2,})$/i;
        if (control.value && !emailRegexp.test(control.value)) {
            console.log("Niepoprawny adres email");
            return { invalidEmail: true };
        }
    }

    static StringRequired(control: FormControl): ValidationResult {
        if (String.isBlank(control.value) || control.value.trim() === "") {
            console.log("Pole wymagane");
            return { fieldRequired: true };
        }
    }

    static IntNumber(control: FormControl): ValidationResult {
        var numberRegexp =
            /^\d+$/;
        if (control.value && !numberRegexp.test(control.value)) {
            console.log("Niepoprawny numer");
            return { invalidIntNumber: true };
        }
    }

    static FloatNumber(control: FormControl): ValidationResult {
        var numberRegexp =
            /^[+-]?\d+(\.\d+)?$/;
        if (control.value && !numberRegexp.test(control.value)) {
            console.log("Niepoprawny numer");
            return { invalidIntNumber: true };
        }
    }

    static RequiredByte(control: FormControl): ValidationResult {
        if (control.value && Number(control.value) === -1) {
            console.log("Wartość jest wymagana");
            return { byteRequired: true };
        }
    }

    static Dec2DigPrecisionNumber(control: FormControl): ValidationResult {
        var numberRegexp = /^[0-9]+(\.[0-9]{1,2})?$/;
        if (control.value && !numberRegexp.test(control.value)) {
            console.log("Niepoprawny numer");
            return { invalidDec2PNumber: true };
        }
    }

    static MatchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): ValidationResult => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    }

    static OneValueRequired(PPsa: Array<string>, OPAL: Array<string>, Asphalt: Array<string>) {
        return (group: FormGroup): ValidationResult => {
            let isValid = false;
            if (PPsa.length > 0) {
                _.each(PPsa, value => {
                    let ctrl = group.controls[value];

                    if (ctrl.value !== "-1" && ctrl.value != null) {
                        isValid = true;
                    }
                });

                if (!isValid) { return { PPSAValueRequired: true }; }
            }
            if (OPAL.length > 0) {
                isValid = false;
                _.each(OPAL, value => {
                    let ctrl = group.controls[value];

                    if (ctrl.value !== "-1" && ctrl.value != null) {
                        isValid = true;
                    }
                });

                if (!isValid) { return { OPALValueRequired: true }; }
            }

            if (Asphalt.length > 0) {
                isValid = false;
                _.each(Asphalt, value => {
                    let ctrl = group.controls[value];

                    if (ctrl.value !== "-1" && ctrl.value != null) {
                        isValid = true;
                    }
                });

                if (!isValid) { return { AsphaltValueRequired: true }; }
            }
        };
    }

    static OneSelectedValueRequired(selectedValue: Array<string>) {
        return (group: FormGroup): ValidationResult => {
            let isValid = false;

            if (selectedValue.length > 0) {
                isValid = false;
                _.each(selectedValue, value => {
                    let ctrl = group.controls[value];

                    if (ctrl.value !== "-1" && ctrl.value != null) {
                        isValid = true;
                    }
                });

                if (!isValid) { return { selectionRequired: true }; }
            }
        };
    }

    static StringDatesRange(fromDate: string, toDate: string) {
        return (group: FormGroup): ValidationResult => {
            let fromD = isNaN(Date.parse(group.controls[fromDate].value)) ? null : moment(new Date(group.controls[fromDate].value));
            let toD = isNaN(Date.parse(group.controls[toDate].value)) ? null : moment(new Date(group.controls[toDate].value));

            if (fromD && toD) {
                if (fromD > toD) {
                    return { invalidDateRange: true };
                }
            }
        };
    }

    static DatesRange(fromDate: string, toDate: string): ValidatorFn {
        return (group: FormGroup): ValidationResult | null => {
            let fromD = (group.controls[fromDate].value === undefined) ? null : group.controls[fromDate].value;
            let toD = (group.controls[toDate].value === undefined) ? null : group.controls[toDate].value;

            if (fromD && toD) {

                var dateFrom= moment(moment(fromD).format("YYYY-MM-DD"));
                var dateTo= moment(moment(toD).format("YYYY-MM-DD")) ;

                if (dateFrom.isAfter(dateTo) ) {
                    return { invalidDateRange: true };
                }
            }
            return null;
        };
    }

    static Range(from: string, to: string) {
        return (group: FormGroup): ValidationResult => {
            let fromR = group.controls[from].value !== undefined ? group.controls[from].value : null;
            let toR = group.controls[to].value !== undefined ? group.controls[to].value : null;

            if (fromR != null && fromR !== "" && toR != null && toR !== "") {
                let fromNum = Number(fromR);
                let toNum = Number(toR);
                if (Number(fromR) > Number(toR)) {
                    return { invalidRange: true };
                }
            }
        };
    }

    static DatesRangeNotPast(fromDate: string, toDate: string) {
        return (group: FormGroup): ValidationResult => {
            let fromD = (group.controls[fromDate].value === undefined) ? null : group.controls[fromDate].value;
            let toD = (group.controls[toDate].value === undefined) ? null : group.controls[toDate].value;

            if (fromD != null && toD != null) {
                if (fromD > toD) {
                    return { invalidDateRange: true };
                }
                if (moment(group.controls[fromDate].value).diff(moment(new Date().toJSON().slice(0, 10)), "days") < 0) {
                    return { invalidDateRange: true };
                }
            }
        };
    }

    static StringDate(control: FormControl): ValidationResult {
        var regexp = /^\d{4}-((0\d)|(1[012]))-(([012]\d)|3[01])$/;
        if (control.value && !regexp.test(control.value)) {
            console.log("Niepoprawna data");
            return { invalidDate: true };
        }
    }

    static StringValuesRange(fromValue: string, toValue: string) {
        return (group: FormGroup): ValidationResult => {
            let fromD = parseFloat(group.controls[fromValue].value);
            let toD = parseFloat(group.controls[toValue].value);

            if (fromD != null && toD != null) {
                if (fromD > toD) {
                    console.log("Bďż˝edny zakres wartoďż˝ci");
                    return { invalidValueRange: true };
                }
            }
        };
    }

    static StringDRDRVR(fromDate: string, toDate: string, fromDate2: string, toDate2: string, fromValue: string, toValue: string) {
        return (group: FormGroup): ValidationResult => {
            let fromD = isNaN(Date.parse(group.controls[fromDate].value)) ? null : moment(new Date(group.controls[fromDate].value));
            let toD = isNaN(Date.parse(group.controls[toDate].value)) ? null : moment(new Date(group.controls[toDate].value));

            if (fromD != null && toD != null) {
                if (fromD > toD) {
                    console.log("Bďż˝edny zakres dat");
                    return { invalidDateRange: true };
                }
            }

            let fromD2 = isNaN(Date.parse(group.controls[fromDate2].value)) ? null : moment(new Date(group.controls[fromDate2].value));
            let toD2 = isNaN(Date.parse(group.controls[toDate2].value)) ? null : moment(new Date(group.controls[toDate2].value));

            if (fromD2 != null && toD2 != null) {
                if (fromD2 > toD2) {
                    console.log("Bďż˝edny zakres dat");
                    return { invalidDateRange2: true };
                }
            }

            let fromD3 = parseFloat(group.controls[fromValue].value);
            let toD3 = parseFloat(group.controls[toValue].value);

            if (fromD3 != null && toD3 != null) {
                if (fromD3 > toD3) {
                    console.log("Bďż˝edny zakres wartoďż˝ci");
                    return { invalidValueRange: true };
                }
            }
        };
    }

    static Coordinate(control: FormControl): ValidationResult {
        let numberRegexp = /(^[0-9]{1,3})+(\.[0-9]{1,8})?$/;
        if (control.value && !numberRegexp.test(control.value)) {
            return { invalidCoordinate: true };
        }
    }

    static Quantity16p3s(control: FormControl): ValidationResult {
        var numberRegexp = /(^[0-9]{1,16})+([\,,\.][0-9]{1,3})?$/;
        if (String.isPresent(control.value) && (!numberRegexp.test(control.value) || parseFloat(control.value) < 0.001)) {
            return { invalidQuantity: true };
        }
    }

    static RequiredIf(check: boolean): ValidatorFn {
        return (control: FormControl): ValidationResult => {
            if (check && String.isBlank(control.value)) {
                return { required: true };
            }
        };
    }

    static FuellingQuantity(quantity: string) {
        return (group: FormGroup): ValidationResult => {
            let quant = group.controls[quantity].value;
            let cntrl = $("#IsNoLimit");
            if (String.isPresent(cntrl) && !cntrl.prop("checked")) {
                var numberRegexp = /(^[0-9]{1,16})+([\,,\.][0-9]{1,3})?$/;
                if (String.isBlank(quant) || !String.checkIsNumber(quant) || Number(quant) < 1) {
                    return { invalidQ: true };
                }
            }
        };
    }

    static AllowPastDateIf(allowPastDate: boolean): ValidatorFn {
        return (control: FormControl): ValidationResult => {
            if (!allowPastDate && String.isPresent(control.value)) {
                if (moment(control.value).diff(moment(new Date().toJSON().slice(0, 10)), "days") < 0) {
                    return { invalidD: true };
                }
            }
        };
    }

    static AllowPastDate(control: FormControl): ValidationResult {
        if (String.isPresent(control.value)) {
            if (moment(control.value).diff(moment(new Date().toJSON().slice(0, 10)), "days") < 0) {
                return { invalidD: true };
            }
        }
    }

}
