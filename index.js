class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b)=>{return a-b});
  }

  get(pos) {
    if(pos >= 0 && pos < this.items.length){
      return this.items[pos];
    }else{
      throw new Error("OutOfBounds");
    }
  }

  max() {    
    if(this.length > 0){
      let maxValue = this.items[0];
      this.items.filter(value =>{
      if(value > maxValue){
        maxValue = value;
      }
    })
    return maxValue;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if(this.length > 0){
      let minValue = this.items[0];
      this.items.filter(value =>{
        if(value < minValue){
          minValue = value;
        }
      })
      return minValue;
    } else{
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if(this.length == 0){
      return 0;
    }else{
      let total = this.items.reduce((accumulator, currentValue) =>{
        return accumulator += currentValue;
      })
      return total
    }
  }

  avg() {
    if(this.length == 0){
      throw new Error("EmptySortedList");
    }else{
      let total = this.items.reduce((accumulator, currentValue) => {
        return accumulator += currentValue;
      })
      let average = total / this.length;

      return average;
    }
  }
}

module.exports = SortedList;
