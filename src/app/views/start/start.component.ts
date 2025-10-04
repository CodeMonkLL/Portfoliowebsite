import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [AvatarModule, FieldsetModule, CardModule, NavbarComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent {}
