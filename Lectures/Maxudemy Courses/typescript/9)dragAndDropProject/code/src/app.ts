interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
    /**
     * @This is to signal browser and javacsript that
     * the thing you are dragging over is a valid drag target. If you dnt do right
     * thing in drag over handler, then dropping will not be possible
    */
    dragOverHandler(event: DragEvent): void;
    /**
     * @It is called to handle actual drop
    */
    dropHandler(event: DragEvent): void;
    /**
     * @It can useful for  example, if we are for example, giving some visual feedback 
     * to the user when he or she drag something over box like change background color
     * for example. if actual drop does not happen then we can use dragLeave handler to
     * revert our visual update
    */
    dragLeaveHandler(event: DragEvent): void;
}

enum ProjectStatus {Active, Finished}
class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string, 
        public people: number,
        public status: ProjectStatus) {}
}

type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);

    this.updateListener();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    let project = this.projects.find(project => project.id == projectId)!;
    if (project.status !== newStatus) {
      project.status = newStatus;
      this.updateListener();
    }
  }

  updateListener() {
    for (let listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }

  /* addListener(listenerFn: Listener) {
    this.listeners.push(listenerFn);
  } */
}

const projectState = ProjectState.getInstance();

interface Validatable {
    value: string | number;
    /**
     * ? means value is either boolean or undefined.
     * we also use union type to tell same- boolean | undefined
     */
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

function validate(validatableInput: Validatable) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }                        
    if(validatableInput.minLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if(validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if(validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if(validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}

/**
 * @Used _ to avoid error for unused parameters. another way is to set noUnusedParameters to false
 */
function AutoBind(_target: any, _methodName: string,descriptor: PropertyDescriptor) {
  return {
    configurable: true,
    enumerable: true,
    get() {
      return descriptor.value.bind(this);
    }
  };
}

abstract class Component<T extends HTMLElement,U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  /**
   * @HTMLElement to which new element will be attached
   */
  hostElement: T;
  /**
   * @HTMLElement to be attched
   */
  element: U;

  constructor(templateId: string, hostElementId: string,insertAtStart: boolean, newElementId?: string) {
    this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;
    const importedNode = document.importNode(this.templateElement.content,true);
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
        this.element.id = newElementId;
    }
    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin': 'beforeend', this.element);
  }
  abstract configure(): void;
  abstract renderContent(): void;
}

class ProjectItemClass extends Component<HTMLUListElement, HTMLDListElement> implements Draggable {
  private project: Project;

  get persons() {
    let a = this.project.people.toString() + (this.project.people > 1 ? ` Persons` : ` Person`);
    return a;
  }

  constructor(hostId: string, project: Project) {
    super("single-project", hostId, true, project.id);
    this.project = project;
    this.configure();
    this.renderContent();
  }
  
  @AutoBind
  dragStartHandler(event: DragEvent) {
    /**
     * All Drag event handlers get DragEvent as arguments. not in all event handlers we have
     * datatransfer proeprty avalible, so that is why we have to use '!'.
     */
    event.dataTransfer!.setData('text/plain',this.project.id);
    event.dataTransfer!.effectAllowed = `move`;
  }

  dragEndHandler(event: DragEvent) {
    console.log("Drag End");
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.project.description;
    this.element.querySelector("p")!.textContent = this.persons;
  }
}

class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
  //templateElement: HTMLTemplateElement;
  //hostElement: HTMLDivElement;
  //element: HTMLElement;
  assignedProjects: Project[] = [];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    // this.templateElement = document.getElementById(
    //   "project-list"
    // )! as HTMLTemplateElement;
    // this.hostElement = document.getElementById("app")! as HTMLDivElement;
    // const importedNode = document.importNode(
    //   this.templateElement.content,
    //   true
    // );
    // this.element = importedNode.firstElementChild as HTMLElement;
    // this.element.id = `${this.type}-projects`;
    this.configure();

    //this.attach();
    this.renderContent();
  }

  /**
   * @Here we are just changing the style of ul when we draggable item enters there
   * this is just to tell that you can drop thaat item here
   */
  @AutoBind
  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
        /**
         * @In js drag and drop, works such that drop is actually only allowed,
         * so drop event will only trigger on an element if in the dragover handler
         * on that same element, we call preventDefault. you can think of it as default
         * for javascript drag and drop is to not allow dropping. so you have to call
         * preventDefault.
         */
        event.preventDefault();
        
    }
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.add("droppable");
  }

  @AutoBind
  dragLeaveHandler(event: DragEvent) {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
 }
  @AutoBind
  dropHandler(event: DragEvent) {
    /**
    * @when we print event on screen. then if we check event.dataTransfer.items
    * then it is empty. it is because event object is cleared later, but when we have printed
    * it on console then we had dataItemList.
    */
    let projectId = event.dataTransfer!.getData("text/plain");
    let status = this.type == "active" ? ProjectStatus.Active : ProjectStatus.Finished;
    projectState.moveProject(projectId, status);
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((project) => {
        if (this.type == "active") {
          return project.status == ProjectStatus.Active;
        }
        return project.status == ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  private renderProjects() {
    const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
    /**
     * @This is trick to empty previous projects
     */
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      let projectItem = new ProjectItemClass(this.element.querySelector("ul")!.id, prjItem);
      //   const listItem = document.createElement("li");
      //   listItem.textContent = prjItem.title;
      //   listEl.appendChild(listItem);
    }
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    /**
     * @See how we eliminate the case of null by using !
     */
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  /* private attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  } */
}

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;
  constructor() {
    super("project-input", "app", true, "user-input");
    /* this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    const importedNode = document.importNode(this.templateElement.content,true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input"; */
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.configure();
    //this.attach();
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent() {}

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }
  
  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
      alert("Invalid Input, Please Try Again");
      return;
    } else return [enteredTitle, enteredDescription, +enteredPeople];
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  /* private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  } */
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');



/* 
Drag and Drop API-
https://kryogenix.org/code/browser/custom-drag-image.html
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
https://codepen.io/SitePoint/pen/epQPNP
*/
