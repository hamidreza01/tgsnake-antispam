class Bot {
  constructor() {
    this._ = new Object();
    this._.db = [];
  }
  run(ctx) {
    this._.ctx = ctx;
    return this;
  }
  start(step, func) {
    let thisuser = this._.db.findIndex(()=>this._.ctx.from.id );
    if (this._.ctx.text != "/start") {
      return;
    }
    if (thisuser == -1) {
      this._.db.push({
        userId: this._.ctx.from.id,
        step: step,
      });
    } else {
     this._.db[thisuser].step = step;
    }
    func();
  }
  step(step, func) {
    let thisuser = this._.db.findIndex(()=> this._.ctx.from.id );
    if (step == this._.db[thisuser]?.step) {
      if(this._.ctx.text != '/start'){
        func();
      } 
    }
  }
  setStep(step) {
    let thisuser = this._.db.findIndex(()=> this._.ctx.from.id );
    this._.db[thisuser].step = step;
  }
}
module.exports = {
  robot: new Bot(),
};
