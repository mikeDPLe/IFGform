import { Directive, Input } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";
import SignaturePad from "signature_pad";


 export function   checkSignatureValidator(signaturepad:SignaturePad): ValidatorFn{
        return ( control: AbstractControl) : ValidationErrors | null => {
            console.log(control)
            if(!signaturepad.isEmpty()) return null
            else return {checkSignature:true}
        }
    
    }

