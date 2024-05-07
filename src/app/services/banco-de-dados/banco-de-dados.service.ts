import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserInfo, MovieCadastro, WatchedMovie, WatchlistMovie, Movie, MovieDetails } from '../../interfaces/interface';
import { MovieService } from '../movies/movie.service';

@Injectable({
  providedIn: 'root'
})
export class BancoDeDadosService {
  private baseUrl = 'https://asp-net-api-filmes.onrender.com/api';
  private token = ''; // Substitua pelo seu token fixo
  userId: number = 0;

  constructor(private http: HttpClient) {
    const storageUser = localStorage.getItem('userInfo');
    type infoUser = {
      id: number;
      nome: string;
      token: string;
    }
    if (storageUser) {
      const infoUser: infoUser = JSON.parse(storageUser);
      console.log(infoUser);

      this.token = infoUser?.token;
    }
  }

  cadastrarUsuario(usuario: any): Observable<any> {
    const url = `${this.baseUrl}/Cadastro`;
    return this.http.post<any>(url, usuario);
  }

  fazerLogin(loginData: any): Observable<any> {
    const url = `${this.baseUrl}/Login`;
    return this.http.post<any>(url, loginData);
  }

  obterInformacoesUsuario(userId: number): Observable<UserInfo> {
    const url = `${this.baseUrl}/Usuario/Infos/${userId}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<UserInfo>(url, { headers });
  }

  adicionarFilmeVisto(userId: number, filme: MovieCadastro): Observable<any> {
    const url = `${this.baseUrl}/Visto/Adicionar/${userId}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(url, filme, { headers });
  }

removerFilmeVisto(userId: number, Id: number): Observable<any> {
  const url = `${this.baseUrl}/Visto/Deletar/${userId}/${Id}`;
  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  return this.http.delete<any>(url, { headers }).pipe(
    catchError((error) => {
      console.error(`Erro ao remover filme da lista de assistidos: ${error.message}`);
      return throwError(() => new Error('Erro ao remover filme da lista de assistidos. Verifique os parâmetros e tente novamente.'));
    })
  );
}

  adicionarFilmeWatchlist(userId: number, filme: MovieCadastro): Observable<any> {
    const url = `${this.baseUrl}/Watchlist/Adicionar/${userId}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(url, filme, { headers });
  }

removerFilmeWatchlist(userId: number, Id: number): Observable<any> {
  const url = `${this.baseUrl}/Watchlist/Deletar/${userId}/${Id}`;
  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  return this.http.delete<any>(url, { headers }).pipe(
    catchError((error) => {
      console.error(`Erro ao remover filme da lista de desejos: ${error.message}`);
      return throwError(() => new Error('Erro ao remover filme da lista de desejos. Verifique os parâmetros e tente novamente.'));
    })
  );
}

  obterFilmesVistos(userId: number): Observable<WatchedMovie[]> {
    const url = `${this.baseUrl}/Usuario/Vistos/${userId}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<WatchedMovie[]>(url, { headers });
  }

  obterListaDesejos(userId: number): Observable<WatchlistMovie[]> {
    const url = `${this.baseUrl}/Usuario/WatchList/${userId}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<WatchlistMovie[]>(url, { headers });
  }
}


