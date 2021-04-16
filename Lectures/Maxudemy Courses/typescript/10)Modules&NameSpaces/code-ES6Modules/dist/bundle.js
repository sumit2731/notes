var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("components/base-component", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            this.hostElement.insertAdjacentElement(insertAtBeginning ? "afterbegin" : "beforeend", this.element);
        }
    }
    exports.Component = Component;
});
define("decorators/autobind", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.AutoBind = AutoBind;
});
define("models/project", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProjectStatus;
    (function (ProjectStatus) {
        ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
        ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
    })(ProjectStatus = exports.ProjectStatus || (exports.ProjectStatus = {}));
    class Project {
        constructor(id, title, description, people, status) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.people = people;
            this.status = status;
        }
    }
    exports.Project = Project;
});
define("state/project-state", ["require", "exports", "models/project"], function (require, exports, project_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            const newProject = new project_js_1.Project(Math.random().toString(), title, description, numOfPeople, project_js_1.ProjectStatus.Active);
            this.projects.push(newProject);
            this.updateListener();
        }
        moveProject(projectId, newStatus) {
            let project = this.projects.find((project) => project.id == projectId);
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
    exports.ProjectState = ProjectState;
    exports.projectState = ProjectState.getInstance();
});
define("util/validation", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function validate(validatableInput) {
        let isValid = true;
        if (validatableInput.required) {
            isValid =
                isValid && validatableInput.value.toString().trim().length !== 0;
        }
        if (validatableInput.minLength != null &&
            typeof validatableInput.value === "string") {
            isValid =
                isValid &&
                    validatableInput.value.length >= validatableInput.minLength;
        }
        if (validatableInput.maxLength != null &&
            typeof validatableInput.value === "string") {
            isValid =
                isValid &&
                    validatableInput.value.length <= validatableInput.maxLength;
        }
        if (validatableInput.min != null &&
            typeof validatableInput.value === "number") {
            isValid = isValid && validatableInput.value >= validatableInput.min;
        }
        if (validatableInput.max != null &&
            typeof validatableInput.value === "number") {
            isValid = isValid && validatableInput.value <= validatableInput.max;
        }
        return isValid;
    }
    exports.validate = validate;
});
define("components/project-input", ["require", "exports", "components/base-component", "decorators/autobind", "state/project-state", "util/validation"], function (require, exports, base_component_js_1, autobind_js_1, project_state_js_1, validation_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ProjectInput extends base_component_js_1.Component {
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
        submitHandler(event) {
            event.preventDefault();
            const userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, desc, people] = userInput;
                project_state_js_1.projectState.addProject(title, desc, people);
                this.clearInputs();
            }
        }
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
            if (!validation_js_1.validate(titleValidatable) ||
                !validation_js_1.validate(descriptionValidatable) ||
                !validation_js_1.validate(peopleValidatable)) {
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
    }
    __decorate([
        autobind_js_1.AutoBind
    ], ProjectInput.prototype, "submitHandler", null);
    exports.ProjectInput = ProjectInput;
});
define("models/drag-drop", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("components/project-item", ["require", "exports", "components/base-component", "decorators/autobind"], function (require, exports, base_component_js_2, autobind_js_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ProjectItemClass extends base_component_js_2.Component {
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
        autobind_js_2.AutoBind
    ], ProjectItemClass.prototype, "dragStartHandler", null);
    exports.ProjectItemClass = ProjectItemClass;
});
define("components/project-list", ["require", "exports", "components/base-component", "decorators/autobind", "state/project-state", "models/project", "components/project-item"], function (require, exports, base_component_js_3, autobind_js_3, project_state_js_2, project_js_2, project_item_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ProjectList extends base_component_js_3.Component {
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
            let status = this.type == "active" ? project_js_2.ProjectStatus.Active : project_js_2.ProjectStatus.Finished;
            project_state_js_2.projectState.moveProject(projectId, status);
        }
        configure() {
            this.element.addEventListener("dragover", this.dragOverHandler);
            this.element.addEventListener("dragleave", this.dragLeaveHandler);
            this.element.addEventListener("drop", this.dropHandler);
            project_state_js_2.projectState.addListener((projects) => {
                const relevantProjects = projects.filter((project) => {
                    if (this.type == "active") {
                        return project.status == project_js_2.ProjectStatus.Active;
                    }
                    return project.status == project_js_2.ProjectStatus.Finished;
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
                let projectItem = new project_item_js_1.ProjectItemClass(this.element.querySelector("ul").id, prjItem);
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
        autobind_js_3.AutoBind
    ], ProjectList.prototype, "dragOverHandler", null);
    __decorate([
        autobind_js_3.AutoBind
    ], ProjectList.prototype, "dragLeaveHandler", null);
    __decorate([
        autobind_js_3.AutoBind
    ], ProjectList.prototype, "dropHandler", null);
    exports.ProjectList = ProjectList;
});
/**
 * @Note here after import we have added
 */
define("app", ["require", "exports", "components/project-input", "components/project-list"], function (require, exports, project_input_js_1, project_list_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const prjInput = new project_input_js_1.ProjectInput();
    const activePrjList = new project_list_js_1.ProjectList('active');
    const finishedPrjList = new project_list_js_1.ProjectList('finished');
});
/*
Drag and Drop API-
https://kryogenix.org/code/browser/custom-drag-image.html
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
https://codepen.io/SitePoint/pen/epQPNP
*/
//# sourceMappingURL=bundle.js.map