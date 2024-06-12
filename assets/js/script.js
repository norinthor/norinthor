// class CssPropControl {
//     constructor(element) {
//         this.element = element
//     }
//     get(varName) {
//         return getComputedStyle(this.element).getPropertyValue(varName)
//     }
//     set(varName, val) {
//         return this.element.style.setProperty(varName, val)
//     }
// } 

// const bodyCssProps = new CssPropControl(document.body)

// let toggle = document.querySelector('#dark-mode-toggle')
// toggle.addEventListener('click', () => {
//     let mode = toggle.checked ? 'dark' : 'light'
//     bodyCssProps.set('--background', bodyCssProps.get('--${mode}-background'))
//     bodyCssProps.set('--primary', bodyCssProps.get('--${mode}-primary'))
//     bodyCssProps.set('--link', bodyCssProps.get('--${mode}-link'))
// })

class CssPropControl {
    constructor(element) {
      this.element = element;
    }
  
    get(varName) {
      return getComputedStyle(this.element).getPropertyValue(varName);
    }
  
    set(varName, val) {
      this.element.style.setProperty(varName, val);
    }
  
    // Helper function to simplify variable name construction
    getModeVariable(mode) {
      return `--${mode}-`; // Ensures consistent prefix with hyphen (-)
    }
  }
  
  const bodyCssProps = new CssPropControl(document.body);
  
  const toggle = document.querySelector('#dark-mode-toggle');
  
  toggle.addEventListener('click', () => {
    const mode = toggle.checked ? 'dark' : 'light';
  
    // Use the helper function for cleaner variable construction
    const modeVarPrefix = bodyCssProps.getModeVariable(mode);
  
    // Set CSS properties using the mode-specific variable names
    bodyCssProps.set('--background', bodyCssProps.get(modeVarPrefix + 'background'));
    bodyCssProps.set('--primary', bodyCssProps.get(modeVarPrefix + 'primary'));
    bodyCssProps.set('--link', bodyCssProps.get(modeVarPrefix + 'link'));
  });
  