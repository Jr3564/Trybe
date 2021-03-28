class ChronometerLogs {
  constructor(label) {
    this.label = label;
  }

  init() {
    console.time(this.label);
  }

  logTime() {
    console.timeLog(this.label);
  }

  stop() {
    console.timeEnd(this.label);
  }
}

module.exports = ChronometerLogs;
