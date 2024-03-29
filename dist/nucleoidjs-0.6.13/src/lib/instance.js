function retrieve(scope, instance) {
  let index = scope;

  while (index) {
    let value = index.instances[instance];
    if (value) return value;
    index = index.prior;
  }
}

module.exports.retrieve = retrieve;
