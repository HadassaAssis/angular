import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from 'src/app/classes';
import { ConectToFireBaseService } from 'src/app/conect-to-fire-base.service';

@Component({
  selector: 'dashboard-details-per-country',
  templateUrl: './details-per-country.component.html',
  styleUrls: ['./details-per-country.component.css']
})

export class DetailsPerCountryComponent implements AfterViewInit {

  displayedColumns: string[] = ['country', 'gander', 'seats', 'hobby','motor'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:ConectToFireBaseService) {
    this.dataSource = new MatTableDataSource(service.getDetailsPerCountry());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
