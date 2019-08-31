import { IModule } from "./Module";

export default class Topic implements IModule {
  private List: IModule[] = [];
  constructor(private name: string) {}

  display(indentLevel: string): void {
    console.log(indentLevel + this.name);
    for(let module of this.List){
      module.display(indentLevel + indentLevel);
    }
  }

  addModule(module: IModule) {
    this.List.push(module);
  }
}
