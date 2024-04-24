import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from "./components/main-header/main-header.component";
import { HeaderTopComponent } from "./components/header-top/header-top.component";
import { MainFooterComponent } from "./components/main-footer/main-footer.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MainHeaderComponent, HeaderTopComponent, MainFooterComponent,CommonModule]
})
export class AppComponent implements OnInit {
  isLoading: boolean = true; // Initially show loader

  ngOnInit() {
    // Simulate loading data with setTimeout
    setTimeout(() => {
      this.isLoading = false; // Hide loader after data is loaded
    }, 700); // Replace with actual data loading logic
  }

  title = 'whiztek';
}
