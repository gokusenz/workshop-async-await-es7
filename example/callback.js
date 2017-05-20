
function do(cb) {
  doA(function(err, a) {
    if (err) cb(err);
    doB(a, function(err, b) {
      if (err) cb(err);
      doC(b, function(err, c) {
        cb(err);
      });
    });
  });
}
