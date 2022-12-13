var globalVariable = 'Ma aflu in contextul global';

if (true) {
  var localVariable = 'Ma aflu in contextul local';
  var globalVariable = 'Nu ma alfu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
}

for (var i = 0; i <= 100; i++) {
  console.log(i);
}
