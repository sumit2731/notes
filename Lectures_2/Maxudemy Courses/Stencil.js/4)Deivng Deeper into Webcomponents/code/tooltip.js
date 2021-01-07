class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        this._tooltipIcon;
        this._tooltipVisible = false;
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
                    font-weight: normal;
                    background-color: black;
                    color: white;
                    position: absolute;
                    top:1.5rem;
                    left:0.75rem;
                    z-index: 1;
                    padding: 0.15rem;
                    border-radius: 3px;
                    box-shadow 1px 1px 6px rgba(0,0,0,0.26);
                }
                :host {
                    position: relative;
                }

                :host(.important) {
                    // background: #ccc;
                    background: var(--color-primary,#ccc);
                    padding: 0.15rem;
                }

                :host-context(p) {
                    font-weight: bold;
                }
                
                ::slotted(.highlight) {
                    border-bottom: 1px dotted red;
                }

                .highlight {
                    background-color: red;
                }
                .icon {
                    background: black;
                    color: white;
                    padding: 0.15rem 0.5rem;
                    text-align: center;
                    border-radius: 50%;
                }
            </style>
            <slot>Some Default Value</slot>
            <span class="icon">?</span>
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
        this._tooltipIcon  = this.shadowRoot.querySelector('span');
        //tooltipIcon.textContent = ` (?) `;
        this._tooltipIcon.addEventListener('mouseenter',this._showTooltip.bind(this));
        this._tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        /* 
        *we dnt want to attach this elment to our custome element which is part of light DOM,
        instead we want to attach it to the shadow DOM of our custom element
        */
        //this.appendChild(tooltipIcon);
        //this.shadowRoot.appendChild(tooltipIcon);
        /* 
        *Now we are using :host to position our element
        */
        //this.style.position = 'relative';
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(newValue == oldValue) return;
        if(name == 'text') {
            this._tooltipText = newValue;
        }
    }

    /* 
    Here we returne the names of attributes upon whose values chnage we want to run attributeChangedCallback
    callback
    */
    static get observedAttributes() {
        return ['text'];
    }

    disconnectedCallback() {
        this._tooltipIcon.removeEventListener('mouseenter',this._showTooltip.bind(this));
        this._tooltipIcon.removeEventListener('mouseleave', this._hideTooltip.bind(this));
    }

    /* 
    It is good pattern to use a method for all DOM manupulations. so we can quickly see how are we 
        intercating with DOM
    */
    _render() {
        let tooltipContainer = this.shadowRoot.querySelector('div');
        if(this._tooltipVisible) {
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
        else {
            if(tooltipContainer) {
                /* 
                Now element is added to shadow DOM
                */
                //this.removeChild(this._tooltipContainer);
                this.shadowRoot.removeChild(this._tooltipContainer);
            }
        }
    }

    /* 
    _means this method should be called only from inside the class
    */
    _showTooltip() {
        this._tooltipVisible = true;
        this._render();
    }

    _hideTooltip() {
        this._tooltipVisible = false;
        this._render();
    }
    log() {
        console.log("log called");
    }
}

customElements.define("uc-tooltip", Tooltip);