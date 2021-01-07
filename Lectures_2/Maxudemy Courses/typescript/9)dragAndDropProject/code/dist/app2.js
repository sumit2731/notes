"use strict";
// enum ProjectStatus {
//   Active,
//   Finished,
// }
// class Project {
//   constructor(
//     public id: string,
//     public title: string,
//     public description: string,
//     public people: number,
//     public status: ProjectStatus
//   ) {}
// }
// type Listener = (items: Project[]) => void;
// class ProjectState {
//   private listeners: Listener[] = [];
//   private projects: Project[] = [];
//   private static instance: ProjectState;
//   private constructor() {}
//   static getInstance() {
//     if (this.instance) {
//       return this.instance;
//     }
//     this.instance = new ProjectState();
//     return this.instance;
//   }
//   addProject(title: string, description: string, numOfPeople: number) {
//     const newProject = new Project(
//       Math.random().toString(),
//       title,
//       description,
//       numOfPeople,
//       ProjectStatus.Active
//     );
//     /* const newProject = {
//             id: Math.random().toString(),
//             title: title,
//             description: description,
//             people: numOfPeople
//         }; */
//     this.projects.push(newProject);
//     for (let listenerFn of this.listeners) {
//       listenerFn(this.projects.slice());
//     }
//   }
//   addListener(listenerFn: Listener) {
//     this.listeners.push(listenerFn);
//   }
// }
// const projectState = ProjectState.getInstance();
// interface Validatable {
//   value: string | number;
//   /**
//    * ? means value is either boolean or undefined.
//    * we also use union type to tell same- boolean | undefined
//    */
//   required?: boolean;
//   minLength?: number;
//   maxLength?: number;
//   min?: number;
//   max?: number;
// }
// function validate(validatableInput: Validatable) {
//   let isValid = true;
//   if (validatableInput.required) {
//     isValid = isValid && validatableInput.value.toString().trim().length !== 0;
//   }
//   if (
//     validatableInput.minLength != null &&
//     typeof validatableInput.value === "string"
//   ) {
//     isValid =
//       isValid && validatableInput.value.length >= validatableInput.minLength;
//   }
//   if (
//     validatableInput.maxLength != null &&
//     typeof validatableInput.value === "string"
//   ) {
//     isValid =
//       isValid && validatableInput.value.length <= validatableInput.maxLength;
//   }
//   if (
//     validatableInput.min != null &&
//     typeof validatableInput.value === "number"
//   ) {
//     isValid = isValid && validatableInput.value >= validatableInput.min;
//   }
//   if (
//     validatableInput.max != null &&
//     typeof validatableInput.value === "number"
//   ) {
//     isValid = isValid && validatableInput.value <= validatableInput.max;
//   }
//   return isValid;
// }
// /**
//  * @Used _ to avoid error for unused parameters. another way is to set noUnusedParameters to false
//  */
// function AutoBind(
//   _target: any,
//   _methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   return {
//     configurable: true,
//     enumerable: true,
//     get() {
//       return descriptor.value.bind(this);
//     },
//   };
// }
// class Component {
//   templateElement: HTMLTemplateElement;
//   hostElement: HTMLDivElement;
//   element: HTMLElement;
//   constructor(templateId: string, elementId: string) {
//     this.templateElement = document.getElementById(
//       templateId
//     )! as HTMLTemplateElement;
//     this.hostElement = document.getElementById("app")! as HTMLDivElement;
//     const importedNode = document.importNode(
//       this.templateElement.content,
//       true
//     );
//     this.element = importedNode.firstElementChild as HTMLElement;
//     this.element.id = elementId;
//   }
// }
// class ProjectList {
//   templateElement: HTMLTemplateElement;
//   /**
//    * @This is div to which we need to attach content
//    */
//   hostElement: HTMLDivElement;
//   /**
//    * @This is element inside template tag
//    */
//   element: HTMLElement;
//   assignedProjects: Project[] = [];
//   constructor(private type: "active" | "finished") {
//     this.templateElement = document.getElementById(
//       "project-list"
//     )! as HTMLTemplateElement;
//     this.hostElement = document.getElementById("app")! as HTMLDivElement;
//     const importedNode = document.importNode(
//       this.templateElement.content,
//       true
//     );
//     this.element = importedNode.firstElementChild as HTMLElement;
//     this.element.id = `${this.type}-projects`;
//     projectState.addListener((projects: Project[]) => {
//       const relevantProjects = projects.filter((project) => {
//         if (this.type == "active") {
//           return project.status == ProjectStatus.Active;
//         }
//         return project.status == ProjectStatus.Finished;
//       });
//       this.assignedProjects = relevantProjects;
//       this.renderProjects();
//     });
//     this.attach();
//     this.renderContent();
//   }
//   private renderProjects() {
//     const listEl = document.getElementById(
//       `${this.type}-projects-list`
//     )! as HTMLUListElement;
//     //we are removing previous projects
//     listEl.innerHTML = "";
//     for (const prjItem of this.assignedProjects) {
//       const listItem = document.createElement("li");
//       listItem.textContent = prjItem.title;
//       listEl.appendChild(listItem);
//     }
//   }
//   private renderContent() {
//     const listId = `${this.type}-projects-list`;
//     /**
//      * @See how we eliminate the case of null by using !
//      */
//     this.element.querySelector("ul")!.id = listId;
//     this.element.querySelector("h2")!.textContent =
//       this.type.toUpperCase() + " PROJECTS";
//   }
//   private attach() {
//     this.hostElement.insertAdjacentElement("beforeend", this.element);
//   }
// }
// class ProjectInput {
//   templateElement: HTMLTemplateElement;
//   hostElement: HTMLDivElement;
//   element: HTMLFormElement;
//   titleInputElement: HTMLInputElement;
//   descriptionInputElement: HTMLInputElement;
//   peopleInputElement: HTMLInputElement;
//   constructor() {
//     this.templateElement = document.getElementById(
//       "project-input"
//     )! as HTMLTemplateElement;
//     this.hostElement = document.getElementById("app")! as HTMLDivElement;
//     const importedNode = document.importNode(
//       this.templateElement.content,
//       true
//     );
//     this.element = importedNode.firstElementChild as HTMLFormElement;
//     this.element.id = "user-input";
//     this.titleInputElement = this.element.querySelector(
//       "#title"
//     ) as HTMLInputElement;
//     this.descriptionInputElement = this.element.querySelector(
//       "#description"
//     ) as HTMLInputElement;
//     this.peopleInputElement = this.element.querySelector(
//       "#people"
//     ) as HTMLInputElement;
//     this.configure();
//     this.attach();
//   }
//   private gatherUserInput(): [string, string, number] | void {
//     const enteredTitle = this.titleInputElement.value;
//     const enteredDescription = this.descriptionInputElement.value;
//     const enteredPeople = this.peopleInputElement.value;
//     const titleValidatable: Validatable = {
//       value: enteredTitle,
//       required: true,
//     };
//     const descriptionValidatable: Validatable = {
//       value: enteredDescription,
//       required: true,
//       minLength: 5,
//     };
//     const peopleValidatable: Validatable = {
//       value: +enteredPeople,
//       required: true,
//       min: 1,
//       max: 5,
//     };
//     if (
//       !validate(titleValidatable) ||
//       !validate(descriptionValidatable) ||
//       !validate(peopleValidatable)
//     ) {
//       alert("Invalid Input, Please Try Again");
//       return;
//     } else return [enteredTitle, enteredDescription, +enteredPeople];
//   }
//   private clearInputs() {
//     this.titleInputElement.value = "";
//     this.descriptionInputElement.value = "";
//     this.peopleInputElement.value = "";
//   }
//   @AutoBind
//   private submitHandler(event: Event) {
//     event.preventDefault();
//     const userInput = this.gatherUserInput();
//     if (Array.isArray(userInput)) {
//       const [title, desc, people] = userInput;
//       projectState.addProject(title, desc, people);
//       console.log(title, desc, people);
//       this.clearInputs();
//     }
//   }
//   private configure() {
//     this.element.addEventListener("submit", this.submitHandler);
//   }
//   private attach() {
//     this.hostElement.insertAdjacentElement("afterbegin", this.element);
//   }
// }
// const prjInput = new ProjectInput();
// const activePrjList = new ProjectList("active");
// const finishedPrjList = new ProjectList("finished");
//# sourceMappingURL=app2.js.map