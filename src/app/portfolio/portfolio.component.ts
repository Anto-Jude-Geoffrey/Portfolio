import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
projects = [
    {
      name: 'QuickKart E-Commerce',
      description: 'Created just to demonstrate my knowledge on .Net Fullstack Development. Built using Angular, ASP.NET Core, Azure App Service, MSSQL and EF Core.',
      link: 'https://antojude-quickkartdb.azurewebsites.net',
      git:'https://github.com/Anto-Jude-Geoffrey'
    },
    {
      name: 'Canadian National Railways - ICH',
      description: `Canadian National Railways (CN) is the largest railway network in Canada, managing nationwide freight transportation and logistics.
      ICH Web Application enables CN drivers to track and update container deliveries in real-time, ensuring efficient and accurate shipment management.`,
      link: '',
      git:''
    }
  ];

  skills = [
    'Angular', 'TypeScript', 'HTML', '.NET 8', 'EF Core', 'Azure App Service', 'ASP.NET Core','Azure Devops CICD','C#','SQL Server'
  ];
}
