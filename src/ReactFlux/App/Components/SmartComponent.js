import BaseComponent from "./BaseComponent";
/**
 * The smart component hooks into the component lifecycle and registers/deregisters listeners to stores
 */
class SmartComponent extends BaseComponent {
    constructor(...stores) {
        super();
        /*
         * This is an antipattern, so use it only if there is no other way.
         * See: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html
         */
        this.isComponentMounted = false;
        this.onChangeInternal = this.onChange.bind(this);
        this.stores = stores;
        this.state = this.getState();
        this.isComponentMounted = false;
    }
    componentDidMount() {
        this.isComponentMounted = true;
        if (this.stores !== undefined && this.stores !== null) {
            this.stores.forEach((store) => {
                store.addListener(this.onChangeInternal);
            });
        }
    }
    componentWillUnmount() {
        this.isComponentMounted = false;
        if (this.stores !== undefined && this.stores !== null) {
            this.stores.forEach((store) => {
                store.removeListener(this.onChangeInternal);
            });
        }
    }
    /** Invoked when a store emits a change event */
    onChange() {
        this.setStateIfMounted(this.getState());
    }
    setStateIfMounted(state) {
        if (this.isComponentMounted) {
            this.setState(state);
        }
    }
}
;
export default SmartComponent;
//# sourceMappingURL=SmartComponent.js.map