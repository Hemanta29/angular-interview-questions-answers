import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { UserInterface } from "./types/users.interface";

@Injectable()

export class UsersService{
    constructor(private http: HttpClient){}
    getUsers():Observable<UserInterface[]>{
       return this.http.get<UserInterface[]>("http://localhost:3004/users");
    }
}