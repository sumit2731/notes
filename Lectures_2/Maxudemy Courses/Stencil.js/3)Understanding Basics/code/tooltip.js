class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        this._tooltipText = `Tooltip text`;
        /* 
        *This defines whether you can access your shadow DOM tree from outside of this component
        or not.Even if you give values of close, there are still some ways to access it
        and it's not worth the effort.It's your code if you dnt want to access it, 
        dnt access it. Any text you paased between tags of compoent will be gone now
        */
        this.attachShadow({mode:'open'});
        /*
        *Lets see instead of creating elemnts inside js file and attaching it to our custom
        element.how we can get those values from template. In constructor we can access 
        normal DOM, we cannot just acesss DOM of our element,since it is not attached to DOM yet.
        We can access the shadow even  before our element is added to real DOM. because we are accessing
        proeprty of our element, whne our element is attched to DOM, this shadow DOM will be rendered
        since shadow DOM is abstracted away from real
        DOM anyways
        */
        //const template = document.querySelector("#tooltip-template");
        //this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        /* 
        *How to define template inside js file
        */
       this.shadowRoot.innerHTML = `
            <style>
                div {
                    background-color: black;
                    color: white;
                    position: absolute;
                    z-index: 1;
                }
            </style>
            <slot>Some Default Value</slot>
            <span>(?)</span>
        `;
       
    }

    /* 
    Here our element is attached to DOM. here you can access DOM,acess attributes etc
    */
    connectedCallback() {
        if(this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }
        //const tooltipIcon = document.createElement('span');
        //we can also query the shadow DOM
        const tooltipIcon  = this.shadowRoot.querySelector('span');
        //tooltipIcon.textContent = ` (?) `;
        tooltipIcon.addEventListener('mouseenter',this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        /* 
        *we dnt want to attach this elment to our custome element which is part of light DOM,
        instead we want to attach it to the shadow DOM of our custom element
        */
        //this.appendChild(tooltipIcon);
        //this.shadowRoot.appendChild(tooltipIcon);
        this.style.position = 'relative';
    }

    /* 
    _means this method should be called only from inside the class
    */
    _showTooltip() {
        this._tooltipContainer  = document.createElement('div');
        this._tooltipContainer.textContent =this._tooltipText;
        /*
        *Instaed of setting styles through js , we can define them in template
        */
        // this._tooltipContainer.style.backgroundColor = 'black';
        // this._tooltipContainer.style.color = 'white';
        // this._tooltipContainer.style.position = 'absolute';
        // this._tooltipContainer.style.zIndex = '10';
        //this.appendChild(this._tooltipContainer);
        this.shadowRoot.appendChild(this._tooltipContainer );
    }

    _hideTooltip() {
        /* 
        Now element is added to shadow DOM
        */
        //this.removeChild(this._tooltipContainer);
        this.shadowRoot.removeChild(this._tooltipContainer);
    }
}

customElements.define("uc-tooltip", Tooltip);