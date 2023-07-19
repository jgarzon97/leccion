import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes:any[]=[
    {
      nombre: "Nueva York",
      bio: "Experimenta el encanto de la costa oeste mientras viajas de Nueva York a Los Ángeles en nuestro servicio de transporte de lujo. Disfruta de comodidad y vistas panorámicas en un viaje inolvidable",
      img: "assets/img/cam_1.png",
      aparicion: "$500",
      casa:"interno"
    },
    {
      nombre: "Londres",
      bio: "Viaja de la capital británica a la Ciudad del Amor en nuestro servicio de transporte rápido y conveniente. Disfruta del paisaje pintoresco y la comodidad de nuestro moderno transporte.",
      img: "assets/img/cam_2.png",
      aparicion: "€150",
      casa:"interno"
    },
    {
      nombre: "Tokio",
      bio: "Descubre la belleza y la cultura de Japón mientras te desplazas de la bulliciosa ciudad de Tokio a la histórica ciudad de Kioto. Disfruta de la tranquilidad del viaje y admira el paisaje tradicional japonés.",
      img: "assets/img/cam_3.png",
      aparicion: "¥10,000",
      casa: "externo"
    },
    {
      nombre: "Sídney",
      bio: "Conéctate con las principales ciudades de Australia a través de nuestro servicio de transporte eficiente y seguro. Viaja desde el icónico puerto de Sídney hasta la vibrante ciudad de Melbourne con comodidad y estilo.",
      img: "assets/img/cam_4.png",
      aparicion: "AUD$200",
      casa:"externo"
    },
    {
      nombre: "Ciudad de México",
      bio: "Disfruta del sol, la playa y el mar caribeño mientras te trasladas desde la bulliciosa Ciudad de México hasta el paraíso de Cancún. Nuestro servicio de transporte te llevará a tu destino con comodidad y sin preocupaciones.",
      img: "assets/img/cam_5.png",
      aparicion: "MXN$2,500",
      casa: "interno"
    },
    {
      nombre: "Berlín",
      bio: "Explora dos de las ciudades más vibrantes de Europa mientras te desplazas desde Berlín hasta Ámsterdam. Nuestro servicio de transporte te permitirá disfrutar de la belleza arquitectónica y la cultura diversa de ambos destinos.",
      img: "assets/img/cam_6.png",
      aparicion: "€100",
      casa: "externo"
    },
    {
      nombre: "Buenos Aires",
      bio: "Conecta dos de las principales capitales sudamericanas mientras disfrutas de un viaje cómodo y seguro desde Buenos Aires hasta Santiago de Chile. Admira los impresionantes paisajes de la Cordillera de los Andes en el camino.",
      img: "assets/img/cam_7.png",
      aparicion: "$300",
      casa: "externo"
    }
  ];

  getHeroes(){
    return this.heroes;
  }

  getHeroe(idx: number):Heroe{
    return this.heroes[idx];
  }

  constructor() {
    console.log("Servicio listo para usar...");
   }
}

export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
