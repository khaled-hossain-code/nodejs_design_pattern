import { IModule } from "./Module";

export default class Lecture implements IModule {
  constructor(private name: string) {}

  display(indentLevel: string): void {
    console.log(indentLevel + this.name);
  }
}
