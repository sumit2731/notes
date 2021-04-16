import {Draggable} from '../models/drag-drop';
import {Component} from './base-component';
import {Project} from '../models/project';
import {AutoBind} from '../decorators/autobind';


export class ProjectItemClass extends Component<HTMLUListElement, HTMLDListElement> implements Draggable {
  private project: Project;

  get persons() {
    let a =
      this.project.people.toString() +
      (this.project.people > 1 ? ` Persons` : ` Person`);
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
    event.dataTransfer!.setData("text/plain", this.project.id);
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
