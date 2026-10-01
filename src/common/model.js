class Store extends EventTarget{
    constructor(_value){
        super();

        let value = _value;
        
        this.getValue = function getValue(){
            return value;
        }

        this.setValue = function setValue(_value){
            value = _value;

            const event = new Event("change");
            event.value = value;
            
            this.dispatchEvent(event);
        }
    }
}

window["#store"] = {};

window["#store"].bold = new Store(false);
window["#store"].italic = new Store(false);
window["#store"].underline = new Store(false);
window["#store"].color = new Store(false);