import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

export function forbiddenCharValidator(filterRe:RegExp): ValidatorFn{
    return (control:AbstractControl):{[key:string]:any}=>{
        const forbidden= filterRe.test(control.value);
        return forbidden ? {'forbiddenName': {value:control.value}}:null;
    };
}
@Directive({
    selector:'[forbiddenName]',
    providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi:true}]
})
export class ForbiddenValidatorDirective implements Validator{
    @Input () forbiddenName:string;
    validate(control:AbstractControl) :{[key:string]:any}{
        return this.forbiddenName?forbiddenCharValidator(new RegExp(this.forbiddenName,'i'))(control)
                            :null;
    }
}