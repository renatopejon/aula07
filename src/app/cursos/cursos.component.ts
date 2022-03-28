import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //Atributos
  public vetorCursos:Curso[];
  public curso:Curso;
  public id:number;

  constructor(private servico:CursosService) { }

  ngOnInit(): void {
    this.curso = new Curso();
    this.vetorCursos = this.servico.listar();
  }

}
