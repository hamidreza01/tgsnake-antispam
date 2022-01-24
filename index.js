class AntiSpam {
  /**
   * @param floodConfig flood settings.
   */
  constructor(floodConfig) {
    this._ = new Object();
    this._.sys = new Array();
    this._.conf = floodConfig;
    setInterval(() => {
      for (let i = 0; this._.sys.length > i; i++) {
        this._.sys[i].len = 0;
        this._.sys[i].block = false;
      }
    }, floodConfig.timer);
  }
  start(ctx) {
    this._.loc = this._.sys.findIndex(() => ctx.from.id);
    if (this._.loc == -1) {
      this._.sys.push({
        userId: ctx.from.id,
        len: 1,
        spmMsg: false,
        block: false,
        blockForEver: false,
      });
    } else {
      this._.sys[this._.loc].len += 1;
      if (!this._.sys[this._.loc].blockForEver) {
        if (!this._.sys[this._.loc].block) {
          if (this._.sys[this._.loc].len < this._.conf.len1) {
          } else if (this._.sys[this._.loc].len < this._.conf.len2) {
            if (this._.conf.showText) {
              ctx.reply(this._.conf.text1);
              this._.sys[this._.loc].spmMsg = true;
            }
          } else if (this._.sys[this._.loc].len < this._.conf.len3) {
            if (this._.conf.showText) {
              ctx.reply(this._.conf.text2);
            }
            this._.sys[this._.loc].block = true;
          }
        }
        if (this._.sys[this._.loc].len >= this._.conf.len3) {
          if (this._.conf.showText) {
            ctx.reply(this._.conf.text3);
          }
          this._.sys[this._.loc].blockForEver = true;
        }
      }
    }
  }
  run() {
    if (
      this._.sys[this._.loc]?.blockForEver ||
      this._.sys[this._.loc]?.block ||
      this._.sys[this._.loc]?.spmMsg
    ) {
      this._.sys[this._.loc].spmMsg = false;
      return false;
    } else {
      return true;
    }
  }
}
module.exports = AntiSpam;
