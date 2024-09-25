function main() {
  console.log('test');
}

declare let global: any;
global.main = main;
