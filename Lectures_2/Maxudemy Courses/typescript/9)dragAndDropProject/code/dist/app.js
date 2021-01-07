"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
class State {
    constructor() {
        this.listeners = [];
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
}
class ProjectState extends State {
    constructor() {
        super();
        //private listeners: Listener[] = [];
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title, description, numOfPeople) {
        const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);
        /* const newProject = {
                id: Math.random().toString(),
                title: title,
                description: description,
                people: numOfPeople
            }; */
        this.projects.push(newProject);
        this.updateListener();
    }
    moveProject(projectId, newStatus) {
        let project = this.projects.find(project => project.id == projectId);
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
}
const projectState = ProjectState.getInstance();
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}
/**
 * @Used _ to avoid error for unused parameters. another way is to set noUnusedParameters to false
 */
function AutoBind(_target, _methodName, descriptor) {
    return {
        configurable: true,
        enumerable: true,
        get() {
            return descriptor.value.bind(this);
        }
    };
}
class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    }
}
class ProjectItemClass extends Component {
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
        event.dataTransfer.setData('text/plain', this.project.id);
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
class ProjectList extends Component {
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
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            /**
             * @In js drag and drop, works such that drop is actually only allowed,
             * so drop event will only trigger on an element if in the dragover handler
             * on that same element, we call preventDefault. you can think of it as default
             * for javascript drag and srop is to not allow dropping. so you have to call
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
        //we are removing previous projects
        listEl.innerHTML = "";
        console.log(this.element.id);
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
class ProjectInput extends Component {
    constructor() {
        super("project-input", "app", true, "user-input");
        /* this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
        this.hostElement = document.getElementById("app")! as HTMLDivElement;
        const importedNode = document.importNode(this.templateElement.content,true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = "user-input"; */
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.configure();
        //this.attach();
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
    renderContent() { }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5,
        };
        if (!validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)) {
            alert("Invalid Input, Please Try Again");
            return;
        }
        else
            return [enteredTitle, enteredDescription, +enteredPeople];
    }
    clearInputs() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
            console.log(title, desc, people);
            this.clearInputs();
        }
    }
}
__decorate([
    AutoBind
], ProjectInput.prototype, "submitHandler", null);
const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
/*
Drag and Drop API-
https://kryogenix.org/code/browser/custom-drag-image.html
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
https://codepen.io/SitePoint/pen/epQPNP
*/
//# sourceMappingURL=app.js.map