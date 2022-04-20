import React from 'react'
export default class Open extends React.Component {
    state = { isOpen: false }
    toggle = () => this.setState({ isOpen: !this.state.isOpen })
    render() {
        const renderProps = {
            isOpen: this.state.isOpen,
            toggle: this.toggle
        }
        return typeof this.props.children === 'function'
            ? this.props.children(renderProps)
            : this.props.children
    }
}



export const App = () => (
    <Open>
        {openProps => (
            <div className="app">
                {openProps.isOpen
                    && <NewMenu toggle={openProps.toggle} />}
                <main>
                    <button
                        onClick={openProps.toggle}
                        type="button"
                    >
                        MENU
                    </button>
                    <Welcome />
                </main>
            </div>
        )}
    </Open>
)