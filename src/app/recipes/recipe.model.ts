export class Recipe{

  public name: String;
  public description: String;
  public imagepath: String;


  constructor(name: string, desc: string, imagePath: string)
  {
this.name = name;
this.description = desc;
this.imagepath = imagePath;

  }
}
