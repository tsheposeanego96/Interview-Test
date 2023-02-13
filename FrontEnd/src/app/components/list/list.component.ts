import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  contacts = [];
  displayedColumns: string[] = ['name', 'power', 'strength', 'intelligence', 'stamina', 'action'];
  dataSource;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //   this.apiService.getContacts().then(
    //     resp => {
    //       //////console.log(resp);
    //       if (resp.contacts.length > 0) {
    //         this.contacts = resp.contacts
    //         this.dataSource = new MatTableDataSource<any>(this.contacts);
    //         // this.dataSource.paginator = this.paginator;
    //         // this.loading = false;
    //       }
    //     }
    //   ).then(
    //     error => {
    //       console.log(error);      
    //     }
    //   );
    this.contacts = [
      {
        'name': "Hulk",
        'power': "Strength from gamma radiation",
        'stats':
        {
          'strength': 5000,
          'stamina': 2500,
          'intelligence': 50
        }
      }
    ]

    this.dataSource = new MatTableDataSource<any>(this.contacts);

  }
  evolveHero(){
    
  }

}
