var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "./base-component.js";
import { AutoBind } from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";
import { ProjectStatus } from "../models/project.js";
import { ProjectItemClass } from "./project-item.js";
export class ProjectList extends Component {
    constructor(type) {
        super("project-list", "app", false, `${type}-projects`);
        this.type = type;
        //templateElement: HTMLTemplateElement;
        //hostElement: HTMLDivElement;
        //element: HTMLElement;
        this.assignedProjects = [];
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
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
            /**
             * @In js drag and drop, works such that drop is actually only allowed,
             * so drop event will only trigger on an element if in the dragover handler
             * on that same element, we call preventDefault. you can think of it as default
             * for javascript drag and drop is to not allow dropping. so you have to call
             * preventDefault.
             */
            event.preventDefault();
        }
        const listEl = this.element.querySelector("ul");
        listEl.classList.add("droppable");
    }
    dragLeaveHandler(event) {
        const listEl = this.element.querySelector("ul");
        listEl.classList.remove("droppable");
    }
    dropHandler(event) {
        /**
         * @when we print event on screen. then if we check event.dataTransfer.items
         * then it is empty. it is because event object is cleared later, but when we have printed
         * it on console then we had dataItemList.
         */
        let projectId = event.dataTransfer.getData("text/plain");
        let status = this.type == "active" ? ProjectStatus.Active : ProjectStatus.Finished;
        projectState.moveProject(projectId, status);
    }
    configure() {
        this.element.addEventListener("dragover", this.dragOverHandler);
        this.element.addEventListener("dragleave", this.dragLeaveHandler);
        this.element.addEventListener("drop", this.dropHandler);
        projectState.addListener((projects) => {
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
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        /**
         * @This is trick to empty previous projects
         */
        listEl.innerHTML = "";
        for (const prjItem of this.assignedProjects) {
            let projectItem = new ProjectItemClass(this.element.querySelector("ul").id, prjItem);
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
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + " PROJECTS";
    }
}
__decorate([
    AutoBind
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    AutoBind
], ProjectList.prototype, "dragLeaveHandler", null);
__decorate([
    AutoBind
], ProjectList.prototype, "dropHandler", null);
//# sourceMappingURL=project-list.js.map