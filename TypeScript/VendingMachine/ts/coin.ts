class Quarter {
  // Private
  private value : number = .25;

  // Getter method.
  get Value() {
    return this.value;
  }

/* Setter
  set Value (newValue: number) {
    this.value = newValue;
  }
*/
  getImageUrl (): string {
    return "./img/Quarter.png";    
  }
}
