let n = 5;

for (let row = 1; row <= n; row++) {
  let spaces = " ".repeat(n - row);
  let hashes = "#".repeat(row);

  console.log(spaces + hashes);
}
