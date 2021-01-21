if (!WebAssembly.instantiateStreaming) {
  // polyfill
  WebAssembly.instantiateStreaming = async (resp, importObject) => {
    const source = await (await resp).arrayBuffer();
    return await WebAssembly.instantiate(source, importObject);
  };
}

const go = new Go();

let mod, inst;

WebAssembly.instantiateStreaming(fetch("planner.wasm"), go.importObject).then(
  async result => {
    mod = result.module;
    inst = result.instance;
    await go.run(inst);
  }
);

function jsAdd(x, y) {
  return x - y;
}

const initListeners = () => {
  console.log("initialising listeners");
  var deductions = document.getElementsByClassName("deduction");
  for (var i = 0; i < deductions.length; i++) {
    deductions.item(i).addEventListener("change", getTotalDeductions)
  }
}



const getTotalDeductions = (event) => {
  var d = document.getElementsByClassName("deduction");
  let totalDeductions = 0;
  for (var j = 0; j < d.length; j++) {
    totalDeductions += d.item(j).nodeValue;
  }
  document.getElementsByName("tdp").item(0).innerText = totalDeductions
}
document.addEventListener("DOMContentLoaded", () => {
  console.log('Page is loaded');
});