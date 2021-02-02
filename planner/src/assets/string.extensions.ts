interface String {
  commas(): string;
}

String.prototype.commas = function (): string {
  var x = this;
  return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
};