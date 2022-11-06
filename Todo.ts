import ITodo from "./IToDo";

export default class ToDo implements ITodo {
  constructor(public title: string) {}

  getTitle(): string {
    return this.title;
  }
}

export function printLog(para: string) {
  console.log(para);
}

export const studentName: string = "Wasim";
