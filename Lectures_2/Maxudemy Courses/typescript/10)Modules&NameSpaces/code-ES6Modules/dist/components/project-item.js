var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from './base-component.js';
import { AutoBind } from '../decorators/autobind.js';
export class ProjectItemClass extends Component {
    constructor(hostId, project) {
        super("single-project", hostId, true, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    get persons() {
        let a = this.project.people.toString() +
            (this.project.people > 1 ? ` Persons` : ` Person`);
        return a;
    }
    dragStartHandler(event) {
        /**
         * All Drag event handlers get DragEvent as arguments. not in all event handlers we have
         * datatransfer proeprty avalible, so that is why we have to use '!'.
         */
        event.dataTransfer.setData("text/plain", this.project.id);
        event.dataTransfer.effectAllowed = `move`;
    }
    dragEndHandler(event) {
        console.log("Drag End");
    }
    configure() {
        this.element.addEventListener("dragstart", this.dragStartHandler);
        this.element.addEventListener("dragend", this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent = this.project.description;
        this.element.querySelector("p").textContent = this.persons;
    }
}
__decorate([
    AutoBind
], ProjectItemClass.prototype, "dragStartHandler", null);
//# sourceMappingURL=project-item.js.map