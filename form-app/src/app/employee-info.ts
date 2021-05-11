export interface EmployeeInfo {
    date:Date;
    orderNumber:string;
    installCrew:Array<String> 
    salesRep:string;
    salesRepContactNumber:string;
    custRefused:boolean;
    managerName?:string;
    managerNumber?:string;
    managerInstructions?:string;
    managerProceed?:boolean;
}
