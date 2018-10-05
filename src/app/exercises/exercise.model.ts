export class Exercise {
  public name: string;
  public description: string;
  public imagePath: string;
  public series: number;
  public repetition: number;
  public weight: number;
  public restInner: number;
  public restOuter: number;
  public duration: number;


  constructor(name: string, desc: string,
              series: number = 1, repetition: number = 1,
              weight: number = 0,
              restInner: number = 0, restOuter: number = 0, duration: number = 0,
              imagePath: string = 'assets/images/exercises/this-is-sparta.jpg') {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.series = series;
    this.repetition = repetition;
    this.weight = weight;
    this.restInner = restInner;
    this.restOuter = restOuter;
    this.duration = duration;
  }
}
