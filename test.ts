const a: [number, string, number] = [0, "a", 1];

a.push(1);
a.map((s) => {
  switch (typeof s) {
    case "string":
      return "string";
    case "number":
      return "number";
  }
});

const [c, d, f] = a;

const [c1, ...rest] = a;

a[1].charAt;