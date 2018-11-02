import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const modules = [
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule

];

@NgModule({
    imports: modules,
    exports: modules
})

export class MaterialModule {
}
