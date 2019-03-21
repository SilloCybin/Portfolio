export class Project{

  title: string;
  description: string;
  technologies: string[];
  learned: string;
  id: number;
  type: string;
  completed: string;

  constructor(title: string, description: string, technologies: string[], learned: string, id: number, type: string, completed: string){
    this.title = title;
    this.description = description;
    this.technologies = technologies;
    this.learned = learned;
    this.id = id;
    this.type = type;
    this.completed = completed;
  }

}
