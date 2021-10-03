// import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Determina a opção que o computador vai escolher
  public resultadoComputador: string;

  //Retorna quem venceu
  public resultado: string;

  //Placar do jogo
  public resultados = { computador: 0, usuario:0 }

  //Determina a opção que o usuário vai escolher
  private resultadoUsuario: string;

  //Função para que o usuário possa fazer sua jogada
  public jogar(action: string): void{
    console.log('USUÁRIO:',action);
    this.resultadoUsuario = action;
    this.computador();
    this.calculaVencedor();
  }

  //Função para determinar o que o computador irá jogar,
  //ele irá escolher uma posição aleatória do vetor opcoes
  private computador(): void{
    const numeroAleatorio = Math.floor(Math.random() * 3);
    const opcoes: string[] = ['Pedra', 'Papel', 'Tesoura'];

    console.log('COMPUTADOR',opcoes[numeroAleatorio]);
    this.resultadoComputador = opcoes[numeroAleatorio];
  }

  //Função para determinar o vencedor do jogo dependendo das condições que forem verdadeiras ou falsa de acordo com a regra do jogo
  private calculaVencedor(): void{
    let pegaResultado = document.querySelector('h1');

    if (this.resultadoUsuario === this.resultadoComputador){
      this.resultado = 'Jogo Empatado';
      pegaResultado.style.color='yellow';
    }

    if (this.resultadoUsuario === 'Pedra' && this.resultadoComputador === 'Papel'){
      this.resultados.computador++;
      this.resultado = 'Que pena! O computador venceu.';
      pegaResultado.style.color='red';
    }

    if (this.resultadoUsuario === 'Pedra' && this.resultadoComputador === 'Pedra'){
      this.resultado = 'Jogo Empatado!';
      pegaResultado.style.color='yellow';
    }

    if (this.resultadoUsuario === 'Pedra' && this.resultadoComputador === 'Tesoura'){
      this.resultados.usuario++;
      this.resultado = 'PARABÉNS! Você venceu.';
      pegaResultado.style.color='green';
    }

    if (this.resultadoUsuario === 'Papel' && this.resultadoComputador === 'Pedra'){
      this.resultados.usuario++;
      this.resultado = 'PARABÉNS! Você venceu.';
      pegaResultado.style.color='green';
    }

    if (this.resultadoUsuario === 'Papel' && this.resultadoComputador === 'Tesoura'){
      this.resultados.computador++;
      this.resultado = 'Que pena! O computador venceu.';
      pegaResultado.style.color='red';
    }

    if (this.resultadoUsuario === 'Papel' && this.resultadoComputador === 'Papel'){
      this.resultado = 'Jogo Empatado';
      pegaResultado.style.color='yellow';
    }

    if (this.resultadoUsuario === 'Tesoura' && this.resultadoComputador === 'Papel'){
      this.resultados.usuario++;
      this.resultado = 'PARABÉNS! Você venceu.';
      pegaResultado.style.color='green';
    }

    if (this.resultadoUsuario === 'Tesoura' && this.resultadoComputador === 'Pedra'){
      this.resultados.computador++;
      this.resultado = 'Que pena! O computador venceu.';
      pegaResultado.style.color='red';
    }

    if (this.resultadoUsuario === 'Tesoura' && this.resultadoComputador === 'Tesoura'){
      this.resultado = 'Jogo Empatado';
      pegaResultado.style.color='yellow';
    }
  }
}
