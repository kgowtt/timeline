import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { GitData } from '../interface/git-data';



import { ajax } from 'rxjs/ajax';
import { tap, map, catchError, filter } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';



@Injectable({
  providedIn: 'root'
})

export class GitService {


  constructor(private http: HttpClient) { }

  // getData(url: string): any{
  //   return this.http.get <any>(url).subscribe((data: any[]) => {
  //     // console.log(data);
  //   }, err => {
  //   });
  // }

  // user 的倉庫
  getUser(user: string): Observable<GitData[]>{
    const url = 'https://api.github.com/users/' + user + '/repos';
    return this.http.get<GitData[]>(url);
  }
  // 關注誰
  getUserByFollowing(user: string): Observable<any[]>{
    const url = 'https://api.github.com/users/' + user + '/following';
    return this.http.get<any[]>(url);
  }



  getTest(user: string): void{
    // const source = of('World').pipe(
    //   map(x => `Hello ${x} !`)
    // );
    // const data = source.subscribe( x =>{
    //     console.log(x);
    // });

    // -----------------------------------------------
    // const source = of(0, 1, 2, 3).pipe(
    //   map(x => x + 1 ),
    //   filter ( x => x > 1 )
    // );

    // const data = source.subscribe( x =>{
    //     console.log(x);
    // });

  }
}
