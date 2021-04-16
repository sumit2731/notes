namespace App {
    /**
     * @Listerner and Sate are nly used in this file, there is no need to export
     * them
     */
    type Listener<T> = (items: T[]) => void;

    class State<T> {
        
        protected listeners: Listener<T>[] = [];

        addListener(listenerFn: Listener<T>) {
            this.listeners.push(listenerFn);
        }
    }

    export class ProjectState extends State<Project> {
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
            let project = this.projects.find((project) => project.id == projectId)!;
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

    export const projectState = ProjectState.getInstance();

}