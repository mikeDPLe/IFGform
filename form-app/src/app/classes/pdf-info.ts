export class PdfInfo {
    Date :string =""
    CrewName:string =""
    OrderNumber:string =""
    IFGSaleRepName: string =""
    IFGSaleRepContactNumber: string =""

    DoorHeight:string =""
    DoorWidth :string =""
    ProductHeight:string =""
    ProductWidth:string =""
    
    EmployeeSign1:string =""
    EmployeePrint1:string =""
    

    CustomerSign1:string =""
    CustomerPrint1:string =""

    OldDoorHeight:string =""
    OldDoorWidth :string =""
    OldProductHeight:string =""
    OldProductWidth:string =""

    EmployeeSign2:string =""
    EmployeePrint2:string =""

    CustomerSign2:string =""
    CustomerPrint2:string =""    

    CustomerSign3:string =""
    CustomerPrint3:string =""

    CustomerSign4:string =""
    CustomerPrint4:string =""

    CustomerSign5:string =""
    CustomerPrint5:string =""

    //optional fields on refuse
    ManagerInstructions?:string;
    ManagerName?:string;
    ManagerNumber?:string;
    ManagerProceed?:boolean

    InstallImages?:string[];
    RemoveImages?:string[];
}
